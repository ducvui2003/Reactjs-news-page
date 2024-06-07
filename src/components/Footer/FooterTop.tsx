import {Col, Container, Row, Stack} from "react-bootstrap";
import {EMAIL, PHONE_1, PHONE_2} from "../../constraints/info";
import {Email, Handshake, Phone} from "@mui/icons-material";
import {Divider} from "@mui/material";
import {categoryList, getMatrixCategory, toCategoryName} from "../../services/categoryService";
import {Category} from "../../constraints/category";
import {NavLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import {Link} from '@mui/material';
import NavLinkMUILink from "../Link/NavLinkMUILink";

function FooterTop() {
    return (
        <Container fluid={"xl"} className="py-3">
            <Row>
                <Col xs={"8"}>
                    <Row>
                        {getMatrixCategory().map((categoryArray, index) => {
                            return (
                                <Col>
                                    <Item bold={index == 0} key={index} categoryArray={categoryArray}/>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col xs={"1"}>
                    <Divider orientation="vertical" className="divide__color--low"/>
                </Col>
                <Col className=" border-secondary" xs={"3"}>
                    <FooterContact/>
                </Col>
            </Row>
        </Container>
    );
}

function FooterContact() {
    return (
        <div>
            <Typography variant={"h6"}>Liên hệ </Typography>
            <div>
                <a href="#" className="d-flex align-items-center">
                    <Email className="pe-2"/>
                    <Typography component={"p"} variant={"overline"}>{EMAIL}</Typography>
                </a>
                <a href="#" className="d-flex align-items-center">
                    <Phone className="pe-2"/>
                    <Typography component={"p"} variant={"overline"}>{PHONE_1}</Typography>
                </a>
                <a href="#" className="d-flex align-items-center">
                    <Phone className="pe-2"/>
                    <Typography component={"p"} variant={"overline"}>{PHONE_2}</Typography>
                </a>
            </div>
        </div>
    );
}

function Item({
                  categoryArray,
                  bold,
              }: {
    categoryArray: Category[],
    bold: boolean,
    key?: number
}) {
    return (
        <Stack gap={3}>
            {categoryArray.map((category, index) => {
                return (
                    <motion.span whileHover={{scale: 1.2}} key={index}>
                        <NavLinkMUILink to={`/category/${category}`} variant={"overline"} underline={"none"} color={"black"}
                                        className={(bold ? "fw-bold" : "fw-light")}>
                            {toCategoryName(category)}
                        </NavLinkMUILink>
                    </motion.span>
                );
            })}
        </Stack>
    );
}

export default FooterTop;