import { News } from '../../../types/news.type';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { unsave } from '../../../features/thenews/news.slice';
import { DeleteRounded } from '@mui/icons-material';
import { toast } from 'react-toastify';

export default function NewsItemSave({
  id,
  title,
  thumbnail,
  description,
  publishDate,
}: News) {
  const dispatch = useDispatch();

  const handleDeletedNews = (id?: string) => {
    if (id) {
      console.log(id);
      dispatch(unsave(id));
      toast.success('Đã xóa bài báo: ' + id);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card sx={{ maxWidth: '80%', display: 'flex' }}>
        <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
        <CardContent sx={{ display: 'block' }}>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <CardActions>
            <Button
              size="small"
              onClick={() => handleDeletedNews(id)}
              sx={{
                '&:hover .MuiSvgIcon-root': {
                  color: 'red', // Thay đổi màu khi hover
                },
              }}
            >
              <DeleteRounded sx={{ color: '#757575' }} />
            </Button>
            <Link
              to={`/detail/${id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button size="small">Xem chi tiết</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </motion.div>
  );
}
