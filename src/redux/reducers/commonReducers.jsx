import { SET_SHOW_TOAST } from "redux/actions/types";

const initialState = {
  showToast: false,
  toastMessage: "",
  type: '',
};

const commonReducers = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_SHOW_TOAST:
    return {
      ...state,
      showToast: payload.show,
      toastMessage: payload.toastMessage,
      type: payload.type,
    };
  default:
    return state;
  }
};

export default commonReducers;
