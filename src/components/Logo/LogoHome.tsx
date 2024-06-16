import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.svg';
import { Link, Stack } from '@mui/material';

function LogoHome() {
  return (
    <Link component={NavLink} to={'/'} underline="none">
      <Stack direction="row" alignItems={'center'}>
        <img src={logo} alt="logo" style={{ height: '50px' }} />
      </Stack>
    </Link>
  );
}

export default LogoHome;
