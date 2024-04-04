const initialstate = {
  clientsData: [],
  projectResources: [],
  clientInformation: {},
  allProjects: [],
  clientInvoiceData: {},
  isLoading: true,
  searchEmployeeData: [],
  success: false,
  reviews: [],
  review: {},
  totalClients: 0,
  interviewId: '',
};

export const ClientsReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_CLIENTS_DETAILS":
    return {
      ...state,
      clientsData: payload,
    };
  case "GET_PROJECT_RESOURCES":
    return {
      ...state,
      projectResources: payload,
    };
  case "SET_CLIENT_INFORMATION":
    return {
      ...state,
      clientInformation: payload,
    };
  case "SET_ALL_PROJECTS":
    return {
      ...state,
      allProjects: payload,
    };
  case "GET_CLIENT_INVOICES":
    return{
      ...state,
      clientInvoiceData: payload,
    };
  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };
  case "SEARCH_EMPLOYEE":
    return{
      ...state,
      searchEmployeeData: payload,
    };
  case 'SET_SUCCESS':
    return {
      ...state, success: payload,
    };
  case "GET_REVIEWS":
    return {
      ...state,
      reviews: payload,
    };
  case "SINGLE_REVIEW":
    return{
      ...state,
      review: payload,
    };
  case "SET_INTERVIEW_ID":
    return{
      ...state,
      interviewId: payload,
    };
  case "SET_CLIENTS_NUMBER":
    return{
      ...state,
      totalClients: payload,
    };
  default:
    return state;
  }
};
