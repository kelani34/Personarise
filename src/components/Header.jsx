import React, { useState } from "react";
import images from "../assets/images";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import "./style.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <div className="app__sm-nav">
      <ul>
        <li>
          <a>Who we are</a>
        </li>
        <li>
          <a>What we do</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
  return (
    <Wrapper>
      <div className="app__logo-container">
        <div className="app__logo-items">
          <img src={images.logo} alt="logo" />
          <h1>Personarise</h1>
        </div>
        <div className="app__nav-container">
          <ul>
            <li>
              <a>Who we are</a>
            </li>
            <li>
              <a>What we do</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="app__btn-container">
        <button className="app__btn-demo-btn">
          <img src={images.playIcon} alt="play icon" />
          Watch a demo
        </button>
        <button className="app__btn-signup-btn">
          <div>Sign up</div>
        </button>
      </div>
      <div className="app__sm-container">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__sm-items">
            <Menu />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 22px 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .app__logo-container {
    display: flex;
    align-items: center;
    gap: 92px;
    justify-content: space-between;
    h1 {
      font-family: "Helvetica";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.03em;

      color: #000000;
      @media screen and (max-width: 400px) {
        font-size: 24px;
      }
    }
  }

  .app__logo-items {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .app__nav-container {
    ul {
      list-style: none;
      display: flex;
      gap: 38px;

      li {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        /* identical to box height, or 144% */

        color: rgba(0, 0, 0, 0.87);
      }
    }

    @media screen and (max-width: 1150px) {
      display: none;
    }
  }
  .app__btn-container {
    display: flex;
    align-items: center;
    gap: 16px;

    .app__btn-demo-btn {
      padding: 16px 24px;
      gap: 8px;
      background: #c2dbff;
      border-radius: 8px;

      display: flex;
      align-items: center;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */

      color: #257cff;
    }
    .app__btn-signup-btn {
      padding: 16px 24px;
      background: #257cff;
      border-radius: 8px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */

      color: #ffffff;
    }

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  .app__sm-container {
    position: relative;
    .app__sm-nav {
      position: absolute;
      right: 0;
      top: 50px;
      width: 120px;
      padding: 20px;
      background-color: #f4f1f1;
      border-radius: 8px;
      z-index: 1;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 38px;

        li {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          /* identical to box height, or 144% */

          color: rgba(0, 0, 0, 0.87);
        }
      }
      @media screen and (max-width: 700px) {
        /* top: 31px; */
      }
    }

    @media screen and (min-width: 1150px) {
      display: none;
    }
  }
  button {
    background: none;
    border: none;
    border-radius: 0;
  }
`;
