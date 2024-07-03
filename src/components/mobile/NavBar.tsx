import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Theme,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import DarkMode from '../Nav/DarkMode/DarkMode';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { exit } from '../../features/authenticate/authenticate.slice';
import { toast } from 'react-toastify';
const DrawerStyled = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 70%;
  }
`;

const NavBar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const authReducer = useSelector((state: RootState) => state.authenticate);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };

  const handleCloseNavBar = () => {
    if (isMobile) onClose();
  };

  return (
    <DrawerStyled open={open} onClose={onClose} sx={{ width: '100%' }}>
      <List>
        {!authReducer.email ? (
          <>
            <ListItem>
              <Button
                startIcon={<AccountCircleIcon />}
                size={'small'}
                variant="contained"
                sx={{ flex: 1 }}
                onClick={() => navigate('/mobile/login')}
              >
                Đăng nhập
              </Button>
            </ListItem>
          </>
        ) : (
          <>
            <ListItemButton
              sx={{ gap: '10px' }}
              component={NavLink}
              to={'/users/info'}
              onClick={handleCloseNavBar}
            >
              <PersonIcon fontSize={'medium'} />{' '}
              <Typography variant={'h6'}>Thông tin cá nhân</Typography>
            </ListItemButton>
            <ListItemButton
              sx={{ gap: '10px' }}
              component={NavLink}
              to={'/users/save-news'}
              onClick={handleCloseNavBar}
            >
              <FavoriteIcon fontSize={'medium'} />
              <Typography variant="h6">Bài báo yêu thích</Typography>
            </ListItemButton>
            <ListItemButton
              sx={{ gap: '10px' }}
              component={NavLink}
              to={'/users/comment'}
              onClick={handleCloseNavBar}
            >
              <FeedbackIcon fontSize={'medium'} />
              <Typography variant="h6">Bình luận</Typography>
            </ListItemButton>
            <ListItemButton sx={{ gap: '10px' }} onClick={() => handleLogOut()}>
              <LogoutIcon fontSize={'medium'} />
              <Typography variant="h6">Đăng xuất</Typography>
            </ListItemButton>
          </>
        )}
        <ListItem sx={{ gap: '10px' }}>
          <Typography variant="h6">Nền</Typography>
          <DarkMode />
        </ListItem>
      </List>
    </DrawerStyled>
  );
};

export default NavBar;
