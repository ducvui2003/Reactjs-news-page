import {Col, Container, Row} from "react-bootstrap";
import {Divider} from "@mui/material";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";

function Footer() {

    return (
        <Container>
            <Row>
                <Col>
                    <Divider flexItems sx={{height: 3, backgroundColor: 'black', opacity: 0.2}}/>
                    <FooterTop/>
                    <Divider flexItem flexItems sx={{height: 1.5, backgroundColor: 'black', opacity: 0.2}}/>
                    <FooterMiddle/>
                    <Divider flexItem flexItems sx={{height: 1.5, backgroundColor: 'black', opacity: 0.2}}/>
                    <FooterBottom/>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
