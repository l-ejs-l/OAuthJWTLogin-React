import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log("Can't parse store from localStorage");
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log("Can't parse store from localStorage");
  }
};

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(reduxPromise, thunk))
);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});

export default store;
