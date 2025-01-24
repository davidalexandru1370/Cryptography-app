import protobuf from 'protobufjs';
import { udpServerProtocol } from './compiled';
import dgram from "node:dgram"
import { randomInt } from 'node:crypto';
import path from 'node:path';
import fs from 'node:fs/promises';
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
    'startFileTransfer': [startRequest: udpServerProtocol.IRequestStartSendingFile, from: dgram.RemoteInfo]
}

const MAX_UINT32 = Math.pow(2, 64)

export class UdpServerImpl extends EventEmitter<LocalEventTypes> {
    socket: dgram.Socket
    id: number
    initialized: boolean
    constructor() {
        super()
        this.id = 0
        this.initialized = false;
        this.socket = dgram.createSocket("udp4", (msg, rinfo) => {
            let message = udpServerProtocol.Message.decode(msg);
            if (message.requestStartSendingFile) {
                this.emit("startFileTransfer", message.requestStartSendingFile, rinfo)
            }
        });
    }

    async setup(port: number): Promise<boolean> {
        let r = await new Promise<boolean>((resolve, reject) => {
            function on_error(err: Error) {
                console.log(err)
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
        this.initialized = true;
        // this.socket.setBroadcast(true);
        return true
    }

    async close() {
        if (!this.initialized) {
            return;
        }
        await new Promise<void>((resolve, reject) => {
            this.socket.close(() => {
                resolve()
            });
        });
        this.initialized = false;
    }


    async receiveFile(request: udpServerProtocol.IRequestStartSendingFile, from: dgram.RemoteInfo, path: string): Promise<{
        buffer: Buffer,
    } | {
        err: string
    }> {
        let serverFileId = this.id;
        this.id = (this.id + 1) % MAX_UINT32;
        await this.sendMessage(udpServerProtocol.Message.create({
            replyStartSendingFile: {
                serverFileId,
                fileId: request.fileId
            }
        }), from.address, from.port);

        let fileChunks = new Array<Uint8Array | null>(request.chunkCount)
        console.log("file chunks", request.chunkCount);
        let md5Fragment: Uint8Array | null = null;
        let fragmentsReceived = 0

        let obj = this;
        let timeoutId = setTimeout(onTimeout, 1000);

        let retries = 0;
        let controller = new AbortController();
        function onTimeout() {
            (async () => {
                for (let i = 0; i < fileChunks.length; i++) {
                    if (!fileChunks[i]) {
                        await obj.sendMessage(udpServerProtocol.Message.create({
                            requestFileChunk: {
                                fileId: request.fileId,
                                chunkNumber: i
                            }
                        }), from.address, from.port);
                    }
                }
                if (!md5Fragment) {
                    await obj.sendMessage(udpServerProtocol.Message.create({
                        requestFileEndMd5: {
                            fileId: request.fileId,
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
        let r = await this.waitForMessage((msg, rinfo) => {
            if (msg.fileChunk) {
                if (msg.fileChunk.fileId != serverFileId) {
                    return null;
                }
                fragmentsReceived += 1;
                fileChunks[msg.fileChunk.chunkNumber] = msg.fileChunk.chunk;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(onTimeout, 1000);
            }
            if (msg.fileEndMd5) {
                if (msg.fileEndMd5.fileId != serverFileId) {
                    return null;
                }
                fragmentsReceived += 1;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(onTimeout, 1000);
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
            totalSize += chunk?.length ?? 0
        }
        let fileContent = Buffer.concat(fileChunks as any);
        let md5 = crypto.createHash('md5').update(fileContent).digest()
        if (!md5Fragment || !md5.equals(md5Fragment)) {
            console.log("File content");
            console.log(fileContent);
            return {
                err: "md5 don't match"
            }
        }
        return {
            buffer: fileContent
        }
    }

    async waitForMessage<T>(filter: (msg: udpServerProtocol.Message, rinfo: dgram.RemoteInfo) => T | null, timeout: number = 1000, abort: AbortSignal | null = null): Promise<T | null> {
        let obj = this
        return new Promise<T | null>((resolve, reject) => {
            abort?.addEventListener("abort", () => {
                reject("aborted");
                this.socket.off("message", x);
            }, {
                once: true
            });
            let id = setTimeout(() => {
                this.socket.off("message", x);
                resolve(null);
            }, timeout);
            function x(msg: Buffer, rinfo: dgram.RemoteInfo) {
                let message = udpServerProtocol.Message.decode(msg);
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

    async sendFile(fileName: string, fileData: Buffer, host: string, port: number, chunkSize: number) {
        let id = randomInt(65535);

        let md5 = crypto.createHash('md5').update(fileData).digest()
        let chunkCount = Math.ceil(fileData.length / chunkSize);


        await this.sendMessage({
            requestStartSendingFile: {
                fileId: id,
                fileName,
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
        }, 10000);
        if (!r) {
            throw "No reply received";
        }

        let serverFileId = r.serverFileId;


        //TODO: implement retry while sending
        let obj = this;
        function retrySend(msg: Buffer, rinfo: dgram.RemoteInfo) {
            let message = udpServerProtocol.Message.decode(msg);
            if (message.requestFileChunk) {
                if (message.requestFileChunk.fileId != id) {
                    return;
                }
                let chunkNumber = message.requestFileChunk.chunkNumber;
                let start = chunkNumber * chunkSize;
                let end = (chunkNumber + 1) * chunkSize;
                let chunk = fileData.subarray(start, end);
                obj.sendMessage({
                    fileChunk: {
                        chunk: chunk,
                        chunkNumber,
                        fileId: serverFileId
                    }
                }, host, port);
            }
            if (message.requestFileEndMd5) {
                if (message.requestFileEndMd5.fileId != id) {
                    return;
                }
                obj.sendMessage({
                    fileEndMd5: {
                        fileId: serverFileId,
                        md5
                    }
                }, host, port)
            }
        }
        this.socket.on("message", (msg, rinfo) => {

        });
        for (let i = 0; i < chunkCount; i++) {
            let start = i * chunkSize;
            let end = (i + 1) * chunkSize;
            let chunk = fileData.subarray(start, end);
            await this.sendMessage({
                fileChunk: {
                    chunk: chunk,
                    chunkNumber: i,
                    fileId: r.serverFileId
                }
            }, host, port);

        }

        await this.sendMessage({
            fileEndMd5: {
                fileId: r.serverFileId,
                md5
            }
        }, host, port);
    }


    async sendMessage(message: udpServerProtocol.IMessage, address: string, port: number) {
        return new Promise<void>((resolve, reject) => {
            this.socket.send(udpServerProtocol.Message.encode(message).finish(), port, address, (error, bytes) => {
                if (error) {
                    console.log("Error sending message", error);
                    reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}



