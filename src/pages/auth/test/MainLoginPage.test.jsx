/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../Login";

const mockStore = configureMockStore();

describe("MainLoginPage component", () => {
  it("renders SelectRole initially", () => {
    const store = mockStore({});

    const { getByText } = render(
      <Provider store={store}>
        {" "}
        <Login />
      </Provider>
    );

    const selectRoleText = getByText(/admin/i);

    expect(selectRoleText).toBeInTheDocument();
  });

  it("renders LoginComponent when continueClicked is true", () => {
    const store = mockStore({});

    const { getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const continueButton = getByText(/Continue/i);

    fireEvent.click(continueButton);
  });

  it("passes the correct props to LoginComponent", () => {
    const store = mockStore({});

    const { getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const continueButton = getByText(/Continue/i);

    fireEvent.click(continueButton);
  });

});
