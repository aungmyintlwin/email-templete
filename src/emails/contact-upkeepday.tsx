import {Body, Container, Head, Heading, Hr, Html, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ContactUpkeepDay {
    header_preview: string;
    header_name: string;
    from_name: string;
    from_email: string
    subject: string;
    message: string;
    ip_address: string;
}


const OneTimePassEmail = ({header_preview, header_name, from_name, from_email, subject, message, ip_address}: ContactUpkeepDay) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={header_name} />

                    <Section>
                        <Text style={text}><b>From:</b> {from_name} {'<'}{from_email}{'>'}</Text>
                        <Text style={text}><b>Subject:</b> { subject }</Text>
                        <Text style={text}><b>Message:</b><br />{message}</Text>
                    </Section>
                    <Hr />
                    <Text style={text}>IP Address: {ip_address}</Text>

                </Container>
            </Body>
        </Html>
    );
}

OneTimePassEmail.PreviewProps = {
    header_preview: 'Contact UpkeepDay',
    header_name: 'Contact UpkeepDay',
    from_name: "{{from_name}}",
    from_email: "{{from_email}}",
    subject: "{{subject}}",
    message: "{{message}}",
    ip_address: "{{ip_address}}"
} as ContactUpkeepDay;

export default OneTimePassEmail;