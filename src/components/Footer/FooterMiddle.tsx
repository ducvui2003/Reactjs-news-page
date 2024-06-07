import {Container, Stack} from "react-bootstrap";
import {Divider} from "@mui/material";
import logo from '../../assets/image/logo.svg'
import {NavLink} from "react-router-dom";
import NavLinkMUILink from "../Link/NavLinkMUILink";
import {toCategoryName} from "../../services/categoryService";

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
            <img src={logo} alt="logo" className=" ms-1 p-2" style={{height: "50px"}}/>
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
                        <NavLinkMUILink to={`/`} variant={"overline"} underline={"none"} color={"black"}>
                            {item}
                        </NavLinkMUILink>

                        {index != content.length - 1 ? (
                            <Divider
                                orientation="vertical"
                                sx={{width: '2px', backgroundColor: 'black', opacity: 0.2, marginInline: '10px'}}
                            />
                        ) : null}
                    </>
                );
            })}
        </Stack>
    );
}

export default FooterMiddle;
