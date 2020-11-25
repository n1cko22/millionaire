import React from "react";
import styled from "styled-components";
import Logo from "./blocks/Logo";
import OverviewMenu from "./blocks/OverviewMenu";

const OverviewWrapper = styled.main`
  display: flex;
  width: inherit;
  height: inherit;
  padding: 0 1rem;
  background: #E5E5E5 ;
  ${({ triangle }) =>
    triangle &&
    `
  background: linear-gradient(
    to bottom right,
    #fff 0%,
    #fff 50%,
    var(--semi-orange) 50%,
    var(--semi-orange) 100%
  );
  `}
`;

const OverviewUI = styled.div`
  display: flex;
  width: 100%;
  margin: auto 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Overview = (props) => {
  console.log(props)
  return (
    <OverviewWrapper triangle={!!props.triangle}>
      <OverviewUI>
        <Logo />
        <OverviewMenu {...props} />
      </OverviewUI>
    </OverviewWrapper>
  );
}

export default Overview;