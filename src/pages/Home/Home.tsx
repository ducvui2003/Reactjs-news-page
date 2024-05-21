import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ModalAuth from "../../components/Dialog/ModalAuth";
import parserRSS from "../../utils/parseRss";
import {Category} from "../../services/api/category";

function Home() {
    parserRSS(Category.TRANG_CHU).then(r => console.log(r));
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