import { useDispatch, useSelector } from 'react-redux';
import { exit } from '../../features/authenticate/authenticate.slice';
import { toast } from 'react-toastify';
import PopoverUser from '../Popover/PopoverUser';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useLocation } from 'react-router-dom';
import { Bookmark } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RootState } from '../../features/store';
import { get } from '../../services/userServices';
function HeaderAfterLogin() {
  const authenticateReducer = useSelector(
    (state: RootState) => state.authenticate,
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };

  const user = get(authenticateReducer.email);
  if (!user) {
    return null;
  }
  return (
    <PopoverUser>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={`/users/info`}>
            <ListItemIcon>
              <AccountCircleIcon fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Thông tin cá nhân'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={'/users/save-news'}>
            <ListItemIcon>
              <Bookmark fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Báo đã lưu'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={'/users/comment '}>
            <ListItemIcon>
              <FeedbackIcon fontSize={'medium'} />
            </ListItemIcon>
            <ListItemText primary={'Bình luận'} />
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
