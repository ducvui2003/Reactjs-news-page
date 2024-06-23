import Logo from './Logo';
import { Button } from '@mui/material';

function LogoScrollToTop() {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Button onClick={() => handleToTop()}>
      <Logo />
    </Button>
  );
}

export default LogoScrollToTop;
