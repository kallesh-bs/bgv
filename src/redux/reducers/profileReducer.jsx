const initialstate = {
  allUser: [],
  profileData: [],
  CountryState: {},
  city: [],
  manager: [],
  projectList: [],
  totalEmployeesNumber: 0,
};

export const profileReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "USER_PROFILE":
    return { ...state, profileData: payload };
  case "UPDATE_PROFILE":
    return {
      statusData: payload,
    };
  case "SET_EMPLOYEE_DATA":
    return {
      allUser: payload,
    };
  case "SET_COUNTRY_STATE":
    return {
      ...state,
      CountryState: payload,
    };

  case "SET_CITY":
    return {
      ...state,
      city: payload,
    };

  case "SET_MANAGER_NAMES":
    return{
      ...state,
      manager: payload,
    };

  case "SET_PROJECT_LIST":
    return{
      ...state,
      projectList: payload,
    };

  case "SET_EMPLOYEE_NUMBER":
    return{
      ...state,
      totalEmployeesNumber: payload,
    };

  default:
    return state;
  }
};
