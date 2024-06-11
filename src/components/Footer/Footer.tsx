import {Container, Divider} from "@mui/material";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";

function Footer() {

    return (
        <Container>
            <Divider orientation={"horizontal"}/>
            <FooterTop/>
            <Divider sx={{height: 1.5, backgroundColor: 'black', opacity: 0.2}}/>
            <FooterMiddle/>
            <Divider sx={{height: 1.5, backgroundColor: 'black', opacity: 0.2}}/>
            <FooterBottom/>
        </Container>
    );
}

export default Footer;
