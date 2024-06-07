import {Card, Col, Row} from "react-bootstrap";
import {News} from "../../types/news.type";
import "../../assets/sass/utils.scss"
import Typography from "@mui/joy/Typography";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {timeAgo} from "../../utils/timeUtils";
import {Skeleton} from "@mui/material";

export default NewsItemLoading;
type NewsItemProp = {
    news: News,
    loading: boolean,
}

function NewsItemLoading({title, thumbnail, description, publishDate, loading = true}: NewsItemProp) {
    return (
        <motion.div whileHover={{scale: 1.05}}>
            <Card className="borer-0 border p-3 mb-5 bg-body h-100 shadow">
                <Row noGutters>
                    <Col md={4}>
                        {loading ?
                            <Skeleton variant="rectangular" width={210} height={118}/>
                            : <Card.Img className="object-fit-cover " style={{height: "200px"}} src={thumbnail}/>
                        }
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className="h1">
                                {loading ?
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                    : <Typography level="h3"> {title || ""} </Typography>
                                }
                            </Card.Title>
                            {loading ? <Skeleton variant="text" sx={{fontSize: '1rem'}}/> : timeAgo(publishDate)}
                            <Card.Text className={"line-clamp"}>
                                {loading ? <Skeleton variant="text" sx={{fontSize: '1rem'}}/> : (description || "")}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </motion.div>
    )
}
