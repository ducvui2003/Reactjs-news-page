import React, { useState } from "react";
import Intro from "../../components/Intro/Intro";
import { Container } from "react-bootstrap";
import CategoryCarouselList from "../../components/Carousel/CategoryCarouselList";


function Home() {
  return (
    <>
      <div className={"bg-body-tertiary"}>
        <Container fluid={"xl"}>
          <Intro />
          <CategoryCarouselList />
        </Container>
      </div>
    </>
  );
}

export default Home;
