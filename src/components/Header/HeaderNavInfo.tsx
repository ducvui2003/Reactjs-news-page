import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

function NavBar() {
  return (
    <Link component={NavLink} to={'/'}>
      Mới nhất
    </Link>
  );
};



export default NavBar;
