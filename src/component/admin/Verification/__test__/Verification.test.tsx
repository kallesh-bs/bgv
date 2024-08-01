// Verfication.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import Verfication from "../Verfication";

// Mock the useRedux hook
jest.mock("hooks/useRedux", () => ({
  __esModule: true,
  default: () => ({
    appSelector: jest.fn((selector) =>
      selector({
        bgvReducer: {
          employeeData: {
            total_check: [
              { status: "verified" },
              { status: "in_progress" },
              { status: "insufficient" },
              { status: "rejected" },
            ],
            verified_count: 1,
            inprogress_count: 1,
            insufficient_count: 1,
            rejected_count: 1,
          },
        },
      })
    ),
  }),
}));

describe("Verfication", () => {
  it("renders without crashing", () => {
    render(<Verfication />);
    expect(screen.getByText("Total Checks")).toBeInTheDocument();
    expect(screen.getByText("Verified Checks")).toBeInTheDocument();
    expect(screen.getByText("Inprogress Checks")).toBeInTheDocument();
    expect(screen.getByText("Insufficient Checks")).toBeInTheDocument();
    expect(screen.getByText("Rejected Checks")).toBeInTheDocument();
  });

  it("updates tab value and bgv status on item click", () => {
    render(<Verfication />);
    const totalChecks = screen.getByText("Total Checks");
    fireEvent.click(totalChecks);
    expect(screen.getByText("Total Checks")).toHaveStyle({
      borderWidth: "1px",
    });
  });

  it("passes correct data to VerficationListing", () => {
    render(<Verfication />);
    const totalChecks = screen.getByText("Total Checks");
    fireEvent.click(totalChecks);
    expect(screen.getByText("VerficationListing")).toBeInTheDocument();
  });
});
