import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import details from '../data/newsDetail';
import Comment from '../components/Comment/Comment';
import {
  Box,
  Breadcrumbs,
  CardMedia,
  Container,
  Grid,
  Link,
} from '@mui/material';
import SideBarDetailLeft from '../components/SideBar/SideBarDetailLeft';
import SideBarDetailRight from '../components/SideBar/SideBarDetailRight';
import Typography from '@mui/material/Typography';
import { Image, News, Paragraph } from '../types/news.type';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { toCategoryName } from '../services/categoryService';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  if (!id) {
    navigate('/404');
    return null;
  }

  const getLastNum = 'A' + id.substring(id.length - 1, id.length);

  const detail = details.find((item) => item.id == getLastNum);

  if (!detail) {
    navigate('/404');
    return null;
  }

  // Xử lý cho việc view ảnh
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleShowImage = () => {
    setIsOpen(true);
  };

  const images = detail.paragraphs
    .filter((para: Paragraph) => para.image?.link)
    .map((para: Paragraph) => {
      return {
        src: para.image?.link,
        alt: para.image?.capture,
      };
    }
  });

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={1}>
          <SideBarDetailLeft id={getLastNum} />
        </Grid>
        <Grid item md={7}>
          <Stack
            sx={{ py: 3 }}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
              <Link component={NavLink} to={'/'} underline="hover">
                <Typography variant={'subtitle1'}> Trang chủ</Typography>
              </Link>
              <Link component={NavLink} to={'/'} underline="hover">
                <Typography variant={'subtitle1'}>
                  {toCategoryName(detail.category)}
                </Typography>
              </Link>
            </Breadcrumbs>
            <Typography variant={'subtitle1'}>
              {detail.publishDate.toString()}
            </Typography>
          </Stack>

          <Box sx={{ display: 'none' }}>
            <SlideshowLightbox
              images={images}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              fullScreen={true}
              showThumbnails={false}
              theme={'lightbox'}
              animateThumbnails={true}
            />
          </Box>
          <Typography gutterBottom component={'h1'} variant={'h2'}>
            {detail.title}
          </Typography>
          <Typography gutterBottom align={'right'} variant={'subtitle1'}>
            {`Tác giả ${detail.author}`}
          </Typography>
          {detail.paragraphs.map((para, index) => (
            <NewParagraph
              key={index}
              paragraph={para}
              showImage={handleShowImage}
            />
          ))}
        </Grid>
        <Grid item md={4}>
          <SideBarDetailRight category={detail.category} />
        </Grid>
      </Grid>
      <Comment newsId={getLastNum} />
    </Container>
  );
}

function NewsImage({
  image,
  showImage,
}: {
  image: Image | undefined;
  showImage: () => void;
}) {
  if (typeof image == 'undefined') return <div></div>;

  return (
    <Box>
      <CardMedia component={'img'} image={image.link} onClick={showImage} />
      <Typography
        variant={'body2'}
        gutterBottom
        paragraph={true}
        align={'center'}
      >
        {image.capture}
      </Typography>
    </Box>
  );
}

function NewParagraph({
  paragraph,
  showImage,
}: {
  paragraph: Paragraph;
  showImage: () => void;
}) {
  return (
    <>
      <Typography gutterBottom variant={'body1'} align={'justify'}>
        {paragraph.text}
      </Typography>
      <NewsImage
        key={Math.random()}
        image={paragraph.image}
        showImage={showImage}
      />
    </>
  );
}

export default Detail;
// function saveNews(news: News) {
//   throw new Error('Function not implemented.');
// }
