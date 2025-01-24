import { useEffect, useState } from "react";
import { UdpServerImpl } from "../../udpServer/index";
import { Container, ErrorText, StyledInput } from "../common";
import { udpServerProtocol } from "../../udpServer/compiled";
import dgram from "node:dgram"
import { Button } from "baseui/button";
import fs from "node:fs/promises"
interface ReceiveFileProps {
    server: UdpServerImpl
}

export function ReceiveFile(props: ReceiveFileProps) {
    const { server } = props;

    const [request, setRequest] = useState<null | { startRequest: udpServerProtocol.IRequestStartSendingFile, from: dgram.RemoteInfo }>(null);

    const [error, setError] = useState<null | string>(null);

    function startFileTransfer(startRequest: udpServerProtocol.IRequestStartSendingFile, from: dgram.RemoteInfo) {
        console.log("received file request from ", from);
        setRequest({
            startRequest,
            from
        });
        console.log("Afer set request");
    }


    useEffect(() => {
        server.on("startFileTransfer", startFileTransfer);
        return () => {
            server.off("startFileTransfer", startFileTransfer);
        }
    }, []);

    let [buttonText, setButtonText] = useState('')
    useEffect(() => {
        if (request) {
            setButtonText(`Receive file ${request.startRequest.fileName} from ${request.from}`)
        }
    }, [request]);
    const [md5Value, setMd5Value] = useState<null | string>(null);

    return (
        <Container>
            <span>
                Can receive on port {server.socket.address().port}
            </span>
            {request && <Button onClick={() => {
                console.log("Start receiving file");
                setError(null);
                setMd5Value(null);
                (async () => {
                    console.log("start receiving file");
                    let r = await server.receiveFile(request.startRequest, request.from, request.startRequest.fileName);
                    if (r.err !== undefined) {
                        setError(r.err)
                    } else {
                        setMd5Value(r.md5.toString("hex"));
                        await fs.writeFile(request.startRequest.fileName, r.buffer);
                        setRequest(null);
                    }
                    // if (!!r.err) {
                    //     setError(r.err);
                    // } else {

                    // }
                })();
            }}>{buttonText}</Button>}
            {md5Value && <label>The md5 value is the same: {md5Value}</label>}
            {error && <ErrorText>{error}</ErrorText>}
        </Container>
    );
}