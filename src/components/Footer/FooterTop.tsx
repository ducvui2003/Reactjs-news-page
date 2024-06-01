import {Col, Container, Row, Stack} from "react-bootstrap";
import {EMAIL, PHONE_1, PHONE_2} from "../../constraints/info";
import {Email, Handshake, Phone} from "@mui/icons-material";
import {Divider} from "@mui/material";
import "./footer.scss";
import {categoryList, getMatrixCategory, toCategoryName} from "../../services/categoryService";
import {Category} from "../../constraints/category";
import {NavLink} from "react-router-dom";
import Typography from "@mui/joy/Typography";
import {motion} from "framer-motion";

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
                    <Row>
                        <Col xs={"12"}>
                            <FooterContact/>
                        </Col>
                        <Col xs={"12"}>
                            <Divider className="divider__color--low divider--medium my-2"/>
                            <FooterHotline/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

function FooterContact() {
    return (
        <div>
            <p className="fw-light">Đường dây nóng</p>
            <div>
                <a href="#" className="d-flex align-items-center">
                    <Email className="pe-2"/>
                    <span className="fw-6">{EMAIL}</span>
                </a>
                <a href="#" className="d-flex align-items-center">
                    <Handshake className="pe-2"/>
                    <span className="fw-6">Hợp tác</span>
                </a>
            </div>
        </div>
    );
}

function FooterHotline() {
    return (
        <div>
            <p className="fw-light">Đường dây nóng</p>
            <div>
                <a>
                    <Phone className="pe-2"/>
                    <span className="fw-6">{PHONE_1}</span>
                </a>
                <a>
                    <Phone className="pe-2"/>
                    <span className="fw-6">{PHONE_2}</span>
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
                        <NavLink to={`/category/${category}`}>
                            <Typography level="h5" gutterBottom className={"d-inline"}
                                        className={(bold ? "fw-bold" : "fw-light")}>
                                {toCategoryName(category)}
                            </Typography>
                        </NavLink>
                    </motion.span>
                );
            })}
        </Stack>
    );
}

export default FooterTop;