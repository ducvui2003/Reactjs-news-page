import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { exit } from '../../features/authenticate/authenticate.slice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderAfterLogin = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <FavoriteIcon fontSize={'medium'} />
          <Typography variant="h6">Bài báo yêu thích</Typography>
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
        <ListItemButton onClick={() => handleLogOut()}>
          <ListItemIcon>
            <LogoutIcon fontSize={'medium'} />
          </ListItemIcon>
          <ListItemText primary={'Đăng xuất'} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default HeaderAfterLogin;
