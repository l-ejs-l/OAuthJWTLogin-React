import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import headerReducer from "./headerReducer";

export default combineReducers({
  auth: loginReducer,
  header: headerReducer
});
