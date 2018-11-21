import { FETCH_USER_WITH_TOKEN, LOGOUT, TOGGLE_HEADER_MENU } from "./types";
import axios from "axios";
import { SERVER_DOMAIN, TOKEN_PREFIX, USER_PROFILE } from "../../config/config";

/**
 |--------------------------------------------------
 | LoginActions
 |--------------------------------------------------
 */
export const fetchUserWithToken = token => async dispatch => {
  dispatch({
    type: FETCH_USER_WITH_TOKEN,
    payload: (await axios.get(`${SERVER_DOMAIN}${USER_PROFILE}`, {
      headers: {
        Authorization: `${TOKEN_PREFIX}${token}`
      }
    })).data
  });
};

export const logout = () => ({ type: LOGOUT });

/**
 |--------------------------------------------------
 | HeaderActions
 |--------------------------------------------------
 */

export const toggleHeaderMenu = () => ({ type: TOGGLE_HEADER_MENU });

// export const fetchNotes = () => async dispatch => {
//   dispatch({ type: FETCH_NOTES, payload: (await axios.get(NOTES_URL)).data });
// };
//
// export const createNote = note => async dispatch => {
//   const response = await axios.post(NOTES_URL, note);
//   return response.status === 201
//     ? dispatch({ type: CREATE_NOTE, payload: response.data })
//     : dispatch({ type: CREATE_NOTE, payload: null });
// };
//
// export const filterNotes = term => {
//   return { type: FILTER_NOTES, payload: term };
// };
