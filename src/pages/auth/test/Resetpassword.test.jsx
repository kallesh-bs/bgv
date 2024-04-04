/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResetPassword from "../ResetPassword";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Resetpassword Component", () => {
  it("renders the component correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ResetPassword />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getAllByText("newPassword")).toBeTruthy();

    expect(screen.getByText("newPasswordMessage")).toBeInTheDocument();
  });

  it("submits form with valid data", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ResetPassword />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("newPassword"), {
      target: { value: "ValidPassword1" },
    });
    fireEvent.change(screen.getByLabelText("confirmPassword"), {
      target: { value: "ValidPassword1" },
    });

    fireEvent.click(screen.getByText("setNewPassword"));
  });
});
