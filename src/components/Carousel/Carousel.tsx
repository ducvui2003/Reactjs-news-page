import React from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CarouselHeader from './CarouselHeader';
import { toCategory } from '../../services/categoryService';
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';

function Carousel({ title, children }: { title: string; children: any }) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const settings = {
    slidesPerView: isMobile ? 1 : 2,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    scrollbar: {
      enable: true,
      draggable: true,
    },
    modules: [Pagination, Autoplay, Scrollbar],
  };
  return (
    <div className="mt-1 align-items-center">
      <CarouselHeader title={toCategory(title)} />
      <Swiper style={{ paddingBottom: '50px' }} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}

export default Carousel;
