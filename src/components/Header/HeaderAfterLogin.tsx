import React, {useState} from 'react';
import ModalAuth from "../Dialog/ModalAuth";
import Button from "@mui/material/Button";

function HeaderAfterLogin() {
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="contained" className={"ms-3"} onClick={() => setOpen(true)}>
                Đăng nhập{" "}
            </Button>
            <ModalAuth isOpen={open} onClose={handleClose}/>
        </>
    );
}

export default HeaderAfterLogin;