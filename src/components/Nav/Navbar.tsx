import React from "react";
// @ts-ignore
import {Button, Dropdown, Navbar} from "react-bootstrap";
import { CiBellOn } from "react-icons/ci";

import DarkMode from "./DarkMode/DarkMode";

import  "./Navbar.scss";
import {format} from "date-fns";

export default function Nav() {
    const cssBtn: {} = ["px-1"]
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");
    return (
        <>
            <Navbar className="custom__navbar">
                <img className="logo ml-5 mb-3" src="https://s1.vnecdn.net/vnexpress/restruct/i/v889/v2_2019/pc/graphics/logo.svg"/>
                {/*<Navbar.Brand href="#">NewsVN</Navbar.Brand>*/}
                <div className="header__date ml-5 mb-3">{formattedDate}</div>
                <div className="news">
                    <div className={"news__today news__item"}><a href="">Tin tức hôm nay</a></div>
                    <div className={"news__24h news__item"}><a href="">Tin tức 24h</a></div>
                    <div className={"news__podcast news__item"}><a href="">Tin quốc tế</a></div>
                    <div className={"news__area news__item"}> Tin theo khu vực
                        <ul className="area__list">
                            <li className="area__item"><a href="">Miền Bắc</a></li>
                            <li className="area__item"><a href="">Miền Trung</a></li>
                            <li className="area__item"><a href="">Miền Nam</a></li>
                        </ul>
                    </div>
                </div>

                <div className="content__right">
                    <div className="form">
                        <form role="search" method="get" id="searchform" className="searchform"
                              action="' . home_url( '/' ) . '">
                            <div className="input-group mb-3">
                                <input name="s" type="text" className="form-control" placeholder="Nhập từ khóa..."/>
                                <div className="input-group-append">
                                    <button className="btn btn-info" type="submit">Tìm</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Button className={"btn__subscriber"}>Subscribe</Button>
                    <Button className={"btn__login"}>Log in</Button>
                    <a href=""><CiBellOn/></a>
                    <DarkMode/>
                </div>

            </Navbar>
        </>
    )
}