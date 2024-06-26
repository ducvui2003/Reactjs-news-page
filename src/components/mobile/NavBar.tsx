import {
  Button,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import DarkMode from '../Nav/DarkMode/DarkMode';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import HeaderBeforeLogin from '../Header/HeaderBeforeLogin';
import HeaderAfterLogin from './HeaderAfterLogin';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

const DrawerStyled = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 50%;
  }
`;

const NavBar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const authReducer = useSelector((state: RootState) => state.authenticate);
  const navigate = useNavigate();
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
            <ListItem>
              <DarkMode />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </>
        )}
      </List>
    </DrawerStyled>
  );
};

export default NavBar;
