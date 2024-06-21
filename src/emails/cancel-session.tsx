import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CancelSessionProps {
    header_preview: string;
    header_name: string;
    student_name: string;
    class_name: string;
    teacher_name: string;
    class_start_date_time: string;
}

const CancelSessionEmail = (props: CancelSessionProps) => {
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
                        This message is to inform about the following changes in your scheduled class(es):
                    </Text>

                    <Text style={text}>
                        Class: {props.class_name}<br/>
                        Teacher Name: {props.teacher_name}<br/>
                        Time and Date: {props.class_start_date_time}<br/>
                        Reason for changes: {props.header_name}
                    </Text>

                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

CancelSessionEmail.PreviewProps = {
    header_preview: 'Session Canceled',
    header_name: 'Session Canceled',
    student_name: '{{student_name}}',
    class_name: '{{class_name}}',
    teacher_name: '{{teacher_name}}',
    class_start_date_time: '{{class_start_date_time}}'
} as CancelSessionProps;

export default CancelSessionEmail;