import { TOGGLE_MENU, SET_PRIZE } from "./actions";

const initialState = {
  prize: 0,
  isMenuOpened: false,
};

export const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpened: !state.isMenuOpened };
    case 'SET_PRIZE':
      return { ...state, prize: payload };

    default:
      return state;
  }
};
