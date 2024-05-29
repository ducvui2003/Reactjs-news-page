import React from 'react';
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";

function Main() {

    return (
        <>
            <Header/>
            <Nav/>
            <Outlet/>
            <Footer/>
          </>
    );
}

export default Main;