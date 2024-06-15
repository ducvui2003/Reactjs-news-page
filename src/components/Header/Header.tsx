import React, { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import LogoHome from '../Logo/LogoHome';
import SearchBar from './HeaderSearch';
import DarkMode from '../Nav/DarkMode/DarkMode';
import HeaderBeforeLogin from './HeaderBeforeLogin';
import HeaderAfterLogin from './HeaderAfterLogin';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  useMediaQuery,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '../mobile/NavBar';
export default function Header() {
  const currentDate: Date = new Date();
  const formattedDate: string = format(currentDate, 'dd/MM/yyyy');
  const dayOfWeek: string = format(currentDate, 'EEEE', { locale: vi });
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const [open, setOpen] = useState(false);

  // Kiểm tra state user đã đăng nhập chưa
  const authReducer = useSelector((state: RootState) => state.authenticate);
  const styles = {
    p: 3,
    position: 'sticky',
  };

  return (
    <Container sx={styles}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={1}
        sx={{ width: '100%' }}
      >
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ position: 'absolute', left: 0 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={isMobile ? { marginInline: 'auto !important' } : undefined}>
          <LogoHome />
        </Box>

        {!isMobile && (
          <>
            <Typography variant={'body1'} className="px-2">
              {dayOfWeek}, {formattedDate}
            </Typography>
            <Link
              component={NavLink}
              to={'/'}
              sx={{ marginLeft: 'auto !important' }}
            >
              Mới nhất
            </Link>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              color={'black'}
              sx={{ mx: 2 }}
            />
            <SearchBar />
            <DarkMode />
            {authReducer.email ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
          </>
        )}
      </Stack>
      <NavBar open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}
