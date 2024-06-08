import React from "react";
import {format} from "date-fns";
import {vi} from "date-fns/locale";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {Container, Stack} from "react-bootstrap";
import LogoHome from "../Logo/LogoHome";
import NavBar from "./HeaderNavInfo";
import SearchBar from "./HeaderSearch";
import DarkMode from "../Nav/DarkMode/DarkMode";
import HeaderBeforeLogin from "./HeaderBeforeLogin";
import HeaderAfterLogin from "./HeaderAfterLogin";

export default function Header() {
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");
    const dayOfWeek: string = format(currentDate, "EEEE", {locale: vi});
    // Kiểm tra state user đã đăng nhập chưa
    const authReducer = useSelector((state: RootState) => state.authenticate);
    console.log("email",authReducer.email)
    return (
        <Container className="container ">
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                <Stack direction={"horizontal"}>
                    <LogoHome/>
                    <div className="header__date custom-border-start px-2">{dayOfWeek}, {formattedDate}</div>
                </Stack>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-center align-items-center gap-2" id="navbarNav">
                    <NavBar/>
                    <SearchBar/>
                    <DarkMode/>
                    {
                        authReducer.email ? <HeaderAfterLogin/> : <HeaderBeforeLogin/>
                    }
                </div>
            </nav>
        </Container>
    )
}