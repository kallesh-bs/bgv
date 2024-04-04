import {
  PAGE_COUNT,
  SET_EXPENSE_DATA,
  SET_SEARCH_RESULT,
  SINGLE_ASSET_DATA,
  SINGLE_COMPANY_DATA,
  SINGLE_EXPENSE,
  SINGLE_PF_DATA,
  SINGLE_TDS_DATA
} from "redux/actions/types";

const initialstate = {
  managementData: [],
  searchData: [],
  allExpenses: [],
  pageCount: 0,
  isLoading: true,
  downloadAsset: [],
};

export const managementReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_TDS_DATA":
    return {
      ...state,
      managementData: payload,
    };
  case "SET_ASSETS_DATA":
    return {
      ...state,
      managementData: payload,
    };
  case "SET_COMPANY_TAX_DATA":

    return {
      ...state,
      managementData: payload,
    };
  case "ALL_EXPENSES_DETAILS":
    return {
      ...state,
      managementData: payload,
    };
  case "SET_PROVIDENT_DATA":
    return {
      ...state,
      managementData: payload,
    };
  case SET_SEARCH_RESULT:
    return { ...state, searchData: payload };

  case SET_EXPENSE_DATA:

    return {
      ...state,
      managementData: payload,
    };

  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  case "IS_LOADING":
    return {
      ...state,
      isLoading: payload,
    };

  case "SET_ASSET_DOWNLOAD":
    return {
      ...state,
      downloadAsset: payload,
    };
  case SINGLE_COMPANY_DATA:
    return {
      ...state,
      managementData: payload,
    };
  case SINGLE_EXPENSE:
    return { ...state, managementData: payload };

  case SINGLE_TDS_DATA:
    return {
      ...state,
      managementData: payload,
    };

  case SINGLE_PF_DATA:
    return {
      ...state,
      managementData: payload,
    };
  case SINGLE_ASSET_DATA:
    return {
      ...state,
      managementData: payload,
    };

  default:
    return state;
  }
};
