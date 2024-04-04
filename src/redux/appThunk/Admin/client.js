/* eslint-disable max-len */
import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  getAllProjectResources,
  isLoading,
  isShowDialogBoxChange,
  searchEmployeeData,
  setAllProjects,
  setClientInformation,
  setClientInvoiceData,
  setClientsDetails,
  setInterviewId,
  setPageCount,
  setSuccess,
  totalClientsNumber
} from "redux/actions/action";
import {
  formatAddResourceRequest,
  formatAllProjectInformation,
  formatClientInfo,
  formatClientInformation,
  formatEmployeeData,
  formatProjectResourceResponse,
  formatReview,
  formatedInvoiceData,
  formatfeedback
} from "redux/selector/Admin/client";
import { getAllReviews, singleReview } from "redux/actions/action";
import {
  formatSingleReviews,
  formateReviews
} from "redux/selector/Admin/client";
import swalService from "utils/SwalServices";

export const fetchResourceData = (id, projectID) => async (dispatch) => {
  try {
    const path = `${apiUrl.clients}/${id}/${apiUrl.projects}/${projectID}/${apiUrl.projectResources}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatProjectResourceResponse(
      response?.project_resources
    );
    dispatch(getAllProjectResources(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchClientsDetail = (id) => async (dispatch) => {
  const path = apiUrl.clients + `/${id}`;
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatClientInformation(response?.client);
    dispatch(setClientInformation(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const fetchProjectsDetail = (id) => async (dispatch) => {
  const path = `projects?client_id=${id}`;
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatAllProjectInformation(response?.projects);
    dispatch(setAllProjects(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const updateClientInfo = (formData, id) => async () => {
  try {
    const request = formatClientInfo(formData);
    const path = apiUrl.clients + `/${id}`;
    const { status } = await Helper.put(request, path, true);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({ title: "Erro!" });
  }
};

export const fetchInvoiceData = (id) => async (dispatch) => {
  const path = apiUrl.clientbyid + `${id}`;
  dispatch(isLoading(true));
  try {
    const { response } = await Helper.get(path);
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    const formatedData = formatedInvoiceData(response?.data);
    dispatch(setClientInvoiceData(formatedData));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const handleSearchUser = (userName) => async (dispatch) => {
  const path = `users/search?page=${""}&per_page=${""}&query=${userName}`;
  try {
    const { response } = await Helper.get(path);
    const formatData = formatEmployeeData(response?.users);
    dispatch(searchEmployeeData(formatData));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const addProjectResources =
  (setShowResourcesForm, values, id, projectId) => async (dispatch) => {
    const formattedRequest = formatAddResourceRequest(values, id, projectId);
    const path =
      `${apiUrl.clients}/${formattedRequest?.id}/${apiUrl.projects}/${formattedRequest?.projectId}/` +
      `${apiUrl.projectResources}?${apiUrl.employeeName}=${formattedRequest?.employeeName}`;
    const response = await Helper.post(formattedRequest?.values, path);
    dispatch(setSuccess(true));
    swalService.showSuccess({ title: "Added!", text: response.message });
    if (response.status === 201) {
      setShowResourcesForm(false);
    }
  };

export const handleEdit = (id) => async (dispatch) => {
  const path = apiUrl.reviews + `/${id}`;
  const { response, status } = await Helper.get(path);
  if (status === 200) {
    const formatedData = formatSingleReviews(response?.review);
    dispatch(singleReview(formatedData));
  }
};

export const fetchReviews = (resourceId) => async (dispatch) => {
  const path = apiUrl.reviews + `?resource_id=${resourceId}`;
  const { response, status } = await Helper.get(path);
  if (status === 200) {
    const formatedData = formateReviews(response?.reviews);
    dispatch(getAllReviews(formatedData));
  }
};

export const addReviews = (values) => async () => {
  const formatData = formatReview(values);
  const path = apiUrl?.reviews;
  const { response, status } = await Helper.post(formatData, path, false);
  if (status === 201) {
    swalService.showSuccess({
      icon: "success",
      title: "Added!",
      text: response.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const updateReviews = (values, editId) => async () => {
  const formatData = formatReview(values);
  const path = apiUrl?.reviews + `/${editId}`;
  const { response, status } = await Helper.put(formatData, path, false);
  if (status === 201) {
    swalService.showSuccess({
      icon: "success",
      title: "Updated!",
      text: response.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const createInterviewSchedule =
  (formData, id, projectId, projectResourceId, setActiveTab) =>
    async (dispatch) => {
      const path = `${apiUrl?.createInterview}?client_id=${id}&project_id=${projectId}&resource_id=${projectResourceId}`;
      const { response } = await Helper.post(formData, path, true);
      const responseJson = await response.json();
      if (response.status === 201) {
        swalService.showSuccess({
          icon: "success",
          title: "Scheduled Interview!",
          showConfirmButton: false,
          timer: 1500,
        });
        setActiveTab(2);
        dispatch(setInterviewId(responseJson.data.id));
      }
    };

export const createFeedback =
  (values, interviewId, setRenderSchedulePage) => async (dispatch) => {
    const jsonObj = formatfeedback(values, interviewId);
    const path = `${apiUrl.feedbacks}`;
    const { response } = await Helper.post(jsonObj, path);
    if (response.status === 201) {
      swalService.showSuccess({
        icon: "success",
        title: "Interview Feedback!",
        showConfirmButton: false,
        timer: 1500,
      });
      setRenderSchedulePage(false);
      dispatch(isShowDialogBoxChange(false));
    }
  };

export const fetchClientsData = (search,currentPage,selectedFilter) => async (dispatch) => {
  dispatch(isLoading(true));
  const path = `clients?client_type=${selectedFilter?.key || "all"}&page=${currentPage || 1}
    &query=${search || ""}`;
  try {
    const { response } = await Helper.get(path);
    if (response.message === "No records found") {
      dispatch(setClientsDetails([]));
    } else {
      dispatch(setClientsDetails(response?.clients));
      dispatch(setPageCount(response?.total_pages));
      dispatch(totalClientsNumber(response?.total_count));
      dispatch(isLoading(false));
    }
  } catch (error) {
    swalService.showError({ title: "Error!" });
  }
};
