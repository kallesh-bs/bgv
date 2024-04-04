import {
  SET_ALL_FEEDBACK_DATA,
  SET_INDIVIDUAL_INTERVIEW_DATA,
  SET_INTERVIEW_DATA,
  SET_MY_FEEDBACK_DATA
} from "redux/actions/types";

const initialstate = {
  interviewData: [],
  isLoading: true,
  individualInterviewData: {},
  allFeedbackData: [],
  myFeedbackData: [],
};

export const interviewReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case SET_INTERVIEW_DATA:
    return { ...state, interviewData: payload };

  case SET_INDIVIDUAL_INTERVIEW_DATA:
    return { ...state, individualInterviewData: payload };

  case "IS_LOADING":
    return {
      ...state,
      isLoading: payload,
    };

  case SET_ALL_FEEDBACK_DATA:
    return {
      ...state,
      allFeedbackData: payload,
    };
  case SET_MY_FEEDBACK_DATA:
    return {
      ...state,
      myFeedbackData: payload,
    };

  default:
    return { state };
  }
};
