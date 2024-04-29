import React from "react";
import {Button, Dropdown, Navbar} from "react-bootstrap";

export default function Nav() {
    return <>
        <Navbar>
            <Navbar.Brand href="#">The economist</Navbar.Brand>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className={"px-1"} href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item className={"px-1"} href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item className={"px-1"} href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
                The world in brief
            </div>
            <div>Search</div>
            <Button className={"ms-auto"}>Subscribe</Button>
            <Button>Log in</Button>
        </Navbar>
    </>

}