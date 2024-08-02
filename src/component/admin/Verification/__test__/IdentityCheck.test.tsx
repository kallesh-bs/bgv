import { fireEvent, render, screen } from "@testing-library/react";
import IdentifyCheck from "../IdentityCheck";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { VerificationDataKey } from "../types";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

i18n.init({
  lng: "en", 
  resources: {
    en: {
      translation: {
      },
    },
  },
});

const empDataById = { id: 2 };
const item = { name: "Mock File", url: "mock-url" };
const dispatch = jest.fn();

const handleFileDelete = jest.fn();

describe("IdentityCheck Component", () => {
  let store: any;

  beforeEach(() => {});

  it("renders without Documents : ", () => {
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
          <IdentifyCheck selectOption={"Aadhar Card"} />
        </Provider>
      </I18nextProvider>
    );

  });

  it("renders with Documents : ", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
        isLoading: true,
        employeeDataById: {
          background_verification: {
            id: 37,
            user_id: 3,
            identity_check_documents: [
              {
                url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/sdyu03tcu3tet4oah7nto7y63nel",
                name: "Screenshot from 2024-07-22 11-05-06.png",
                type: "image/png",
              },
            ],
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
          <IdentifyCheck selectOption={"Aadhar Card"} />
        </Provider>
      </I18nextProvider>
    );

    let deleteFilebtn = screen.getByTestId("deleteFilebtn") as HTMLDivElement;
    fireEvent.click(deleteFilebtn);
    handleFileDelete(
      empDataById.id,
      item.url,
      VerificationDataKey.IDENTITY_CHECK_DOCUMENTS,
      dispatch
    );
    expect(handleFileDelete).toHaveBeenCalledTimes(1);
    expect(handleFileDelete).toHaveBeenCalledWith(
      empDataById.id,
      item.url,
      VerificationDataKey.IDENTITY_CHECK_DOCUMENTS,
      dispatch
    );
  });
  
});
