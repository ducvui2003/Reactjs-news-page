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
import Stack from '@mui/material/Stack';
import { timeAgo } from '../../utils/timeUtils';
import ClampedTypography from '../Typography/ClampedTypography';
import { NavLink } from 'react-router-dom';

function CardHorizontal({ news, cssImage, isLoading = false }: NewsLoading) {
  return (
    <Box
      component={NavLink}
      to={isLoading ? `/detail/` : ''}
      sx={{ textDecoration: 'none' }}
    >
      <Card>
        <Stack direction="row" alignItems="stretch">
          <Box sx={{ flexBasis: '300px', ...cssImage }}>
            {isLoading ? (
              <Skeleton variant="rectangular" width="100%" height={118} />
            ) : (
              <CardMedia
                component="img"
                height="100%"
                image={news?.thumbnail}
                alt={news?.thumbnail}
              />
            )}
          </Box>
          <CardActionArea sx={{ flex: 1 }}>
            <CardContent>
              {isLoading ? (
                <Skeleton width="100%" />
              ) : (
                <ClampedTypography lineClamp={3} variant="h5" component="h3">
                  {news?.title}
                </ClampedTypography>
              )}
              {isLoading ? (
                <Skeleton width="100%" />
              ) : (
                <ClampedTypography lineClamp={3} variant="caption">
                  {timeAgo(news?.publishDate)}
                </ClampedTypography>
              )}
              {isLoading ? (
                <Skeleton width="100%" />
              ) : (
                <ClampedTypography lineClamp={3} variant="body2">
                  {news?.description}
                </ClampedTypography>
              )}
            </CardContent>
          </CardActionArea>
        </Stack>
      </Card>
    </Box>
  );
}

export default CardHorizontal;
