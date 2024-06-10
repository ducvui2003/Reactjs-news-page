import {Container, Stack} from "react-bootstrap";
import {Divider} from "@mui/material";
import {NavLink} from "react-router-dom";
import NavLinkMUILink from "../Link/NavLinkMUILink";
import LogoScrollToTop from "../Logo/LogoScrollToTop";

function FooterMiddle() {

    return (
        <Stack direction="horizontal" className="my-2">
            <NavLink to={"/"}>
                <LogoScrollToTop/>
            </NavLink>
            <FooterLegacy/>
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
