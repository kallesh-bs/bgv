const initialState = {
  userToken: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case "SET_USER_TOKEN":
    return {
      ...state,
      userToken: payload,
    };
  default:
    return state;
  }
};

export default authReducer;
