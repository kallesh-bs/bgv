import { render, screen } from '@testing-library/react';
import VerificationDetails from '../VerificationDetails';
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import "@testing-library/jest-dom";
import i18n from 'i18next';
import { Trans } from 'react-i18next';
import { I18nextProvider } from "react-i18next";

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

test('renders learn react link', () => {
  render(
        <I18nextProvider i18n={i18n}>
            <Provider store={store}> 
                <VerificationDetails />
            </Provider>
        </I18nextProvider>
    );
});