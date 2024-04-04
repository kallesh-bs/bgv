import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import { getCurrentYear } from "utils/date";
import {
  setDashboardData,
  setMonthlyReview,
  setTotalAvg,
  setTotalWorkingDays,
  setYourAvg,
  timerData
} from "redux/actions/action";
import {
  formatOverviewReview,
  formatPunchInOutResponse,
  formatPunchInRequest,
  formatTimerData,
  formatTotalAvg,
  formatTotalWorkingDaysResponse,
  formatYourAvg
} from "redux/selector/Employee/dashboard";
import swalService from "utils/SwalServices";

export const punchInOutDetails = () => async (dispatch) => {
  try {
    const path = `${apiUrl.dashboard}?period=${getCurrentYear()}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatPunchInOutResponse(response?.dashboard);
    dispatch(setDashboardData(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchTimerData = (userData) => async (dispatch) => {
  try {
    const path = `${apiUrl.timer}?emp_code=${userData?.emp_code}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatTimerData(response?.data);
    dispatch(timerData(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const totalWorkingDays = (totalworkingCardMonth) => async (dispatch) => {
  try {
    const path = `${apiUrl.totalWorkingDays}?period=${totalworkingCardMonth}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatTotalWorkingDaysResponse(response);
    dispatch(setTotalWorkingDays(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const setPunchIn = (userData) => async () => {
  try {
    const request = formatPunchInRequest(userData);
    const path = apiUrl.punchIn;
    await Helper.post(request, path);
    swalService.showSuccess({ title: "Punch In Successfully!" });
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const setPunchOut = (userData) => async () => {
  try {
    const request = formatPunchInRequest(userData);
    const path = apiUrl.punchOut;
    await Helper.post(request, path);
    swalService.showSuccess({ title: "Punch Out Successfully!" });
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const totalAvgData = () => async (dispatch) => {
  try {
    const path = apiUrl.totalAverage;
    const { response } = await Helper.get(path);
    const formattedResponse = formatTotalAvg([response.total_average]);
    dispatch(setTotalAvg(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const yourAvgData = () => async (dispatch) => {
  try {
    const path = apiUrl.yourAverage;
    const { response } = await Helper.get(path);
    const formattedResponse = formatYourAvg(response.yourAverage);
    dispatch(setYourAvg(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const overviewReviewData = () => async (dispatch) => {
  try {
    const path = apiUrl.overiewReview;
    const { response } = await Helper.get(path);
    const formattedResponse = formatOverviewReview(response?.ratings);
    dispatch(setMonthlyReview(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};
