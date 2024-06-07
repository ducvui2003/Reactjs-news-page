import React from "react";
import {Swiper} from "swiper/react";
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CarouselHeader from "./CarouselHeader";
import {toCategory} from "../../services/categoryService";
import {Divider} from "@mui/material";

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
        <>
            <Divider flexItems sx={{height: 1.5, backgroundColor: 'black', opacity: 0.2}}/>
            <div className="mt-1 align-items-center">
                <CarouselHeader title={toCategory(title)}/>
                <Swiper {...settings}>{children}</Swiper>
            </div>
        </>
    );
}

export default Carousel;
