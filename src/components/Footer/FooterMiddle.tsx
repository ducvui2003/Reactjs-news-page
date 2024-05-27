import {Container, Stack} from "react-bootstrap";
import "./footer.scss";
import {Divider} from "@mui/material";
import logo from '../../assets/image/logo.svg'

function FooterMiddle() {

    return (
        <Stack direction="horizontal" className="my-2">
            <FooterLogo/>
            <FooterLegacy/>
        </Stack>
    );
}

function FooterLogo() {

    return (
        <Stack as="a" direction="horizontal" className="align-items-center">
            <h2
                style={{
                    fontSize: "20px",
                    marginBottom: "0",
                }}
            >
                Báo điện tử
            </h2>
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
