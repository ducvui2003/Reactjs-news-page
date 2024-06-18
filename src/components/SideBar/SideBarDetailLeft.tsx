import React from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Tooltip,
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import { News, NewsDetail } from '../../types/news.type';

interface SideBarDetailLeftProps {
  saveNews: (news: News) => void;
  detail?: NewsDetail;
}
const SideBarDetailLeft = ({ saveNews, detail }: SideBarDetailLeftProps) => {
  const navigate = useNavigate();
  const style = {
    position: 'sticky',
    left: 0,
    top: '50px',
    paddingTop: '10px',
  };

  const handleSaveNews = () => {
    // console.log('Đã lưu bài viết');
    saveNews(detail);
    console.log(detail);
  };

  return (
    <Box sx={style}>
      <List
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          overflowX: { xs: 'auto', md: 'visible' },
        }}
      >
        <ListItem
          sx={{
            flex: { xs: '0 0 auto', md: '1 0 auto' },
            width: { xs: 'auto', md: '100%' },
          }}
        >
          <Tooltip
            title={
              <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
                Bình luận
              </Typography>
            }
            arrow
            TransitionComponent={Zoom}
          >
            <IconButton
              sx={{ padding: '5px', backgroundColor: 'background.paper' }}
            >
              <ChatBubbleIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip
            title={
              <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
                Lưu bài viết
              </Typography>
            }
            arrow
          >
            <IconButton
              onClick={() => handleSaveNews()}
              sx={{ padding: '5px', backgroundColor: 'background.paper' }}
            >
              <BookmarkIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip
            title={
              <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
                Trở lại trang chủ
              </Typography>
            }
            arrow
          >
            <IconButton
              sx={{ padding: '5px', backgroundColor: 'background.paper' }}
              onClick={() => navigate('/')}
            >
              <ArrowBackIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBarDetailLeft;
