const initialstate = {
  salaryInfo: [],
  employeeSalaryInfo: [],
  salaryStructure: {},
  fetchSuccess: true,
  salaryFilter: [],
  section192Arr: [],
};

export const SalaryInfoReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_SALARY_INFO":
    return { ...state, salaryInfo: payload };
  case "SET_EMPLOYEE_SALARY_INFO":
    return {
      ...state,
      employeeSalaryInfo: payload,
    };
  case "SET_SALARY_STRUCTURE":
    return {
      ...state,
      salaryStructure: payload,
    };
  case "SET_FETCH_SUCCESS":
    return {
      ...state,
      fetchSuccess: payload,
    };
  case "SET_SALARY_FILTER":
    return {
      ...state,
      salaryFilter: payload,
    };

  case "SET_SECTION_192":
    return {
      ...state,
      section192Arr: payload,
    };

  default:
    return state;
  }
};
