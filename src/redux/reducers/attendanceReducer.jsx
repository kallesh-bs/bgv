import { PAGE_COUNT, SET_ATTENDANCE } from "redux/actions/types";

const initialstate = {
  attandance: [],
};

export const attendanceReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "ATTANDANCE_DATA":
    return {
      attandance: payload,
    };

  case SET_ATTENDANCE:
    return {
      ...state,
      attandance: payload,
    };

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };

  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  default:
    return state;
  }
};
