import React from "react";
import Intro from "../components/Intro/Intro";
import CarouselBody from "../components/Carousel/CarouselBody";
import {Container} from "@mui/material";

function Home() {
    return (
        <Container sx={{marginTop: "20px"}}>
            <Intro/>
            <CarouselBody/>
        </Container>
    );
}


export default Home;
