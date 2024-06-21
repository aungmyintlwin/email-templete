import {Button, Column, Hr, Link, Row, Section, Text} from "@react-email/components";
import {androidButton, iphoneButton, text} from "../styles";
import configuration from "../configuration";
import * as React from "react";

const Footer = () => {
    return (
        <Section>
            <Text style={text}>
                Best Regards,
                <br />
                UpKeepDay Team
            </Text>
            <Section>
                <Row>
                    <Column>
                        <Button style={iphoneButton} href={configuration.iphoneUrl}>
                            For iPhone
                        </Button>
                    </Column>
                    <Column>
                        <Button style={androidButton} href={configuration.androidUrl}>
                            For Android
                        </Button>
                    </Column>
                </Row>
            </Section>
            <Hr />
            <Text style={text}>Need help? Just reply to this <Link href={`mailto:${configuration.mailTo}`}>email</Link> to contact support</Text>
        </Section>
    )
}
export default Footer;