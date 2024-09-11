import React from "react";
import styled from "styled-components";
import Section from "./Section";
import SndSection from "./SndSection";
import TrdSection from "./TrdSection";

const Container = styled.div`
  ${"" /* height:100vh; */}
`;

const Home = () => {
  return (
    <Container>
      <Section
        tittle="Ad Verse"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        background="hero.jpg"
      />
      <SndSection
        tittle="Ad Verse"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        background="black.jpg"
      />
      
      <TrdSection background="black.jpg" />
    </Container>
  );
};

export default Home;
