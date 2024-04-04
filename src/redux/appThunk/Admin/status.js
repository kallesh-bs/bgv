import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import { isLoading, setPageCount, setStatusByNameAndDate } from "redux/actions/action";
import { formatStatusListResponse, formatStatuslistNameAndDate } from "redux/selector/Admin/status";
import swalService from "utils/SwalServices";

export const fetchstatus = (currentPage, itemsPerPage) => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const path = `${apiUrl.allStatus}?page=${currentPage}&per_page=${itemsPerPage}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatStatusListResponse(response?.statuses);
    dispatch(setStatusByNameAndDate(formattedResponse));
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const StatusByNameandDate = (name, date, currentPage) => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const path = `${apiUrl.allStatus}?name=${name}&date=${date}&page=${currentPage}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatStatuslistNameAndDate(response.statuses);
    dispatch(setStatusByNameAndDate(formattedResponse));
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    dispatch(isLoading(false));
  } catch (error) {
    console.log(error);
  }
};
