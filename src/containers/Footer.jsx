import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <ul>
            <li>Who we are</li>
            <li>Who we are</li>
            <li>Who we are</li>
          </ul>
          <ul>
            <li>Who we are</li>
            <li>Who we are</li>
            <li>Who we are</li>
          </ul>
          <ul>
            <li>Who we are</li>
            <li>Who we are</li>
            <li>Who we are</li>
          </ul>
          <ul>
            <li>Who we are</li>
            <li>Who we are</li>
            <li>Who we are</li>
          </ul>
        </div>
        <div className="footer-line" />
        <div>
          <p className="footer__copyright-text">
            &copy; Personise 2022. All rights reserved.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: #257cff;
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 42px 0;
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 20px;
      ul {
        display: flex;
        flex-direction: column;
        /* gap: 16px; */
      }

      li {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        /* identical to box height, or 162% */

        color: rgba(255, 255, 255, 0.6);
        margin: 16px;
      }
    }
    .footer-line {
      border: 1px solid rgba(255, 255, 255, 0.38);
    }
    .footer__copyright-text {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: rgba(255, 255, 255, 0.6);

      mix-blend-mode: normal;
      opacity: 0.5;
      text-align: center;
      margin-top: 24px;
    }
  }
`;
