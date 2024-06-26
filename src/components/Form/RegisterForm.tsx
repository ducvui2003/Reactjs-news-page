import React from 'react';
import { User } from '../../types/user.type';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormControl, TextField, Theme, useMediaQuery } from '@mui/material';
import { register as registerServices } from '../../services/userServices';
import { toast } from 'react-toastify';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
// Quy định các message đối với từng trường
const PASSWORD_CONFIRM_TEXT =
  'Mật khẩu nhập lại không trùng với mật khẩu đã nhập ';
const EMAIL_INVALID = 'Email không đúng định dạng ';
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

// Handle validator form
const schema = yup
  .object({
    email: yup.string().email(EMAIL_INVALID).required(REQUIRED),
    password: yup
      .string()
      .min(PASSWORD_MIN_LENGTH.length, PASSWORD_MIN_LENGTH.message)
      .matches(/[a-z]/, PASSWORD_1_LOWER)
      .matches(/[A-Z]/, PASSWORD_1_UPPER)
      .matches(/[0-9]/, PASSWORD_1_DIGIT)
      .matches(/[!@#$%^&*(),.?":{}|<>]/, PASSWORD_1_SPECIAL)
      .required(REQUIRED),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], PASSWORD_CONFIRM_TEXT)
      .required(REQUIRED),
  })
  .required();

function RegisterForm() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const navigate = useNavigate();
  // Quy định các rule đối với mỗi trường dữ liệu
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: User) => {
    const registerSuccess = registerServices(data);
    if (registerSuccess) {
      toast.success('Đăng ký thành công, vui lòng tiến hành đăng nhập');
      reset();
      isMobile && navigate('/mobile/login');
    } else {
      toast.error('Đăng ký thất bại, vui lòng thử lại');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextField
          error={!!errors.email}
          label="Email"
          type="email"
          defaultValue=""
          placeholder="name@example.com"
          helperText={errors.email?.message}
          {...register('email')}
        />

        <TextField
          error={!!errors.password}
          type="password"
          label="Mật khẩu "
          defaultValue=""
          helperText={errors.password?.message}
          {...register('password')}
          sx={{ mt: 3 }}
        />

        <TextField
          error={!!errors.confirmPassword}
          type="password"
          label="Nhập lại mật khẩu "
          defaultValue=""
          helperText={errors.password?.message}
          {...register('confirmPassword')}
          sx={{ mt: 3 }}
        />

        <Button size="small" type="submit" sx={{ mt: 3 }} variant={'contained'}>
          Đăng ký
        </Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;
