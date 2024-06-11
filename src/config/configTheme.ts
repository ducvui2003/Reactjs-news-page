// Sử dụng để tạo các biến custom cho mui core
import {ComponentsOverrides, ComponentsProps, ComponentsVariants, createTheme, Theme} from '@mui/material/styles';
import {Container} from "@mui/material";

import typographyMUI from "./typographyMUI";
import buttonMUI from "./component/buttonMUI";
import dividerMUI from "./component/dividerMUI";

export interface ConfigMUI<T extends string> {
    defaultProps?: ComponentsProps[T];
    styleOverrides?: ComponentsOverrides<Theme>[T];
    variants?: ComponentsVariants<Theme>[T];
}

export const theme: Theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1024,
            xl: 1440,
        },
    },
    palette: {
        primary: {
            main: "#0074d9"
        },
        background: {
            default: '#fcfaf6',
            paper: '#ffffff',
        },
    },
    typography: typographyMUI,
    components: {
        MuiButton: buttonMUI,
        MuiDivider: dividerMUI,
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.5rem', // Set the font size for icons
                },
            },
        }
    },
});
// @ts-ignore
Container.defaultProps = {
    maxWidth: "xl", // Set the default maxWidth to "xl"
};