import React from "react";
import { useParams } from "react-router-dom";
import details from "../../data/details";
import CommentSection from "../../components/Comment/CommentSection";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Detail() {
    const { id } = useParams<{ id: string }>();
    const detail = details.find(item => item.id === id);

    if (!detail) {
        return <p>Không tìm thấy thông tin chi tiết</p>;
    }

    const relevantNews = [
        { id: "B1", title: "Relevant News 1" },
        { id: "B2", title: "Relevant News 2" },
        { id: "B3", title: "Relevant News 3" }
    ];

    return (
        <Container className="my-4">
            <Row>
                <Col md={10}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="font-weight-bold fs-1">{detail.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted my-2">
                                {`Author ${detail.author} on ${detail.publishDate}`}
                            </Card.Subtitle>
                            {detail.paragraphs.map((para, index) => (
                                <div
                                    className="mb-4"
                                    key={index}>
                                    <Card.Text className="fs-5">{para.text}</Card.Text>
                                    {para.image && (
                                        <div className="mb-3 text-center">
                                            <Card.Img variant="top"
                                                      className="img-fluid w-50"
                                                      alt={para.image.capture}
                                                      src={para.image.link} />
                                            <Card.Text className="text-muted">{para.image.capture}</Card.Text>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                    <CommentSection />
                </Col>
                <Col md={2}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Related News</Card.Title>
                            <ul className="list-unstyled">
                                {relevantNews.map((news) => (
                                    <li key={news.id}>
                                        <a href={`#${news.id}`}>{news.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;
