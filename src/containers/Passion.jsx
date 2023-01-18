import React from "react";
import styled from "styled-components";
import passionImage from "../assets/passion-img.png";
import bgImage from "../assets/bg-ellipse.png";
const Passion = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h2>Map your passion to a tech career in minutes</h2>
          <p>
            Identify a career in tech you are passionate about in minutes.
            Simply select the attributes that best define your person - and
            watch the system recommend a career that is a close-fit to you and
            simplified details about that career.
          </p>
        </div>
        <div>
          <img src={passionImage} alt="passion" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Passion;

const Wrapper = styled.div`
  background-image: url(${bgImage});
  padding-bottom: 175px;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  @media screen and (max-width: 650px) {
    padding-bottom: 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 1120px) {
      justify-content: center;
    }
  }
  .content {
    max-width: 616px;
    h2 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 58px;
      line-height: 70px;
      margin-bottom: 14px;

      letter-spacing: -1px;

      color: #000000;
      @media screen and (max-width: 1150px) {
        font-size: 36px;
        line-height: 40px;
        margin-bottom: 14px;
      }
      @media screen and (max-width: 650px) {
        text-align: center;
      }
    }
    p {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 32px;
      /* or 145% */

      /* Colors / Text */

      color: rgba(21, 20, 57, 0.4);

      mix-blend-mode: normal;
      @media screen and (max-width: 650px) {
        text-align: center;
      }
    }
  }
`;
