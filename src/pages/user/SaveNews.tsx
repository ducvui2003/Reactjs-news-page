import { Grid } from '@mui/material';
import NewsListSave from '../../components/NewsList/NewsListSave/NewsListSave';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

const SaveNews: React.FC = () => {
  const { id } = useOutletContext<{ id: string }>();
  return <p>Bài báo đã lưu id:{id}</p>;
};

export default SaveNews;
