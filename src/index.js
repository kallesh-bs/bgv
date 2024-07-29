import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Trans } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Trans>
    <Provider store={store}>
      <App />
    </Provider>
  </Trans>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





// import App from "App";
// import ReactDOM from "react-dom/client";
// import { Trans } from "react-i18next";
// import { Provider } from "react-redux";
// import store from "redux/store";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Trans>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Trans>
// );
