import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import details from '../data/newsDetail';
import CommentSection from '../components/Comment/CommentSection';
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
import { Image, NewsDetail, Paragraph } from '../types/news.type';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { toCategoryName } from '../services/categoryService';
import { de } from 'date-fns/locale';
function Detail() {
  const { id } = useParams<{ id: string }>();
  if (!id) return;

  const getLastNum = 'A' + id.substring(id.length - 1, id.length);

  const detail = details.find((item) => item.id == getLastNum);

  if (!detail) {
    return <p>Không tìm thấy thông tin chi tiết</p>;
  }

  // Xử lý cho việc view ảnh
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleShowImage = () => {
    setIsOpen(true);
  };
  const images = detail.paragraphs.map((para: Paragraph) => {
    if (typeof para.image != undefined) {
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
          <SideBarDetailLeft />
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
            <Typography variant={'subtitle1'}>{detail.publishDate}</Typography>
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
            <NewParagraph paragraph={para} showImage={handleShowImage} />
          ))}
        </Grid>
        <Grid item md={4}>
          <SideBarDetailRight category={detail.category} />
        </Grid>
      </Grid>
      <CommentSection />
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
