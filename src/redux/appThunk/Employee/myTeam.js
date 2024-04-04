import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  isLoading,
  setPageCount,
  setMyTeams,
  userProfile
} from "redux/actions/action";
import {
  formatMyTeamResponse,
  formatuserResponse
} from "redux/selector/Employee/myTeam";
import swalService from "utils/SwalServices";

export const fetchMyteam =
  (currentPage, itemsPerPage, teamName, designation) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const path =
        apiUrl.MyTeams +
        `?designation_id=${designation}&page=${currentPage}&per_page=${itemsPerPage}&search_query=${teamName}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatMyTeamResponse(response.team_members);
      dispatch(setMyTeams(formattedResponse));
      dispatch(setPageCount(response?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
    }
  };

export const fetchUserData = () => async (dispatch) => {
  const userData = JSON.parse(localStorage.getItem("userLoginToken"));
  const path = apiUrl.user + userData?.id;
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatuserResponse(response.user);
    dispatch(userProfile(formattedResponse));
  } catch (error) {
    swalService.showError({ title: "Error during fetch data!" });
  }
};
