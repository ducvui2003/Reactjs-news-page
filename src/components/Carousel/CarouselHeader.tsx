import React from 'react';
import {Stack} from "react-bootstrap";
import Typography from "@mui/joy/Typography";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {Category} from "../../constraints/category";
import {toCategoryName} from "../../services/categoryService";

function CarouselHeader({title}: { title: Category }) {
    return (
        <Stack direction="horizontal" className="justify-content-between">
            <Typography level="h1" className={"my-2 text-uppercase"}>
                {toCategoryName(title) || ""}
            </Typography>
            <motion.a
                whileHover={{scale: 1.2}}
                onHoverStart={(e) => {
                }}
                onHoverEnd={(e) => {
                }}
            >
                <NavLink to={`/category/${title}`} className="link-primary">
                    Xem thêm
                </NavLink>
            </motion.a>
        </Stack>
    );
}

export default CarouselHeader;