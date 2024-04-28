import React from "react";
import {format} from "date-fns";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube, faTiktok} from '@fortawesome/free-brands-svg-icons';
import "../../assets/scss/header.scss"

export default function HeaderInfo() {
    const currentDate: Date = new Date();
    const formattedDate: string = format(currentDate, "dd/MM/yyyy");

    return (
        <div className="header__info">
            <div className="header__info-left">
                <div className="header__date">{formattedDate}</div>
                <div className="header__weather">
                    <select className="weather__place">
                        <option value="" defaultChecked={true}>
                            Ho Chi Minh
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <span className="weather__temporary">
                  <FontAwesomeIcon icon={faSun}/>
                </span>
                </div>
                <div>Bạn cần biết</div>
                <div>Tiện ích</div>
                <div>Liên hệ</div>
            </div>
            <div className="header__info-right">
                <span>Theo dõi trên</span>
                <a href=""> <FontAwesomeIcon icon={faFacebook}/></a>
                <a href=""> <FontAwesomeIcon icon={faYoutube}/></a>
                <a href=""> <FontAwesomeIcon icon={faTiktok}/></a>
                <a href=""><img src="/src/assets/image/icon/zalo.svg" alt=""/></a>
            </div>
        </div>
    );
}