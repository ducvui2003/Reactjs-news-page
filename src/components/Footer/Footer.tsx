import { Container, Divider, useMediaQuery, Theme } from '@mui/material';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import FooterMiddle from './FooterMiddle';

function Footer() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <Container>
      {!isMobile && (
        <>
          <Divider orientation={'horizontal'} />
          <FooterTop />
        </>
      )}

      <Divider sx={{ height: 1.5, backgroundColor: 'black', opacity: 0.2 }} />
      <FooterMiddle />
      <Divider sx={{ height: 1.5, backgroundColor: 'black', opacity: 0.2 }} />
      <FooterBottom />
    </Container>
  );
}

export default Footer;
