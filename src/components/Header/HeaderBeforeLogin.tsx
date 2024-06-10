import React, {useEffect, useState} from 'react';
import PopoverUser from "../Popover/PopoverUser";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";
import {useDispatch, useSelector} from "react-redux";
import {exit} from "../../features/authenticate/authenticate.slice";
import {toast} from "react-toastify";
import {RootState} from "../../features/store";
import Button from "@mui/material/Button";
import ModalAuth from "../Dialog/ModalAuth";

function HeaderBeforeLogin() {
    const authReducer = useSelector((state: RootState) => state.authenticate);
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => {
        setOpen(false);
    };
    if (authReducer.email) return null
    return (
        <>
            <Button variant="contained" className={"ms-3"} onClick={() => setOpen(true)}>
                Đăng nhập{" "}
            </Button>
            <ModalAuth isOpen={open} onClose={handleClose}/>
        </>
    );
}

export default HeaderBeforeLogin;