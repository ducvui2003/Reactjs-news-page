import React from "react";
import {format} from "date-fns";
import {vi} from "date-fns/locale";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import LogoHome from "../Logo/LogoHome";
import NavBar from "./HeaderNavInfo";
import SearchBar from "./HeaderSearch";
import DarkMode from "../Nav/DarkMode/DarkMode";
import HeaderBeforeLogin from "./HeaderBeforeLogin";
import HeaderAfterLogin from "./HeaderAfterLogin";
import {Container} from '@mui/material';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header() {
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");
    const dayOfWeek: string = format(currentDate, "EEEE", {locale: vi});
    // Kiểm tra state user đã đăng nhập chưa
    const authReducer = useSelector((state: RootState) => state.authenticate);
    const styles = {
        paddingBlock: "30px",
        position: "sticky"
    }

    return (
        <Container sx={styles}>
            <Stack component={"nav"}
                   direction={"row"}
                   justifyContent="space-between"
                   alignItems="center"
            >
                <Stack direction={"row"} alignItems={"center"}>
                    <LogoHome/>
                    <Typography variant={"body1"} className="px-2">{dayOfWeek}, {formattedDate}</Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} gap={"2"} justifyContent={"center"}>
                    <NavBar/>
                    <SearchBar/>
                    <DarkMode/>
                    {
                        authReducer.email ? <HeaderAfterLogin/> : <HeaderBeforeLogin/>
                    }
                </Stack>
            </Stack>
        </Container>
    )
}