import React from "react";
import {useDispatch} from "react-redux";
import {login} from "../../features/authenticate/authenticate.slice";
import {User} from "../../features/types/user.type";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {FormControl, TextField} from "@mui/material";
import {Button, Form, Stack} from "react-bootstrap";

// Quy định các message đối với từng trường
const EMAIL_INVALID = "Email không đúng định dạng ";
const REQUIRED = "Vui lòng nhập không bỏ trống trường này "

// Handle validator form
const schema = yup
    .object({
        email: yup.string().email(EMAIL_INVALID).required(REQUIRED),
        password: yup.string().required(REQUIRED),

    })
    .required()

function LoginForm() {
    // Quy định các rule đối với mỗi trường dữ liệu
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    // Gọi tới store để tiến hành đăng nhập
    const onSubmit = (data: User) => {
        if (isValid)
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

                <Button type="submit" variant="primary" className={"mt-3"}>
                    Đăng nhập
                </Button>
                <a className="mt-3 w-100 center-text">Lấy lại mật khẩu</a>
            </Stack>
        </Form>
    );
}

export default LoginForm;
