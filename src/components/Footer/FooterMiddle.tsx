import { Divider, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import NavLinkMUILink from '../Link/NavLinkMUILink';
import LogoScrollToTop from '../Logo/LogoScrollToTop';

function FooterMiddle() {
  return (
    <Stack direction={'row'} alignItems={'center'} sx={{ marginBlock: '10px' }}>
      <NavLink to={'/'}>
        <LogoScrollToTop />
      </NavLink>
      <FooterLegacy />
    </Stack>
  );
}

const content = ['Điều khoản', 'Chính sách bảo mật', 'RSS'];

function FooterLegacy() {
  return (
    <Stack
      direction={'row'}
      className="ms-auto"
      alignItems={'center'}
      divider={<Divider orientation="vertical" variant="middle" flexItem />}
      spacing={2}
    >
      {content.map((item, index) => {
        return (
          <NavLinkMUILink
            to={`/`}
            variant={'h6'}
            underline={'none'}
            color={'black'}
          >
            {item}
          </NavLinkMUILink>
        );
      })}
    </Stack>
  );
}

export default FooterMiddle;
