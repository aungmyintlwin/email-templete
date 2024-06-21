import {Body, Container, Head, Hr, Html, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
import {styles, container, text} from "../styles";
import Header from "../components/Header";

interface AdminNewRegistrationProps {
    header_preview: string;
    header_name: string;
    account_type: string;
    time_zone: string
    business_name: string;
    name: string;
    login: string;
    user_agent: string;
    platform: string;
    build: string;
    ip_address: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
    ip_lat: string;
    ip_lng: string;
    ip_now: string;
    ip_time_zone: string;
    ip_balance: string;
}

const googleMapsLink = (lat: string, lng: string) => {
    return `https://www.google.com/maps/@${lat},${lng},10z?hl=en-US&entry=ttu`;
}

const OneTimePassEmail = (props: AdminNewRegistrationProps) => {
    return (
        <Html>
            <Head />
            <Preview>{props.header_preview}</Preview>
            <Body style={styles}>
                <Container style={container}>
                    <Header header={props.header_name} />

                    <Section>
                        <Text style={text}><b>{props.account_type}({props.time_zone}):</b> {props.name} {'<'}{props.login}{'>'}</Text>
                        <Text style={text}><b>Business Name: </b>{props.business_name}</Text>
                    </Section>

                    <Hr />

                    <Text style={text}>
                        User Agent: {props.user_agent}<br/>
                        Platform: {props.platform}<br/>
                        Build#: {props.build}<br/>
                    </Text>

                    <Text style={text}>
                        IP Address: <a href={`https://ipinfo.io/${props.ip_address}`} target='_blank'>{props.ip_address}</a><br/>
                        Location by IP: <a href={googleMapsLink(props.ip_lat, props.ip_lng)} target='_blank'>{props.city}, {props.region}, {props.postal_code}, {props.country}</a><br/>
                        Now by IP: {props.ip_now}<br/>
                        Time Zone by IP: {props.ip_time_zone}<br/>
                    </Text>

                    <Text style={text}>
                        IP Balance: {props.ip_balance}
                    </Text>

                </Container>
            </Body>
        </Html>
    );
}

OneTimePassEmail.PreviewProps = {
    header_preview: 'UpkeepDay User Registration',
    header_name: 'UpkeepDay User Registration',
    account_type: '{{account_type}}',
    time_zone: '{{time_zone}}',
    business_name: '{{business_name}}',
    name: '{{name}}',
    login: '{{login}}',
    user_agent: '{{user_agent}}',
    platform: '{{platform}}',
    build: '{{build}}',
    ip_address: '{{ip_address}}',
    city: '{{city}}',
    region: '{{region}}',
    postal_code: '{{postal_code}}',
    country: '{{country}}',
    ip_lat: '{{ip_lat}}',
    ip_lng: '{{ip_lng}}',
    ip_now: '{{ip_now}}',
    ip_time_zone: '{{ip_time_zone}}',
    ip_balance: '{{ip_balance}}',
} as AdminNewRegistrationProps;

export default OneTimePassEmail;