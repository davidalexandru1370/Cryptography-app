import { useEffect, useState } from "react";
import { UdpServerImpl } from "../../udpServer/index";
import { Container, StyledInput } from "../common";
import { udpServerProtocol } from "../../udpServer/compiled";
import dgram from "node:dgram"
import { Button } from "baseui/button";
interface ReceiveFileProps {
    server: UdpServerImpl
}

export function ReceiveFile(props: ReceiveFileProps) {
    const { server } = props;

    const [request, setRequest] = useState<null | { startRequest: udpServerProtocol.IRequestStartSendingFile, from: dgram.RemoteInfo }>(null);

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
    }, [request])

    return (
        <Container>
            <span>
                Can receive on port {server.socket.address().port}
            </span>
            {request && <Button onClick={() => {
                console.log("Start receiving file");
                (async () => {
                    console.log("start receiving file");
                    let r = await server.receiveFile(request.startRequest, request.from, request.startRequest.fileName);
                    console.log("Done");
                    console.log(r);
                })();
            }}>{buttonText}</Button>}
        </Container>
    );
}