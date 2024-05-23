import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const LogIn: React.FC = () => {
    return (
        <a href="#" className="form__search form-inline text-decoration-none text-black custom-border-start">
            <div className="py-0 px-2">
                <FontAwesomeIcon icon={faUser} className=""/>
                <span className="m-lg-2">Đăng nhập</span>
            </div>
        </a>
    );
};

export default LogIn;