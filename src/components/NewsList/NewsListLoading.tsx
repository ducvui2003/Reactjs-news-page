import React, { useState } from 'react';
import { News } from '../../types/news.type';

function NewsListLoading({ newsList = [] }: { newsList: News[] }) {
  const [loading, setLoading] = useState<boolean>(newsList.length == 0);
  if (loading) {
    newsList = Array.from((length = 10));
  }
  return newsList.map();
}

export default NewsListLoading;
