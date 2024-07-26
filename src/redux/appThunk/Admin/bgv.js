import Helper from "api/Helper";
import { bgvAllEmpData, bgvEmployeeDataById, isLoading } from "redux/actions/action";
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



export const handleSidePopUpData = async (dispatch, userId) => {

  let path = `${apiUrl.background_verification}/${userId}`;
  console.log(path);

  // Ensure a valid path was determined
  if (!path) {
    console.error("Invalid text value, no API path determined");
    return;
  }
  try {
    const { response, status } = await Helper.get(path);
    // dispatch(bgvAllEmpData(response));
    console.log(response.background_verification
    );

    dispatch(bgvEmployeeDataById(response.background_verification))

    return true;
  }
  catch (error) {
    swalService.showError({ title: "Error while fetching data" });
  }

  // console.log("hHe");
}
