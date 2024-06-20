import { Box, Theme, useMediaQuery } from '@mui/material';
import React from 'react';
import logo from '../../assets/image/logo.svg';

const Logo = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <Box sx={{ height: isMobile ? '40px' : '50px' }}>
      <img src={logo} alt="logo" style={{ height: '100%' }} />
    </Box>
  );
};

export default Logo;
