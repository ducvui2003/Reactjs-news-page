// Sử dụng để tạo các biến custom cho mui core
import {ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme} from '@mui/material/styles';
import {experimental_extendTheme as extendTheme} from '@mui/material/styles';
import typography from "./typography";
import buttonMUI from "./component/buttonMUI";
import dividerMUI from "./component/dividerMUI";
import {Container} from "@mui/material";

export interface ConfigMUI<T extends string> {
    defaultProps?: ComponentsProps[T];
    styleOverrides?: ComponentsOverrides<Theme>[T];
    variants?: ComponentsVariants<Theme>[T];
}

export const theme = extendTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1024,
            xl: 1440,
        },
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#0074d9",
                },
                background: {
                    default: '#fcfaf6',
                    paper: '#ffffff',
                },
            },
        }
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
        }
    },
});
// @ts-ignore
Container.defaultProps = {
    maxWidth: "xl", // Set the default maxWidth to "xl"
};