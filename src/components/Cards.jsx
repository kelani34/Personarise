import React from "react";
import styled from "styled-components";
import quotes from "../assets/quotes.svg";
import circle from "../assets/ellipse-testimonial.svg";

const Cards = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <img src={quotes} alt="quotes" />
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            sapien ipsum, mi urna, vehicula elit congue etiam purus. Amet eu
            risus, sed auctor et. Orci sed faucibus cursus dictum tincidunt
            amet, leo.
          </p>
          <div className="user-box">
            <img src={circle} alt="circle" />
            <span>
              <h3>John Doe</h3>
              <h4>Software Engineer</h4>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cards;

const Wrapper = styled.div`
  background: #f4f1f1;
  border-radius: 16px;
  max-width: 608px;
  padding: 40px 35px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      text-align: left !important;
      max-width: 441px;
      color: rgba(0, 0, 0, 0.6);

      margin-top: 22px;
      margin-bottom: 27px;
    }
    .content {
      margin-left: 20px;
    }
    .user-box {
      display: flex;
      gap: 16px;
      align-items: center;
      h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        /* identical to box height, or 162% */

        color: rgba(0, 0, 0, 0.6);
      }
      h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
