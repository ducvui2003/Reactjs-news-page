import React from "react";
import { Container, Navbar} from "react-bootstrap";

import DarkMode from "./DarkMode/DarkMode";

import "./Navbar.scss";
import {Link} from "react-router-dom";
import {categoryList, toCategoryName} from "../../services/categoryService";

export default function Nav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-evenly">
                            {categoryList.map((category) => (
                                <Link to={`/category/${category}`}>{toCategoryName(category)}</Link>
                            ))}
                    </Navbar.Collapse>
                    <DarkMode/>
                </Container>
            </Navbar>
        </>
    )
}