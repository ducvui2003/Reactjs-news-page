import React from 'react';
import { Image } from 'react-bootstrap';
import image from '../../assets/image/404.png';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Page404 = () => {
  return (
    <Box>
      <Typography>404</Typography>
      <div className="bg-body-tertiary osition-relative">
        <div className="position-absolute top-50 start-50 translate-middle w-75 h-75">
          <Image src={image} className="w-100 mh-100" />
        </div>
      </div>
    </Box>
  );
};

export default Page404;
