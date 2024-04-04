import { isLoading, setInvoiceData, setPageCount } from "redux/actions/action";
import { formatedInvoice } from "redux/selector/Admin/invoice";
import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import swalService from "utils/SwalServices";

export const fetchInvoiceData = (searchName, currentPage, getParams) => async (dispatch) => {
  const path = apiUrl.invoice + `?&query=${searchName}&items_per_page=${10}
  &page=${currentPage}&status=${getParams.key}`;
  dispatch(isLoading(true));
  try {
    const { response } = await Helper.get(path);
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    const formatedData = formatedInvoice(response?.data);
    dispatch(setInvoiceData(formatedData));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({
      title: "Error during fetching data!",
      text: "Try Again",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(isLoading(false));
  }
};
