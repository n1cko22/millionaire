import React from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  width: 18.5rem;
  height: 3rem;
  border: none;
  border-radius: 12px;
  outline: none;
  text-align: center;
  font-size: 1rem;
  color: var(--white);
  background: var(--primary);
  &:hover {
    background: var(--orange-light);
  }
  &:active {
    background: var(--orange-dark);
  }
`;

export default function Button(props) {
  return <ButtonUI {...props}>{props.children}</ButtonUI>;
}