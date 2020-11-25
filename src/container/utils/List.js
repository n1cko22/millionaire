import React from "react";
import styled from "styled-components";

const ListUI = styled.ul`
  display: flex;
  max-width: 40rem;
  flex-flow: row wrap;
  justify-content: center;
  align-self: center;
  list-style: none;
  ${({ menu }) =>
    menu &&
    `
    max-width: 20rem;
    margin: auto 0;
  `}
`;

export default function List(props) {
  return (
    <>
      <ListUI {...props}>{props.children}</ListUI>
    </>
  );
}