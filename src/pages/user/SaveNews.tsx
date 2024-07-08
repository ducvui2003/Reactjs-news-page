import { Grid } from '@mui/material';
import NewsListSave from '../../components/NewsList/NewsListSave/NewsListSave';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

const SaveNews: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ paddingY: 4, paddingX: 2 }}>
      <Grid item xs={12} sm={12}>
        <NewsListSave />
      </Grid>
    </Grid>
  );
};

export default SaveNews;
