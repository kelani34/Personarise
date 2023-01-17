import React from "react";
import styled from "styled-components";
import ellipse from "../assets/ellipse.png";
import users from "../assets/users.png";
import ratingsIcon from "../assets/ratings-icon.png";
const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Choose a career in tech in minutes</h1>
        <p className="home-text">
          Personarise is your tech talent development platform for eliminating
          time consuming activities while making decision on a tech career you
          will succeed in — and so much more.
        </p>
        <div className="app__users-container">
          <img src={users} alt="Users" />
          <div className="app__users-item">
            <p>3k+ users</p>
            <img src={ratingsIcon} alt="ratings" />
          </div>
        </div>
        <div className="hero__input-container">
          <input placeholder="Type your email address" />
          <button>Get started</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background-image: url(${ellipse});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 700px) {
    background-size: unset;
  }
  .container {
    max-width: 759px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    @media screen and (max-width: 700px) {
      padding: 120px 25px 25px;
      margin-top: 10px;
    }
    h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 64px;
      line-height: 104px;
      text-align: center;
      letter-spacing: -0.03em;
      color: rgba(0, 0, 0, 0.87);
      margin-bottom: 24px;
      @media screen and (max-width: 1150px) {
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 14px;
      }
      @media screen and (max-width: 700px) {
        font-size: 36px;
        line-height: 48px;
      }
    }
    .home-text {
      max-width: 738px;
      font-family: "Inter";
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.007em;

      color: #000000;
      margin-bottom: 18px;
      @media screen and (max-width: 1150px) {
        font-size: 16px;
        line-height: 24px;
      }
      @media screen and (max-width: 700px) {
        font-size: 14px;
      }
    }
    .app__users-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        /* identical to box height, or 186% */

        letter-spacing: -0.007em;

        color: rgba(0, 0, 0, 0.87);
        @media screen and (max-width: 1150px) {
          font-size: 16px;
          line-height: 24px;
        }
        @media screen and (max-width: 700px) {
          font-size: 14px;
        }
      }
    }
    .hero__input-container {
      background: #fcfcfc;
      border-radius: 12px;
      width: 505px;
      padding: 4px;
      display: flex;
      justify-content: space-between;
      margin: 48px 0;
      input {
        background: none;
        outline: none;
        border: none;
        padding: 10px;
        flex: 1;
      }
      button {
        border: none;
        background: #257cff;
        border-radius: 8px;
        padding: 12px 18px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        /* identical to box height, or 144% */

        letter-spacing: -0.01em;

        color: rgba(255, 255, 255, 0.87);
      }
      @media screen and (max-width: 700px) {
        width: unset;
      }
    }
  }

  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height, or 144% */

    letter-spacing: -0.007em;

    color: rgba(0, 0, 0, 0.37);
  }

  input:-ms-input-placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height, or 144% */

    letter-spacing: -0.007em;

    color: rgba(0, 0, 0, 0.37);
  }

  input::-ms-input-placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height, or 144% */

    letter-spacing: -0.007em;

    color: rgba(0, 0, 0, 0.37);
  }
`;
