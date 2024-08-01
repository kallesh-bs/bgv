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
  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("disables the previous button on the first page", () => {
    renderComponent({ currentPage: 1 });
    expect(screen.getByText("Previous")).toBeDisabled();
  });

  it("disables the next button on the last page group", () => {
    renderComponent({ currentPage: 10 });
    expect(screen.getByText("Next")).toBeDisabled();
  });

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

  it("displays the correct number of page numbers", () => {
    renderComponent({ currentPage: 1 });
    const pageNumbers = screen.getAllByRole("heading");
    expect(pageNumbers).toHaveLength(5);
    expect(pageNumbers[0]).toHaveTextContent("1");
    expect(pageNumbers[4]).toHaveTextContent("5");
  });

  it("highlights the current page", () => {
    renderComponent({ currentPage: 3 });
    expect(screen.getByText("3")).toHaveClass("bg-[#031B59] text-white");
  });
});
