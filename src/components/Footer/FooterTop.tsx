import { Col, Container, Row, Stack } from "react-bootstrap";
import { EMAIL, PHONE_1, PHONE_2 } from "../../constraints/store";
import { Email, Handshake, Phone } from "@mui/icons-material";
import { Divider } from "@mui/material";
import "./footer.scss";

export default FooterTop;

// Content configuration
const content: string[][] = [];
content.push(["Trang chủ", "Video", "Tài liệu", "Hình ảnh"]);
content.push(["Tin tức", "Sự kiện", "Liên hệ"]);
content.push(["Thể thao", "Pháp luật", "Giáo dục"]);
content.push(["Kinh tế", "Xã hội", "Văn hóa"]);

function FooterTop() {
  return (
    <Container fluid={"xl"} className="py-3">
      <Row>
        <Col xs={"8"}>
          <Row>
            {content.map((row, index) => {
              return (
                <Col>
                  <Item bold={index == 0} key={index} contentArray={row} />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs={"1"}>
          <Divider orientation="vertical" className="divide__color--low" />
        </Col>
        <Col className=" border-secondary" xs={"3"}>
          <Row>
            <Col xs={"12"}>
              <FooterContact />
            </Col>
            <Col xs={"12"}>
              <Divider className="divider__color--low divider--medium my-2" />
              <FooterHotline />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function FooterContact() {
  return (
    <div>
      <p className="fw-light">Đường dây nóng</p>
      <div>
        <a href="#" className="d-flex align-items-center">
          <Email className="pe-2" />
          <span className="fw-6">{EMAIL}</span>
        </a>
        <a href="#" className="d-flex align-items-center">
          <Handshake className="pe-2" />
          <span className="fw-6">Hợp tác</span>
        </a>
      </div>
    </div>
  );
}

function FooterHotline() {
  return (
    <div>
      <p className="fw-light">Đường dây nóng</p>
      <div>
        <a>
          <Phone className="pe-2" />
          <span className="fw-6">{PHONE_1}</span>
        </a>
        <a>
          <Phone className="pe-2" />
          <span className="fw-6">{PHONE_2}</span>
        </a>
      </div>
    </div>
  );
}

function Item({
  contentArray,
  bold,
}: {
  contentArray: string[];
  bold: boolean;
}) {
  return (
    <Stack gap={3}>
      {contentArray.map((item, index) => {
        return (
          <p
            className={"mb-2 fs-6 " + (bold ? "fw-bold" : "fw-light")}
            key={index}
          >
            {item}
          </p>
        );
      })}
    </Stack>
  );
}
