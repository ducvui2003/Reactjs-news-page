import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import './style.scss'
const SearchBar: React.FC = () => {
    return (
        <form className="form__search form-inline my-2 my-lg-0 px-2 custom-border-start">
            <div className="form-grp">
                <input className="input-search" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                <div className="ic-search small">
                    <span className="">
                    <FontAwesomeIcon icon={faSearch}/>
                  </span>
                </div>
            </div>
        </form>
    );
};
export default SearchBar;
