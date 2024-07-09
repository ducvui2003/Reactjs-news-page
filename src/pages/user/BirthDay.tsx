import {
  Box,
  Button,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { vi } from 'date-fns/locale/vi';
import React, { useRef, useState } from 'react';
import { User } from '../../types/user.type';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// with date-fns v3.x
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

function BirthDay({
  birthDay,
  onUpdate,
}: {
  birthDay: string | undefined;
  onUpdate: <K extends keyof User>(key: K, value: User[K]) => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const [open, setOpen] = useState<boolean>(false);
  const dateRef = useRef<HTMLInputElement>(null);
  const updateBirthDay = () => {
    if (!dateRef.current) return;
    onUpdate('birthDay', dateRef.current.value);
    setOpen(false);
  };
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Typography gutterBottom={true}>Ngày sinh</Typography>
          <Typography color={theme.palette.grey[500]}>
            {birthDay || 'Chưa thiết lập'}
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
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          justifyContent={'space-between'}
          sx={{
            p: 2,
            borderRadius: '10px',
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={vi}>
            <DatePicker format="dd-MM-yyyy " inputRef={dateRef} />
          </LocalizationProvider>
          <Stack direction={'row'} mt={isMobile ? 2 : 0}>
            <Button
              variant={'contained'}
              size={'small'}
              onClick={updateBirthDay}
            >
              <Typography variant="subtitle1">Thay đổi</Typography>
            </Button>
            <Button
              variant={'outlined'}
              sx={{ ml: 2 }}
              size={'small'}
              onClick={() => setOpen(false)}
            >
              <Typography variant="subtitle1"> Đóng</Typography>
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default BirthDay;
