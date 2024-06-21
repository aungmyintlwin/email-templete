import { Body, Container, Head, Heading, Html, Preview, Section, Text, Row, Column } from "@react-email/components";
import * as React from "react";
import {styles, container, text, rows} from "../styles";
import Header from "../components/Header";

interface ActivityLine {
    Name: string;
    Email: string;
    RegistrationDate: string;
    LastUsedEST: string;
    LastUsedLocal: string;
}

interface ActivityReportProps {
    header_preview: string;
    header_name: string;
    Now: string;
    Last1DayUsers: ActivityLine[];
    Last3DaysUsers: ActivityLine[];
    Last7DaysUsers: ActivityLine[];
    Last14DaysUsers: ActivityLine[];
}

const AdminActivityReport = (props: ActivityReportProps) => {
    return (
        <Html>
            <Head />
            <Preview>{props.header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={`As of ${props.Now}`} />
                    <Heading as={"h3"}>Last used 1 day:</Heading>
                    <Section>
                        <Row>
                            <Column style={rows}>Name</Column>
                            <Column style={rows}>Email</Column>
                            <Column style={rows}>Used(EST)</Column>
                        </Row>
                    </Section>

                </Container>
            </Body>
        </Html>
    );
}

AdminActivityReport.PreviewProps = {
    header_preview: 'Activity Report',
    header_name: 'Activity Report',
    Now: "{{Now}}",
} as ActivityReportProps;

export default AdminActivityReport;