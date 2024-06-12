import React from 'react';
import { NewsLoading } from '../../types/news.type';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { timeAgo } from '../../utils/timeUtils';
import ClampedTypography from '../Typography/ClampedTypography';

function CardVertical({ news, cssImage, isLoading = true }: NewsLoading) {
  return (
    <Box sx={{ height: '100%' }}>
      <Card sx={{ height: '100%' }}>
        <CardActionArea
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ flexBasic: '140', ...cssImage }}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={210} height={118} />
            ) : (
              <CardMedia
                component="img"
                height="100%"
                image={news.thumbnail}
                alt={news.title}
              />
            )}
          </Box>

          <CardContent sx={{ width: '100%' }}>
            {isLoading ? (
              <Skeleton width="100%" />
            ) : (
              <ClampedTypography
                lineClamp={2}
                gutterBottom
                variant="h5"
                component="div"
              >
                {news.title}
              </ClampedTypography>
            )}
            {isLoading ? (
              <Skeleton width="100%" />
            ) : (
              <Typography gutterBottom variant="caption">
                {timeAgo(news.publishDate)}
              </Typography>
            )}
            {isLoading ? (
              <Skeleton width="100%" />
            ) : (
              <Typography variant="body2" color="text.secondary">
                {news.description}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CardVertical;
