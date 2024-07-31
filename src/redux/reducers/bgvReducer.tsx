import {
  BGV_ALL_EMPLOYEE_DATA,
  BGV_EMPLOYEE_DATA_BY_ID,
  BGV_FILE_UPLOAD,
  NOTIFY_USER,
  ON_HOLD_BY_EMPLOYEE_ID,
  PROFILE_COMPLETION_BY_ID,
  REMOVE_DOCUMENT,
  SET_SIDE_POPUP_NAV_TAB,
} from "redux/actions/types";

const initialstate = {
  employeeData: [],
  isLoading: true,
  employeeDataById: {},
  profileCompletionById: {},
  sidePopUpDocNavTab: 1
};

// Define the action types
export type BGVAction =
  | { type: "BGV_ALL_EMPLOYEE_DATA"; payload: any[] } // Replace `any` with the actual type
  | { type: "BGV_FILE_UPLOAD"; payload: boolean }
  | { type: "BGV_EMPLOYEE_DATA_BY_ID"; payload: any } // Replace `any` with the actual type
  | { type: "PROFILE_COMPLETION_BY_ID"; payload: any } // Replace `any` with the actual type
  | { type: "ON_HOLD_BY_EMPLOYEE_ID"; payload: boolean }
  | { type: "REMOVE_DOCUMENT"; payload: boolean }
  | { type: "NOTIFY_USER"; payload: boolean }
  | { type: "SET_SIDE_POPUP_NAV_TAB"; payload: boolean };

export const bgvReducer = (state = initialstate, action: BGVAction) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
