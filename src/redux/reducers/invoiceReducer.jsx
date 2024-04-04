import { PAGE_COUNT, SET_INVOICE_BYID, SET_INVOICE_DATA } from "redux/actions/types";

const initialstate = {
  pageCount: 0,
  invoiceData: {},
  editInvoiceData: {},
  isLoading: true,
};

export const invoiceReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case SET_INVOICE_DATA:
    return { ...state, invoiceData: payload };

  case SET_INVOICE_BYID:
    return { ...state, editInvoiceData: payload };

  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };

  default:
    return { state };
  }
};
