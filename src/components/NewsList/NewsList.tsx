import {Card, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getNewsByCategory} from "../../services/newsService";
import {Category} from "../../constraints/category";
import {News} from "../../types/news.type";


const listData: News[] = [
    {
        title: "title",
        thumbnail: "https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg",
        description: "ABC"
    },
    {
        title: "title",
        thumbnail: "https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg",
        description: "ABC"
    },
    {
        title: "title",
        thumbnail: "https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg",
        description: "ABC"
    }
]

export function NewsList() {
    const [news, setNews] = useState<News[]>([]);
    useEffect(
        () => {
            getNewsByCategory(Category.TRANG_CHU).then(res => setNews(res))
        }, []
    )
    return (
        <Container>
            {news.map((item: News) => (
                <Card className="mb-3">
                    <Row noGutters>
                        <Col md={4}>
                            <Card.Img src={item.thumbnail}/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="h1">{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Container>
    )
};