const initialstate = {
  contactUs: [],
  error: "",
};

export const ContactUsReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_CONTACTUS_DATA":
    return { ...state, contactUs: payload };

  default:
    return state;
  }
};
