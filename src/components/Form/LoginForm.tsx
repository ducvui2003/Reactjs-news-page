import React from 'react';
import { useDispatch } from 'react-redux';
import { save } from '../../features/authenticate/authenticate.slice';
import { User } from '../../types/user.type';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormControl, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { login } from '../../services/userServices';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Quy định các message đối với từng trường
const EMAIL_INVALID = 'Email không đúng định dạng ';
const REQUIRED = 'Vui lòng nhập không bỏ trống trường này ';

// Handle validator form
const schema = yup
  .object({
    email: yup.string().email(EMAIL_INVALID).required(REQUIRED),
    password: yup.string().required(REQUIRED),
  })
  .required();

function LoginForm() {
  const dispatch = useDispatch();
  // Quy định các rule đối với mỗi trường dữ liệu
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  // Gọi tới store để tiến hành đăng nhập
  const onSubmit = (data: User) => {
    if (!isValid) return;
    if (login(data)) {
      toast.success('Đăng nhập thành công');
      reset();
      dispatch(save(data));
    } else {
      toast.error('Đăng nhập thất bại, vui lòng thử lại');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl variant="standard" fullWidth>
          <TextField
            error={!!errors.email}
            label="Email"
            type="email"
            defaultValue=""
            placeholder="name@example.com"
            helperText={errors.email?.message}
            {...register('email')}
          />
        </FormControl>

        <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
          <TextField
            error={!!errors.password}
            type="password"
            label="Mật khẩu "
            defaultValue=""
            helperText={errors.password?.message}
            {...register('password')}
          />
        </FormControl>

        <Button size="small" type="submit" variant={'contained'} sx={{ mt: 3 }}>
          Đăng nhập
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
