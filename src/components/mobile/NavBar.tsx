import { Button, Divider, Drawer, Link, List, ListItem } from '@mui/material';
import React from 'react';
import DarkMode from '../Nav/DarkMode/DarkMode';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import HeaderBeforeLogin from '../Header/HeaderBeforeLogin';

const NavBar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const authReducer = useSelector((state: RootState) => state.authenticate);
  return (
    <Drawer open={open} onClose={onClose} sx={{ width: '100%' }}>
      <List>
        <ListItem>
          {authReducer.email ? (
            <HeaderBeforeLogin />
          ) : (
            <Button
              color="primary"
              size="small"
              variant="contained"
              component={NavLink}
              to="/mobile/login"
            >
              Đăng nhập
            </Button>
          )}
        </ListItem>
        <ListItem>
          <Link component={NavLink} to={'/'}>
            Mới nhất
          </Link>
          <Divider />
        </ListItem>
        <ListItem>
          <DarkMode />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavBar;
