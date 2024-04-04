/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OtpVerification from "../OtpVerification";

describe("Otp component", () => {
  test("renders without errors", () => {
    render(<OtpVerification />);
  });

  test("displays the company logo", () => {
    const { getByAltText } = render(<OtpVerification />);
    const logo = getByAltText("company_logo");
    expect(logo).toBeInTheDocument();
  });

  test("displays the 'Enter Your OTP' heading", () => {
    const { getByText } = render(<OtpVerification />);
    const heading = getByText("Enter Your OTP");
    expect(heading).toBeInTheDocument();
  });

  test("renders four input fields for OTP", () => {
    const { getAllByRole } = render(<OtpVerification />);
    const otpInputs = getAllByRole("textbox");
    expect(otpInputs.length).toBe(4);
  });

  test("allows entering values in OTP input fields", () => {
    const { getAllByRole } = render(<OtpVerification />);
    const otpInputs = getAllByRole("textbox");

    otpInputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: (index + 1).toString() } });
      expect(input.value).toBe((index + 1).toString());
    });
  });

  test("submits the form when 'Submit' button is clicked", () => {
    const { getByText } = render(<OtpVerification />);
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
  });
});
