import App from "App";
import ReactDOM from "react-dom/client";
import { Trans } from "react-i18next";
import { Provider } from "react-redux";
import store from "redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Trans>
    <Provider store={store}>
      <App />
    </Provider>
  </Trans>
);
