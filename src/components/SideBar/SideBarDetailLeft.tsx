import React, { RefObject, useEffect, useState } from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  SpeedDialActionProps,
  Theme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { save, unsave } from '../../features/thenews/news.slice';
import { RootState } from '../../features/store';
import { User } from '../../types/user.type';
import { toast } from 'react-toastify';
import FloatButton from '../mobile/FloatButton';

interface SideBarDetailLeftProps {
  id: string;
  targetComment: RefObject<HTMLElement>;
}

const SideBarDetailLeft = ({ id, targetComment }: SideBarDetailLeftProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedNewsIds = useSelector((state: RootState) => state.news);
  const user: User = useSelector((state: RootState) => state.authenticate); // Lấy trạng thái đăng nhập
  const [isSaved, setIsSaved] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  useEffect(() => {
    setIsSaved(savedNewsIds.includes(id));
  }, [savedNewsIds, id]);

  const style = {
    position: 'sticky',
    left: 0,
    top: '50px',
    paddingTop: '50px',
  };

  const handleSaveNews = () => {
    if (!user.email) {
      toast.error('Bạn cần đăng nhập để lưu bài viết !');
      return;
    }
    const getLastNum = 'A' + id.substring(id.length - 1, id.length);
    if (isSaved) {
      dispatch(unsave(getLastNum));
    } else {
      dispatch(save(getLastNum));
    }
    setIsSaved(!isSaved);
  };

  const scrollToComment = () => {
    targetComment.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const actions: SpeedDialActionProps[] = [
    {
      icon: <ChatBubbleIcon sx={{ color: '#fff' }} />,
      tooltipTitle: 'Bình luận',
      onClick: () => {
        scrollToComment();
      },
    },
    {
      icon: (
        <BookmarkIcon
          sx={{
            backgroundColor: 'background.paper',
            color: savedNewsIds.includes(id) ? '#0d6efd' : '#fff',
          }}
        />
      ),
      tooltipTitle: 'Lưu bài viết',
      onClick: () => {
        handleSaveNews();
      },
    },
  ];
  if (isMobile) {
    return <FloatButton actions={actions} />;
  } else {
    return (
      <Grid item md={1}>
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
                  onClick={() => scrollToComment()}
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
                  sx={{
                    padding: '5px',
                    backgroundColor: 'background.paper',
                    color: savedNewsIds.includes(id) ? '#0d6efd' : '#757575',
                  }}
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
      </Grid>
    );
  }
};
export default SideBarDetailLeft;
