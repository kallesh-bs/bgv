import { render, screen } from '@testing-library/react';
import AddressCheck from '../AddressCheck';
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import "@testing-library/jest-dom";
import i18n from 'i18next';
import { Trans } from 'react-i18next';
import { I18nextProvider } from "react-i18next";
import { VerificationSidePopUpNavTabName } from '../types';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

i18n.init({
  lng: 'en', // set the default language
  resources: {
    en: {
      translation: {
        // add your translations here
      }
    }
  }
});

describe("Forgot Component", () => {
    let store: any;


    beforeEach(() => {
        store = mockStore({
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
            sidePopUpDocNavTab: 1
          },
        });
      });

  it('renders learn react link', () => {
    render(
          <I18nextProvider i18n={i18n}>
              <Provider store={store}> 
                  <AddressCheck selectOption={'Aadhar Card'}  />
              </Provider>
          </I18nextProvider>
      );
  });

})
