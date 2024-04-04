import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import { setCompanyProfile } from "redux/actions/action";
import {
  GetCompanyProfileDetail,
  formateCompanyProfile
} from "redux/selector/Admin/companyProfile";
import swalService from "utils/SwalServices";

export const fetchCompanyProfileDetails = () => async (dispatch) => {
  try {
    const path = apiUrl?.companyProfile;
    const { response } = await Helper.get(path);
    const formattedResponse = GetCompanyProfileDetail(response);
    dispatch(setCompanyProfile(formattedResponse));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleStatusChange = (values, ids, option) => async () => {
  try {
    const request = formateCompanyProfile(values, option);
    const path = apiUrl.companyProfile;
    await Helper.patch(request, path);
    swalService.showSuccess({ text: "Updated Successfully" });
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};
