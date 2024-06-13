import React, { useEffect, useState } from 'react';
import { News, NewsLoading } from '../../types/news.type';
import { getNewsByCategory } from '../../services/newsService';
import Carousel from '../Carousel/Carousel';
import { Category } from '../../constraints/category';
import { SwiperSlide } from 'swiper/react';
import CardHorizontal from '../Card/CardHorizontal';
import { Divider } from '@mui/material';

export const placeholderNewsItem: NewsLoading = {
  isLoading: false,
};

function CategoryCarousel({
  category,
  quantity = 10,
}: {
  category: Category;
  quantity?: number;
}) {
  const placeholderNewsArray = Array.from({ length: quantity }, () => ({
    ...placeholderNewsItem,
  }));
  const [news, setNews] = useState<NewsLoading[]>(placeholderNewsArray);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNewsByCategory(category).then((res) => {
      const newsArray: NewsLoading[] = res.map((news: News) => {
        return {
          news: news,
          isLoading: false,
        };
      });
      setNews(newsArray);
      setLoading(false);
    });
  }, [category]);
  return (
    <>
      <Divider
        orientation="horizontal"
        sx={{
          height: '1.5px',
          backgroundColor: 'black',
          opacity: 0.2,
          marginBlock: '10px',
        }}
      />
      <Carousel title={category}>
        {news.slice(0, quantity).map((item: NewsLoading): any => {
          return (
            <SwiperSlide style={{ height: '100%' }}>
              <CardHorizontal news={item.news} isLoading={loading} />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
}

export default CategoryCarousel;
