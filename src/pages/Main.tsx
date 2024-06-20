import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Container, Theme } from '@mui/system';
import Weather from '../components/Weather/Weather';

function Main() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <>
      <Header />
      <Nav />
      {isMobile && (
        <Container>
          <Weather />
        </Container>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
