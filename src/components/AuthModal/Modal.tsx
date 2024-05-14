import { Col, Container, Modal, Row } from "react-bootstrap";
import Register from "./Register";
import AnotherAuth from "./AnotherAuth";

function ModalAuth() {
  return (
    <Modal.Dialog>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Register></Register>
            </Col>
            <Col>
              <AnotherAuth />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal.Dialog>
  );
}
