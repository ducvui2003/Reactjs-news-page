import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../features/dialog/auth/dialogAuth.slice";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const openDialog = () => {
    dispatch(toggle(true));
  };
  return (
    <div
      className="py-0 px-2 form__search form-inline text-decoration-none text-black custom-border-start"
      onClick={openDialog}
    >
      <FontAwesomeIcon icon={faUser} className="" />
      <span className="m-lg-2">Đăng nhập</span>
    </div>
  );
};

export default LogIn;
