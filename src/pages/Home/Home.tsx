import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ModalAuth from "../../components/Dialog/ModalAuth";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Nav from "../../components/Nav/Navbar";
import {NewsList} from "../../components/NewsList/NewsList";
import {Route, Routes} from "react-router-dom";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <Header/>
            <Nav/>
            <Intro/>
            <NewsList/>

            {/*Găắn Login vào Header*/}
            {/*<Button variant="primary" onClick={openModal}>*/}
            {/*    Đăng nhập*/}
            {/*</Button>*/}
            {/*<ModalAuth isOpen={isModalOpen} onClose={closeModal}/>*/}
        </>
    );
}

export default Home;