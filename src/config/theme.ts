// Sử dụng để tạo các biến custom cho mui core
import typography from './typography';
import buttonMUI from './component/buttonMUI';
import dividerMUI from './component/dividerMUI';
import { Container } from '@mui/material';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
export const sameConfig = {};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: '#000',
          secondary: '#555555',
        },
        background: {
          default: '#fff',
          paper: '#fff',
        },
      },
    },
    dark: {
      palette: {
        text: {
          primary: '#fff',
        },
        background: {
          default: '#333',
        },
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },

  typography: typography,
  components: {
    MuiButton: buttonMUI,
    MuiDivider: dividerMUI,
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem', // Set the font size for icons
        },
      },
    },
  },
});

// @ts-ignore
Container.defaultProps = {
  maxWidth: 'xl', // Set the default maxWidth to "xl"
};

export default theme;
