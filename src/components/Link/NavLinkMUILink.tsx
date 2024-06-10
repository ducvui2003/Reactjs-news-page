import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

// Custom NavLink component using MUI Link
const CustomNavLink = React.forwardRef(function CustomNavLink(props, ref) {
    return <NavLink ref={ref} {...props} />;
});

function NavLinkMUILink(props) {
    return (
        <Link
            component={CustomNavLink}
            {...props}
        />
    );
}

export default NavLinkMUILink;
