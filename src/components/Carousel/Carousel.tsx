import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";
import "swiper/css";
import Typography from "@mui/joy/Typography";
import "swiper/css";
import "swiper/css/pagination";
import {Stack} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import CarouselHeader from "./CarouselHeader";
import {toCategory} from "../../services/categoryService";

const settings = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    scrollbar: {
        enable: true,
        draggable: true,
    },
    modules: [Pagination, Autoplay, Scrollbar],
};

function Carousel({title, children}: { title: string; children: any }) {
    return (
        <div className="mt-1  border-opacity-10 border-top border-3 align-items-center">
            <CarouselHeader title={toCategory(title)}/>
            <Swiper {...settings}>{children}</Swiper>
        </div>
    );
}

export default Carousel;
