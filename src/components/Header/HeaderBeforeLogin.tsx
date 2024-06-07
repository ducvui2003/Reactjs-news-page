import React from 'react';
import PopoverUser from "../Popover/PopoverUser";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";

function HeaderBeforeLogin() {
    return <PopoverUser>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <FavoriteIcon color={"primary"} fontSize={"medium"}/>
                    </ListItemIcon>
                    <ListItemText primary={"Bài báo yêu thích"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <FeedbackIcon color={"primary"} fontSize={"medium"}/>
                    </ListItemIcon>
                    <ListItemText primary={"Góp ý"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon color={"primary"} fontSize={"medium"}/>
                    </ListItemIcon>
                    <ListItemText primary={"Đăng xuất"}/>
                </ListItemButton>
            </ListItem>
        </List>
    </PopoverUser>;
}

export default HeaderBeforeLogin;