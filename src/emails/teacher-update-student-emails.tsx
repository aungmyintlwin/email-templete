import {Body, Container, Head, Html, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Footer from "../components/Footer";

interface TeacherUpdateStudentEmailsProps {
    header_preview: string;
    name: string;
    students: string;
}

const TeacherUpdateStudentEmails = ({header_preview, name, students}: TeacherUpdateStudentEmailsProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>

                    <Section>
                        <Text style={text}>Dear {name},</Text>
                        <Text style={text}>To enhance communication process and ensure your students receive instant feedback, schedule updates, and attendance records, we need your help in updating their email addresses.</Text>
                        <Text style={text}>Please take a moment to open the UpkeepDay app and update the email addresses for the following students:<br/>
                        &nbsp;1. {students}<br/></Text>
                        <Text style={text}>Updating their emails will enable seamless communication and provide them with real-time insights and updates, keeping them engaged and informed.</Text>
                    </Section>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

TeacherUpdateStudentEmails.PreviewProps = {
    header_preview: 'Update Student Emails for Instant Feedback and Updates',
    name: "{{name}}",
    students: "{{students}}",
} as TeacherUpdateStudentEmailsProps;


export default TeacherUpdateStudentEmails;