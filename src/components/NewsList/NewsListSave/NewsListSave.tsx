import {
  Container,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { getNewsById } from '../../../services/newsService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import NewsItemSave from './NewsItemSave';
import { exit } from '../../../features/authenticate/authenticate.slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { Bookmark } from '@mui/icons-material';

const NewsListSave: React.FC = () => {
  const listIdNewsSave = useSelector((state: RootState) => state.news);
  const listNews = listIdNewsSave.map((id) => getNewsById(id));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(exit());
    toast.success('Đăng xuất thành công');
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
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
                  <Bookmark fontSize={'medium'} />
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
        </Grid>

        <Grid xs={12} sm={8} item>
          {listNews.map((news) => (
            <NewsItemSave
              id={news?.id}
              title={news?.title}
              thumbnail={news?.thumbnail}
              publishDate={news?.publishDate}
              description={''}
              link={undefined}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsListSave;
