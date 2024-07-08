import React, { useEffect, useState } from 'react';
import { getNewsByCategory } from '../../services/newsService';
import { Category } from '../../constraints/category';
import { News } from '../../types/news.type';
import { Divider, Grid } from '@mui/material';
import CardVertical from '../Card/CardVertical';
import CardHorizontal from '../Card/CardHorizontal';

function Intro() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getNewsByCategory(Category.HOME).then((res) => {
      setNews(res);
      setLoading(false);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <CardHorizontal
          news={news[0]}
          cssImage={{ flexBasis: '500px' }}
          isLoading={loading}
        />
        <Divider
          orientation="horizontal"
          sx={{
            marginBlock: '10px',
          }}
        />
        <Grid container spacing={2}>
          {news.slice(1, 4).map((item: News, index) => (
            <Grid item xs={12} md key={index}>
              <CardVertical key={item.id} news={item} isLoading={loading} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardVertical
          {...news[4]}
          news={news[4]}
          isLoading={loading}
          cssImage={{ flex: 1 }}
        />
      </Grid>
    </Grid>
  );
}

export default Intro;
