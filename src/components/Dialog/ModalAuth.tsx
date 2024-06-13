import { SyntheticEvent, useState } from 'react';
import { Box, Modal, Tab } from '@mui/material';
import RegisterForm from '../Form/RegisterForm';
import LoginForm from '../Form/LoginForm';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { makeStyles } from '@mui/styles';
import { DefaultTheme } from '@mui/material/styles';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const useStyles = makeStyles((theme: DefaultTheme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: 1,
    borderRadius: 10,
  },
}));
function ModalAuth({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const theme = useTheme();

  const classes = useStyles();
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={classes.modal}
    >
      <Fade in={isOpen}>
        <Box className={classes.paper}>
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab
                label="Đăng nhập"
                value="1"
                sx={{ fontSize: theme.typography.h6 }}
              />
              <Tab
                label="Đăng ký"
                value="2"
                sx={{ fontSize: theme.typography.h6 }}
              />
            </TabList>
            <TabPanel value="1">
              <LoginForm />
            </TabPanel>
            <TabPanel value="2">
              <RegisterForm />
            </TabPanel>
          </TabContext>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalAuth;
