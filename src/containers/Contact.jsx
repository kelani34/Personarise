import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div
        className="container">
        <div className="content">
          <h2>Curious to try? Get started now!</h2>
          <p>
            Join our early users and discover how Personarise is helping you
            maximize career opportunities.
          </p>
        </div>
        <div className="contact-box">
          <textarea placeholder="example@gmail.com" />
          <button>Get Started</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  .container {
    background: #f4f1f1;
    border-radius: 16px;
    padding: 70px;
    margin: 117px 20px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 650px) {
      padding: 30px;
      margin: 117px 20px 16px;
    }

    @media screen and (max-width: 650px) {
      flex-direction: column;
      align-items: center;
    }
    .content {
      margin-right: 32px;
    }
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 78px;
      letter-spacing: -0.03em;
      color: #000000;
      max-width: 372px;
      @media screen and (max-width: 920px) {
        font-size: 36px;
        line-height: 64px;
      }
      @media screen and (max-width: 750px) {
        font-size: 24px;
        line-height: 36px;
      }
      @media screen and (max-width: 650px) {
        text-align: center;
        margin: auto;
      }
    }
    p {
      max-width: 477px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 29px;
      /* or 161% */

      color: #000000;

      opacity: 0.72;
      @media screen and (max-width: 750px) {
        font-size: 14px;
      }
      @media screen and (max-width: 650px) {
        text-align: center;
        margin-bottom: 32px;
      }
    }
    textarea {
      border: none;
      outline: none;
      background: #ffffff;
      opacity: 0.8;
      backdrop-filter: blur(60px);
      border-radius: 8px;
      width: 344px;
      min-height: 120px;
      resize: none;
      padding: 20px 24px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 16px;
      @media screen and (max-width: 920px) {
        width: 300px;
      }
      @media screen and (max-width: 750px) {
        width: 250px;
      }
    }
    textarea::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */

      color: #8f8e94;
    }
    button {
      border: none;
      background: #121212;
      border-radius: 8px;
      padding: 12px 43px;
      width: 100%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */

      letter-spacing: -0.01em;

      color: rgba(255, 255, 255, 0.87);
    }
    .contact-box {
      display: flex;
      flex-direction: column;
    }
  }
`;
