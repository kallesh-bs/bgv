const initialstate = {
  employeeData: [],
};

export const employeeReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "ALL_EMPLOYEE_LIST":
    return {
      ...state,
      employeeData: payload,
    };
  default:
    return state;
  }
};
