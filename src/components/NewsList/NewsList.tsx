import {getNews, News} from "../../features/internationalNews/internationalNews";
// import React, {useEffect, useState} from "react";
import CardItem from "../Intro/CardItem/CardItem";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Title} from "@mui/icons-material";
import React from "react";


const listData: News[] = [
    {
        title: "title",
        imgLink: "https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg",
        shortDes: "ABC"
    },
    {
        title: "title",
        imgLink: "https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg",
        shortDes: "ABC"
    },
    {
        title: "title",
        imgLink: "https://i1-vnexpress.vnecdn.net/2024/05/15/luongcuong-1715756711-5929-1715756762.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=QLEDRGolpQX4Yye9XBapRg",
        shortDes: "ABC"
    }
]

export function NewsList() {
    return (
            <Container>
                {listData.map((item) => (
                    <Card className="mb-3">
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img src={item.imgLink} />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title className="h1">{item.title}</Card.Title>
                                    <Card.Text>{item.shortDes}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
    )
};