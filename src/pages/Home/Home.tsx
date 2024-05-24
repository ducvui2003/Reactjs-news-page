import React, { useState } from "react";
import Intro from "../../components/Intro/Intro";
import Nav from "../../components/Nav/Navbar";
import { NewsList } from "../../components/NewsList/NewsList";
import { Container } from "react-bootstrap";
import ModalAuth from "../../components/Dialog/ModalAuth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {toggle} from "../../features/dialog/auth/dialogAuth.slice";

function Home() {
  return (
    <>
      <Container fluid={"xl"}>
        <Intro />
        <NewsList />
      </Container>

    </>
  );
}

export default Home;
