import { SendFile } from "../components/udpServer/SendFile";
import { Container, ErrorText } from "../components/common";
import { useEffect, useState } from "react";
import { UdpServerImpl } from "../udpServer/index";
import { ReceiveFile } from "../components/udpServer/ReceiveFile";


interface UdpServerProps {
}


export function UdpServer(props: UdpServerProps) {
    let [serverState, setServerState] = useState<UdpServerImpl | null>(null);
    let [error, setError] = useState<string | null>(null);
    useEffect(() => {
        let server = new UdpServerImpl();
        (async () => {
            try {
                for (let i = 3010; i < 3100; i++) {
                    let r = await server.setup(i);
                    if (r) {
                        setServerState(server);
                        console.log("It worked on port ", i)
                        break;
                    }
                }

            }
            catch (e: any) {
                setError(e.toString())
            }
        })();
        return () => {
            console.log("cleanup");
            server.close();
        }
    }, []);
    return (
        <Container style={{ position: "relative" }}>
            {serverState && <SendFile server={serverState}></SendFile>}
            {serverState && <ReceiveFile server={serverState}></ReceiveFile>}
            {!serverState && <span>Loading...</span>}
            {error && <ErrorText>{error}</ErrorText>}
        </Container>
    );
}