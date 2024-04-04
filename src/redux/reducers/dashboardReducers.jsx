import {
  SET_MONTHLY_CLIENTS,
  SET_MONTHLY_EMPLOYEES,
  SET_MONTHLY_REVENUE,
  SET_OVERVIEW_REVENUE,
  SET_PUNCH_IN_DATA,
  TIMER_DATA,
  TOTAL_WORKING_DAYS_LEAVES,
  SET_TOTAL_EMPLOYEES,
  SET_MONTHLY_WORKINGHOURS,
  SET_TOTAL_AVG,
  SET_YOUR_AVG,
  SET_YEARLY_WORKINGHOURS,
  SET_OVERIVEW_REVIEW
} from "redux/actions/types";

const initialstate = {
  dashboardData: [],
  getTimerData: [],
  totalWorkingDaysLeaves: [],
  monthlyRevenue: [],
  revenue: [],
  monthlyClients: [],
  monthlyEmployees: [],
  totalEmployees: [],
  monthlyWorkingHours: [],
  yearlyWorkingHours: [],
  totalAvg: [],
  yourAvg: [],
  overiewReviews: [],
};

export const dashboardReducers = (state = initialstate, { type, payload }) => {
  switch (type) {
  case SET_PUNCH_IN_DATA:
    return {
      ...state,
      dashboardData: payload,
    };
  case TIMER_DATA:
    return {
      ...state,
      getTimerData: payload,
    };
  case TOTAL_WORKING_DAYS_LEAVES:
    return {
      ...state,
      totalWorkingDaysLeaves: payload,
    };
  case SET_MONTHLY_REVENUE:
    return {
      ...state, monthlyRevenue: payload,
    };
  case SET_OVERVIEW_REVENUE:
    return {
      ...state, revenue: payload,
    };
  case SET_MONTHLY_CLIENTS:
    return {
      ...state, monthlyClients: payload,
    };
  case SET_MONTHLY_EMPLOYEES:
    return {
      ...state, monthlyEmployees: payload,
    };
  case SET_TOTAL_EMPLOYEES:
    return {
      ...state, totalEmployees: payload,
    };
  case SET_MONTHLY_WORKINGHOURS:
    return {
      ...state, monthlyWorkingHours: payload,
    };
  case SET_YEARLY_WORKINGHOURS:
    return {
      ...state, yearlyWorkingHours: payload,
    };
  case SET_TOTAL_AVG:
    return {
      ...state, totalAvg: payload,
    };

  case SET_YOUR_AVG:
    return {
      ...state, yourAvg: payload,
    };
  case SET_OVERIVEW_REVIEW:
    return {
      ...state, overiewReviews: payload,
    };
  default:
    return state;
  }
};
