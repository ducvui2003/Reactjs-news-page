import React from 'react';
import { Container, Grid, List, ListItemButton } from '@mui/material';
import { Navigate, NavLink, Outlet, useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { exit } from '../features/authenticate/authenticate.slice';
import { toast } from 'react-toastify';
import { RootState } from '../features/store';

const MainUser = () => {
  const { id } = useParams<{ id: string }>();
  const authenticateReducer = useSelector(
    (root: RootState) => root.authenticate,
  );
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };

  if (id || authenticateReducer.id != id) return <Navigate to={'/404'} />;
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <List>
            <NavLink to="/users/info" style={{ textDecoration: 'none' }}>
              {({ isActive }) => (
                <ListItemButton
                  sx={{
                    gap: '10px',
                  }}
                  component="li"
                  selected={isActive}
                >
                  <PersonIcon fontSize="medium" />
                  <Typography variant="h6">Thông tin cá nhân</Typography>
                </ListItemButton>
              )}
            </NavLink>
            <ListItemButton
              sx={{ gap: '10px' }}
              component={NavLink}
              to={'/users/save-news'}
            >
              <FavoriteIcon fontSize={'medium'} />
              <Typography variant="h6">Bài báo yêu thích</Typography>
            </ListItemButton>
            <ListItemButton
              sx={{ gap: '10px' }}
              component={NavLink}
              to={'/users/comment'}
            >
              <FeedbackIcon fontSize={'medium'} />
              <Typography variant="h6">Bình luận</Typography>
            </ListItemButton>
            <ListItemButton sx={{ gap: '10px' }} onClick={() => handleLogOut()}>
              <LogoutIcon fontSize={'medium'} />
              <Typography variant="h6">Đăng xuất</Typography>
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={12} md>
          <Outlet context={id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainUser;
