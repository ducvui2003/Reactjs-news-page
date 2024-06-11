import React from 'react';
import Stack from "@mui/material/Stack";
import {Divider} from "@mui/material";


const NavBar: React.FC = () => {
    return (
        <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Newest/>
            <Divider orientation="vertical" variant="middle" flexItem color={"black"}/>
            <RegionalNews/>
            <Divider orientation="vertical" variant="middle" flexItem color={"black"}/>
        </Stack>
    );
};

function Newest() {
    return (
        <a className="nav-link" href="#">Mới nhất</a>
    );
}

function RegionalNews() {
    return (
        <a className="py-0 nav-link" href="#">Tin theo khu vực</a>
    );
}

function InternationalNews() {
    return (
        <a className="py-0 nav-link" href="#">International</a>
    )
}


export default NavBar;
