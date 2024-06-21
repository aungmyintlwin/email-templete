import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface OneTimePassEmailProps {
    header_preview: string;
    header_name: string;
    one_time_pass: string;
}

const OneTimePassEmail = ({header_preview, header_name, one_time_pass}: OneTimePassEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={header_name} />

                    <Section>
                        <Text style={text}>Your One Time Pass: <b>{ one_time_pass }</b></Text>
                    </Section>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

OneTimePassEmail.PreviewProps = {
    header_preview: 'UpkeepDay One Time Pass',
    header_name: 'One Time Pass',
    one_time_pass: "{{one_time_pass}}",
} as OneTimePassEmailProps;

export default OneTimePassEmail;