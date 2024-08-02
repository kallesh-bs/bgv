import { fireEvent, render, screen } from "@testing-library/react";
import DocumentDropDown from "../DocumentDropDown";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

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

describe("DocumentDropDown Component : ", () => {
  let store: any;

  it("Opening Dropdown, Closing Dropdown, And Opening Notify PopUp for Tab 1 : ", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
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
        sidePopUpDocNavTab: 1,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <DocumentDropDown />
        </Provider>
      </I18nextProvider>
    );

    let RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    const leftArraowHandleDropDownbtn = screen.getByTestId(
      "leftArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(leftArraowHandleDropDownbtn);
    RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    let notifyPopUpbtn = screen.getByTestId("notifyPopUpbtn") as HTMLDivElement;
    fireEvent.click(notifyPopUpbtn);
  });

  it("Opening Dropdown, Closing Dropdown, And Opening Notify PopUp for Tab 2 : ", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
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
        sidePopUpDocNavTab: 2,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <DocumentDropDown />
        </Provider>
      </I18nextProvider>
    );

    // data-testid="notifyPopUpbtn"
    let RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    const leftArraowHandleDropDownbtn = screen.getByTestId(
      "leftArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(leftArraowHandleDropDownbtn);
    RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    let notifyPopUpbtn = screen.getByTestId("notifyPopUpbtn") as HTMLDivElement;
    fireEvent.click(notifyPopUpbtn);
  });

  it("Opening Dropdown, Closing Dropdown, And Opening Notify PopUp for Tab 3 : ", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
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
        sidePopUpDocNavTab: 3,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <DocumentDropDown />
        </Provider>
      </I18nextProvider>
    );

    // data-testid="notifyPopUpbtn"
    let RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    const leftArraowHandleDropDownbtn = screen.getByTestId(
      "leftArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(leftArraowHandleDropDownbtn);
    RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    let notifyPopUpbtn = screen.getByTestId("notifyPopUpbtn") as HTMLDivElement;
    fireEvent.click(notifyPopUpbtn);
  });

  it("Opening Dropdown, Closing Dropdown, And Opening Notify PopUp for Tab 4 : ", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
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
        sidePopUpDocNavTab: 4,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <DocumentDropDown />
        </Provider>
      </I18nextProvider>
    );

    // data-testid="notifyPopUpbtn"
    let RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    const leftArraowHandleDropDownbtn = screen.getByTestId(
      "leftArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(leftArraowHandleDropDownbtn);
    RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    let notifyPopUpbtn = screen.getByTestId("notifyPopUpbtn") as HTMLDivElement;
    fireEvent.click(notifyPopUpbtn);
  });

  it("Opening Dropdown, Closing Dropdown, And Opening Notify PopUp for Tab 5 : ", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
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
          <DocumentDropDown />
        </Provider>
      </I18nextProvider>
    );

    // data-testid="notifyPopUpbtn"
    let RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    const leftArraowHandleDropDownbtn = screen.getByTestId(
      "leftArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(leftArraowHandleDropDownbtn);
    RightArraowHandleDropDownbtn = screen.getByTestId(
      "RightArraowHandleDropDown"
    ) as HTMLDivElement;
    fireEvent.click(RightArraowHandleDropDownbtn);
    let notifyPopUpbtn = screen.getByTestId("notifyPopUpbtn") as HTMLDivElement;
    fireEvent.click(notifyPopUpbtn);
  });
  
});
