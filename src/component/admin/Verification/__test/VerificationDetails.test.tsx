import { fireEvent, render, screen } from "@testing-library/react";
import VerificationDetails from "../VerificationDetails";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

const handleIdentifyOptionClick = jest.fn();

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

test("renders learn react link", () => {
  let store: any;
  store = mockStore({
    bgvReducer: {
      employeeData: [],
      isLoading: true,
      employeeDataById: {
        id: 13,
        email: "vaishalisinghnaruka@gmail.com",
        full_name: "Vaishali Naruka",
        city: "Basugaon",
        emp_code: "DO-0013",
        profile_picture_url: null,
        phone_number: "1234567889",
        department: null,
        designation: null,
        work_location: "work_from_office",
        check_in: false,
        hold: false,
      },
      profileCompletionById: {},
        sidePopUpDocNavTab: 1,
    },
  });

  render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <VerificationDetails />
      </Provider>
    </I18nextProvider>
  );
});

it("renders learn react link", () => {
  let store: any;
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
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh2",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
          identity_check_documents_status: "in_progress",
          markshseet_10th: [
            {
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/cgkv6b1cwch3ctqqg2jb6x2sokz3",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
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
        <VerificationDetails />
      </Provider>
    </I18nextProvider>
  );

  let activeTabbtn2 = screen.getByText("checkIden");
  fireEvent.click(activeTabbtn2);
  const activeTabbtn1 = screen.getByRole("combobox") as HTMLSelectElement;
  fireEvent.change(activeTabbtn1, { target: { value: 'Aadhar Card' } });
  expect(activeTabbtn1.value).toBe("Aadhar Card")
  fireEvent.change(activeTabbtn1, { target: { value: 'Driving License' } });
  expect(activeTabbtn1.value).toBe("Driving License")
  fireEvent.change(activeTabbtn1, { target: { value: 'Passport' } });
  expect(activeTabbtn1.value).toBe("Passport")
  // fireEvent.change(activeTabbtn1, { target: { value: 'Aadhar Card' } });
  // expect(activeTabbtn1.value).toBe("Aadhar Card")

});

test("renders learn react link", () => {
  let store: any;
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
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh2",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
          identity_check_documents_status: "in_progress",
          markshseet_10th: [
            {
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/cgkv6b1cwch3ctqqg2jb6x2sokz3",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
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
        <VerificationDetails />
      </Provider>
    </I18nextProvider>
  );

  let activeTabbtn1 = screen.getByText("checkEdu");
  fireEvent.click(activeTabbtn1);
  activeTabbtn1 = screen.getByText("checkadd");
  fireEvent.click(activeTabbtn1);
  activeTabbtn1 = screen.getByText("EmploymentHistory");
  fireEvent.click(activeTabbtn1);
});

it("renders learn react link", () => {
  let store: any;
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
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh2",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
          identity_check_documents_status: "in_progress",
          markshseet_10th: [
            {
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/cgkv6b1cwch3ctqqg2jb6x2sokz3",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
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
        <VerificationDetails />
      </Provider>
    </I18nextProvider>
  );
  const activeTabbtn2 = screen.getByText("checkadd");
  fireEvent.click(activeTabbtn2);
  const activeTabbtn1 = screen.getByRole("combobox") as HTMLSelectElement;
  fireEvent.change(activeTabbtn1, { target: { value: 'Aadhar Card' } });
  expect(activeTabbtn1.value).toBe("Aadhar Card")
  fireEvent.change(activeTabbtn1, { target: { value: 'Driving License' } });
  expect(activeTabbtn1.value).toBe("Driving License")
  fireEvent.change(activeTabbtn1, { target: { value: 'Passport' } });
  expect(activeTabbtn1.value).toBe("Passport")
});

test("renders learn react link", () => {
  let store: any;
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
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/mt35r3sn2ooj3qnqps70oc2g9rh2",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
          identity_check_documents_status: "in_progress",
          markshseet_10th: [
            {
              url: "https://deeporiondemo.s3.ap-south-1.amazonaws.com/cgkv6b1cwch3ctqqg2jb6x2sokz3",
              name: "sample.pdf",
              type: "application/pdf",
            },
          ],
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
        profileCompletionById: {},
        sidePopUpDocNavTab: 3,
      },
    },
  });

  render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <VerificationDetails />
      </Provider>
    </I18nextProvider>
  );
});
