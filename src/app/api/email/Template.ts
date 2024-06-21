import OneTimePassEmail  from '@/emails/account-deactivation-confirmation'

const Template = (templeteName: string,request: Request) => {
    if(templeteName === 'account-deactivation-confirmation') {
        return OneTimePassEmail({
            header_preview: "Header",
            header_name: "Test"
        });
    }
    return OneTimePassEmail({
        header_preview: "Header",
        header_name: "Test"
    });
}
export default Template;