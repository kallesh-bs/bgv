const initialstate = {
  jobOpenings: [],
  error: "",
  openingData: {},
  individualOpening: {},
};

export const jobOpeningReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_JOB_OPENING_DATA":
    return { ...state, jobOpenings: payload };

  case "DELETE_JOB_OPENING_DATA":
    return { ...state, payload };

  case "INDIVIDUAL_JOB_OEPNING":
    return { ...state, individualOpening: payload };

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };
  default:
    return state;
  }
};
