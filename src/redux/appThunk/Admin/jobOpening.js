import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  isLoading,
  setIndividualJobOpening,
  setjobOpening
} from "redux/actions/action";
import {
  fetchJobData,
  singleJobData
} from "redux/selector/Admin/jobOpening";
import swalService from "utils/SwalServices";

export const fetchJobOpeningData = () => async (dispatch) => {
  try {
    const path = `${apiUrl.jobOpenings}`;
    const { response } = await Helper.get(path);
    const formattedResponse = fetchJobData(response?.data);
    dispatch(setjobOpening(formattedResponse));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const fetchJobOpeningDataById = (id) => async (dispatch) => {
  try {
    dispatch(isLoading(true));
    const path = apiUrl.jobOpenings + "/" + id;
    const { response } = await Helper.get(path);
    const formattedResponse = singleJobData(response);
    dispatch(setIndividualJobOpening(formattedResponse));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const updateJobOpeningData = (values, id) => async () => {
  const path = apiUrl?.jobOpenings + "/" + `${id}`;
  const { response, status } = await Helper.put(values, path);
  if (status === 200) {
    swalService.showSuccess({
      icon: "success",
      title: "Updated!",
      text: response.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const addJobOpening = (values) => async () => {
  const path = apiUrl?.jobOpenings;

  const { status } = await Helper.post(values, path);
  if (status === 201) {
    swalService.showSuccess({
      icon: "success",
      title: "Added!",
      text: "Added.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
