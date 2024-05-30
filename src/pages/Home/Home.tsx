import React from "react";
import Intro from "../../components/Intro/Intro";
import CategoryCarouselList from "../../components/Carousel/CategoryCarouselList";
import {Container} from "react-bootstrap";

function Home() {
    return (
        <>
            <div className={"bg-body-tertiary"}>
                <Container fluid={"xl"}>
                    <Intro/>
                    <CategoryCarouselList/>
                </Container>
            </div>
        </>
    );
}

export default Home;
