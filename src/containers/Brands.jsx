import React from "react";
import aave from "../assets/aave.png";
import compound from "../assets/compound.png";
import paxos from "../assets/paxos.png";
import truefi from "../assets/truefi.png";
import synthetix from "../assets/synthetix.png";
import nexus from "../assets/nexus.png";
import ens from "../assets/ens.png";
import styled from "styled-components";
const Brands = () => {
  return (
    <Wrapper>
      <div className="items">
        <img src={aave} alt="brand logo" />
        <img src={compound} alt="brand logo" />
        <img src={paxos} alt="brand logo" />
        <img src={truefi} alt="brand logo" />
        <img src={synthetix} alt="brand logo" />
        <img src={nexus} alt="brand logo" />
        <img src={ens} alt="brand logo" />
      </div>
    </Wrapper>
  );
};

export default Brands;

const Wrapper = styled.div`
  padding: 2.5rem;
  margin: 5em 0;
  .items {
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;
