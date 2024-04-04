import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import { isLoading, setServiceAvailableData } from "redux/actions/action";
import { formatSeviceDataResponse } from "redux/selector/Website/services";
import swalService from "utils/SwalServices";

export const fetchServiceData = () => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const path = apiUrl.serviceAvailable;
    const { response } = await Helper.get(path);
    const formattedResponse = formatSeviceDataResponse(response?.data);
    dispatch(setServiceAvailableData(formattedResponse));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};
