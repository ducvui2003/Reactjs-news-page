import React, {useState} from "react";
// @ts-ignore
import {Button, Container, Navbar, NavDropdown, NavLink} from "react-bootstrap";

import DarkMode from "./DarkMode/DarkMode";

import "./Navbar.scss";
import {format} from "date-fns";

//  icon
import {Link} from "react-router-dom";
import {categoryList} from "../../services/categoryService";

export default function Nav() {
    const cssBtn: {} = ["px-1"]
    const path = "/";
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");

    const [selectedCategory, setSelectCategory] = useState<string>(categoryList[0]);

    function handleCategoryClick(category: string) {
        setSelectCategory(category);
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-evenly">
                        {categoryList.map((category) => (
                            <Link onClick={() => handleCategoryClick(category)} to={`/category/${category}`}>{category}</Link>
                        ))}
                    </Navbar.Collapse>
                    <DarkMode/>
                </Container>
            </Navbar>
        </>
    )
}