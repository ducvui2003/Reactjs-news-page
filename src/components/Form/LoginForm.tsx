import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/authenticate/authenticate.slice";
import {User} from "../../types/user.type";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {FormControl, TextField} from "@mui/material";
import {Button, Form, Stack} from "react-bootstrap";
import Toast from "../Toast/Toast";
import CheckIcon from "@mui/icons-material/Check";
import {RootState} from "../../features/store";

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
    const authReducer = useSelector((state: RootState) => state.authenticate);
    const dispatch = useDispatch();
    // Quy định các rule đối với mỗi trường dữ liệu
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });
    const [open, setOpen] = useState<boolean>(false);
    const [toast, setToast] = useState<{
        message: string,
        variant: string,
    }>({})

    // Gọi tới store để tiến hành đăng nhập
    const onSubmit = (data: User) => {
        if (!isValid) return;
        dispatch(login(data));
        if (authReducer.email) {
            setToast({message: "Đăng nhập thành công", variant: "success"});
            reset();
        } else {
            setToast({message: "Đăng nhập thất bại", variant: "warning"})
            setOpen(true);
        }
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
            </Stack>
            <Toast message={toast?.message} color={toast?.variant} icon={<CheckIcon/>} open={open} setOpen={setOpen}/>
        </Form>
    );
}

export default LoginForm;
