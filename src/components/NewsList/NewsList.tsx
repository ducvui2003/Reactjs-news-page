import React, { useEffect, useState } from 'react';
import { getNewsByCategory } from '../../services/newsService';
import { News } from '../../types/news.type';
import { Navigate, useParams } from 'react-router-dom';
import { categoryExist, toCategory } from '../../services/categoryService';

import NewsListTransition from './NewsListTransition';
import { Container, Stack, TextField } from '@mui/material';

export function NewsList() {
  const { id } = useParams();
  if (!categoryExist(id || '')) {
    return <Navigate to="/404" />;
  }
  const [listNews, setListNews] = useState<News[]>([]);
  const [listNewsSearch, setListNewsSearch] = useState<News[]>([]); // Search bài báo
  useEffect(() => {
    getNewsByCategory(toCategory(id || '')).then((res: News[]) => {
      setListNews(res);
      setListNewsSearch(res);
    });
  }, [id]);

  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const handleSearch = (e: any) => {
    const keyword = e.target.value;
    const newsSearch: News[] = listNews.filter((item: News) =>
      item.title?.includes(keyword),
    );
    setListNewsSearch(newsSearch);
  };
  return (
    <Container>
      <Stack direction={'row'} justifyContent={'center'}>
        <TextField
          required
          id="outlined-required"
          label="Tìm kiếm bài báo"
          defaultValue=""
          variant="filled"
          onChange={(e) => handleSearch(e)}
          sx={{ width: '100%', my: 2 }}
        />
      </Stack>
      <NewsListTransition listNews={listNewsSearch} />
    </Container>
  );
}
