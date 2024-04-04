import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  setMonthlyClients,
  setMonthlyEmployees,
  setMonthlyRevenue,
  setRevenue,
  setTotalEmployees,
  setYearlyWorkingHourGraph,
  setmonthlyWorkingHourGraph
} from "redux/actions/action";
import {
  formatMonthlyWorkingHourGraph,
  formatMontlyClients,
  formatMontlyEmployees,
  formatRevenueData,
  formatRevenueOverviewData,
  formatTotalEmployees,
  formatYearlyWorkingHourGraph
} from "redux/selector/Admin/dashboard";
import swalService from "utils/SwalServices";

export const fetchRevenueMonthlyData = () => async (dispatch) => {
  try {
    const path = apiUrl.revenueMonthlyGraph;
    const { response } = await Helper.get(path);
    const formattedResponse = formatRevenueData(
      response?.financial_monthly_data
    );
    dispatch(setMonthlyRevenue(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchRevenueOverViewData = () => async (dispatch) => {
  try {
    const path = apiUrl.revenueGraph;
    const { response } = await Helper.get(path);
    const formattedResponse = formatRevenueOverviewData(
      response?.yearly_financial_data
    );
    dispatch(setRevenue(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const monthlyClientData = () => async (dispatch) => {
  try {
    const path = apiUrl.monthlyClients;
    const { response } = await Helper.get(path);
    const formattedResponse = formatMontlyClients(response);
    dispatch(setMonthlyClients(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const monthlyEmployeeData = () => async (dispatch) => {
  try {
    const path = apiUrl.monthlyEmployees;
    const { response } = await Helper.get(path);
    const formattedResponse = formatMontlyEmployees(response);
    dispatch(setMonthlyEmployees(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchEmployeesData = () => async (dispatch) => {
  try {
    const path = apiUrl.totalEmployees;
    const { response } = await Helper.get(path);
    const formattedResponse = formatTotalEmployees(response?.data);
    dispatch(setTotalEmployees(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const monthlyWorkingHourData = () => async (dispatch) => {
  try {
    const path = apiUrl.monthlyWorkingHours;
    const { response } = await Helper.get(path);
    const formattedResponse = formatMonthlyWorkingHourGraph(
      response?.workingHoursData
    );
    dispatch(setmonthlyWorkingHourGraph(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const yearlyWorkingHourData = () => async (dispatch) => {
  try {
    const path = apiUrl.yearlyWorkingHours;
    const { response } = await Helper.get(path);
    const formattedResponse = formatYearlyWorkingHourGraph(
      response?.yearlyHoursData
    );
    dispatch(setYearlyWorkingHourGraph(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};
