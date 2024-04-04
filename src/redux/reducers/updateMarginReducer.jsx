const initialstate = {
  isToggleMarginStyle: "",
};

export const updateMarginReducer = (
  state = initialstate,
  { type, payload }
) => {
  if (type === "UPDATE_MARGIN") {
    return { ...state, isToggleMarginStyle: payload };
  } else {
    return state;
  }
};
