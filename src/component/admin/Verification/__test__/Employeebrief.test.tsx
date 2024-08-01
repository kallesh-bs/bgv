// Employeebrief.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import i18n from "i18next";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Employeebrief from "../Employeebrief";

// Mock ProfileAvatar component
jest.mock("component/common/ProfileAvatar", () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => <div>{name}</div>,
}));

i18n.init({
  lng: "en", // set the default language
  resources: {
    en: {
      translation: {
        // add your translations here
      },
    },
  },
});

const renderWithProviders = (ui: React.ReactElement) => {
  let store: any;
  return render(
    <Router>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Employeebrief />
        </Provider>
      </I18nextProvider>
    </Router>
  );
};

describe("Employeebrief", () => {
  const props = {
    names: "John Doe",
    email: "john.doe@example.com",
    userName: "johndoe",
    userEmail: "john.doe@example.com",
    id: 1,
    empcode: "EMP001",
    imageUrl: "",
  };

  it("renders without crashing", () => {
    renderWithProviders(<Employeebrief {...props} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("EMP001")).toBeInTheDocument();
  });

  it("displays ProfileAvatar component if imageUrl is not provided", () => {
    renderWithProviders(<Employeebrief {...props} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("navigates to the correct path on click", () => {
    renderWithProviders(<Employeebrief {...props} />);
    const nameElement = screen.getByText("John Doe");
    fireEvent.click(nameElement);
    // Add your expectation here for navigation
    // Example: expect(window.location.pathname).toBe("/timeSheet/view/1");
  });

  it("shows chat button on hover", () => {
    renderWithProviders(<Employeebrief {...props} />);
    const container = screen.getByText("John Doe");
    fireEvent.mouseEnter(container!);
    expect(screen.getByTestId("chat-button")).toBeInTheDocument();
  });

  it("displays hover state message on chat button hover", () => {
    renderWithProviders(<Employeebrief {...props} />);
    const container = screen.getByText("John Doe");
    fireEvent.mouseEnter(container!);
    const chatButton = screen.getByTestId("chat-button");
    fireEvent.mouseEnter(chatButton);
    expect(
      screen.getByText("Chat App is under Development")
    ).toBeInTheDocument();
  });

  it("handles mouse leave event correctly", () => {
    renderWithProviders(<Employeebrief {...props} />);
    const container = screen.getByText("John Doe");
    fireEvent.mouseEnter(container!);
    fireEvent.mouseLeave(container!);
    expect(screen.queryByTestId("chat-button")).not.toBeInTheDocument();
  });
});
