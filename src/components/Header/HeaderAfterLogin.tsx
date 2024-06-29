import { useDispatch, useSelector } from 'react-redux';
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
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Bookmark } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RootState } from '../../features/store';
import { getUser } from '../../services/sessionStorageService';
import { get } from '../../services/userServices';
function HeaderAfterLogin() {
  const authenticateReducer = useSelector(
    (state: RootState) => state.authenticate,
  );
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };
  const user = get(authenticateReducer.email);
  console.log('user:', user);
  if (!user) {
    return <Navigate to={'/404'} />;
  }
  return (
    <PopoverUser>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={`/users/${user.id}/info`}>
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
