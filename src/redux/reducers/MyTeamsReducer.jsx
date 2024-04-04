import { PAGE_COUNT } from "redux/actions/types";

const initialstate = {
  MyTeamInfo: [],
  pageCount: 0,
  isLoading: true,
};

export const MyTeamsReducer = (state = initialstate, { type, payload }) => {

  switch (type) {

  case "SET_MY_TEAMS":
    return {
      ...state, MyTeamInfo: payload,
    };
  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };
  default:
    return state;
  }
};
