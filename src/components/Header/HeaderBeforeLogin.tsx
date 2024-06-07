import React from 'react';
import PopoverUser from "../Popover/PopoverUser";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";
import {useDispatch} from "react-redux";
import {logout} from "../../features/authenticate/authenticate.slice";
import {toast} from "react-toastify";

function HeaderBeforeLogin() {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logout());
        console.log("log out")
        toast.success("Đăng xuất thành công");
    }
    return <PopoverUser>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <FavoriteIcon color={"black"} fontSize={"medium"}/>
                    </ListItemIcon>
                    <ListItemText primary={"Bài báo yêu thích"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <FeedbackIcon color={"black"} fontSize={"medium"}/>
                    </ListItemIcon>
                    <ListItemText primary={"Góp ý"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => handleLogOut()}>
                    <ListItemIcon>
                        <LogoutIcon color={"black"} fontSize={"medium"}/>
                    </ListItemIcon>
                    <ListItemText primary={"Đăng xuất"} />
                </ListItemButton>
            </ListItem>
        </List>
    </PopoverUser>;
}

export default HeaderBeforeLogin;