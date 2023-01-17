import React from "react";
import styled from "styled-components";
import TabGroup from "../components/TabGroup";

const Careers = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Switch to a career in tech with ease</h1>
        <p>
          Personarise make it easier for you to switch to a highly demanded tech
          career with ease and become a world-class talent in any career of
          choice.
        </p>
        <div style={{ padding: "20px" }}>
          <TabGroup />
        </div>
      </div>
    </Wrapper>
  );
};

export default Careers;

const Wrapper = styled.div`
  margin-top: 200px;
  .container {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 52px;
      /* identical to box height, or 124% */

      text-align: center;
      letter-spacing: -0.4px;

      color: #000000;
    }
    p {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 32px;
      /* or 145% */

      text-align: center;

      /* Colors / Text */

      color: rgba(21, 20, 57, 0.4);

      mix-blend-mode: normal;
      margin-bottom: 48px;
    }
  }
`;
