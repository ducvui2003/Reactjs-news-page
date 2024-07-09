import { Box, Theme, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import logoLight from '../../assets/image/logo-light.png';
import logoDark from '../../assets/image/logo-dark.png';

const Logo = () => {
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    const theme = useTheme();
    return (
        <Box sx={{ height: isMobile ? '90px' : '70px' }}>
            <img src={theme.palette.mode == 'light' ? logoDark : logoLight} alt="logo" style={{ height: '100%' }} />
        </Box>
    );
};

export default Logo;
