import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  formatManagerData,
  formatProjectList
} from "redux/selector/Employee/profile";
import {
  allBankDetails,
  setCityName,
  setCountryState,
  setManagerName,
  setProjectList,
  setSuccess,
  userProfile
} from "redux/actions/action";
import swalService from "utils/SwalServices";

export const profileData = (id, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const path = apiUrl.user + id;
    const { response } = await Helper.get(path);
    dispatch(userProfile(response?.user));
    setLoading(false);
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const handleCountryName = () => async (dispatch) => {
  try {
    const path = `state_city?country=IN`;
    const { response } = await Helper.get(path);
    dispatch(setCountryState(response?.state));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const getCities = (city, state) => async (dispatch) => {
  try {
    if (city || state) {
      const path = `city_add?state=${state}`;
      const { response } = await Helper.get(path);
      dispatch(setCityName(response?.city));
    }
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const updateUserProfile = (id, jsonObj) => async () => {
  const path = apiUrl.userProfile + id;
  try {
    await Helper.put(jsonObj, path);
    swalService.showSuccess({
      icon: "success",
      title: "Updated!",
      text: "Details has been Updated.",
      showConfirmButton: false,
      timer: 1000,
    });
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const fetchAllManager = () => async (dispatch) => {
  const path = "fetch_all_manager";
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatManagerData(response);

    dispatch(setManagerName(formattedResponse));
  } catch (error) {
    console.error("Error!", error);
  }
};

export const updateUserDocuments = (id, jsonObj) => async () => {
  const path = "documents" + `/${id}`;
  await Helper.put(jsonObj, path, true);
  swalService.showSuccess({
    icon: "success",
    title: "Updated!",
    text: "Documents Updated has been Updated.",
    showConfirmButton: false,
    timer: 1000,
  });
};

export const handleBankDetails =
  (id, userid, setLoading) => async (dispatch) => {
    setLoading(true);
    let path = "";
    if (id) {
      path = apiUrl.bank + id;
    } else {
      path = apiUrl.bank + userid;
    }
    try {
      const { response } = await Helper.get(path);
      dispatch(allBankDetails(response));
      setLoading(false);
    } catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
    }
  };

export const updateBankDetails = (id, formdata) => async (dispatch) => {
  try {
    const path = apiUrl.bank + id;
    const { response, status } = await Helper.put(formdata, path, true);
    dispatch(setSuccess(true));
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: response.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const changePassword = (id, jsonObj) => async (dispatch) => {
  try {
    const path = apiUrl.changePassword + id;
    const { status } = await Helper.put(jsonObj, path);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: " Status has been Updated.",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    dispatch(setSuccess(true));
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const salaryInfo = (id, jsonObj) => async (dispatch) => {
  try {
    const path = `${apiUrl.salaryInfo}/${id}`;
    const { status } = await Helper.patch(jsonObj, path);
    dispatch(setSuccess(true));
    if (status === 201) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: " Status has been Updated.",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const fetchAllProjectList = () => async (dispatch) => {
  const path = "projects";
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatProjectList(response);

    dispatch(setProjectList(formattedResponse));
  } catch (error) {
    console.error("Error!", error);
  }
};

export const AssignProject = (id, data, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const path = `${apiUrl.user}${id}/${apiUrl.assignProject}`;
    const { response, status } = await Helper.post(data, path);
    setLoading(false);
    dispatch(setSuccess(true));
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: response.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};

export const AssignManager = (id, data, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const path = `${apiUrl.user}${id}/${apiUrl.assignManager}`;
    const { response, status } = await Helper.post(data, path);
    setLoading(false);
    dispatch(setSuccess(true));
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: response.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};
