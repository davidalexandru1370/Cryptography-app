import { Button } from "baseui/button";
import { UdpServerImpl } from "../../udpServer/index";
import { Container, ErrorText, StyledInput } from "../common";
import { useFilePicker } from 'react-sage'
import { useState } from "react";
import { StyledLabel } from "baseui/file-uploader";

interface SendFileProps {
    server: UdpServerImpl
}


export function SendFile(props: SendFileProps) {
    const { server } = props;
    console.log(server.id)
    let {
        files, HiddenFileInput, errors, onClick
    } = useFilePicker()

    const [disabled, setDisabled] = useState(false);
    const [host, setHost] = useState('127.0.0.1');
    const [port, setPort] = useState(3010);
    const [chunkSize, setChunkSize] = useState(100);
    const [error, setError] = useState<null | string>(null);
    const [isPortValid, setIsPortValid] = useState(true);

    return (
        <Container>
            <span>
                <label>User host to receive the file</label>
                <StyledInput onChange={(el: any) => {
                    setHost(el.target.value)
                }} value={host} />
            </span>
            <span>
                <label>User port to receive the file</label>
                <StyledInput onChange={(el: any) => {
                    try {
                        let p = parseInt(el.target.value);
                        setPort(p);
                        setIsPortValid(true);
                    } catch (e) {
                        setIsPortValid(false);
                    }
                }} type="number" />
            </span>
            <span>
                <label>Chunk size</label>
                <StyledInput id="chunk" onChange={(el: any) => {
                    console.log(el.target.value)
                    try {
                        let size = parseInt(el.target.value);
                        if (1 <= size) {
                            setChunkSize(size)
                        }
                    } catch (e) {

                    }
                }} type="number" value={chunkSize} />
            </span>
            <Button onClick={onClick}>Choose file</Button>
            {files && files[0] && <Button onClick={() => {
                setDisabled(true);
                let file = files![0];
                (async () => {
                    console.log(file)
                    let data = await file.arrayBuffer();
                    let data2 = Buffer.from(data)
                    try {
                        await server.sendFile(file.name, data2, "0.0.0.0", port, chunkSize);
                    } catch (e: any) {
                        setError(e.toString())
                    }
                    setDisabled(false)
                })();
            }} disabled={disabled || !isPortValid}>Send file {files[0].name}</Button>}
            <HiddenFileInput accept="*" multiple={false}></HiddenFileInput>
            {error && <ErrorText>{error}</ErrorText>}
        </Container >
    );
}