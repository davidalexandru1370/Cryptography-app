import protobuf from 'protobufjs';
import { udp_server } from './compiled';
import dgram from "node:dgram"
import { randomInt } from 'node:crypto';
import path from 'node:path';
import fs from 'node:fs';
import crypto from "node:crypto"
import EventEmitter from 'node:events';
interface FileInfo {
    size: number,
    path: string,
    chunkSize: number
}

interface FileReceiveInfo {

}

type LocalEventTypes = {
    'startFileTransfer': [startRequest: udp_server.IRequestStartSendingFile, from: dgram.RemoteInfo]
}

const MAX_UINT32 = Math.pow(2, 64)

class UdpServer extends EventEmitter<LocalEventTypes> {
    socket: dgram.Socket
    id: number
    constructor() {
        super()
        this.id = 0
        this.socket = dgram.createSocket("udp4", (msg, rinfo) => {

        });
    }

    async setup(port: number): Promise<boolean> {
        let r = await new Promise<boolean>((resolve, reject) => {
            function on_error() {
                resolve(false)
            }
            this.socket.once("error", on_error);
            this.socket.bind(port, () => {
                resolve(true);
                this.socket.off("error", on_error);
            });
        });
        if (!r) {
            return false;
        }
        // this.socket.setBroadcast(true);
        return true
    }


    async receiveFile(request: udp_server.IRequestStartSendingFile, from: dgram.RemoteInfo, path: string): Promise<{
        buffer: Buffer,
    } | {
        err: string
    }> {
        let serverFileId = this.id;
        this.id = (this.id + 1) % MAX_UINT32;
        await this.sendMessage(udp_server.Message.create({
            replyStartSendingFile: {
                serverFileId,
                fileId: request.fileId
            }
        }), from.address, from.port);

        let fileChunks = new Array<Uint8Array | null>(request.chunkCount)
        let md5Fragment: Uint8Array | null = null;
        let fragmentsReceived = 0

        let obj = this;
        let timeoutId: NodeJS.Timeout;
        let retries = 0;
        let controller = new AbortController();
        function onTimeout() {
            (async () => {
                for (let i = 0; i < fileChunks.length; i++) {
                    if (!!fileChunks[i]) {
                        await obj.sendMessage(udp_server.Message.create({
                            requestFileChunk: {
                                fileId: serverFileId,
                                chunkNumber: i
                            }
                        }), from.address, from.port);
                    }
                }
                if (md5Fragment) {
                    await obj.sendMessage(udp_server.Message.create({
                        requestFileEndMd5: {
                            fileId: serverFileId,
                        }
                    }), from.address, from.port);
                }
                retries += 1;
                if (retries >= 3) {
                    controller.abort()
                } else {
                    timeoutId = setTimeout(onTimeout, 1000);
                }
            })()
        }
        timeoutId = setTimeout(onTimeout, 1000);
        let r = await this.waitForMessage((msg, rinfo) => {
            if (msg.fileChunk) {
                if (msg.fileChunk.fileId != serverFileId) {
                    return null;
                }
                fragmentsReceived += 1;
                fileChunks[msg.fileChunk.chunkNumber] = msg.fileChunk.chunk;
            }
            if (msg.fileEndMd5) {
                if (msg.fileEndMd5.fileId != serverFileId) {
                    return null;
                }
                fragmentsReceived += 1;
                md5Fragment = msg.fileEndMd5.md5;
            }
            if (fragmentsReceived == fileChunks.length + 1) {
                return true;
            }
            return null;
        }, 60000, controller.signal);
        clearTimeout(timeoutId)
        if (r === null) {
            return {
                err: "didn't receive the full message"
            }
        }
        let totalSize = 0;
        for (let chunk of fileChunks) {
            totalSize += chunk.length
        }
        let fileContent = Buffer.concat(fileChunks);
        let md5 = crypto.createHash('md5').update(fileContent).digest()
        if (!md5.equals(md5Fragment)) {
            return {
                err: "md5 don't match"
            }
        }
        return {
            buffer: fileContent
        }
    }

    async waitForMessage<T>(filter: (msg: udp_server.Message, rinfo: dgram.RemoteInfo) => T | null, timeout: number = 1000, abort: AbortSignal | null = null): Promise<T | null> {
        let obj = this
        return new Promise<T | null>((resolve, reject) => {
            abort.addEventListener("abort", () => {
                reject("aborted")
            }, {
                once: true
            });
            let id = setTimeout(() => {
                this.socket.off("message", x);
                resolve(null);
            }, timeout);
            abort?.addEventListener("abort", () => {
                this.socket.off("message", x);
            })
            function x(msg: Buffer, rinfo: dgram.RemoteInfo) {
                let message = udp_server.Message.decode(msg);
                let v = filter(message, rinfo)
                if (v) {
                    clearTimeout(id)
                    resolve(v)
                } else {
                    obj.socket.once("message", x)
                }
            }
            this.socket.once("message", x);
        })
    }

    async sendFile(filePath: string, host: string, port: number, chunkSize: number) {
        let id = randomInt(65535);

        let data: Buffer = await new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })

        let md5 = crypto.createHash('md5').update(data).digest()
        let chunkCount = Math.ceil(data.length / chunkSize);


        await this.sendMessage({
            requestStartSendingFile: {
                fileId: id,
                fileName: path.basename(filePath),
                chunkCount,
                chunkSize
            }
        }, host, port);

        let r = await this.waitForMessage(message => {
            if (message.replyStartSendingFile) {
                return message.replyStartSendingFile;
            } else {
                return null;
            }
        });
        if (!r) {
            throw "No reply received";
        }


        //TODO: implement retry while sending
        for (let i = 0; i < chunkCount; i++) {
            let start = i * chunkCount;
            let end = (i + 1) * chunkCount - 1;
            await this.sendMessage({
                fileChunk: {
                    chunk: data.subarray(start, end),
                    chunkNumber: i,
                    fileId: r.serverFileId
                }
            }, host, port);

            start = end + 1
        }

        await this.sendMessage({
            fileEndMd5: {
                fileId: r.serverFileId,
                md5
            }
        }, host, port);
    }


    async sendMessage(message: udp_server.IMessage, address: string, port: number) {
        return new Promise<void>((resolve, reject) => {
            this.socket.send(udp_server.Message.encode(message).finish(), port, address, (error, bytes) => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}



