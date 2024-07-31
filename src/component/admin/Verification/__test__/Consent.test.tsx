import { render, screen } from '@testing-library/react';
import Consent from '../Consent';
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import "@testing-library/jest-dom";
import { Trans } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from 'i18next';

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
  render(<Trans i18n={i18n}>
    <Provider store={store}> <Consent />
    </Provider>
     </Trans>);
  const linkElement = screen.getByText(/I hereby give an undertaking that the data and information given in the application and enclosures are true to the best of my knowledge and belief and I/i);
  expect(linkElement).toBeInTheDocument();
});