import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import ExtraActions from "../ExtraActions";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { VerificationDataKey, VerificationDocStatus } from "../types";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

i18n.init({
  lng: "en",
  resources: {
    en: {
      translation: {},
    },
  },
});

describe("ExtraActions Component : ", () => {
  let store: any;

  it("renders with no documents with unexpected Tab 0 : ", () => {
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
        sidePopUpDocNavTab: 0,
      },
    });
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ExtraActions nodata={false} doc_status_column={""} doc_column={""} />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 1", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
        isLoading: true,
        employeeDataById: {
          background_verification: {
            id: 37,
            user_id: 3,
            identity_check_documents: null,
            identity_check_documents_status: VerificationDocStatus.VERIFIED,
            markshseet_10th: null,
            markshseet_10th_status: VerificationDocStatus.REJECTED,
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
          <ExtraActions
            nodata={true}
            doc_status_column={
              VerificationDataKey.IDENTITY_CHECK_DOCUMENTS_STATUS
            }
            doc_column={VerificationDataKey.IDENTITY_CHECK_DOCUMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 1", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
        isLoading: true,
        employeeDataById: {
          background_verification: {
            id: 37,
            user_id: 3,
            identity_check_documents: null,
            identity_check_documents_status: VerificationDocStatus.VERIFIED,
            markshseet_10th: null,
            markshseet_10th_status: VerificationDocStatus.REJECTED,
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
          <ExtraActions
            nodata={false}
            doc_status_column={
              VerificationDataKey.IDENTITY_CHECK_DOCUMENTS_STATUS
            }
            doc_column={VerificationDataKey.IDENTITY_CHECK_DOCUMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 2", () => {
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
            markshseet_10th_status: VerificationDocStatus.REJECTED,
            markshseet_12th: null,
            markshseet_12th_status: VerificationDocStatus.REJECTED,
            graduation_degrees: null,
            graduation_degrees_status: VerificationDocStatus.REJECTED,
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: VerificationDocStatus.REJECTED,
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
          <ExtraActions
            nodata={true}
            doc_status_column={
              VerificationDataKey.MARKS_SHEET_10TH_STATUS
            }
            doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 2", () => {
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
            markshseet_10th_status: VerificationDocStatus.REJECTED,
            markshseet_12th: null,
            markshseet_12th_status: VerificationDocStatus.REJECTED,
            graduation_degrees: null,
            graduation_degrees_status: VerificationDocStatus.REJECTED,
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: VerificationDocStatus.REJECTED,
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
          <ExtraActions
            nodata={false}
            doc_status_column={
              VerificationDataKey.MARKS_SHEET_10TH_STATUS
            }
            doc_column={VerificationDataKey.MARKS_SHEET_10TH}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 2", () => {
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
            markshseet_10th_status: VerificationDocStatus.INSUFFICIENT,
            markshseet_12th: null,
            markshseet_12th_status: VerificationDocStatus.REJECTED,
            graduation_degrees: null,
            graduation_degrees_status: VerificationDocStatus.REJECTED,
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: VerificationDocStatus.REJECTED,
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
          <ExtraActions
            nodata={true}
            doc_status_column={
              VerificationDataKey.MARKS_SHEET_10TH_STATUS
            }
            doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 2", () => {
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
            markshseet_10th_status: VerificationDocStatus.INSUFFICIENT,
            markshseet_12th: null,
            markshseet_12th_status: VerificationDocStatus.REJECTED,
            graduation_degrees: null,
            graduation_degrees_status: VerificationDocStatus.REJECTED,
            post_graduation_degrees: null,
            post_graduation_degrees_status: "in_progress",
            other_certifications: null,
            other_certifications_status: VerificationDocStatus.REJECTED,
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
          <ExtraActions
            nodata={false}
            doc_status_column={
              VerificationDataKey.MARKS_SHEET_10TH_STATUS
            }
            doc_column={VerificationDataKey.MARKS_SHEET_10TH}
          />
        </Provider>
      </I18nextProvider>
    );
  });


  it("renders with no documents with Tab 3", () => {
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
          <ExtraActions
            nodata={true}
            doc_status_column={
              VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS
            }
            doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders with no documents with Tab 4", () => {
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

    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ExtraActions
            nodata={true}
            doc_status_column={
              VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS
            }
            doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
    expect(getByText("Update/Add new document")).toBeInTheDocument();
  });

  it("calls handleUploadFile on click", () => {
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
            bank_statements_status: "verified",
            hold: true,
          },
        },
        profileCompletionById: {},
        sidePopUpDocNavTab: 4,
      },
    });

    const handleUploadFile = jest.fn();
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ExtraActions
            nodata={true}
            doc_status_column={
              VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS
            }
            doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}
          />
        </Provider>
      </I18nextProvider>
    );
    const button = getByText("Update/Add new document") as HTMLDivElement;
    fireEvent.click(button);
    const input = screen.getByTestId("handleFileChange1");
    fireEvent.change(input);
  });

  it("calls handleUpdateStatus on click", () => {
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
            other_certifications_status: "rejected",
            address_check_documents: null,
            address_check_documents_status: "in_progress",
            relieving_letters: null,
            relieving_letters_status: "INSUFFICIENT",
            experience_letters: null,
            experience_letters_status: "in_progress",
            bank_statements: null,
            bank_statements_status: "verified",
            hold: true,
          },
        },
        profileCompletionById: {},
        sidePopUpDocNavTab: 4,
      },
    });

    // const handleUploadFile = jest.fn();
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ExtraActions
            nodata={false}
            doc_status_column={
              VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS
            }
            doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}
          />
        </Provider>
      </I18nextProvider>
    );

    // expect(handleUploadFile).toHaveBeenCalledTimes(1);
    const extraActionPopUpbtn = screen.getByTestId(
      "extraActionPopUpbtn"
    ) as HTMLDivElement;
    fireEvent.click(extraActionPopUpbtn);
    const Verify = getByText("Verify");
    fireEvent.click(Verify);
    const Insufficent = getByText("Insufficent");
    fireEvent.click(Insufficent);
    const Reject = getByText("Reject");
    fireEvent.click(Reject);
    const upf = getByText("Update/Add new document");
    fireEvent.click(upf);
    const input = screen.getByTestId("handleFileChange2") as HTMLDivElement;
    fireEvent.change(input);
  });
});
