import { SET_SERVICE_AVAILABLE_DATA } from "redux/actions/types";

const initialstate = {
  serviceAvailable: [],
  availableData: {},
  isLoading: true,
};

export const serviceReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case SET_SERVICE_AVAILABLE_DATA:
    return { ...state, serviceAvailable: payload };

  case "DELETE_SERVICE_AVAILABLE_DATA":
    return { ...state, payload };

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };

  default:
    return state;
  }
};
