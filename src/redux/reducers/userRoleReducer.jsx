const initialstate = {
  userRole: null,
};

export const userRoleReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_SELECT_ROLE":
    return {
      userRole: payload,
    };
  default:
    return state;
  }
};
