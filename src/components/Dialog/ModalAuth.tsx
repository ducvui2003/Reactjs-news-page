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
import { styled } from '@mui/system';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
// Define styled components
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPaper = styled(Box)(({ theme }) => ({
  width: 800,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2, 4, 3),
  zIndex: 1,
  borderRadius: 10,
}));
function ModalAuth({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const theme = useTheme();

  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledModal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <StyledPaper>
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
        </StyledPaper>
      </Fade>
    </StyledModal>
  );
}

export default ModalAuth;
