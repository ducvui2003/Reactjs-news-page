import { Divider, Link, Stack, Theme, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LogoScrollToTop from '../Logo/LogoScrollToTop';

function FooterMiddle() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems={'center'}
      justifyContent={isMobile ? 'center' : 'space-between'}
      sx={{ marginBlock: '10px' }}
    >
      <LogoScrollToTop />
      <FooterLegacy />
    </Stack>
  );
}

const content = ['Điều khoản', 'Chính sách bảo mật', 'RSS'];

function FooterLegacy() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems={'center'}
      divider={<Divider orientation="vertical" variant="middle" flexItem />}
      spacing={2}
    >
      {content.map((item, index) => {
        return (
          <Link
            key={index}
            component={NavLink}
            to={`/`}
            variant={'h6'}
            underline={'none'}
          >
            {item}
          </Link>
        );
      })}
    </Stack>
  );
}

export default FooterMiddle;
