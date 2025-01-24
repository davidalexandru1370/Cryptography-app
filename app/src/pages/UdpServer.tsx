import { SendFile } from "../components/udpServer/SendFile";
import { Container } from "../components/common";
import { useState } from "react";
import { UdpServerImpl } from "../udpServer/index";

interface UdpServerProps {
}


export function UdpServer(props: UdpServerProps) {

    let [serverState, setServerState] = useState<UdpServerImpl | null>(null);

    return (
        <Container style={{ position: "relative" }}>
            Udp server loaded
            <SendFile server={serverState}></SendFile>
        </Container>
    );
}