import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import { Divider } from "@mui/material";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
export default Footer;

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Divider className=" divider--large divider__color--low" />
          <FooterTop />
          <Divider className=" divider--low divider__color--high" />
          <FooterMiddle />
          <Divider className=" divider--low divider__color--low" />
          <FooterBottom />
        </Col>
      </Row>
    </Container>
  );
}
