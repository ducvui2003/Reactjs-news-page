import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { User } from '../../types/user.type';
import { get, updateInfo } from '../../services/userServices';
import Password from './Password';
import FullName from './FullName';
import BirthDay from './BirthDay';
import Phone from './Phone';
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
      <Section>
        <FullName
          fullName={userInfo?.fullName}
          onUpdate={setUserInfoProperty}
        />
      </Section>
      <Section>
        <BirthDay
          birthDay={userInfo?.birthDay}
          onUpdate={setUserInfoProperty}
        />
      </Section>
      <Section>
        <Phone phone={userInfo?.phone} onUpdate={setUserInfoProperty} />
      </Section>
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

export default Info;
