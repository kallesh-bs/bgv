import Helper from "api/Helper";
import { isLoading, setAttendance, setPageCount } from "redux/actions/action";
import { formattedData } from "redux/selector/Employee/attendance";
import swalService from "utils/SwalServices";

export const fetchAttendance =
  (userData, FromDate, ToDate, currentPage, itemsPerPage) =>
    async (dispatch) => {
      try {
        const path =
        `api/single_check_in_out?emp_code=` +
        userData.emp_code +
        `&start_date=${FromDate}&end_date=${ToDate}&page=${currentPage}&pere_page=${itemsPerPage}`;
        const { response } = await Helper.get(path);
        const formattedResponse = formattedData(response?.check_in_outs);
        dispatch(setPageCount(response?.total_pages));
        dispatch(setAttendance(formattedResponse));
        dispatch(isLoading(false));
      } catch (error) {
        swalService.showError({
          title: "Error!",
        });
      }
    };
