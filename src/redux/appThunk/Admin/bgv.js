import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import swalService from "utils/SwalServices";

export const fetchEmpDataForBGV = () => async (dispatch) => {
    if (!path) {
        swalService.showError({ title: "Error during fetch data!" });
        return;
    }
    try {
        const path = apiUrl.background_verification;
        const { response } = await Helper.get(path);

        // dispatch(setMonthlyRevenue(formattedResponse));
    } catch (error) {
        swalService.showError({ title: "Error during fetch data!" });
    }
}