import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import allReducers from "./Reducers/CombineReducer";
import App from "./Components/app";
import { Provider } from "react-redux";

const store = createStore(allReducers);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
