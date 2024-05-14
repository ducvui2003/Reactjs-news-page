import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import AnotherAuth from "../../components/AuthModal/AnotherAuth";
import Register from "../../components/AuthModal/Register";

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

export default ModalAuth;
