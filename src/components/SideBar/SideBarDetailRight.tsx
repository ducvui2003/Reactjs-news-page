import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Category } from '../../constraints/category';
import { News, NewsLoading } from '../../types/news.type';
import { getNewsByCategory } from '../../services/newsService';
import CardVertical from '../Card/CardVertical';
import Stack from '@mui/material/Stack';
import CardHorizontal from '../Card/CardHorizontal';
import { describe } from 'node:test';

function SideBarDetailRight({ category }: { category: Category }) {
  const style = {
    position: 'sticky',
    left: 0,
    top: '50px',
    paddingTop: '50px',
  };
  const [newsRelated, setNewsRelated] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getNewsByCategory(category).then((news) => {
      const newsRemoveDescription = news.map((item) => {
        return { ...item, description: '' };
      });
      setNewsRelated(newsRemoveDescription);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={style}>
      <Typography gutterBottom variant={'h3'}>
        Các bài báo liên quan
      </Typography>
      <Stack sx={{ position: 'static' }} spacing={3}>
        {newsRelated.slice(0, 3).map((news) => (
          <CardHorizontal
            isLoading={loading}
            news={news}
            key={Math.random()}
            cssImage={{ flex: 1 }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default SideBarDetailRight;
