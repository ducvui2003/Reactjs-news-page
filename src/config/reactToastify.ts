import { Bounce, ToastContainerProps } from 'react-toastify';

export const reactToastifyConfig: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  theme: 'light',
  transition: Bounce,
};
