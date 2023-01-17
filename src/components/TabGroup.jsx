import React, { useState } from "react";
import styled from "styled-components";
import Feature from "./Feature";
import careerimage from "../assets/career-image.png";
const types = [
  "Sales",
  "Marketing",
  "Customer Success",
  "Recruiting",
  "Information Technology",
  "Education",
];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <Container>
        <Items>
          <Feature
            title={`learn about ${active}`}
            text={`Learn what ${active} is all about and how to start a career in ${active} in today world.`}
          />
          <Feature
            title={`discover skills`}
            text={`Discover skills needed by employers from a ${active} person.`}
          />
        </Items>
        <img src={careerimage} alt="career" />

        <Items>
          <Feature
            title={`learn from experts`}
            text={`Learn ${active} skills from ${active} expert and understand how they sell more with less.`}
          />
          <Feature
            title={`create portfolios`}
            text={`Create job winning portfolios and engage in world-class projects.`}
          />
        </Items>
      </Container>
    </>
  );
}

export default TabGroup;

const Tab = styled.button`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: rgba(21, 20, 57, 0.4);
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid rgba(21, 20, 57, 0.2);
  ${({ active }) =>
    active &&
    `color: #257cff;
    border-bottom: 2px solid #257CFF;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Items = styled.div`
  div {
    align-items: flex-start;
    max-width: 210px;
    p {
      text-align: left !important;
      font-size: 16px !important;
    }
    h2 {
      font-size: 16px !important;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 995px) {
    img {
      display: none;
    }
    justify-content: center;
  }
`;
