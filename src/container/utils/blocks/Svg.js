import styled from "styled-components";

const Svg = styled.svg`
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover {
    path {
      stroke: var(--primary);
    }
  }
  @keyframes tick {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.75;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.25;
    }
  }
  ${({ pending }) => pending && `animation: tick 1s ease-out infinite;`}
  ${({ selected }) =>
    selected && `path {stroke: var(--primary);fill: var(--semi-orange);}`}
  ${({ correct }) =>
    correct && `path {stroke: var(--green-solid); fill: var(--green-light);}`}
  ${({ wrong }) =>
    wrong && `path {stroke: var(--red-solid);fill: var(--red-light);}`}

  ${({ selectedPrize }) =>
    selectedPrize &&
    `path {stroke: var(--primary);}text {fill: var(--primary);}`}
  ${({ disabled }) =>
    disabled && `path {stroke: var(--border);}text {fill: var(--border);} `}
`;

export const OptionSvg = styled(Svg)`
  width: 20rem;
  height: 3.5rem;
`;

export const StepSvg = styled(Svg)`
  width: 20rem;
  height: 2rem;
`;
