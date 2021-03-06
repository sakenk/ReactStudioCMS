import React from "react";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";

import store, { history } from "./store/index";

import "./index.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
