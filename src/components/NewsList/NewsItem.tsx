import { Card, Col, Row } from 'react-bootstrap';
import { News } from '../../types/news.type';
import '../../assets/sass/utils.scss';
import Typography from '@mui/joy/Typography';
import React from 'react';
import { motion } from 'framer-motion';
import { timeAgo } from '../../utils/timeUtils';
import { Skeleton, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import newsDetail from '../../data/newsDetail';
import theme from '../../config/theme';

export default NewsItem;
interface NewsItemProps extends News {
  saveNews: (news: News) => void; // Prop để lưu bài báo
}

function NewsItem({ id, title, thumbnail, description, publishDate }: News) {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
                  {description || ''}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Link>
    </motion.div>
  );
}
