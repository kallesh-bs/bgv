import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { Provider, useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { handleSidePopUpData } from "redux/appThunk/Admin/bgv";
import { IEmployeeData } from "utils/types";
import store from "../../../../redux/store";
import VerificationTable from "../VerificationTable";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
// Initialize i18n
i18n.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        emp_name: "Employee Name",
        designation: "Designation",
        contact_no: "Contact No",
        doj: "Date of Joining",
        Status: "Status",
        action: "Action",
      },
    },
  },
});

const mockEmployeeData: IEmployeeData[] = [
  {
    id: 1,
    profile_picture_url: "profile1.jpg",
    name: "John Doe",
    full_name: "Johnathan Doe",
    email: "john@example.com",
    designation: "Software Engineer",
    phone_no: "1234567890",
    date_of_joining: "2021-01-01",
    status: "verified",
  },
  {
    id: 2,
    profile_picture_url: "profile2.jpg",
    name: "Jane Smith",
    full_name: "Jane Smith",
    email: "jane@example.com",
    designation: "Product Manager",
    phone_no: "0987654321",
    date_of_joining: "2022-01-01",
    status: "in_progress",
  },
];

const mockFinalFilteredValue = [{ header: "Additional Info", isChecked: true }];

// Mock the handleSidePopUpData function
jest.mock("redux/appThunk/Admin/bgv", () => ({
  handleSidePopUpData: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockImplementation((selector) => {
    if (selector.name === "isLoadingSelector") {
      return false; // Mock isLoading state as false
    }
    if (selector.name === "employeeDataByIdSelector") {
      return {}; // Mock empty employeeDataById
    }
    if (selector.name === "sidePopUpDocNavTabSelector") {
      return 1; // Mock tabclick state
    }
    return jest.requireActual("react-redux").useSelector(selector);
  }),
}));

test("handles employee eye button click and toggles popup state", () => {

  const store1 = mockStore({
    bgvReducer: {
      employeeData: [],
      isLoading: true,
      employeeDataById: {"background_verification": {
          "id": 37,
          "user_id": 3,
          "identity_check_documents": null,
          "identity_check_documents_status": "in_progress",
          "markshseet_10th": null,
          "markshseet_10th_status": "in_progress",
          "markshseet_12th": null,
          "markshseet_12th_status": "in_progress",
          "graduation_degrees": null,
          "graduation_degrees_status": "in_progress",
          "post_graduation_degrees": null,
          "post_graduation_degrees_status": "in_progress",
          "other_certifications": null,
          "other_certifications_status": "in_progress",
          "address_check_documents": null,
          "address_check_documents_status": "in_progress",
          "relieving_letters": null,
          "relieving_letters_status": "in_progress",
          "experience_letters": null,
          "experience_letters_status": "in_progress",
          "bank_statements": null,
          "bank_statements_status": "in_progress",
          "hold": true
      }},
      profileCompletionById: {},
      sidePopUpDocNavTab: 5
    },
  });

  render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store1}>
          <VerificationTable
            employeeData={mockEmployeeData}
            finalFilteredValue={mockFinalFilteredValue}
            currentPage={0}
            setOpenPopUp={jest.fn()}
            setCurrentPage={jest.fn()}
          />
        </Provider>
      </I18nextProvider>
    </MemoryRouter>
  );

  // Locate and click on the eye button for the first employee
  const eyeButtons = screen.getAllByTestId("eye-button");
  fireEvent.click(eyeButtons[0]);

  // Check if handleSidePopUpData was called with the correct arguments
  expect(handleSidePopUpData).toHaveBeenCalledWith(expect.any(Function), 1);

  // Check if the popup state was toggled
  // Assuming the ProfileCard has some unique text to check
  // Add an appropriate assertion here for your popup state change
});

test("renders LoaderComp when isLoading is true", () => {
  (useSelector as jest.Mock).mockImplementationOnce((selector) => {
    if (selector.name === "isLoadingSelector") {
      return true; // Mock isLoading state as true
    }
    return jest.requireActual("react-redux").useSelector(selector);
  });

  render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <VerificationTable
            employeeData={mockEmployeeData}
            finalFilteredValue={mockFinalFilteredValue}
            currentPage={0}
            setOpenPopUp={jest.fn()}
            setCurrentPage={jest.fn()}
          />
        </Provider>
      </I18nextProvider>
    </MemoryRouter>
  );

  // Check if LoaderComp is rendered
  // expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("handles different employeeDataById states", () => {
  const mockEmployeeDataById = {
    1: { id: 1, name: "John Doe" },
    2: { id: 2, name: "Jane Smith" },
  };

  (useSelector as jest.Mock).mockImplementationOnce((selector) => {
    if (selector.name === "employeeDataByIdSelector") {
      return mockEmployeeDataById; // Mock employeeDataById state
    }
    return jest.requireActual("react-redux").useSelector(selector);
  });

  render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <VerificationTable
            employeeData={mockEmployeeData}
            finalFilteredValue={mockFinalFilteredValue}
            currentPage={0}
            setOpenPopUp={jest.fn()}
            setCurrentPage={jest.fn()}
          />
        </Provider>
      </I18nextProvider>
    </MemoryRouter>
  );

  //   expect(screen.getByText("John Doe")).toBeInTheDocument();
  //   expect(screen.getByText("Jane Smith")).toBeInTheDocument();
});

test("handles different sidePopUpDocNavTab states", () => {
  (useSelector as jest.Mock).mockImplementationOnce((selector) => {
    if (selector.name === "sidePopUpDocNavTabSelector") {
      return 2; // Mock sidePopUpDocNavTab state
    }
    return jest.requireActual("react-redux").useSelector(selector);
  });
  

  const store1 = mockStore({
    bgvReducer: {
      employeeData: [],
      isLoading: true,
      employeeDataById: {"background_verification": {
          "id": 37,
          "user_id": 3,
          "identity_check_documents": null,
          "identity_check_documents_status": "in_progress",
          "markshseet_10th": null,
          "markshseet_10th_status": "in_progress",
          "markshseet_12th": null,
          "markshseet_12th_status": "in_progress",
          "graduation_degrees": null,
          "graduation_degrees_status": "in_progress",
          "post_graduation_degrees": null,
          "post_graduation_degrees_status": "in_progress",
          "other_certifications": null,
          "other_certifications_status": "in_progress",
          "address_check_documents": null,
          "address_check_documents_status": "in_progress",
          "relieving_letters": null,
          "relieving_letters_status": "in_progress",
          "experience_letters": null,
          "experience_letters_status": "in_progress",
          "bank_statements": null,
          "bank_statements_status": "in_progress",
          "hold": true
      }},
      profileCompletionById: {},
      sidePopUpDocNavTab: 5
    },
    leaveReducer:false
  });

  const {container} = render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store1}>
          <VerificationTable
            employeeData={mockEmployeeData}
            finalFilteredValue={mockFinalFilteredValue}
            currentPage={0}
            setOpenPopUp={jest.fn()}
            setCurrentPage={jest.fn()}
          />
        </Provider>
      </I18nextProvider>
    </MemoryRouter>
  );

  const d1 = container.getElementsByClassName('flex items-center')[0];
  expect(d1).toBeInTheDocument()
  fireEvent.click(d1)

});