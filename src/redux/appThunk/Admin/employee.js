import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import { isLoading, setAllEmployeeData, setFiles, setPageCount,
  storeFileData, totalEmployeesNumber } from "redux/actions/action";
import { FilterUsers } from "utils/Constants";
import swalService from "utils/SwalServices";

export const handleUploadBulkFile = (values) => async (dispatch) => {
  try {
    const path = apiUrl?.bulkUploadPost;
    const {status} = await Helper.post(values, path, true);
    if(status === 201 || status === 200){
      dispatch(setFiles(true));
      dispatch(handleFileDetail());
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const fetchEmployeeData = (employeesType,currentPage,searchItem) => async (dispatch) => {
  dispatch(isLoading(true));
  const getParams = FilterUsers.find(
    (users) => employeesType === users.header
  );
  const path =
  `users?user_type=${getParams?.key || "all"}&page=${currentPage || 1}&query=${searchItem || ""}`;
  try {
    const { response } = await Helper.get(path);
    if (response.message === "No records found") {
      dispatch(setAllEmployeeData([]));
    } else {
      dispatch(setAllEmployeeData(response?.users));
      dispatch(setPageCount(response?.total_pages));
      dispatch(totalEmployeesNumber(response?.total_count));
    }
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const handleFileDetail = () => async (dispatch) => {
  try {
    const path = apiUrl?.bulkUploadGet;
    const { status, response } = await Helper.get(path, true);
    if (status === 200 || status === 201) {
      dispatch(storeFileData(response.data));
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleFileUpdateDetail = (id, updateData) => async (dispatch) => {
  try {
    const path = apiUrl?.bulkUploadUpdate + id;
    const { status, response } = await Helper.put(updateData.user , path);
    if(status === 200 || status === 201){
      dispatch(storeFileData(response));

      dispatch(handleFileDetail());
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};
