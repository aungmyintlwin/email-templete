import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TutorToDoListEmailProps {
    header_preview: string;
    header_name: string;
    teacher_name: string;
    NeedStudents: string;
    Finished: string;
    MakeupRequired: string;
    CurrentCheckins: string;
    BackdatedCheckins: string;
    MissingPayments: string;
}

const OneTimePassEmail = ({header_preview, header_name, teacher_name, NeedStudents, Finished, MakeupRequired, CurrentCheckins, BackdatedCheckins, MissingPayments}: TutorToDoListEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={header_name} />

                    <Section>

                        <Text style={text}>Dear {teacher_name},</Text>
                        <Text style={text}>
                            You are receiving this email because there are pending To Dos for you in UpKeepDay that require your attention. Please review the following:
                        </Text>

                        <Heading as={"h4"} ml={5}>Class(es) Created without students added: {NeedStudents}</Heading>
                        <Heading as={"h4"} ml={5}>Class(es) Finished with no actions: {Finished}</Heading>
                        <Heading as={"h4"} ml={5}>Reschedule canceled session(s): {MakeupRequired}</Heading>
                        <Heading as={"h4"} ml={5}>Missed check-in: {CurrentCheckins}</Heading>
                        <Heading as={"h4"} ml={5}>Update records for sessions in the past: {BackdatedCheckins}</Heading>
                        <Heading as={"h4"} ml={5}>Classes with missing payments: {MissingPayments}</Heading>

                    </Section>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

OneTimePassEmail.PreviewProps = {
    header_preview: 'Pending To Dos Notification from UpKeepDay',
    header_name: 'Pending To Dos Notification',
    teacher_name: "{{teacher_name}}",
    NeedStudents: "{{NeedStudents}}",
    Finished: "{{Finished}}",
    MakeupRequired: "{{MakeupRequired}}",
    CurrentCheckins: "{{CurrentCheckins}}",
    BackdatedCheckins: "{{BackdatedCheckins}}",
    MissingPayments: "{{MissingPayments}}"
} as TutorToDoListEmailProps;

export default OneTimePassEmail;