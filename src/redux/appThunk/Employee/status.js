import Helper from "api/Helper";
import { isLoading, setPageCount, setstatus } from "redux/actions/action";
import { formatStatusResponse } from "redux/selector/Employee/status";
import swalService from "utils/SwalServices";

export const fetchstatus = (currentPage, itemsPerPage) => async (dispatch) => {
  dispatch(isLoading(true));
  try{
    const path = `time_sheets?page=${currentPage}&per_page=${itemsPerPage}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatStatusResponse(response?.statuses);
    dispatch(setstatus(formattedResponse));
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchData = (setProjectsList) => async () => {
  try {
    const userData = JSON.parse(localStorage.getItem("userLoginToken"));
    const userID = userData?.id;
    const path = `users/${userID}/projects`;
    const { response } = await Helper.get(path);
    setProjectsList(response);
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};
