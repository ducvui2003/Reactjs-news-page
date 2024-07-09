import { Bounce, ToastContainer, ToastContainerProps } from 'react-toastify';
import { Theme, useMediaQuery, useTheme } from '@mui/material';
// Cấu hình react-toastify
import 'react-toastify/dist/ReactToastify.min.css';

export const reactToastifyConfig: ToastContainerProps = {};

export function CustomToastContainer() {
    const theme = useTheme();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    return <ToastContainer stacked
                           position={isMobile ? 'top-center' : 'bottom-right'}
                           autoClose={3000}
                           hideProgressBar={false}
                           closeOnClick
                           draggable
                           transition={Bounce}
                           theme={theme.palette.mode} // 'light' or 'dark'
    />;
}