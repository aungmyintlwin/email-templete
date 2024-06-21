import { Body, Container, Head, Heading,  Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TutorToDoListEmailProps {
    header_preview: string;
    header_name: string;
    name: string;
    SchoolConnections: string;
    AssignSignup: string;
    PaymentsDue: string;
    ReviewFeedbacks: string;
}

const OneTimePassEmail = ({header_preview, header_name, name, SchoolConnections, AssignSignup, PaymentsDue, ReviewFeedbacks}: TutorToDoListEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={header_name} />

                    <Section>

                        <Text style={text}>Dear { name },</Text>
                        <Text style={text}>
                            You are receiving this email because there are pending To Dos for you in UpKeepDay that require your attention. Please review the following:
                        </Text>

                        <Heading as={"h4"} ml={5}>New Tutor/Teacher Connection: {SchoolConnections}</Heading>
                        <Heading as={"h4"} ml={5}>New Class(es) Sign-up: {AssignSignup}</Heading>
                        <Heading as={"h4"} ml={5}>New Class(es) Sign-up: {PaymentsDue}</Heading>
                        <Heading as={"h4"} ml={5}>Review Feedback(s): {ReviewFeedbacks}</Heading>

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
    name: "{{name}}",
    SchoolConnections: "{{SchoolConnections}}",
    AssignSignup: "{{AssignSignup}}",
    PaymentsDue: "{{PaymentsDue}}",
    ReviewFeedbacks: "{{ReviewFeedbacks}}"
} as TutorToDoListEmailProps;

export default OneTimePassEmail;