import React, { useEffect, useState } from 'react';
import { News } from '../../types/news.type';
import Pagination from '@mui/material/Pagination';
import { Theme, useMediaQuery } from '@mui/material';
import LoadingList from './LoadingList';
import CardHorizontal from '../Card/CardHorizontal';
import Stack from '@mui/material/Stack';
import CardVertical from '../Card/CardVertical';

export default function NewsListTransition({
  listNews,
  loading,
}: {
  listNews: News[];
  loading: boolean;
}) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
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
      <Stack direction={'column'} spacing={3}>
        <LoadingList
          isLoading={loading}
          data={newsItem}
          renderItem={(item, isLoading, index) =>
            !isMobile ? (
              <CardHorizontal
                heightImage={'300px'}
                isLoading={isLoading}
                news={item}
                key={index}
              />
            ) : (
              <CardVertical isLoading={isLoading} news={item} key={index} />
            )
          }
          fakeItemCount={size}
        />
      </Stack>
      <Pagination
        sx={{ my: 4 }}
        onChange={(event, page) => handlePagiantion(page)}
        count={pageNum}
        defaultPage={currentPage}
        size={isMobile ? 'small' : 'medium'}
        siblingCount={2}
      />
    </>
  );
}
