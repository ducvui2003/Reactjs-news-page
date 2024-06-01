import React, {SyntheticEvent, useState} from "react";
import {
    Button,
    Form,
    Stack,
} from "react-bootstrap";
import {User} from "../../types/user.type";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {FormControl, TextField} from "@mui/material";
import Toast from "../Toast/Toast";
import CheckIcon from "@mui/icons-material/Check";
import {register as registerServices} from "../../services/userServices"

// Quy định các message đối với từng trường
const PASSWORD_CONFIRM_TEXT = "Mật khẩu nhập lại không trùng với mật khẩu đã nhập "
const EMAIL_INVALID = "Email không đúng định dạng ";
const PASSWORD_MIN_LENGTH = {
    length: 8,
    message: "Mật khẩu cần có tối thiểu 8 kí tự ",
};
const PASSWORD_1_UPPER = "Mật khẩu cần có tối thiểu 1 ký tự hoa ";
const PASSWORD_1_LOWER = "Mật khẩu cần có tối thiểu 1 ký tự thường";
const PASSWORD_1_SPECIAL = "Mật khẩu cần có tối thiểu 1 ký tự đặc biệt như !, @, ...";
const PASSWORD_1_DIGIT = "Mật khẩu cần có tối thiểu 1 ký tự số"
const REQUIRED = "Vui lòng nhập không bỏ trống trường này "

// Handle validator form
const schema = yup
    .object({
        email: yup.string().email(EMAIL_INVALID).required(REQUIRED),
        password: yup.string()
            .min(PASSWORD_MIN_LENGTH.length, PASSWORD_MIN_LENGTH.message)
            .matches(/[a-z]/, PASSWORD_1_LOWER)
            .matches(/[A-Z]/, PASSWORD_1_UPPER)
            .matches(/[0-9]/, PASSWORD_1_DIGIT)
            .matches(/[!@#$%^&*(),.?":{}|<>]/, PASSWORD_1_SPECIAL).required(REQUIRED),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], PASSWORD_CONFIRM_TEXT)
            .required(REQUIRED)
    })
    .required()

function RegisterForm() {
    // Quy định các rule đối với mỗi trường dữ liệu
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });
    // State bật tắt toast thông báo đăng nhập
    const [open, setOpen] = useState<boolean>(false);
    const [toast, setToast] = useState<{
        message: string,
        variant: string,
    }>({})
    const onSubmit = (data: User) => {
        const registerSuccess = registerServices(data);
        if (registerSuccess) {
            setToast({message: "Đăng ký thành công", variant: "success"});
            reset();
        } else
            setToast({message: "Đăng ký thất bại", variant: "warning"})
        setOpen(true);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl variant="standard" fullWidth className={"mt-3"}>
                    <TextField
                        error={!!errors.email}
                        label="Email"
                        type="email"
                        defaultValue=""
                        placeholder="name@example.com"
                        helperText={errors.email?.message}
                        {...register("email")}
                    />
                </FormControl>

                <FormControl variant="standard" fullWidth className={"mt-3"}>
                    <TextField
                        error={!!errors.password}
                        type="password"
                        label="Mật khẩu "
                        defaultValue=""
                        helperText={errors.password?.message}
                        {...register("password")}
                    />
                </FormControl>

                <FormControl variant="standard" fullWidth className={"mt-3"}>
                    <TextField
                        error={!!errors.confirmPassword}
                        type="password"
                        label="Nhập lại mật khẩu "
                        defaultValue=""
                        helperText={errors.password?.message}
                        {...register("confirmPassword")}
                    />
                </FormControl>

                <Button type="submit" variant="primary" className={"mt-3"}>
                    Đăng ký
                </Button>
            </Stack>
            <Toast message={toast?.message} color={toast?.variant} icon={<CheckIcon/>} open={open} setOpen={setOpen}/>
        </Form>
    );
}

export default RegisterForm;
