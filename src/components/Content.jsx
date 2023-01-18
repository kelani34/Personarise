import React from "react";
import styled from "styled-components";
import careerPerson from "../assets/career-person.svg";
import rightArrow from "../assets/right-arrow.svg";
const Content = ({ image, text, title }) => {
  return (
    <StyledSection>
      <div className="img-wrapper">
        <img src={image} alt="career person" />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{text}</p>
        <a>
          Learn more <img src={rightArrow} alt="" />
        </a>
      </div>
    </StyledSection>
  );
};

export default Content;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
  .content {
    max-width: 461px;
  }
  .img-wrapper {
    img {
      width: 100%;
    }
    @media screen and (max-width: 650px) {
      display: none;
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
