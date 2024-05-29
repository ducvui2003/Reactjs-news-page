import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getNewsByCategory} from "../../services/newsService";
import {News} from "../../types/news.type";
import NewsItem from "./NewsItem";
import {useParams} from "react-router-dom";
import {categoryExist, toCategory} from "../../services/categoryService";

export function NewsList() {
    const [news, setNews] = useState<News[]>([]);
    const {id} = useParams();
    if (categoryExist(id) == true) {
        useEffect(() => {
            getNewsByCategory(toCategory(id||"")).then((res) => setNews(res));
        }, []);
        return (
            <Container>
                {news.map((item: News) => (
                    <NewsItem {...item} />
                ))}
            </Container>
        )
    } else {
        return (
            <>
                null
            </>
        )
    }

}
