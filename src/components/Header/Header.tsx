import React, { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import LogoHome from '../Logo/LogoHome';
import DarkMode from '../Nav/DarkMode/DarkMode';
import HeaderBeforeLogin from './HeaderBeforeLogin';
import HeaderAfterLogin from './HeaderAfterLogin';
import { Container, IconButton, useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Theme, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '../mobile/NavBar';
import Weather from '../Weather/Weather';
import { zIndex } from '../../config/zindex';

export default function Header() {
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, 'dd/MM/yyyy');
    const dayOfWeek: string = format(currentDate, 'EEEE', { locale: vi });
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    // Kiểm tra state user đã đăng nhập chưa
    const authReducer = useSelector((state: RootState) => state.authenticate);
    const styles = {
        p: 3,
        position: 'sticky',
        zIndex: zIndex.header,
    };

    return (
        <Container sx={styles}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
                justifyContent={isMobile ? 'center' : 'space-between'}
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
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <LogoHome />

                    {!isMobile && (
                        <>
                            <Typography
                                variant={'body2'}
                                sx={{ px: 2 }}
                                color={theme.palette.grey[500]}
                            >
                                {dayOfWeek}, {formattedDate}
                            </Typography>
                            <Weather />
                        </>
                    )}
                </Stack>

                {!isMobile && (
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <DarkMode />
                        {authReducer.email ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
                    </Stack>
                )}
            </Stack>
            <NavBar open={open} onClose={() => setOpen(false)} />
        </Container>
    );
}
