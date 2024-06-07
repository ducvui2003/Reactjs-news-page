import {Container, Stack} from "react-bootstrap";
import {Divider} from "@mui/material";
import logo from '../../assets/image/logo.svg'
import {NavLink} from "react-router-dom";

function FooterMiddle() {

    return (
        <Stack direction="horizontal" className="my-2">
            <NavLink to={"/"}>
                <FooterLogo/>
            </NavLink>
            <FooterLegacy/>
        </Stack>
    );
}

function FooterLogo() {
    const handleToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <Stack as="a" direction="horizontal" className="align-items-center" onClick={() => handleToTop()}>
            <img src={logo} alt="logo" className="logo ms-1"/>
        </Stack>
    );
}

const content = ["Điều khoản", "Chính sách bảo mật", "RSS"];

function FooterLegacy() {
    return (
        <Stack direction="horizontal" className="ms-auto">
            {content.map((item, index) => {
                return (
                    <>
                        <a key={index} href="#" className="footer__link">
                            {item}
                        </a>

                        {index != content.length - 1 ? (
                            <Divider
                                orientation="vertical"
                                className="divide__color--low mx-3 divider__color--low"
                            />
                        ) : null}
                    </>
                );
            })}
        </Stack>
    );
}

export default FooterMiddle;
