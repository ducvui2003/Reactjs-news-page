import React from 'react';


const NavBar: React.FC = () => {
    return (
        <ul className="navbar-nav mr-auto align-items-center">
            <Newest />
            <RegionalNews />
        </ul>
    );
};

function Newest() {
    return (
        <li className="nav-item active">
            <a className="nav-link" href="#">Mới nhất</a>
        </li>
    );
}

function RegionalNews() {
    return (
        <li className="custom-border-start">
            <a className="py-0 nav-link" href="#">Tin theo khu vực</a>
        </li>
    );
}

function InternationalNews() {
    return (
        <li className="custom-border-start">
            <a className="py-0 nav-link" href="#">International</a>
        </li>
    )
}


export default NavBar;
