import { FETCH_USER_WITH_TOKEN, LOGOUT } from "../actions/types";

const loginState = {
  user: {
    email: "",
    name: ""
  },
  logged: false,
  timesLogged: 0
};

/**
 |--------------------------------------------------
 | LoginReducer
 |--------------------------------------------------
 */
export default (state = loginState, action) => {
  switch (action.type) {
    case FETCH_USER_WITH_TOKEN:
      return {
        ...state,
        user: {
          email: action.payload.username,
          name: action.payload.name
        },
        logged: true
      };

    case LOGOUT:
      return {
        ...loginState
      };

    default:
      return state;
  }
};
