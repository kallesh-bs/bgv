import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  isLoading,
  setAllFeedbackData,
  setIndividualInterviewData,
  setInterviewData,
  setMyFeedbackData
} from "redux/actions/action";
import {
  formatAllFeedbackResponse,
  formatInterviewListResponse,
  formatInterviewResponse,
  formatmyFeedback,
  formattedAddFeedback
} from "redux/selector/Employee/interview";
import swalService from "utils/SwalServices";

export const fetchInterviewData = () => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const path = apiUrl.interview;
    const { response } = await Helper.get(path);
    const formattedResponse = formatInterviewListResponse(response?.data);
    dispatch(setInterviewData(formattedResponse));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchIndividualInterviewDataa = (id) => async (dispatch) => {
  try {
    const path = `${apiUrl.interview}/${id}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatInterviewResponse(response?.data);
    dispatch(setIndividualInterviewData(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const setAddFeedback = (comment, id, handleClose) => async () => {
  try {
    const request = formattedAddFeedback(comment, id);
    const path = apiUrl.feedback;
    const { status } = await Helper.post(request, path);
    if (status === 201) {
      swalService.showSuccess({ title: "feedback Added!", timer: 1500 });
      setTimeout(() => {
        handleClose();
      }, 1500);
    }
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const fetchAllFeedbacks = (id) => async (dispatch) => {
  try {
    const path = `${apiUrl.getAllFeedbacks}?interview_id=${id}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatAllFeedbackResponse(response?.data);
    dispatch(setAllFeedbackData(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchMyFeedbacks = (id, user_id) => async (dispatch) => {
  try {
    const path = `${apiUrl.myfeedback}?user_id=${user_id}&interview_id=${id}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatmyFeedback(response?.data);
    dispatch(setMyFeedbackData(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};
