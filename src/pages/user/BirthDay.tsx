import { Box, Button, Link, Stack, Typography, useTheme } from '@mui/material';
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
          direction={'row'}
          alignItems={'center'}
          sx={{
            p: 2,
            borderRadius: '10px',
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={vi}>
            <DatePicker format="dd-MM-yyyy" inputRef={dateRef} />
          </LocalizationProvider>
          <Button
            variant={'contained'}
            sx={{ ml: 'auto' }}
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
      )}
    </>
  );
}
export default BirthDay;
