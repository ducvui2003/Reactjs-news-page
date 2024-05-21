import React from "react";
import {format} from "date-fns";
import { vi } from 'date-fns/locale';
import Logo from './HeaderLogo';
import NavBar from './HeaderNav/HeaderNavInfo';
import SearchBar from './HeaderSearch';
import "./style.scss"
import LogIn from "./HeaderLogIn";

export default function HeaderInfo() {
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");
    const dayOfWeek: string = format(currentDate, "EEEE", { locale: vi });
    return (
        <div className="container border-bottom">
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                <div className="header__logo-container">
                    <Logo/>
                    <div className="header__date custom-border-start px-2">{dayOfWeek}, {formattedDate}</div>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-center align-items-center gap-2" id="navbarNav">
                    <NavBar />
                    <SearchBar/>
                    <LogIn />
                </div>
            </nav>
        </div>
    );
}
