import React from "react";
import {Container, Navbar} from "react-bootstrap";
import Stack from '@mui/material/Stack';
import "./Navbar.scss";
import {Link} from "react-router-dom";
import {categoryList, toCategoryName} from "../../services/categoryService";
import NavLinkMUILink from "../Link/NavLinkMUILink";
import {Divider} from "@mui/material";

export default function Nav() {
    return (
        <>
            <div className={"bg-body-tertiary py-3"}>
                <Container className="">
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {categoryList.map((category) => (
                            <NavLinkMUILink variant={"h6"} underline={"none"} color={"black"}
                                            to={`/category/${category}`}>{toCategoryName(category)}</NavLinkMUILink>
                        ))}
                    </Stack>
                </Container>
            </div>
            <Divider flexItems sx={{height: 0.5, backgroundColor: 'black', opacity: 0.2}}/>
        </>
    )
}