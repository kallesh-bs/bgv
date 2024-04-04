import { ALL_DESIGNATION_DATA, PAGE_COUNT, SET_DESIGNATION_DATA } from "redux/actions/types";

const initialstate = {
  pageCount: 0,
  isLoading: true,
  allDesignation: [],
  designationSearch: [],
};

export const designationReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case ALL_DESIGNATION_DATA:
    return { ...state, allDesignation: payload };

  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  case SET_DESIGNATION_DATA:
    return{...state, designationSearch: payload};

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };

  default:
    return { state };
  }
};
