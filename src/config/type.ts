import { PaletteOptions } from '@mui/material';

export interface ConfigMUI<T extends string> {
  defaultProps?: ComponentsProps[T];
  styleOverrides?: ComponentsOverrides<Theme>[T];
  variants?: ComponentsVariants<Theme>[T];
}

export type CustomPalette = PaletteOptions & {
  mode: 'light' | 'dark';
  // Add more specific color options if needed
};
