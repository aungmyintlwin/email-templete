import {Body, Container, Head, Html, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface OneTimePassEmailProps {
    header_preview: string;
    header_name: string;
    email: string;
    teacher_name: string;
}

const StudentInviteEmail = ({header_preview, header_name, email, teacher_name}: OneTimePassEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={`${header_name}${email}`} />

                    <Section>

                        <Text style={text}>Your teacher, <b>{teacher_name}</b>, is registered as a tutor on the <b>UpkeepDay</b> platform. You (or your child) was added as a student.</Text>
                        <Text style={text}>Activate your account to:</Text>
                        <Text style={text}>
                            &nbsp;1. View daily, weekly, and monthly schedules.<br />
                            &nbsp;2. Receive real-time feedback from teachers.<br/>
                            &nbsp;3. Check attendance records.<br/>
                            &nbsp;4. Access class details.<br/>
                            &nbsp;5. Get reminders for changes and tasks.<br/></Text>

                        <Text style={text}>Please complete the registration to get started.</Text>

                    </Section>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

StudentInviteEmail.PreviewProps = {
    header_preview: 'You are invited by your tutor to begin using UpKeepDay.',
    header_name: 'Welcome, ',
    email: "{{email}}",
    teacher_name: "{{teacher_name}}"
} as OneTimePassEmailProps;

export default StudentInviteEmail;