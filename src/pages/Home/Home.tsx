import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ModalAuth from "../../components/Dialog/ModalAuth";

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
            <Button variant="primary" onClick={openModal}>
                Đăng nhập
            </Button>
            <ModalAuth isOpen={isModalOpen} onClose={closeModal}/>
        </>
    )
}

export default Home;