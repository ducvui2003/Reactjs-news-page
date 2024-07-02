import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { User } from '../../types/user.type';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  phone: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .min(10, 'Vui lòng nhập đúng số điện thoại')
    .max(10, 'Vui lòng nhập đúng số điện thoại')
    .matches(/^\d+$/, 'Chỉ được nhập số'),
});
interface PhoneFormInput {
  phone: string;
}

const Phone = ({
  phone,
  onUpdate,
}: {
  phone: string | undefined;
  onUpdate: <K extends keyof User>(key: K, value: User[K]) => void;
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PhoneFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<PhoneFormInput> = (data: PhoneFormInput) => {
    onUpdate('phone', data.phone);
    setOpen(false);
    reset();
  };
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Typography gutterBottom={true}>Số điện thoại</Typography>
          <Typography color={theme.palette.grey[500]}>
            {phone || 'Chưa thiết lập'}
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
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            p: 2,
            borderRadius: '10px',
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <TextField
            error={!!errors.phone}
            label="Nhập số điện thoại"
            variant="outlined"
            fullWidth={true}
            helperText={errors.phone?.message}
            {...register('phone')}
            defaultValue={phone || ''}
          />
          <Button
            type="submit"
            variant={'contained'}
            sx={{ mt: 2 }}
            size={'small'}
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
    </>
  );
};

export default Phone;
