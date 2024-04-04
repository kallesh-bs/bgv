const initialstate = {
  ApplyJob: [],
  error: "",
};

export const ApplyJobReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "Set_Apply_Job":
    return { ...state, applyJob: payload };

  default:
    return state;
  }
};
