import React from "react";
import HeaderInfo from "./HeaderInfo";
import ModalAuth from "../Dialog/ModalAuth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {toggle} from "../../features/dialog/auth/dialogAuth.slice";

export default function Header() {
    const dialogAuth = useSelector((state: RootState) => state.dialogAuth);
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(toggle(false));
    };
    return <header>
        <HeaderInfo/>
        <ModalAuth isOpen={dialogAuth} onClose={closeModal}/>
    </header>;
}