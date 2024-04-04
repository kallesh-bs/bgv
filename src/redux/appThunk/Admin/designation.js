import Helper from "api/Helper";
import {
  isLoading,
  setDesignationData,
  setDesignationSearchData,
  setPageCount
} from "redux/actions/action";
import {
  formatDesignationData,
  formatSearchData
} from "redux/selector/Admin/designation";
import swalService from "utils/SwalServices";

export const handleDesignationSearchData = (searchItem) => async (dispatch) => {
  const path = `designations/search?page=${""}&per_page=${""}&query=${searchItem}`;
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatSearchData(response.designation);
    dispatch(setDesignationSearchData(formattedResponse));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const fetchDesignationDataa =
  (itemsPerPage, currentPage) => async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const path = `designations?&per_page=${itemsPerPage}&page=${currentPage}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatDesignationData(response?.data);
      dispatch(setDesignationData(formattedResponse));
      dispatch(setPageCount(response?.pagination_data?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };
