import React, {useState} from "react";
// @ts-ignore
import {Button, Container, Navbar, NavDropdown, NavLink} from "react-bootstrap";

import DarkMode from "./DarkMode/DarkMode";

import "./Navbar.scss";
import {format} from "date-fns";

//  icon
import {Link} from "react-router-dom";

export default function Nav() {
    const cssBtn: {} = ["px-1"]
    let path = "/";
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");


    const categories = ["Trang chính", 'Quốc tế', 'Lao động', 'Bạn đọc',
        "Kinh tế", 'Sức khỏe', 'Giáo dục', 'Pháp luật',
        "Văn hóa - Nghệ thuật", 'Giải trí', 'Thể thao', 'Công nghệ'];
    const [selectedCategory, setSelectCategory] = useState<string>(categories[0]);

    function handleCategoryClick(category: string) {
        setSelectCategory(category);
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-evenly">
                        {/*<Navbar className="me-auto">*/}
                        {categories.map((category) => (
                            <Link onClick={() => handleCategoryClick(category)} to={path + category}>{category}</Link>
                        ))}
                        {/*<NavDropdown title="Xem thêm" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">*/}
                        {/*        Action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">*/}
                        {/*        Something*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                        {/*</Navbar>*/}
                    </Navbar.Collapse>
                    <DarkMode/>
                </Container>
            </Navbar>
            {/*<NewsList category={selectedCategory}/>*/}
        </>
    )
}