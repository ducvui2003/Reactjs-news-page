import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const styleText = {
    fontSize: '12rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#262626',
    pl: ' 6px',
    letterSpacing: '-40px',
    textShadow: '-8px 0 0 #fff',
    lineHeight: 1,
  };

  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'100vh'}
    >
      <Typography variant={'h3'}>Oops! Page not found</Typography>
      <Box sx={{ ml: '-65px' }}>
        <Typography sx={{ ...styleText }} component={'span'}>
          4
        </Typography>
        <Typography sx={{ ...styleText }} component={'span'}>
          0
        </Typography>
        <Typography sx={{ ...styleText }} component={'span'}>
          4
        </Typography>
      </Box>
      <Typography variant={'h5'}>
        Chúng tôi xin lỗi, nhưng này trang này hiện tại không tồn tại hoặc đã bị
        xóa!
      </Typography>
      <Button
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
        variant={'contained'}
      >
        Quay trở lại trang chủ
      </Button>
    </Stack>
  );
};
export default Page404;
