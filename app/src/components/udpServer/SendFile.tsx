import { UdpServerImpl } from "../../udpServer/index";
import { Container, StyledInput } from "../common";

interface SendFileProps {
    server: UdpServerImpl
}


export function SendFile(props: SendFileProps) {
    const { server } = props;
    console.log(server.id)
    return (
        <Container>
            <StyledInput />
            Send file dialog
        </Container>
    );
}