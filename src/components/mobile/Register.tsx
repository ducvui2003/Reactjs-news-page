import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Box, Container, IconButton, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LogoHome from '../Logo/LogoHome';
import RegisterForm from '../Form/RegisterForm';

const Register = () => {
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
        <Stack direction="row" justifyContent={'center'} sx={{ pb: 3 }}>
          <LogoHome />
        </Stack>
        <RegisterForm />
      </Container>
    </Box>
  );
};

export default Register;
