import React, { useEffect, useState } from 'react';
import ModalAuth from '../Dialog/ModalAuth';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { exit } from '../../features/authenticate/authenticate.slice';
import { toast } from 'react-toastify';
import PopoverUser from '../Popover/PopoverUser';
import {
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function HeaderAfterLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };
  return (
    <PopoverUser>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Bài báo yêu thích'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FeedbackIcon fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Góp ý'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/users/savenews')}>
            <ListItemIcon>
              <Icon fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Báo đã lưu'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleLogOut()}>
            <ListItemIcon>
              <LogoutIcon fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Đăng xuất'} />
          </ListItemButton>
        </ListItem>
      </List>
    </PopoverUser>
  );
}

export default HeaderAfterLogin;
