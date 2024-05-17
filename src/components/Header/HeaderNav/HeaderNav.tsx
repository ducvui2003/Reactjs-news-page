import React from 'react';
import Newest from "./HeaderNewest";
import RegionalNews from "./HeaderRegionalNews";


const NavBar: React.FC = () => {
    return (
        <ul className="navbar-nav mr-auto align-items-center">
            <Newest />
            <RegionalNews />
        </ul>
    );
};

export default NavBar;
