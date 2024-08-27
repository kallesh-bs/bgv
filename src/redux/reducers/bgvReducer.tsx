import {
  BGV_ALL_EMPLOYEE_DATA,
  BGV_EMPLOYEE_DATA_BY_ID,
  BGV_FILE_UPLOAD,
  IS_LOADING,
  NOTIFY_USER,
  ON_HOLD_BY_EMPLOYEE_ID,
  PROFILE_COMPLETION_BY_ID,
  REMOVE_DOCUMENT,
  SET_ADDRESS_OPTION_TAB,
  SET_CONFIRMDIALOGUE_VALUE,
  SET_IDENTITY_OPTION_TAB,
  SET_SIDE_POPUP_NAV_TAB,
} from "redux/actions/types";

const initialstate = {
  employeeData: [],
  isLoading: true,
  employeeDataById: {},
  profileCompletionById: {},
  sidePopUpDocNavTab: 1,
  confirmDialogueValue:null,
  identifyOptionTab:"Choose~",
  adressOptionTab:"Choose~"
};

// Define the action types
export type BGVAction =
  | { type: "BGV_ALL_EMPLOYEE_DATA"; payload: any[] }
  | { type: "BGV_FILE_UPLOAD"; payload: boolean }
  | { type: "BGV_EMPLOYEE_DATA_BY_ID"; payload: any }
  | { type: "PROFILE_COMPLETION_BY_ID"; payload: any }
  | { type: "ON_HOLD_BY_EMPLOYEE_ID"; payload: boolean }
  | { type: "REMOVE_DOCUMENT"; payload: boolean }
  | { type: "NOTIFY_USER"; payload: boolean }
  | { type: "SET_SIDE_POPUP_NAV_TAB"; payload: boolean }
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "SET_CONFIRMDIALOGUE_VALUE"; payload:any}
  | { type: "SET_IDENTITY_OPTION_TAB"; payload:string}
  | { type: "SET_ADDRESS_OPTION_TAB"; payload:string};

export const bgvReducer = (state = initialstate, action: BGVAction) => {
  switch (action.type) {
    case SET_ADDRESS_OPTION_TAB:
      return {
        ...state,
        adressOptionTab: action.payload,
      };
    case SET_IDENTITY_OPTION_TAB:
      return {
        ...state,
        identifyOptionTab: action.payload,
      };
    case BGV_ALL_EMPLOYEE_DATA:
      return {
        ...state,
        employeeData: action.payload,
      };
    case BGV_FILE_UPLOAD:
      return {
        ...state,
        isLoading: action.payload,
      };
    case BGV_EMPLOYEE_DATA_BY_ID:
      return {
        ...state,
        employeeDataById: action.payload,
      };
    case SET_SIDE_POPUP_NAV_TAB:
      return {
        ...state,
        sidePopUpDocNavTab: action.payload,
      };
    case SET_CONFIRMDIALOGUE_VALUE:
      return {
        ...state,
        confirmDialogueValue: action.payload,
      };
    case PROFILE_COMPLETION_BY_ID:
      return {
        ...state,
        profileCompletionById: action.payload,
      };
    case ON_HOLD_BY_EMPLOYEE_ID:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REMOVE_DOCUMENT:
      return {
        ...state,
        isLoading: action.payload,
      };
    case NOTIFY_USER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
