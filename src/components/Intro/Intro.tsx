import "./Intro.scss";
import "../../assets/sass/utils.scss";
import React, {useEffect, useState} from "react";
import {getNewsByCategory} from "../../services/newsService";
import {Category} from "../../constraints/category";
import {News} from "../../types/news.type";
import {Divider, Grid} from "@mui/material";
import CardVertical from "../Card/CardVertical";
import CardHorizontal from "../Card/CardHorizontal";
import Stack from "@mui/material/Stack";

function Intro() {
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getNewsByCategory(Category.HOME).then((res) => {
            setNews(res)
            setLoading(false)
        });
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <CardHorizontal news={news[0]} cssImage={{flexBasis: "500px"}} isLoading={loading}/>
                <Divider
                    orientation="horizontal"
                    sx={{height: '5px', backgroundColor: 'black', opacity: 0.2, marginBlock: '10px'}}
                />
                <Grid container spacing={2}>
                    {news.slice(1, 4).map((item: News) => (
                        <Grid item xs>
                            <CardVertical key={item.id}
                                          news={item}
                                          isLoading={loading}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                {news[4] && <CardVertical key={news[4].id} {...news[4]} news={news[4]}
                                          isLoading={loading} cssImage={{flex:1}}/>}
            </Grid>
        </Grid>
    )
}

export default Intro