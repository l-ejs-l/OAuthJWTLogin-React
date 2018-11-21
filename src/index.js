import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";

import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import theme from "./assets/jss/theme";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(reduxPromise, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
