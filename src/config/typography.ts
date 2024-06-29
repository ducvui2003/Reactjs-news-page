import { TypographyOptions } from '@mui/material/styles/createTypography';
import '@fontsource/roboto';
import '@fontsource/merriweather';

const typography: TypographyOptions = {
  fontFamily: 'Roboto, Arial, sans-serif',
  // Set default font sizes for various variants
  fontSize: 16, // Default font size
  htmlFontSize: 10, //HTML font size
  h1: {
    fontSize: '3rem', // 40px
    fontWeight: 700, // Bold
    lineHeight: 1.2, // Ensure adequate line spacing
    fontFamily: 'Merriweather, serif',
  },
  h2: {
    fontSize: '2.5rem', // 32px
    fontWeight: 600, // Bold
    lineHeight: 1.3, // Ensure adequate line spacing
    fontFamily: 'Merriweather, serif',
  },
  h3: {
    fontSize: '2.25rem', // 28px
    fontWeight: 700, // Bold
    lineHeight: 1.4, // Ensure adequate line spacing
    fontFamily: 'Merriweather, serif',
  },
  h4: {
    fontSize: '1.5rem', // 24px
    fontWeight: 700, // Bold
    lineHeight: 1.5, // Ensure adequate line spacing
  },
  h5: {
    fontSize: '1.25rem', // 20px
    fontWeight: 700, // Bold
    lineHeight: 1.6, // Ensure adequate line spacing
  },
  h6: {
    fontSize: '1.125rem', // 18px
    fontWeight: 700, // Bold
    lineHeight: 1.7, // Ensure adequate line spacing
  },
  subtitle1: {
    fontSize: '1rem', // 16px
    lineHeight: 1.5, // Ensure adequate line spacing
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.6, // Ensure adequate line spacing
  },
  body1: {
    fontSize: '1.3rem', // 16px
    lineHeight: 1.5, // Ensure adequate line spacing
  },
  body2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.67, // Ensure adequate line spacing
  },
  caption: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.5, // Ensure adequate line spacing
  },
};
export default typography;
