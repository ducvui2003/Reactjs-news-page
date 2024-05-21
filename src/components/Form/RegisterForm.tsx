import React, {SyntheticEvent} from "react";
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row, Stack,
} from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {useDispatch} from "react-redux";
import {login} from "../../features/authenticate/authenticate.slice";
import {User} from "../../features/types/user.type";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {finished} from "node:stream";
import {FormControl, TextField} from "@mui/material";

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
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const onSubmit = (data: User) => {
        dispatch(login(data))
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
            {/*<p>Nếu đã có tài khoản thì tiến thành <span onClick={onTab(null, "1")}>đăng nhập </span></p>*/}
        </Form>
    );
}

export default RegisterForm;
