import React from 'react';
import { useDispatch } from 'react-redux';
import { save } from '../../features/authenticate/authenticate.slice';
import { UserLogin } from '../../types/user.type';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormControl, TextField, Theme, useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import { login } from '../../services/userServices';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

// Quy định các message đối với từng trường
const EMAIL_INVALID = 'Email không đúng định dạng ';
const REQUIRED = 'Vui lòng nhập không bỏ trống trường này ';

interface FormInputs {
  email: string;
  password: string;
}

// Handle validator form
const schema = yup
  .object({
    email: yup.string().email(EMAIL_INVALID).required(REQUIRED),
    password: yup.string().required(REQUIRED),
  })
  .required();

function LoginForm() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const dispatch = useDispatch();
  // Quy định các rule đối với mỗi trường dữ liệu
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  // Gọi tới store để tiến hành đăng nhập
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (!isValid) return;
    const user: UserLogin = {
      ...data,
    };
    const userExist = login(user);
    if (userExist) {
      toast.success('Đăng nhập thành công');
      reset();
      dispatch(save(userExist));
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
        {isMobile && (
          <Button
            component={NavLink}
            to={'/mobile/register'}
            size="small"
            sx={{ mt: 3 }}
          >
            <Typography variant={'body2'}>Đăng ký</Typography>
          </Button>
        )}
      </Stack>
    </form>
  );
}

export default LoginForm;
