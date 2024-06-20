import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import Logo from './Logo';

function LogoHome() {
  return (
    <Link component={NavLink} to={'/'} underline="none">
      <Logo />
    </Link>
  );
}

export default LogoHome;
