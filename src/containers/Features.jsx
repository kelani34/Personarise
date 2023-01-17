import React from "react";
import styled from "styled-components";
import Feature from "../components/Feature";

const Features = () => {
  return (
    <Wrapper>
      <Feature
        title="sign up/login"
        text="Explore the unique approach Personarise use to help you maximize your career by clicking - “Get started”."
      />
      <Feature
        title="sign up/login"
        text="Explore the unique approach Personarise use to help you maximize your career by clicking - “Get started”."
      />
      <Feature
        title="sign up/login"
        text="Explore the unique approach Personarise use to help you maximize your career by clicking - “Get started”."
      />
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  flex-wrap: wrap;
`;
