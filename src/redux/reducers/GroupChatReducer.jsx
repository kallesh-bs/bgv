import { SET_SHOW_GROUP_LIST } from "redux/actions/types";

const initialstate = {
  showGroup: false,
  showGroupList: false,
};

export const GroupChatReducer = (state = initialstate, action) => {
  switch (action.type) {
  case "SET_SHOWGROUP":
    return { ...state, showGroup: action.payload };
  case SET_SHOW_GROUP_LIST:
    return { ...state, showGroupList: action.payload };
  default:
    return state;
  }
};

export default GroupChatReducer;
