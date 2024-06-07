import React from 'react';
import {Stack} from "react-bootstrap";
import logo from "../../assets/image/logo.svg";

function LogoScrollToTop() {
    const handleToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <Stack as="a" direction="horizontal" className="align-items-center" onClick={() => handleToTop()}>
            <img src={logo} alt="logo" className=" ms-1 p-2" style={{height: "50px"}}/>
        </Stack>
    );
}

export default LogoScrollToTop;