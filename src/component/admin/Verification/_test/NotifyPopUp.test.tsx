import { render, screen } from '@testing-library/react';
import NotifyPopUp from '../NotifyPopUp';
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

  it('renders learn react link', () => {
    render(
          <I18nextProvider i18n={i18n}>
              <Provider store={store}> 
                  <NotifyPopUp isNotifyPopUp={true} setNotifyPopUp={()=>false} tabName={VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB} isLoading={false}/>
              </Provider>
          </I18nextProvider>
      );
  });

})
