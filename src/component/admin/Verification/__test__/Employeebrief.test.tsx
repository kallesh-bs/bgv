// Employeebrief.test.tsx

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import i18n from "i18next";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Employeebrief from "../Employeebrief";

import configureStore from 'redux-mock-store';
import { MainRoutes } from "routes";
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

it("renders EmployeeBrief", ()=>{

  const id = '123';
    const data1 = ['status', 'other'];
    const navigate = jest.fn();

  store = mockStore({
    bgvReducer: {
      employeeData: [],
      isLoading: true,
      employeeDataById: {},
      profileCompletionById: {},
      sidePopUpDocNavTab: 1
    },
  });


  const { container } = render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}> 
        <Router>
            <Employeebrief id={3} />
            </Router>
        </Provider>
    </I18nextProvider>
);
const divElement = container.getElementsByClassName('relative w-full flex justify-start items-center space-x-[10px]')[0];
expect(divElement).toBeInTheDocument();
fireEvent.mouseEnter(divElement);
fireEvent.mouseLeave(divElement);


})

});