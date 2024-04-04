import { ALL_COMPANY_TAX_DETAILS } from "redux/actions/types";

const initialstate = {
  CompanyTaxData: [],
};

export const CompanyTaxReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case ALL_COMPANY_TAX_DETAILS:
    return {
      ...state,
      CompanyTaxData: payload,
    };

  default:
    return state;
  }
};
