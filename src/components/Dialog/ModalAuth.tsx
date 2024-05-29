import { Modal } from "react-bootstrap";
import { ReactNode, SyntheticEvent, useState } from "react";
import { Tab } from "@mui/material";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalAuth({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Modal show={isOpen} className="fade" onHide={onClose}>
      <Modal.Body>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Đăng nhập" value="1" />
            <Tab label="Đăng ký" value="2" />
          </TabList>
          <TabPanel value="1">
            <LoginForm />
          </TabPanel>
          <TabPanel value="2">
            <RegisterForm />
          </TabPanel>
        </TabContext>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAuth;
