import React from "react";
import { StepSvg } from "./blocks/Svg";

export default function Step(props) {
  const formatPrize = props.currentPrize
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <StepSvg
      {...props}
      width='320'
      height='32'
      viewBox='0 0 320 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M41 16H0' stroke='#D0D0D8' />
      <path d='M320 16H279' stroke='#D0D0D8' />
      <path
        d='M53.5303 3.70404C55.6719 1.64809 58.5256 0.5 61.4944 0.5H258.506C261.474 0.5 264.328 1.64809 266.47 3.70404L279.278 16L266.47 28.296C264.328 30.3519 261.474 31.5 258.506 31.5H61.4944C58.5256 31.5 55.6719 30.3519 53.5303 28.296L40.722 16L53.5303 3.70404Z'
        fill='white'
        stroke='#D0D0D8'
      />
      <text
        x='50%'
        y='50%'
        dominantBaseline='middle'
        fontSize='20px'
        textAnchor='middle'
        fill='var(--text-black)'
      >
        ${formatPrize}
      </text>
    </StepSvg>
  );
}