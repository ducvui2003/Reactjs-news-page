import React from 'react';
import {Avatar, Box, List, ListItem, ListItemAvatar, Tooltip} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
import Zoom from '@mui/material/Zoom';
import Typography from "@mui/material/Typography";

function SideBarDetailLeft() {
    const navigate = useNavigate();
    const style = {
        position: "sticky",
        left: 0,
        top: "50px",
        paddingTop: "50px",
    }
    return (
        <Box sx={style}>
            <List>
                <ListItem>
                    <Tooltip title={<Typography variant="body2" style={{fontSize: '0.8rem'}}>Bình luận</Typography>}
                             arrow TransitionComponent={Zoom}>
                        <IconButton sx={{padding: "5px", backgroundColor: "background.paper"}}>
                            <ChatBubbleIcon fontSize={"small"}/>
                        </IconButton>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <Tooltip title={<Typography variant="body2" style={{fontSize: '0.8rem'}}>Lưu bài viết</Typography>}
                             arrow>
                        <IconButton sx={{padding: "5px", backgroundColor: "background.paper"}}>
                            <BookmarkIcon fontSize={"small"}/>
                        </IconButton>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <Tooltip
                        title={<Typography variant="body2" style={{fontSize: '0.8rem'}}>Trở lại trang chủ</Typography>}
                        arrow>
                        <IconButton sx={{padding: "5px", backgroundColor: "background.paper"}}
                                    onClick={() => navigate("/")}>
                            <ArrowBackIcon fontSize={"small"}/>
                        </IconButton>
                    </Tooltip>
                </ListItem>
            </List>
        </Box>
    )
        ;
}

export default SideBarDetailLeft;