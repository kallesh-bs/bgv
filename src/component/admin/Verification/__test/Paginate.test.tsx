// Paginate.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { IPaginateProps } from "utils/types";
import Paginate from "../Paginate";

const renderComponent = (props: Partial<IPaginateProps> = {}) => {
  const defaultProps: IPaginateProps = {
    next: "Next",
    previous: "Previous",
    initialPageCount: 10,
    pageRangeDisplayed: 5,
    currentPage: 1,
    setCurrentPage: jest.fn(),
  };

  return render(<Paginate {...defaultProps} {...props} />);
};

describe("Paginate", () => {
  it("navigates to the next pages", () => {
    const setCurrentPage = jest.fn();
    renderComponent({ currentPage: 1, setCurrentPage });
    fireEvent.click(screen.getByText("Next"));
    expect(setCurrentPage).toHaveBeenCalledWith(6);
  });

  it("navigates to the previous pages", () => {
    const setCurrentPage = jest.fn();
    renderComponent({ currentPage: 6, setCurrentPage });
    fireEvent.click(screen.getByText("Previous"));
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it("sets the current page on page number click", () => {
    const setCurrentPage = jest.fn();
    renderComponent({ currentPage: 1, setCurrentPage });
    fireEvent.click(screen.getByText("3"));
    expect(setCurrentPage).toHaveBeenCalledWith(3);
  });
});
