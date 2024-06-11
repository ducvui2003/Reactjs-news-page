import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

function SideBarDetailRight() {
    const style = {
        position: "sticky",
        top: 0,
        left: 0,
    }
    const relevantNews = [
        {id: "B1", title: "Relevant News 1"},
        {id: "B2", title: "Relevant News 2"},
        {id: "B3", title: "Relevant News 3"}
    ];
    return (
        <Box sx={style}>
            <Typography variant={"h3"}>Các bài báo liên quan</Typography>
            <ul className="list-unstyled">
                {relevantNews.map((news) => (
                    <li key={news.id}>
                        <a href={`#${news.id}`}>{news.title}</a>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default SideBarDetailRight;