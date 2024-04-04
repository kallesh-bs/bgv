const initialstate = {
  dashboardData: [],
  totalWorkingDaysLeaves: [],
  getTimerData: [],
};

export const employeeDashboardReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_PUNCH_IN_DATA":
    return {
      ...state,
      dashboardData: payload,
    };
  case "TOTAL_WORKING_DAYS_LEAVES":
    return {
      ...state,
      totalWorkingDaysLeaves: payload,
    };

  case "TIMER_DATA":
    return{
      ...state,
      getTimerData: payload,
    };
  default:
    return state;
  }
};
