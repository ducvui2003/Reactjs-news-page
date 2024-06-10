import React, {useEffect, useState} from "react";
import {getNewsByCategory} from "../../services/newsService";
import {News} from "../../types/news.type";
import {Navigate, useParams} from "react-router-dom";
import {categoryExist, toCategory} from "../../services/categoryService";

import NewsListTransition from "./NewsListTransition";

export function NewsList() {
    const {id} = useParams();
    if (!categoryExist(id || "")) {
        return <Navigate to="/404"/>;
    }
    const [listNews, setListNews] = useState<News[]>([]);
    useEffect(() => {
        getNewsByCategory(toCategory(id || "")).then((res: News[]) => {
            setListNews(res);
        })
    }, [id]);
    return (
        <NewsListTransition listNews={listNews}/>
    )
}
