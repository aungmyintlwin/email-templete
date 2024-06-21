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
}

const OneTimePassEmail = ({header_preview, header_name, teacher_name, NeedStudents, Finished, MakeupRequired, CurrentCheckins, BackdatedCheckins}: TutorToDoListEmailProps) => {
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

                        <Text style={text}>
                            Class(es) Created without students added: {NeedStudents}<br />
                            Class(es) Finished with no actions: {Finished}<br />
                            Reschedule canceled session(s): {MakeupRequired}<br />
                            Missed check-in: {CurrentCheckins}<br />
                            Update records for sessions in the past: {BackdatedCheckins}<br />
                        </Text>

                        <Text style={text}><b>Please review To Dos generated for other teachers:</b></Text>
                        <Heading as={"h3"}>Teacher Name</Heading>
                        <Text style={text}>
                            Class(es) Created without students added: {NeedStudents}<br />
                            Class(es) Finished with no actions: {Finished}<br />
                            Reschedule canceled session(s): {MakeupRequired}<br />
                            Missed check-in: {CurrentCheckins}<br />
                            Update records for sessions in the past: {BackdatedCheckins}
                        </Text>

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
} as TutorToDoListEmailProps;

export default OneTimePassEmail;