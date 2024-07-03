import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { User } from '../../types/user.type';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Vui lòng nhập họ và tên')
    .matches(/^[^\d]*$/, 'Tên không được chứa số'),
});
interface FullNameFormInput {
  fullName: string;
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FullNameFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FullNameFormInput> = (
    data: FullNameFormInput,
  ) => {
    onUpdate('fullName', data.fullName);
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
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            p: 2,
            borderRadius: '10px',
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <TextField
            error={!!errors.fullName}
            label="Nhập họ và tên "
            variant="outlined"
            fullWidth={true}
            helperText={errors.fullName?.message}
            {...register('fullName')}
            defaultValue={fullName || ''}
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
}
export default FullName;
