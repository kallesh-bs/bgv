import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  setFetchSuccess,
  setSalaryStructure,
  setSuccess
} from "redux/actions/action";
import {
  formatSalaryAttributes,
  formatSalaryListing
} from "redux/selector/Admin/salary";
import swalService from "utils/SwalServices";

export const fetchSalaryInfo =
  (month, setIsLoading, setSalaryInfo, status) => async (dispatch) => {
    const year = new Date().getFullYear();
    const period = `${year}-${month + 1}`;
    const path = apiUrl.salarySlips + `?status=${status}&month=${period}`;

    try {
      setIsLoading(true);
      const { response } = await Helper.get(path);
      const filteredData = formatSalaryListing(response, dispatch);
      dispatch(setSalaryInfo(filteredData));
      setIsLoading(false);
    } catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
    }
  };

export const fetchSalaryAttributes = (setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    const path = apiUrl.salaryAttributes;
    const { response } = await Helper.get(path);
    const filteredData = formatSalaryAttributes(response);
    dispatch(setSalaryStructure(filteredData));
    setIsLoading(false);
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const AddAdditionalField = (id, jsonObj) => async (dispatch) => {
  try {
    const path = `${apiUrl.salarytypes}/${id}`;
    await Helper.put(jsonObj, path);
    dispatch(setFetchSuccess(true));
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const UpdateSalarydata = (id, jsonObj) => async (dispatch) => {
  try {
    const path = `${apiUrl.salaryInfo}/${id}/${apiUrl.updatefield}`;

    await Helper.patch(jsonObj, path);
    swalService.showSuccess({
      icon: "success",
      title: "Updated!",
      text: "Details has been Updated.",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccess(true));
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};
