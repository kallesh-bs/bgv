import {
  BGV_ALL_EMPLOYEE_DATA,
  BGV_EMPLOYEE_DATA_BY_ID,
  BGV_FILE_UPLOAD,
  NOTIFY_USER,
  ON_HOLD_BY_EMPLOYEE_ID,
  PROFILE_COMPLETION_BY_ID,
  REMOVE_DOCUMENT,
} from "redux/actions/types";

const initialstate = {
  employeeData: [],
  isLoading: true,
  employeeDataById: {},
  profileCompletionById: {},
};

export const bgvReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case BGV_ALL_EMPLOYEE_DATA:
      return {
        ...state,
        employeeData: payload,
      };
    case BGV_FILE_UPLOAD:
      return {
        ...state,
        isLoading: payload,
      };
    case BGV_EMPLOYEE_DATA_BY_ID:
      return {
        ...state,
        employeeDataById: payload,
      };
    case PROFILE_COMPLETION_BY_ID:
      return {
        ...state,
        profileCompletionById: payload,
      };
    case ON_HOLD_BY_EMPLOYEE_ID:
      return {
        ...state,
        isLoading: payload,
      };
    case REMOVE_DOCUMENT:
      return {
        ...state,
        isLoading: payload,
      };
    case NOTIFY_USER:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
