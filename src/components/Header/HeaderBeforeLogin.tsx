import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import Button from '@mui/material/Button';
import ModalAuth from '../Dialog/ModalAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderBeforeLogin() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        size={'small'}
        sx={{ ml: 1 }}
        onClick={() => setOpen(true)}
        startIcon={<AccountCircleIcon />}
      >
        Đăng nhập{' '}
      </Button>
      <ModalAuth isOpen={open} onClose={handleClose} />
    </>
  );
}

export default HeaderBeforeLogin;
