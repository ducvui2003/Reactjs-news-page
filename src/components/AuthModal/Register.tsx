import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
function Register() {
  return (
    <div>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Mật khẩu">
        <Form.Control type="password" placeholder="Mật khẩu" />
        {/* <VisibilityIcon /> */}
      </FloatingLabel>
      <Button className="mt-3 w-100" variant="secondary" size="lg">
        Đăng nhập
      </Button>
      <a className="mt-3 w-100 center-text">Lấy lại mật khẩu</a>
    </div>
  );
}

export default Register;
