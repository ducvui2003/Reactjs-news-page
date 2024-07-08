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
import { NavLink } from 'react-router-dom';

function CardVertical({ news, isLoading = true }: NewsLoading) {
  return (
    <Box
      component={news?.id ? NavLink : 'div'}
      to={news?.id ? `/detail/${news?.id}` : ''}
      sx={{ textDecoration: 'none', height: '100%' }}
    >
      <Card sx={{ height: '100%' }}>
        <CardActionArea
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ flex: 1, alignSelf: 'stretch' }}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
            ) : (
              <CardMedia
                component="img"
                height="100%"
                image={news?.thumbnail}
                alt={news?.thumbnail}
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
                {news?.title}
              </ClampedTypography>
            )}
            {isLoading ? (
              <Skeleton width="100%" />
            ) : (
              news?.publishDate && (
                <Typography gutterBottom variant="caption">
                  {timeAgo(news.publishDate)}
                </Typography>
              )
            )}

            {isLoading ? (
              <Skeleton width="100%" />
            ) : (
              <ClampedTypography
                lineClamp={3}
                variant="body2"
                color="text.secondary"
              >
                {news?.description}
              </ClampedTypography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CardVertical;
