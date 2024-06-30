import React, { useRef, useState } from 'react';
import { Box, Divider, Link, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { User } from '../../types/user.type';
import { get, updateInfo } from '../../services/userServices';
import Password from './Password';
function Info() {
  const authenticateReducer: User = useSelector(
    (root: RootState) => root.authenticate,
  );
  const initialUserInfo = get(authenticateReducer.email);
  if (!initialUserInfo) return;
  const [userInfo, setUserInfo] = useState<User>(initialUserInfo);
  const setUserInfoProperty = <K extends keyof User>(
    key: K,
    value: User[K],
  ) => {
    setUserInfo((state) => {
      if (!state) return state;
      return { ...state, [key]: value };
    });
    updateInfo({ ...userInfo, [key]: value });
  };

  const theme = useTheme();
  return (
    <Box>
      <Typography variant={'h3'}>Thông tin tài khoản</Typography>
      <Section>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <Typography gutterBottom={true}>Email</Typography>
            <Typography color={theme.palette.grey[500]}>
              {userInfo?.email || 'Chưa thiết lập'}
            </Typography>
          </Box>
        </Stack>
      </Section>
      <Section>
        <Password
          password={userInfo?.password}
          onUpdate={setUserInfoProperty}
        />
      </Section>
      <FullName fullName={userInfo?.fullName} onUpdate={setUserInfoProperty} />
    </Box>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction={'column'} paddingY={'20px'}>
      {children}
      <Divider orientation={'horizontal'} sx={{ mt: 2 }} />
    </Stack>
  );
}
function FullName({
  fullName,
  onUpdate,
}: {
  fullName: string | undefined;
  onUpdate: <K extends keyof User>(key: K, value: User[K]) => void;
}) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const updateName = () => {
    if (ref.current) {
      onUpdate('fullName', ref.current.value);
      setOpen(false);
    }
  };
  return (
    <Section>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Typography gutterBottom={true}>Họ và tên</Typography>
          <Typography color={theme.palette.grey[500]}>
            {fullName || 'Chưa thiết lập'}
          </Typography>
        </Box>
        <Link
          underline="hover"
          variant={'h6'}
          onClick={() => setOpen((open) => !open)}
        >
          {open ? 'Đóng' : ' Chỉnh sửa'}
        </Link>
      </Stack>
      {open && (
        <Box
          sx={{
            p: 2,
            borderRadius: '10px',
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <TextField
            inputRef={ref}
            label="Nhập họ và tên "
            variant="outlined"
            fullWidth={true}
          />
          <Button
            variant={'contained'}
            sx={{ mt: 2 }}
            size={'small'}
            onClick={updateName}
          >
            <Typography variant="subtitle1">Thay đổi</Typography>
          </Button>
          <Button
            variant={'outlined'}
            sx={{ mt: 2, ml: 2 }}
            size={'small'}
            onClick={() => setOpen(false)}
          >
            <Typography variant="subtitle1"> Đóng</Typography>
          </Button>
        </Box>
      )}
    </Section>
  );
}

export default Info;
