import { ALL_LEAVES, PAGE_COUNT, SET_ALL_LEAVE_TYPE, UPDATE_LEAVE_STATUS,
  SEARCH_LEAVE } from "redux/actions/types";

const initialstate = {
  leave: [],
  dynaicpage: "",
  leaveData: [],
  allLeaves: [],
  allLeaveType: [],
  pageCount: 0,
  isLoading: true,
  leaveStatus: {},
};

export const leaveReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_LEAVE":
    return { ...state, leave: [...state.leave, payload] };

  case "DASHBOARD_LEAVES":
    return { ...state, payload };

  case "SET_DY_PAGE":
    return { ...state, dynaicpage: payload };

  case "INDIVIDUAL_LEAVE":
    return {
      ...state,
      leaveData: payload,
    };

  case "DELETE_LEAVE":
    return { ...state, state, payload };

  case SET_ALL_LEAVE_TYPE:
    return { ...state, allLeaveType: payload };

  case PAGE_COUNT:
    return { ...state, pageCount: payload };

  case ALL_LEAVES:
    return { ...state, allLeaves: payload };

  case SEARCH_LEAVE:
    return { ...state, allLeaves: payload };

  case "IS_LOADING":
    return{
      ...state,
      isLoading: payload,
    };

  case UPDATE_LEAVE_STATUS: {
    const { leaveId, newStatus } = payload;
    const updatedLeaves = state.allLeaves.map(leave => {
      if (leave.id === leaveId) {
        return { ...leave, leaveStatus: newStatus };
      }

      return leave;
    });

    return { ...state, allLeaves: updatedLeaves };
  }

  default:
    return state;

  }
};
