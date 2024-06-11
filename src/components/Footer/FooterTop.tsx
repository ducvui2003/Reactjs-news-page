import {Col, Container, Row, Stack} from "react-bootstrap";
import {EMAIL, PHONE_1, PHONE_2} from "../../constraints/info";
import {Email, Handshake, Phone} from "@mui/icons-material";
import {Box, Divider, Grid, List} from "@mui/material";
import {categoryList, getMatrixCategory, toCategoryName} from "../../services/categoryService";
import {Category} from "../../constraints/category";
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import NavLinkMUILink from "../Link/NavLinkMUILink";

function FooterTop() {
    return (
        <Grid container sx={{marginBlock: "10px"}}>
            <Grid item xs={8}>
                <Row>
                    {getMatrixCategory().map((categoryArray, index) => {
                        return (
                            <Col>
                                <Item bold={index == 0} key={index} categoryArray={categoryArray}/>
                            </Col>
                        );
                    })}
                </Row>
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item className=" border-secondary" xs={3}>
                <Stack direction={"horizontal"}>
                    <Divider flexItem orientation={"vertical"} sx={{width: "1px", marginRight: "10px"}}/>
                    <FooterContact/>
                </Stack>
            </Grid>
        </Grid>
    );
}

function FooterContact() {
    return (
        <Box sx={{width: "auto"}}>
            <Typography variant={"h5"}>Liên hệ </Typography>
            <Stack>
                <NavLinkMUILink to={`/`} underline={"none"} color={"black"}>
                    <Stack direction={"horizontal"}>
                        <Email className="pe-2" fontSize={"small"}/>
                        <Typography component={"p"} variant={"body2"}>{EMAIL}</Typography>
                    </Stack>
                </NavLinkMUILink>
                <NavLinkMUILink to={`/`} underline={"none"} color={"black"}>
                    <Stack direction={"horizontal"}>
                        <Phone className="pe-2" fontSize={"small"}/>
                        <Typography component={"p"} variant={"body2"}>{PHONE_1}</Typography>
                    </Stack>
                </NavLinkMUILink>
                <NavLinkMUILink to={`/`} underline={"none"} color={"black"}>
                    <Stack direction={"horizontal"}>
                        <Phone className="pe-2" fontSize={"small"}/>
                        <Typography component={"p"} variant={"body2"}>{PHONE_2}</Typography>
                    </Stack>
                </NavLinkMUILink>
            </Stack>
        </Box>
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
                        <NavLinkMUILink to={`/category/${category}`} variant={"h6"} underline={"none"}
                                        color={"black"}
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