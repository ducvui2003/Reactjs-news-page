import {
  Box,
  Button,
  Input,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../types/user.type';

const PASSWORD_CONFIRM_TEXT =
  'Mật khẩu nhập lại không trùng với mật khẩu đã nhập ';
const PASSWORD_MIN_LENGTH = {
  length: 8,
  message: 'Mật khẩu cần có tối thiểu 8 kí tự ',
};
const PASSWORD_1_UPPER = 'Mật khẩu cần có tối thiểu 1 ký tự hoa ';
const PASSWORD_1_LOWER = 'Mật khẩu cần có tối thiểu 1 ký tự thường';
const PASSWORD_1_SPECIAL =
  'Mật khẩu cần có tối thiểu 1 ký tự đặc biệt như !, @, ...';
const PASSWORD_1_DIGIT = 'Mật khẩu cần có tối thiểu 1 ký tự số';
const REQUIRED = 'Vui lòng nhập không bỏ trống trường này ';

const schema = yup
  .object({
    oldPassword: yup.string().required(REQUIRED),
    newPassword: yup
      .string()
      .min(PASSWORD_MIN_LENGTH.length, PASSWORD_MIN_LENGTH.message)
      .matches(/[a-z]/, PASSWORD_1_LOWER)
      .matches(/[A-Z]/, PASSWORD_1_UPPER)
      .matches(/[0-9]/, PASSWORD_1_DIGIT)
      .matches(/[!@#$%^&*(),.?":{}|<>]/, PASSWORD_1_SPECIAL)
      .required(REQUIRED),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], PASSWORD_CONFIRM_TEXT)
      .required(REQUIRED),
  })
  .required();

interface ChangePasswordFormInput {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function Password({
  password,
  onUpdate,
}: {
  password: string | undefined;
  onUpdate: <K extends keyof User>(key: K, value: User[K]) => void;
}) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ChangePasswordFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ChangePasswordFormInput> = (
    data: ChangePasswordFormInput,
  ) => {
    if (data.oldPassword != password) {
      setError('oldPassword', {
        type: 'manual',
        message: 'Mật khẩu cũ không trùng khớp, vui lòng kiểm tra lại',
      });
      return;
    }
    onUpdate('password', data.newPassword);
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
          <Typography gutterBottom={true}>Mật khẩu</Typography>
          <Input
            type={'password'}
            value={'123123213213213'}
            disableUnderline={true}
            disabled={true}
          />
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              p: 2,
              borderRadius: '10px',
              backgroundColor: theme.palette.grey[100],
            }}
          >
            <TextField
              error={!!errors.oldPassword}
              sx={{ mb: 2 }}
              label="Nhập mật khẩu hiện tại "
              variant="outlined"
              fullWidth={true}
              helperText={errors.oldPassword?.message}
              {...register('oldPassword')}
            />
            <TextField
              error={!!errors.newPassword}
              sx={{ mb: 2 }}
              label="Nhập mật khẩu mới  "
              variant="outlined"
              fullWidth={true}
              helperText={errors.newPassword?.message}
              {...register('newPassword')}
            />
            <TextField
              error={!!errors.confirmPassword}
              label="Nhập lại mật khẩu mới  "
              variant="outlined"
              fullWidth={true}
              helperText={errors.confirmPassword?.message}
              {...register('confirmPassword')}
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
        </form>
      )}
    </>
  );
}

export default Password;
