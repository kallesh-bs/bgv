const initialstate = {
  Subscribe: [],
  error: "",
};

export const subscribeApi = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "Set_Subscribe_Api":
    return { ...state, subscribe: payload };
  default:
    return state;
  }
};
