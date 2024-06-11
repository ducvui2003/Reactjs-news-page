import React from "react";
import Stack from '@mui/material/Stack';
import "./Navbar.scss";
import {categoryList, toCategoryName} from "../../services/categoryService";
import NavLinkMUILink from "../Link/NavLinkMUILink";
import {Box, Container, Divider} from "@mui/material";
import {Category} from "../../constraints/category";

export default function Nav() {
    const style = {
        backgroundColor: 'background.paper',

    }
    return (
        <Box sx={style}>
            <Divider sx={{height: 0.5, backgroundColor: 'black', opacity: 0.2}}/>
            <Container sx={{paddingBlock: "16px"}}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    {categoryList.filter((category: Category) => category != Category.HOME).map((category) => (
                        <NavLinkMUILink variant={"h6"} underline={"none"} color={"black"}
                                        to={`/category/${category}`}>{toCategoryName(category)}</NavLinkMUILink>
                    ))}
                </Stack>
            </Container>
            <Divider sx={{height: 0.5, backgroundColor: 'black', opacity: 0.2}}/>
        </Box>
    )
}