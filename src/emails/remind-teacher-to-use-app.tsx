/* eslint-disable */
import {Body, Container, Head, Html, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Footer from "../components/Footer";

interface RemindTeacherToUseAppProps {
    header_preview: string;
    name: string;
}

const RemindTeacherToUseAppEmail = ({header_preview, name}: RemindTeacherToUseAppProps) => {
    return (
        <Html>
            <Head />
            <Preview>{header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>

                    <Section>
                        <Text style={text}>Dear {name},</Text>
                        <Text style={text}>Welcome to UpKeepDay, where streamlining your education activities begins! We're thrilled to have you on board and can't wait to see the difference UpKeepDay can make in simplifying your daily routines.</Text>
                        <Text style={text}>We've noticed that you haven't started using the app yet, and we want to encourage you to take that first step today. UpKeepDay is designed to make your life easier by automating administrative tasks like attendance tracking, payment management, and communication.</Text>
                        <Text style={text}>We understand the challenges you face in managing your day-to-day activities, and UpKeepDay is here to help. By centralizing these features, we aim to alleviate the administrative burden and give you more time to focus on what matters most.</Text>
                        <Text style={text}>As a new member, you're entitled to a 3-week trial free of charge. Don't miss out on this opportunity to explore all that UpKeepDay has to offer.</Text>
                        <Text style={text}>Watch our demo on YouTube <a href='https://www.youtube.com/watch?v=a4P98cqjZ5w&t' target='_blank'>UpKeepDay Demo</a>. Our team is based in NJ and we would like to schedule a personalized walkthrough with one of our team members. We'd love to show you all the features we've developed so far and answer any questions you may have.</Text>
                        <Text style={text}>Let's make managing your education activities easier together. Start using UpKeepDay today!</Text>
                    </Section>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

RemindTeacherToUseAppEmail.PreviewProps = {
    header_preview: 'Start Using UpKeepDay Today!',
    name: "{{name}}",
} as RemindTeacherToUseAppProps;


export default RemindTeacherToUseAppEmail;