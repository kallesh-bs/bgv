// Verfication.test.tsx

import { render, screen } from "@testing-library/react";
import Verfication from "../Verfication";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

const mockStore = configureStore([]);

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

describe("Verfication Component : ", () => {
  it("renders Verfication with EmployeeData : ", async () => {
    let store: any;
    let appSelector = jest.fn();
    let getAddressCheck = jest.fn();
    let dispatch = jest.fn();
    let fetchBgvEmployeeData = jest.fn();

    store = mockStore({
      bgvReducer: {
        employeeData: {
          verified_count: 0,
          rejected_count: 0,
          inprogress_count: 8,
          insufficient_count: 1,
          hold_count: 1,
          total_check: null,
        },
        isLoading: true,
        employeeDataById: {
          background_verification: {
            id: 37,
            user_id: 3,
            identity_check_documents: null,
            identity_check_documents_status: "in_progress",
            markshseet_10th: null,
            markshseet_10th_status: "in_progress",
            markshseet_12th: null,
            markshseet_12th_status: "in_progress",
            graduation_degrees: null,
            graduation_degrees_status: "in_progress",
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: "in_progress",
            address_check_documents: null,
            address_check_documents_status: "in_progress",
            relieving_letters: null,
            relieving_letters_status: "in_progress",
            experience_letters: null,
            experience_letters_status: "in_progress",
            bank_statements: null,
            bank_statements_status: "in_progress",
            hold: true,
          },
        },
        profileCompletionById: {},
        sidePopUpDocNavTab: 5,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <Verfication />
          </Router>
        </Provider>
      </I18nextProvider>
    );
    appSelector();
    getAddressCheck();
    await fetchBgvEmployeeData(1, "searchQuery")(dispatch);
    dispatch(fetchBgvEmployeeData(1, "fghj"));
    expect(screen.getByText("Total Checks")).toBeInTheDocument();
    expect(screen.getByText("Verified Checks")).toBeInTheDocument();
    expect(screen.getByText("Inprogress Checks")).toBeInTheDocument();
    expect(screen.getByText("Insufficient Checks")).toBeInTheDocument();
    expect(screen.getByText("Rejected Checks")).toBeInTheDocument();
  });

  it("renders Verfication with EmployeeData : ", async () => {
    let store: any;
    let appSelector = jest.fn();
    let getAddressCheck = jest.fn();
    let dispatch = jest.fn();
    let fetchBgvEmployeeData = jest.fn();

    store = mockStore({
      bgvReducer: {
        employeeData: {
          verified_count: 0,
          rejected_count: 0,
          inprogress_count: 8,
          insufficient_count: 1,
          hold_count: 1,
          total_check: [
            {
              id: 3,
              email: "shekhawatnavdeep.ns@gmail.com",
              full_name: null,
              phone_no: null,
              date_of_joining: null,
              designation: null,
              status: "in_progress",
            },
            {
              id: 9,
              email: "anusha.ugrannanavar@deeporion.com",
              full_name: null,
              phone_no: null,
              date_of_joining: "2024-05-25",
              designation: null,
              status: "in_progress",
            },
            {
              id: 13,
              email: "vaishalisinghnaruka@gmail.com",
              full_name: "Vaishali Naruka",
              phone_no: "9876543210",
              date_of_joining: null,
              designation: null,
              status: "in_progress",
            },
          ],
        },
        isLoading: true,
        employeeDataById: {
          background_verification: {
            id: 37,
            user_id: 3,
            identity_check_documents: null,
            identity_check_documents_status: "in_progress",
            markshseet_10th: null,
            markshseet_10th_status: "in_progress",
            markshseet_12th: null,
            markshseet_12th_status: "in_progress",
            graduation_degrees: null,
            graduation_degrees_status: "in_progress",
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: "in_progress",
            address_check_documents: null,
            address_check_documents_status: "in_progress",
            relieving_letters: null,
            relieving_letters_status: "in_progress",
            experience_letters: null,
            experience_letters_status: "in_progress",
            bank_statements: null,
            bank_statements_status: "in_progress",
            hold: true,
          },
        },
        profileCompletionById: {},
        sidePopUpDocNavTab: 5,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <Verfication />
          </Router>
        </Provider>
      </I18nextProvider>
    ).debug();
    
    appSelector();
    getAddressCheck();
    await fetchBgvEmployeeData(1, "searchQuery")(dispatch);
    dispatch(fetchBgvEmployeeData(1, "fghj"));
    expect(screen.getByText("Total Checks")).toBeInTheDocument();
    expect(screen.getByText("Verified Checks")).toBeInTheDocument();
    expect(screen.getByText("Inprogress Checks")).toBeInTheDocument();
    expect(screen.getByText("Insufficient Checks")).toBeInTheDocument();
    expect(screen.getByText("Rejected Checks")).toBeInTheDocument();
  });

  it("renders Verfication without EmployeeData : ", async () => {
    let store: any;
    let appSelector = jest.fn();
    let getAddressCheck = jest.fn();
    let dispatch = jest.fn();
    let fetchBgvEmployeeData = jest.fn();

    store = mockStore({
      bgvReducer: {
        employeeData: null || [null],
        isLoading: true,
        employeeDataById: {
          background_verification: {
            id: 37,
            user_id: 3,
            identity_check_documents: null,
            identity_check_documents_status: "in_progress",
            markshseet_10th: null,
            markshseet_10th_status: "in_progress",
            markshseet_12th: null,
            markshseet_12th_status: "in_progress",
            graduation_degrees: null,
            graduation_degrees_status: "in_progress",
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: "in_progress",
            address_check_documents: null,
            address_check_documents_status: "in_progress",
            relieving_letters: null,
            relieving_letters_status: "in_progress",
            experience_letters: null,
            experience_letters_status: "in_progress",
            bank_statements: null,
            bank_statements_status: "in_progress",
            hold: true,
          },
        },
        profileCompletionById: {},
        sidePopUpDocNavTab: 5,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <Verfication />
          </Router>
        </Provider>
      </I18nextProvider>
    ).debug();
    appSelector();
    getAddressCheck();
    await fetchBgvEmployeeData(1, "searchQuery")(dispatch);
    dispatch(fetchBgvEmployeeData("fghj"));
    expect(screen.getByText("Total Checks")).toBeInTheDocument();
    expect(screen.getByText("Verified Checks")).toBeInTheDocument();
    expect(screen.getByText("Inprogress Checks")).toBeInTheDocument();
    expect(screen.getByText("Insufficient Checks")).toBeInTheDocument();
    expect(screen.getByText("Rejected Checks")).toBeInTheDocument();
  });
});

// {
//   verified_count: 0,
//   rejected_count: 0,
//   inprogress_count: 8,
//   insufficient_count: 1,
//   hold_count: 1,
//   total_check: [
//     {
//       id: 3,
//       email: "shekhawatnavdeep.ns@gmail.com",
//       full_name: null,
//       phone_no: null,
//       date_of_joining: null,
//       designation: null,
//       status: "in_progress",
//     },
//     {
//       id: 9,
//       email: "anusha.ugrannanavar@deeporion.com",
//       full_name: null,
//       phone_no: null,
//       date_of_joining: "2024-05-25",
//       designation: null,
//       status: "in_progress",
//     },
//     {
//       id: 13,
//       email: "vaishalisinghnaruka@gmail.com",
//       full_name: "Vaishali Naruka",
//       phone_no: "9876543210",
//       date_of_joining: null,
//       designation: null,
//       status: "in_progress",
//     },
//   ],
// },
