import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import { allProjects, isLoading, setPageCount } from "redux/actions/action";
import { formatAddProjectData, formatProjectData } from "redux/selector/Admin/projects";
import swalService from "utils/SwalServices";

export const fetchProject = (currentPage) => async (dispatch) => {
  dispatch(isLoading(true));
  const path = apiUrl.projects + `?page=${currentPage}`;
  try {
    const { response } = await Helper.get(path);
    const formatData = formatProjectData(response?.projects);
    dispatch(allProjects(formatData));
    dispatch(setPageCount(response?.totalPages));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};

export const addProject = (values) => async (dispatch) => {
  dispatch(isLoading(true));
  const path = apiUrl.projects;
  try {
    const formatData = formatAddProjectData(values);
    await Helper.post(formatData, path);
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({ title: "Error during creating Projects!" });
  }
};
