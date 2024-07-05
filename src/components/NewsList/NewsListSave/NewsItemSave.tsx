import { News } from '../../../types/news.type';
import React from 'react';
import { motion } from 'framer-motion';
import { Button, Skeleton, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { unsave } from '../../../features/thenews/news.slice';
import { DeleteRounded } from '@mui/icons-material';
import { toast } from 'react-toastify';
import theme from '../../../config/theme';
import { Card, Col, Row } from 'react-bootstrap';
import { timeAgo } from '../../../utils/timeUtils';
import { DeleteRounded } from '@mui/icons-material';

export default function NewsItemSave({
  id,
  title,
  thumbnail,
  description,
  publishDate,
}: News) {
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleDeletedNews = (id?: string) => {
    if (id) {
      console.log(id);
      dispatch(unsave(id));
      toast.success('Đã xóa bài báo: ' + id);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        to={`/detail/${id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card key={id} className="borer-0 border p-3 mb-5 bg-body h-100 shadow">
          <Row noGutters>
            <Col md={4}>
              {thumbnail ? (
                <Card.Img
                  className="object-fit-cover "
                  style={{ height: '200px' }}
                  src={thumbnail}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="h1">
                  <Typography
                    level="h3"
                    style={{
                      fontSize: isSmallScreen ? '20px' : '24px',
                      lineHeight: 1.2,
                    }}
                  >
                    {title || ''}
                  </Typography>
                </Card.Title>
                {timeAgo(publishDate)}
                <Card.Text className={'line-clamp'}>
                  {/* {description || ''} */}
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
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Link>
    </motion.div>
    // <motion.div whileHover={{ scale: 1.05 }}>
    //   <Card sx={{ maxWidth: '80%', display: 'flex' }}>
    //     <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
    //     <CardContent sx={{ display: 'block' }}>
    //       <Typography gutterBottom variant="h4" component="div">
    //         {title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {description}
    //       </Typography>
    //       <CardActions>
    //         <Button
    //           size="small"
    //           onClick={() => handleDeletedNews(id)}
    //           sx={{
    //             '&:hover .MuiSvgIcon-root': {
    //               color: 'red', // Thay đổi màu khi hover
    //             },
    //           }}
    //         >
    //           <DeleteRounded sx={{ color: '#757575' }} />
    //         </Button>
    //         <Link
    //           to={`/detail/${id}`}
    //           style={{ textDecoration: 'none', color: 'inherit' }}
    //         >
    //           <Button size="small">Xem chi tiết</Button>
    //         </Link>
    //       </CardActions>
    //     </CardContent>
    //   </Card>
    // </motion.div>
  );
}
