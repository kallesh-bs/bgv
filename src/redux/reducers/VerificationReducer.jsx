const initialstate = {
    userData: {},
    tabName:""
  };
  
  export const VerificationReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: payload,
      };
      case "SET_TAB_NAME":
        return {
          ...state,
          tabName: payload,
        };
    default:
      return state;
    }
  };
  