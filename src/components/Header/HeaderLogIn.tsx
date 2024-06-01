import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import ModalAuth from "../Dialog/ModalAuth";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {Button} from "react-bootstrap";

const HeaderLogin: React.FC = () => {
    const authReducer = useSelector((state: RootState) => state.authenticate);
    return authReducer.email ? <HeaderBeforeLogin/> : <HeaderAfterLogin/>
};

function HeaderBeforeLogin() {
    return <FontAwesomeIcon icon={faUser} className=""/>
}

function HeaderAfterLogin() {
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => {
        setOpen(false)
    }
    return <>
        <Button variant="primary" className="px-3"  onClick={() => setOpen(true)}>Đăng nhập </Button>
        <ModalAuth isOpen={open} onClose={handleClose}/></>

}

export default HeaderLogin;
