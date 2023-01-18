import React from "react";
import styled from "styled-components";
import TabGroup from "../components/TabGroup";
import careerPerson from "../assets/career-person.svg";
import rightArrow from "../assets/right-arrow.svg";
import bgImage from "../assets/bg-ellipse-2.png";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import numbers from "../assets/numbers.png";
const Careers = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Switch to a career in tech with ease</h1>
        <p className="text">
          Personarise make it easier for you to switch to a highly demanded tech
          career with ease and become a world-class talent in any career of
          choice.
        </p>
        <div style={{ padding: "20px" }}>
          <TabGroup />
        </div>

        <Content
          image={careerPerson}
          text="Identify the skills that world-class individuals possesses in your
              field and what they know. Learn the skills with any eLearning
              provider you prefer."
          title="Become a world-class individual in your field"
        />
        <Content
          image={numbers}
          text="Track your career progress and hit your numbers - increase salary, more hand-on experience, develop skills with the 1st talent development platform."
          title="Hit your numbers"
          className="num"
        />
      </div>
      <div className="career-box-container">
        <div className="career-box">
          <h1>Switch to a career in tech with ease</h1>
          <p>
            Start your tech journey or take your career to the next level with
            Personarise today.
          </p>
          <button>Get started</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Careers;

const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position-y: center;
  margin-top: 200px;
  @media screen and (max-width: 800px) {
    background-image: none;
  }
  .container {
    max-width: 1400px;
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
    .text {
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
  .career-box-container {
    max-width: 1380px;
    margin: 148px auto;
  }
  .career-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    mix-blend-mode: normal;
    border: 2px solid #ebeaed;
    border-radius: 10px;
    padding: 10em;
    margin: 20px;
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 52px;
      /* or 124% */

      text-align: center;
      letter-spacing: -0.4px;

      color: rgba(0, 0, 0, 0.87);
      margin-bottom: 32px;
      @media screen and (max-width: 650px) {
        font-size: 36px;
      }
    }
    p {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      /* identical to box height, or 162% */

      text-align: center;

      /* Colors / Text */

      color: rgba(21, 20, 57, 0.4);

      mix-blend-mode: normal;
      margin-bottom: 67px;
    }
    button {
      border: none;
      background: #257cff;
      border-radius: 8px;
      padding: 12px 43px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */

      letter-spacing: -0.01em;

      color: rgba(255, 255, 255, 0.87);
    }
  }
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  .content {
    max-width: 461px;
  }
  .img-wrapper {
    img {
      width: 100%;
    }
  }

  h2 {
    text-align: left;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    font-feature-settings: "salt" on, "liga" off;
    color: #18191f;
    margin-bottom: 24px;

    @media screen and (max-width: 650px) {
      font-size: 28px;
    }
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    font-feature-settings: "salt" on, "liga" off;
    color: #18191f;
    margin-bottom: 36px;
    max-width: 500px;
    @media screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: "salt" on, "liga" off;
    color: #257cff;

    display: flex;
    align-items: center;
    gap: 9px;
    @media screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`;
