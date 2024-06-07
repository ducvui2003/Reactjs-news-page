import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";

const SearchBar: React.FC = () => {
    const [keyword, setKeyword] = useState<string>("");
    return (
        <form className="form__search form-inline my-2 my-lg-0 px-2 custom-border-start">
            <div className="position-relative">
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
