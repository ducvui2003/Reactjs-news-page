import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import {Stack} from "react-bootstrap";
import NavLinkMUILink from "../Link/NavLinkMUILink";

function LogoHome() {
    return (
        <NavLinkMUILink to={"/"}>
            <Stack as="a" direction="horizontal" className="align-items-center" onClick={() => handleToHome()}>
                <img src={logo} alt="logo" className=" ms-1 p-2" style={{height: "50px"}}/>
            </Stack>
        </NavLinkMUILink>
    );
}

export default LogoHome;