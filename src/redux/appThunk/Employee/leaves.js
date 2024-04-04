import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  getAllLeaves,
  setIndividualleave,
  isLoading,
  setPageCount,
  setSuccess
} from "redux/actions/action";
import {
  formatAddLeave,
  formatEditLeaves,
  formatLeave,
  formatLeaveData
} from "redux/selector/Employee/leaves";
import swalService from "utils/SwalServices";

export const fetchEmployeeLeaveData =
  (currentPage, itemsPerPage) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const path = `leaves?page=${currentPage}&per_page=${itemsPerPage}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatLeaveData(response?.data);
      dispatch(getAllLeaves(formattedResponse));
      dispatch(setPageCount(response?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
    }
  };

export const fetchLeaves = (id) => async (dispatch) => {
  try {
    const path = apiUrl.leaves + "/" + id;
    const { response } = await Helper.get(path);
    const formattedResponse = formatLeave(response);
    dispatch(setIndividualleave(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const addLeaves =
  (values, userid, setSubmitOnce) => async (dispatch) => {
    try {
      setSubmitOnce(true);
      const request = formatAddLeave(values, userid);
      const path = apiUrl.leaves;
      const { status } = await Helper.post(request, path);
      setSubmitOnce(false);
      if (status === 201) {
        swalService.showSuccess({ title: "Leave Added!" });
        dispatch(setSuccess(true));
      }
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };

export const editLeaves = (values, id, setSubmitOnce) => async (dispatch) => {
  setSubmitOnce(false);
  const formatData = formatEditLeaves(values);
  const path = apiUrl.editLeave + id;
  await Helper.put(formatData, path);
  dispatch(setSuccess(true));
  setSubmitOnce(true);
};
