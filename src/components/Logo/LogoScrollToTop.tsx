import logo from '../../assets/image/logo.svg';
import ImageListItem from '@mui/material/ImageListItem';

function LogoScrollToTop() {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ImageListItem onClick={() => handleToTop()}>
      <img
        srcSet={logo}
        src={logo}
        alt="logo"
        className=" ms-1 p-2"
        style={{ height: '50px' }}
      />
    </ImageListItem>
  );
}

export default LogoScrollToTop;
