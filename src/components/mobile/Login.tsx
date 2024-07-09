import React from 'react';
import LoginForm from '../Form/LoginForm';
import { Box, Container, IconButton, Stack, useMediaQuery } from '@mui/material';
import LogoHome from '../Logo/LogoHome';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Theme } from '@mui/system';

const Login = () => {
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    const navigate = useNavigate();
    const authReducer = useSelector((state: RootState) => state.authenticate);
    if (authReducer.email) {
        navigate('/');
        return null;
    }
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Adjust height as needed
            }}
        >
            <IconButton
                onClick={() => navigate(-1)}
                sx={{ position: 'absolute', top: '10px', left: '10px' }}
            >
                <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <Container>
                <Stack direction="row" justifyContent={'center'} sx={{ pb: isMobile ? 1 : 3 }}>
                    <LogoHome />
                </Stack>
                <LoginForm />
            </Container>
        </Box>
    );
};

export default Login;
