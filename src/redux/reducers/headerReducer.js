/**
 |--------------------------------------------------
 | ViewsReducer
 |--------------------------------------------------
 */
import { LOGOUT, TOGGLE_HEADER_MENU } from "../actions/types";

const initialState = {
  loading: false,
  menuOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HEADER_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};
