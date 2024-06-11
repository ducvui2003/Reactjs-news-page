import React, {useState} from "react";
import {Popover} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {IconButton} from "@mui/joy";

function PopoverUser({children}: { children: React.ReactNode }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <>
            <IconButton
                size={"lg"}
                aria-label="user"
                color="black"
                onClick={handleClick}
            >
                <PersonIcon/>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {children}
            </Popover>
        </>
    );
}

export default PopoverUser;
