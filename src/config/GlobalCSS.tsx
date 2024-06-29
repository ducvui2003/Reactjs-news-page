import { GlobalStyles, Theme, useColorScheme, useTheme } from '@mui/material';
import React from 'react';

const GlobalCSS = () => {
  const theme: Theme = useTheme();
  const { mode } = useColorScheme();

  return (
    <GlobalStyles
      styles={{
        body: {
          '--swiper-pagination-bullet-inactive-color':
            theme.palette.mode === 'dark' && theme.palette.grey[400],

          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundImage: `linear-gradient(to bottom, ${mode == 'dark' ? theme.palette.grey[500] : theme.palette.grey[300]}, ${mode == 'dark' ? theme.palette.grey[700] : theme.palette.grey[500]})`,
            borderRadius: '100rem',
          },
          '&::-webkit-scrollbar-thumb:hover': {},
          // Nền scrollbar
          '&::-webkit-scrollbar-track': {
            background:
              mode == 'dark'
                ? theme.palette.grey[900]
                : theme.palette.grey[100],
          },
        },
      }}
    />
  );
};

export default GlobalCSS;
