import {Card, Col, Row} from "react-bootstrap";
import {News} from "../../types/news.type";
import "../../assets/sass/utils.scss"
import Typography from "@mui/joy/Typography";
import React from "react";
import { motion } from "framer-motion"

export default NewsItem;

function NewsItem({title, thumbnail, description}: News) {
    return (
        <motion.div  whileHover={{ scale: 1.05 }}>
            <Card className="borer-0 border p-3 mb-5 bg-body h-100 shadow">
                <Row noGutters>
                    <Col md={4}>
                        <Card.Img className="object-fit-cover " style={{height: "200px"}} src={thumbnail}/>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className="h1">
                                <Typography level="h3">{title || ""}</Typography>
                            </Card.Title>
                            <Card.Text className={"line-clamp"}>
                                {description || ""}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </motion.div>
    );
}
