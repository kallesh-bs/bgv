import { PAGE_COUNT } from "redux/actions/types";

const initialstate = {
  status: [],
  statusData: {},
  showTask: "",
  pageCount: 0,
  isLoading: true,
  searchData: [],
};

export const statusReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_STATUS":
    return { ...state, status: payload, searchData: [] };

  case "INDIVIUAL_STATUS":
    return {
      statusData: payload,
    };

  case "DELETE_STATUS":
    return {
      state,
      payload,
    };

  case "ADD_MORE_TASK":
    return {
      showTask: payload,
    };

  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  case "IS_LOADING":
    return {
      ...state,
      isLoading: payload,
    };

  case "SEARCH_STATUS_NAME_DATE":
    return {
      ...state,
      searchData: payload,
    };

  default:
    return { state };
  }
};
