import React from 'react';
import {
    Container,
    Grid,
    ListItemButton,
    styled,
    Theme,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { exit } from '../features/authenticate/authenticate.slice';
import { toast } from 'react-toastify';
import { RootState } from '../features/store';
import { User } from '../types/user.type';
import { get } from '../services/userServices';
import Stack from '@mui/material/Stack';

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
    color: selected ? 'inherit' : theme.palette.text.primary,
    gap: '10px',
}));

const MainUser = () => {
    const navigate = useNavigate();
    const authenticateReducer: User = useSelector(
        (root: RootState) => root.authenticate,
    );

    const theme = useTheme();
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(exit());
        navigate('/');
        toast.success('Đăng xuất thành công');
    };
    const userExist = get(authenticateReducer.email);
    if (!userExist) return <Navigate to={'/404'} />;
    return (
        <Container sx={{ minHeight: isMobile ? '80vh' : '50vh' }}>
            <Grid container spacing={2} paddingTop={'10px'}>
                <Grid item xs={12} md={3}>
                    <Stack
                        direction={isMobile ? 'row' : 'column'}
                        sx={{
                            overflowX: isMobile ? 'scroll' : 'auto',
                            backgroundColor: theme.palette.grey[200],
                        }}
                    >
                        <NavLink to={`/users/info`} style={{ textDecoration: 'none' }}>
                            {({ isActive }) => (
                                <StyledListItemButton selected={isActive}>
                                    <PersonIcon fontSize="medium" />
                                    <Typography noWrap={true} variant="h6">
                                        Thông tin cá nhân
                                    </Typography>
                                </StyledListItemButton>
                            )}
                        </NavLink>
                        <NavLink to={`/users/save-news`} style={{ textDecoration: 'none' }}>
                            {({ isActive }) => (
                                <StyledListItemButton selected={isActive}>
                                    <FavoriteIcon fontSize={'medium'} />
                                    <Typography noWrap={true} variant="h6">
                                        Báo đã lưu{' '}
                                    </Typography>
                                </StyledListItemButton>
                            )}
                        </NavLink>
                        <NavLink to={`/users/comment`} style={{ textDecoration: 'none' }}>
                            {({ isActive }) => (
                                <StyledListItemButton selected={isActive}>
                                    <FeedbackIcon fontSize={'medium'} />
                                    <Typography noWrap={true} variant="h6">
                                        Bình luận
                                    </Typography>
                                </StyledListItemButton>
                            )}
                        </NavLink>
                        {!isMobile && (
                            <ListItemButton
                                sx={{ gap: '10px', color: 'red' }}
                                onClick={() => handleLogOut()}
                            >
                                <LogoutIcon fontSize={'medium'} />
                                <Typography variant="h6">Đăng xuất</Typography>
                            </ListItemButton>
                        )}
                    </Stack>
                </Grid>
                <Grid item xs={12} md>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainUser;
