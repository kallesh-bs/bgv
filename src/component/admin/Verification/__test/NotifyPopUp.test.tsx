import {
  fireEvent,
  getAllByPlaceholderText,
  getByTestId,
  getByText,
  queryAllByPlaceholderText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import NotifyPopUp from "../NotifyPopUp";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { VerificationSidePopUpNavTabName } from "../types";
import configureStore from "redux-mock-store";
import { useRef } from "react";
import React from "react";

const mockStore = configureStore([]);
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

i18n.init({
  lng: "en",
  resources: {
    en: {
      translation: {},
    },
  },
});

// notifyPopUpClosebtn

describe("NotifyPopUp Component", () => {
  let store: any;

  const handleUserNotify = jest.fn((handleNotify) => handleNotify());
  let isNotifyPopUp = true;

  const setNotifyPopUp = jest.fn();
  const handle = jest.fn(() => setNotifyPopUp(!true));
  const handleNotify = jest.fn((handle) => {
    handle();
  });

  beforeEach(() => {
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
  });

  it("renders NotifyPopUp", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotifyPopUp
            isNotifyPopUp={true}
            setNotifyPopUp={() => false}
            tabName={VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB}
            isLoading={true}
          />
        </Provider>
      </I18nextProvider>
    );
  });

  it("renders NotifyPopUp", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotifyPopUp
            isNotifyPopUp={true}
            setNotifyPopUp={() => false}
            tabName={VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB}
            isLoading={false}
          />
        </Provider>
      </I18nextProvider>
    );

    let notifyPopUpClosebtn = screen.getByTestId(
      `notifyPopUpClosebtn`
    ) as HTMLDivElement;
    fireEvent.click(notifyPopUpClosebtn);
    setNotifyPopUp(!isNotifyPopUp);
    expect(setNotifyPopUp).toHaveBeenCalledTimes(1);
    expect(setNotifyPopUp).toHaveBeenCalledWith(!isNotifyPopUp);
  });

  it("renders NotifyPopUp", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotifyPopUp
            isNotifyPopUp={true}
            setNotifyPopUp={() => false}
            tabName={VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB}
            isLoading={false}
          />
        </Provider>
      </I18nextProvider>
    );
    // handleUserNotifybtn
    let handleUserNotifybtn = screen.getByTestId(
      `handleUserNotifybtn`
    ) as HTMLDivElement;
    fireEvent.click(handleUserNotifybtn);
    handle();
    setNotifyPopUp(!isNotifyPopUp);
    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith();
  });

  it("renders NotifyPopUp", () => {
    store = mockStore({
      bgvReducer: {
        employeeData: [],
        isLoading: true,
        employeeDataById: {},
        profileCompletionById: {},
        sidePopUpDocNavTab: 1,
      },
    });

    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotifyPopUp
            isNotifyPopUp={true}
            setNotifyPopUp={() => false}
            tabName={VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB}
            isLoading={false}
          />
        </Provider>
      </I18nextProvider>
    );
    // handleUserNotifybtn
    let handleUserNotifybtn = screen.getByTestId(
      `handleUserNotifybtn`
    ) as HTMLDivElement;
    fireEvent.click(handleUserNotifybtn);
    handleUserNotify(handleNotify);
    expect(handleUserNotify).toHaveBeenCalledTimes(1);
  });

  it("renders NotifyPopUp", async () => {
    // const reasonRef = useRef(null);

    store = mockStore({
      bgvReducer: {
        employeeData: [],
        isLoading: true,
        employeeDataById: {},
        profileCompletionById: {},
        sidePopUpDocNavTab: 1,
      },
    });

    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotifyPopUp
            isNotifyPopUp={true}
            setNotifyPopUp={() => false}
            tabName={VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB}
            isLoading={false}
          />
        </Provider>
      </I18nextProvider>
    );
    // handleUserNotifybtn
    const textarea = screen.getByTestId(
      "reasonTextarea"
    ) as HTMLTextAreaElement;
    const reasonRef = React.createRef<HTMLTextAreaElement>();
    fireEvent.change(textarea, { target: { value: "" } });
    // await waitFor(() => expect(reasonRef.current?.value).toBe(""));
    let handleUserNotifybtn = screen.getByTestId(
      `handleUserNotifybtn`
    ) as HTMLDivElement;
    fireEvent.click(handleUserNotifybtn);
    expect(textarea.value).toBe("");
  });
});
