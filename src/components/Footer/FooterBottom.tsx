import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';

function FooterBottom() {
  return (
    <Grid container sx={{ marginBlock: '10px' }}>
      <Grid item xs={12} md>
        <Stack spacing={2}>
          <Typography variant={'subtitle1'} className="fw-bold">
            Báo tiếng Việt nhiều người xem nhất
          </Typography>
          <Typography variant={'subtitle1'}>
            Thuộc Bộ Khoa học và Công nghệ
          </Typography>
          <Typography variant={'subtitle1'}>
            Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md>
        <Stack spacing={2}>
          <Typography variant={'subtitle1'}>
            {' '}
            Tổng biên tập: Phạm Hiếu
          </Typography>
          <Typography variant={'subtitle1'}>
            Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng,
            Cầu Giấy, Hà Nội
          </Typography>
          <Typography variant={'subtitle1'}>
            Điện thoại: 024 7300 8899 - máy lẻ 4500
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md>
        <GoogleMap />
        <Typography variant={'caption'}>
          © 1997-2024. Toàn bộ bản quyền thuộc VnExpress
        </Typography>
      </Grid>
    </Grid>
  );
}

function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.144359064002!2d105.78612267613083!3d21.026909080622037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0bf969acc7%3A0x5c1dcc77c7244bfe!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gRlBUIC0gVHLhu6Ugc-G7nyBjaMOtbmg!5e0!3m2!1svi!2s!4v1718090550691!5m2!1svi!2s"
      width="100%"
      height="250"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default FooterBottom;
