import React, {useEffect, useState} from 'react';
import {News} from "../../types/news.type";
import {getNewsByCategory} from "../../services/newsService";
import Carousel from "../Carousel/Carousel";
import {Category} from "../../constraints/category";
import {SwiperSlide} from "swiper/react";
import NewsItemLoading from "../NewsList/NewsItemLoading";

const placeholderNewsItem: News = {}

function CategoryCarousel({category, quantity = 10}: { category: Category, quantity?: number }) {
    const placeholderNewsArray = Array.from({length: quantity}, () => ({...placeholderNewsItem}));
    const [news, setNews] = useState<News[]>(placeholderNewsArray);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getNewsByCategory(category).then((res) => {
            setNews(res);
            setLoading(false);
        });
    }, [category]);
    return (
        <Carousel title={category}>
            {news.slice(0, quantity).map((item: News): any => {
                return <SwiperSlide><NewsItemLoading {...item} loading={loading}/></SwiperSlide>
            })}
        </Carousel>
    );
}

export default CategoryCarousel;