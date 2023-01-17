import React from "react";
import styled from "styled-components";

const Feature = ({ title, text }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Feature;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  min-width: 230px;
  gap: 18px;
  margin: 2.5rem;
  flex: 1;

  h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    /* identical to box height, or 186% */

    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #257cff;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    text-align: center;

    /* Colors / Text */

    color: rgba(21, 20, 57, 0.4);

    mix-blend-mode: normal;
  }
`;
