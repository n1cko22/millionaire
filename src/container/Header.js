import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import burgerMenu from "../assets/Union-2.svg";
import сlose from "../assets/Union.svg";
import { toggleMenu } from "../redux/actions";

const HeaderUI = styled.header`
  display: flex;
  width: 100%;
  height: 0.8rem;
  flex-direction: row-reverse;
`;

const ToggleButton = styled.button`
  background: none;
  outline: none;
  border: none;
`;

export default function Header() {
  const isMenuOpened = useSelector((state) => state.isMenuOpened);
  const dispatch = useDispatch();

  const handleClickMenu = () => dispatch(toggleMenu());

  return (
    <HeaderUI>
      <ToggleButton onClick={handleClickMenu}>
        {isMenuOpened ? (
          <img src={сlose} alt='close' />
        ) : (
          <img src={burgerMenu} alt='menu' />
        )}
      </ToggleButton>
    </HeaderUI>
  );
}