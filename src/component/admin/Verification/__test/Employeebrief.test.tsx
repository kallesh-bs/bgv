// Employeebrief.test.tsx

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Employeebrief from "../Employeebrief";

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

describe("Employeebrief Component : ", () => {
  let store: any;
  const navigate = jest.fn();

  it("renders EmployeeBrief with only id : ", () => {

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
          <Router>
            <Employeebrief id={3} />
          </Router>
        </Provider>
      </I18nextProvider>
    );
    const divElement = container.getElementsByClassName(
      "relative w-full flex justify-start items-center space-x-[10px]"
    )[0];
    expect(divElement).toBeInTheDocument();
    fireEvent.mouseEnter(divElement);
    fireEvent.mouseLeave(divElement);
  });

  it("renders EmployeeBrief with only id, userEmail, email, imageUrl : ", () => {
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
          <Router>
            <Employeebrief
              id={3}
              userEmail={"example@example.com"}
              email={"example@example.com"}
              imageUrl="url"
            />
          </Router>
        </Provider>
      </I18nextProvider>
    );

    const d1 = container.getElementsByClassName(
      "flex flex-col items-start space-y-[2px] cursor-pointer"
    )[0];
    expect(d1).toBeInTheDocument();
    fireEvent.click(d1);
    navigate("asds");
  });

  it("renders EmployeeBrief with only id, userEmail, email, names : ", () => {
    const id = "123";
    const data1 = ["status", "other"];
    const navigate = jest.fn();

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
          <Router>
            <Employeebrief
              id={3}
              userName="lop"
              userEmail={"example@example.com"}
              email={"example@example.com"}
              names={"sdf"}
            />
          </Router>
        </Provider>
      </I18nextProvider>
    );
    const d1 = container.getElementsByClassName(
      "relative w-full flex justify-start items-center space-x-[10px]"
    )[0];
    expect(d1).toBeInTheDocument();
    fireEvent.mouseEnter(d1);
    // console.log(container.innerHTML);
    const d2 = container.getElementsByClassName(
      "w-full h-11 flex items-center justify-center"
    )[0];
    const b = d2.getElementsByClassName(
      "h-[26px] w-[71px] flex items-center justify-center border space-x-1 border-[#DFE1E3] rounded"
    )[0];
    expect(b).toBeInTheDocument();
    fireEvent.mouseEnter(b);
    fireEvent.mouseLeave(b);
  });
  
});
