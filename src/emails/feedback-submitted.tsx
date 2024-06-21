import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface FeedbackSubmittedProps {
    header_preview: string;
    header_name: string;
    student_name: string;
    feedback_type: string;
    class_name: string;
    class_start_date_time: string;
    school_or_tutor: string;
    teacher_name: string;
}

const FeedbackSubmittedEmail = (props: FeedbackSubmittedProps) => {
    return (
        <Html>
            <Head>
                <title>{props.header_preview}</title>
            </Head>
            <Preview>{props.header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={props.header_name} />

                    <Text style={text}>Dear {props.student_name},<br/>
                        {props.feedback_type} feedback was submitted:
                    </Text>
                    <Text style={text}>
                        Class: {props.class_name}<br/>
                        Date: {props.class_start_date_time}<br/>
                        {props.school_or_tutor}: {props.teacher_name}
                    </Text>

                    <Text style={text}>Please open the UpkeepDay app to review it.</Text>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

FeedbackSubmittedEmail.PreviewProps = {
    header_preview: 'Feedback Submitted',
    header_name: 'Feedback Submitted',
    student_name: '{{student_name}}',
    feedback_type: '{{feedback_type}}',
    class_name: '{{class_name}}',
    class_start_date_time: '{{class_start_date_time}}',
    school_or_tutor: '{{school_or_tutor}}',
    teacher_name: '{{teacher_name}}',
} as FeedbackSubmittedProps;

export default FeedbackSubmittedEmail;