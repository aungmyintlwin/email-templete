/* eslint-disable */
import {Body, Container, Head, Html, Link, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import configuration from "../configuration";

interface OneTimePassEmailProps {
    header_preview: string;
    header_name: string;
}

const OneTimePassEmail = ({header_preview, header_name}: OneTimePassEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={header_name} />

                    <Section>
                        <Text style={text}>
                            We have processed your request and successfully deleted your account.
                            We're sorry to see you go and would love to know if there was anything we could have done better.
                        </Text>
                        <Text style={text}>
                            If you have any feedback or need further assistance, please don't hesitate to <Link href={`mailto:${configuration.mailTo}`}>contact us</Link>.
                            <br />
                        </Text>
                        <Text style={text}>
                            Thank you for being a part of our community.
                        </Text>
                    </Section>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

OneTimePassEmail.PreviewProps = {
    header_preview: 'Confirmation of Account Deletion',
    header_name: 'Confirmation of Account Deletion',
} as OneTimePassEmailProps;

export default OneTimePassEmail;