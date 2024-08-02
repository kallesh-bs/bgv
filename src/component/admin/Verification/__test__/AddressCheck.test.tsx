import { fireEvent, render, screen } from "@testing-library/react";
import AddressCheck from "../AddressCheck";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { VerificationDataKey } from "../types";
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

const empDataById = { id: 3 };
const item1 = {
  name: "sample1.pdf",
  url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh21",
};
const dispatch = jest.fn();
const handleFileDelete = jest.fn();

describe("AddressCheck Component : ", () => {
  let store: any;

  it("renders with documents :", () => {
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
            markshseet_12th: [
              {
                url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh22",
                name: "sample2.pdf",
                type: "image/png",
              },
            ],
            markshseet_12th_status: "in_progress",
            graduation_degrees: [
              {
                url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh23",
                name: "sample3.pdf",
                type: "image/png",
              },
            ],
            graduation_degrees_status: "in_progress",
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: [
              {
                url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh24",
                name: "sample4.pdf",
                type: "image/png",
              },
            ],
            other_certifications_status: "in_progress",
            address_check_documents: [
              {
                url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh21",
                name: "sample1.pdf",
                type: "image/png",
              },
            ],
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
          <AddressCheck selectOption={"Aadhar Card"} />
        </Provider>
      </I18nextProvider>
    );

    let deleteFilebtn1 = screen.getByTestId(
      `deleteFilebtn${item1.url}`
    ) as HTMLDivElement;
    fireEvent.click(deleteFilebtn1);
    handleFileDelete(
      empDataById.id,
      item1.url,
      VerificationDataKey.ADDRESS_CHECK_DOUCMENTS,
      dispatch
    );
    expect(handleFileDelete).toHaveBeenCalledTimes(1);
    expect(handleFileDelete).toHaveBeenCalledWith(
      empDataById.id,
      item1.url,
      VerificationDataKey.ADDRESS_CHECK_DOUCMENTS,
      dispatch
    );
  });

  it("renders without documents ", () => {
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
          <AddressCheck selectOption={"Aadhar card"} />
        </Provider>
      </I18nextProvider>
    );
  });
});
