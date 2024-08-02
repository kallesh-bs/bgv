// Verfication.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
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

// Mock the useRedux hook
// jest.mock("hooks/useRedux", () => ({
//   __esModule: true,
//   default: () => ({
//     appSelector: jest.fn((selector) =>
//       selector({
//         bgvReducer: {
//           employeeData: {
//             total_check: [
//               { status: "verified" },
//               { status: "in_progress" },
//               { status: "insufficient" },
//               { status: "rejected" },
//             ],
//             verified_count: 1,
//             inprogress_count: 1,
//             insufficient_count: 1,
//             rejected_count: 1,
//           },
//         },
//       })
//     ),
//   }),
// }));

describe("Verfication", () => {
  it("renders without crashing", async () => {
    let store: any;
    let appSelector = jest.fn();
    let getAddressCheck = jest.fn();
    let dispatch = jest.fn();
    let fetchBgvEmployeeData = jest.fn();

    store = mockStore({
      bgvReducer: {
        employeeData: {
          total_check: [
            { status: "verified" },
            { status: "in_progress" },
            { status: "insufficient" },
            { status: "rejected" },
          ],
          rejected_count:new Error()
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
      <Provider store={store}>
        <Router>
          <Verfication />
        </Router>
      </Provider>
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

  it("renders without crashing 2 <--", async () => {
    let store: any;
    let appSelector = jest.fn();
    let getAddressCheck = jest.fn();
    let dispatch = jest.fn();
    let fetchBgvEmployeeData = jest.fn();

    store = mockStore({
      bgvReducer: {
        employeeData: null||[null],
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

  // it("updates tab value and bgv status on item click", () => {
  //   render(<Verfication />);
  //   const totalChecks = screen.getByText("Total Checks");
  //   fireEvent.click(totalChecks);
  //   expect(screen.getByText("Total Checks")).toHaveStyle({
  //     borderWidth: "1px",
  //   });
  // });

  // it("passes correct data to VerficationListing", () => {
  //   render(<Verfication />);
  //   const totalChecks = screen.getByText("Total Checks");
  //   fireEvent.click(totalChecks);
  //   expect(screen.getByText("VerficationListing")).toBeInTheDocument();
  // });

  // it("verification rendering ",()=>{

  //   let store:any;
  //   let appSelector = jest.fn();
  //   let getAddressCheck = jest.fn();

  //   store = mockStore({
  //     bgvReducer: {
  //       employeeData: [],
  //       isLoading: true,
  //       employeeDataById: {"background_verification": {
  //           "id": 37,
  //           "user_id": 3,
  //           "identity_check_documents": null,
  //           "identity_check_documents_status": "in_progress",
  //           "markshseet_10th": null,
  //           "markshseet_10th_status": "in_progress",
  //           "markshseet_12th": null,
  //           "markshseet_12th_status": "in_progress",
  //           "graduation_degrees": null,
  //           "graduation_degrees_status": "in_progress",
  //           "post_graduation_degrees": null,
  //           "post_graduation_degrees_status": "in_progress",
  //           "other_certifications": null,
  //           "other_certifications_status": "in_progress",
  //           "address_check_documents": null,
  //           "address_check_documents_status": "in_progress",
  //           "relieving_letters": null,
  //           "relieving_letters_status": "in_progress",
  //           "experience_letters": null,
  //           "experience_letters_status": "in_progress",
  //           "bank_statements": null,
  //           "bank_statements_status": "in_progress",
  //           "hold": true
  //       }},
  //       profileCompletionById: {},
  //       sidePopUpDocNavTab: 5
  //     },
  //   });

  //   render(
  //     <Provider store={store}>
  //       <Verfication />
  //     </Provider>
  //   );
  //   appSelector()
  //   getAddressCheck()
  // })
});
