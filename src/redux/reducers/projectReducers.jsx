const initialstate = {
  allProjects: [],
};

export const projectReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "ALL_PROJECTS":
    return { ...state, allProjects: payload };
  default:
    return state;
  }
};
