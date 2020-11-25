import React from "react";
import styled from "styled-components";
import hand from "../../../assets/hand_1.svg";

const LogoUI = styled.img`
  width: 18rem;
  height: 12rem;
`;

export default function Logo() {
  return <LogoUI src={hand} alt='hand-logo' />;
}