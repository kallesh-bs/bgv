const initialstate = {
  bankData: [],
};

export const bankReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "ALL_BANK_DETAILS":
    return {
      ...state,
      bankData: payload,
    };
  default:
    return state;
  }
};
