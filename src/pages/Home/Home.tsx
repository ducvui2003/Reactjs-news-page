import React, {useState} from 'react';
import Intro from "../../components/Intro/Intro";
import Nav from "../../components/Nav/Navbar";
import {NewsList} from "../../components/NewsList/NewsList";
import Footer from "../../components/Footer/Footer";
import {Container} from "react-bootstrap";

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
            <Container fluid={"xl"}>
                <Intro/>
                <NewsList/>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;