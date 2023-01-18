import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards";

const Testimonials = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>Testimonials</h2>
          <p>
            These are the stories of some of our very early customers about
            their experience of using Personarise.
          </p>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.div`
  .container {
    max-width: 1400px;
    margin: 0 auto;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 78px;
      text-align: center;
      letter-spacing: -0.03em;

      color: rgba(0, 0, 0, 0.87);
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 29px;
      /* or 161% */

      text-align: center;

      color: #000000;

      opacity: 0.72;
      max-width: 785px;
      margin: 40px auto;
    }
  }
`;
