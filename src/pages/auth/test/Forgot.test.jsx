/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Forgot from "../Forgot";
import store from "redux/store";

describe("Forgot Component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("renders Forgot Password component without crashing", () => {
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <Forgot />
          </Router>
        </Provider>,
        container
      );
    });
  });

  it("handles Forgot Password Form submission correctly", async () => {
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <Forgot />
          </Router>
        </Provider>,
        container
      );
    });

    const emailInput = screen.getByLabelText("email");
    const sendRecoveryLinkButton = screen.getByText("sendRecoveryLink");

    act(() => {
      fireEvent.change(emailInput, { target: { value: "test@yopmail.com" } });
      fireEvent.click(sendRecoveryLinkButton);
    });
  });
});
