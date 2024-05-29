import React, {useEffect, useState} from 'react';
import {News} from "../../types/news.type";
import {getNewsByCategory} from "../../services/newsService";
import Carousel from "../Carousel/Carousel";
import NewsItem from "../NewsList/NewsItem";
import {Category} from "../../constraints/category";
import {SwiperSlide} from "swiper/react";

function CategoryCarousel({category, quantity = 10}: { category: Category, quantity?:number }) {
    const [news, setNews] = useState<News[]>([]);
    useEffect(() => {
        getNewsByCategory(category).then((res) => setNews(res));
    }, []);
    return (
        <Carousel title={category}>
            {news.slice(0, quantity).map((item: News): any => {
                return <SwiperSlide><NewsItem {...item}/></SwiperSlide>
            })}
        </Carousel>
    );
}

export default CategoryCarousel;