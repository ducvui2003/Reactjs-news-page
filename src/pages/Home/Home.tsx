import React, { useState } from "react";
import Intro from "../../components/Intro/Intro";
import Nav from "../../components/Nav/Navbar";
import { NewsList } from "../../components/NewsList/NewsList";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import ModalAuth from "../../components/Dialog/ModalAuth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {toggle} from "../../features/dialog/auth/dialogAuth.slice";

function Home() {
    const dialogAuth = useSelector((state: RootState) => state.dialogAuth);
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(toggle(false));
    };
  return (
    <>
      <Header />
      <Nav />
      <Container fluid={"xl"}>
        <Intro />
        <NewsList />
      </Container>
      <Footer />
      <ModalAuth isOpen={dialogAuth} onClose={closeModal} />
    </>
  );
}

export default Home;
