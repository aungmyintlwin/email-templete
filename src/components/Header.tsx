import {Heading, Img, Section} from "@react-email/components";
import configuration from "../configuration";
import * as React from "react";


//@ts-ignore
const Header = ({header}) => {
    return (
        <Section>
            <Img
                src={configuration.logoUrl}
                width="40"
                height="40"
                alt="Dropbox"
            />
            <Heading>{header}</Heading>
        </Section>
    )
}
export default Header;