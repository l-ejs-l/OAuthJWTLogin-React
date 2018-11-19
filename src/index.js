import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app/App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";

import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import theme from "./assets/jss/theme";

let store = createStore(reducers, applyMiddleware(reduxPromise, thunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
