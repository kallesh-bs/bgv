import Helper from "api/Helper";
import { bgvAllEmpData, isLoading } from "redux/actions/action";
import swalService from "utils/SwalServices";
import apiUrl from "api/apiUrl";

export const fetchBgvEmployeeData =
  (currentPage, searchItem) => async (dispatch) => {
    dispatch(isLoading(true));

    const path = `background_verification?&page=${currentPage || 1}&query=${searchItem || ""
      }`;
    try {
      const { response } = await Helper.get(path);
      if (response.message === "No records found") {
        dispatch(bgvAllEmpData([]));
      } else {
        dispatch(bgvAllEmpData(response));
        // dispatch(setPageCount(response?.total_pages));
        // dispatch(totalEmployeesNumber(response?.total_count));
      }
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({ title: "Error!" });
    }
  };



export const fetchEmpDataForBGV = () => async (dispatch) => {

  try {
    const path = apiUrl.background_verification;
    if (!path) {
      swalService.showError({ title: "Error during fetch data!" });
      return;
    }
    const { response } = await Helper.get(path);

    // dispatch(setMonthlyRevenue(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
}