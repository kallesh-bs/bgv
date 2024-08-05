// VerficationListing.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { IVerficationListingProps } from "utils/types";
import VerficationListing from "../VerficationListing";
// Mock the hooks and components
jest.mock("../useFetchbgvData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  __esModule: true,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock("../VerificationTable", () => ({
  __esModule: true,
  default: () => <div>VerificationTable</div>,
}));

jest.mock("../Paginate", () => ({
  __esModule: true,
  default: ({ currentPage, setCurrentPage }: any) => (
    <div>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
    </div>
  ),
}));

jest.mock("component/common/accessControlUi/Search", () => ({
  __esModule: true,
  default: ({ searchItem, setSearchItem }: any) => (
    <input
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
      placeholder="Search"
    />
  ),
}));

const renderComponent = (props: Partial<IVerficationListingProps> = {}) => {
  const defaultProps: IVerficationListingProps = {
    tabValue: { tab: 1, label: "Total Checks" },
    allEmpData: [
      { id: 1, status: "verified" },
      { id: 2, status: "in_progress" },
    ],
  };

  return render(<VerficationListing {...defaultProps} {...props} />);
};

describe("VerficationListing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByText("Total Checks")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("VerificationTable")).toBeInTheDocument();
  });

  it("displays the correct tab label", () => {
    renderComponent({ tabValue: { tab: 1, label: "Verified Checks" } });
    expect(screen.getByText("Verified Checks")).toBeInTheDocument();
  });

  it("handles search input changes", () => {
    renderComponent();
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput).toHaveValue("test");
  });

  it("handles pagination", () => {
    renderComponent();
    const nextButton = screen.getByText("Next");
    const previousButton = screen.getByText("Previous");

    fireEvent.click(nextButton);
    expect(screen.getByText("Showing 2 of 1")).toBeInTheDocument();

    fireEvent.click(previousButton);
    expect(screen.getByText("Showing 1 of 1")).toBeInTheDocument();
  });

  it("displays no data message when no data is present", () => {
    renderComponent({ allEmpData: [] });
    expect(screen.getByText("no_data_found")).toBeInTheDocument();
  });
});
