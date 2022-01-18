import React from "react";
import ReactDOM from "react-dom";
import IRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

import { Provider } from "react-redux";
import ReduxStore from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <IRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
