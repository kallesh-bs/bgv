import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  setAllLeaveType,
  getAllLeaves,
  setPageCount,
  isLoading,
  updateLeaveStatus,
  setSuccess
} from "redux/actions/action";
import {
  formatAddLeaveRequest,
  formatLeaveTypeResponse,
  formatEmployeeData,
  formattedStatusChange
} from "redux/selector/Admin/leave";
import swalService from "utils/SwalServices";

export const fetchAllLeaveType = () => async (dispatch) => {
  try {
    const path = apiUrl?.leaveType;
    const { response } = await Helper.get(path);
    const formattedResponse = formatLeaveTypeResponse(response);
    dispatch(setAllLeaveType(formattedResponse));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleAddLeave = (values, setSubmitOnce) => async (dispatch) => {
  try {
    setSubmitOnce(true);
    const request = formatAddLeaveRequest(values);
    const path = apiUrl.leaves;
    const { status } = await Helper.post(request, path);
    setSubmitOnce(false);
    if (status === 201) {
      swalService.showSuccess({ title: "Leave Added!" });
      dispatch(setSuccess(true));
    }
  } catch (error) {
    setSubmitOnce(false);
    swalService.showError({
      title: "Error!",
    });
  }
};

export const fetchEmployeeData =
  (currentPage, itemsPerPage) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const path = `leaves?page=${currentPage}&per_page=${itemsPerPage}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatEmployeeData(response?.data);
      dispatch(getAllLeaves(formattedResponse));
      dispatch(setPageCount(response?.pagination_data?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };

export const handleStatusChange = (values, ids, option) => async (dispatch) => {
  try {
    const request = formattedStatusChange(values, option);
    const path = apiUrl.leaves + `/${ids}`;
    await Helper.put({ leave: request }, path);
    dispatch(updateLeaveStatus(ids, option));
    swalService.showSuccess({ text: "Updated Successfully" });
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleLeaveSearchData =
  (currentPage, itemsPerPage, searchItem, searchDate) => async (dispatch) => {
    dispatch(isLoading(true));
    var url;
    if (searchDate !== "") {
      url = `leaves?&per_page=${itemsPerPage}&page=${currentPage}&from_date=${
        searchDate || ""
      }&query=${searchItem}`;
    } else {
      url = `leaves?&per_page=${itemsPerPage}&page=${currentPage}&query=${searchItem}`;
    }
    try {
      const { response } = await Helper.get(url);
      const formattedResponse = formatEmployeeData(response?.data);
      dispatch(getAllLeaves(formattedResponse));
      dispatch(setPageCount(response?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };
