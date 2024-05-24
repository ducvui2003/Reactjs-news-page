import React from 'react';
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Navbar";
import {Container} from "react-bootstrap";
import Intro from "../components/Intro/Intro";
import {NewsList} from "../components/NewsList/NewsList";
import Footer from "../components/Footer/Footer";
import ModalAuth from "../components/Dialog/ModalAuth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../features/store";
import {toggle} from "../features/dialog/auth/dialogAuth.slice";
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