import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.svg';
import { Link, Stack } from '@mui/material';

function LogoHome() {
  return (
    <Link component={NavLink} to={'/'} underline="none">
      <Stack direction="row" alignItems={'center'}>
        <img
          src={logo}
          alt="logo"
          className=" ms-1 p-2"
          style={{ height: '50px' }}
        />
      </Stack>
    </Link>
  );
}

export default LogoHome;
