import React, { useEffect, useState } from 'react';
import { News } from '../../types/news.type';
import NewsItem from './NewsItem';
import Pagination from '@mui/material/Pagination';
import './style.scss';

export default function NewsListTransition({ listNews }: { listNews: News[] }) {
  const totalNews = listNews.length;
  const size = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageNum, setPageNum] = useState<number>();
  const [newsItem, setNewsItem] = useState<News[]>([]);

  const handlePagiantion = (pageClick: number): void => {
    const start = (pageClick - 1) * size;
    const end = start + size;
    setNewsItem(listNews.slice(start, end));
    setCurrentPage(pageClick);
  };

  useEffect(() => {
    setPageNum(Math.ceil(totalNews / size));
    setCurrentPage(1); // Reset to first page when the list of news changes
  }, [listNews]);

  useEffect(() => {
    const start = (currentPage - 1) * size;
    const end = start + size;
    setNewsItem(listNews.slice(start, end));
  }, [currentPage, listNews]);

  return (
    <>
      {newsItem.map((item: News) => (
        <NewsItem key={item.id} {...item} />
      ))}
      <Pagination
        onChange={(event, page) => handlePagiantion(page)}
        count={pageNum}
        defaultPage={currentPage}
        siblingCount={2}
      />
    </>
  );
}
