import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  addAssetSuccess,
  editAssetSuccess,
  getAssetsDataById,
  getCompanyData,
  getPFDataByID,
  getTdsDataByID,
  isLoading,
  setAssetsData,
  setCompanyTaxData,
  setExpense,
  setPageCount,
  setProvidentFundData,
  setSearchRslt,
  setTdsData,
  singleExpense
} from "redux/actions/action";
import {
  formatAddCompanyData,
  formatAssetData,
  formatCompanyTaxData,
  formatEditTdsData,
  formatExpensesData,
  formatPFData,
  formatSearchResult,
  formatTdsData,
  getCompanyDD,
  formatExpensesDetails,
  addExpenseData,
  getTdsData,
  formatAddTdsData,
  getPfData,
  formatEditPFData,
  formatAddPFData,
  getAssetsData,
  formatEditAssetData
} from "redux/selector/Admin/management";
import { monthList } from "utils/Constants";
import swalService from "utils/SwalServices";

export const handleSearchUser = (username) => async (dispatch) => {
  const path = `${apiUrl.chat}?search=${username}`;
  try {
    const { response } = await Helper.get(path);
    const formattedResponse = formatSearchResult(response?.users);
    dispatch(setSearchRslt(formattedResponse));
  } catch (error) {
    swalService.showError({
      title: "User Not Found!",
    });
  }
};

export const fetchExpenseData =
  (currentPage, itemsPerPage, searchName) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const path = `expense?page=${currentPage}&per_page=${itemsPerPage}&query=${searchName}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatExpensesData(response?.expenses);
      dispatch(setExpense(formattedResponse));
      dispatch(setPageCount(response?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };

export const fetchCompanyTaxData =
  (currentPage, itemsPerPage, searchName) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const path = `company_tax?page=${currentPage}&per_page=${itemsPerPage}&query=${searchName}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatCompanyTaxData(response?.data);
      dispatch(setCompanyTaxData(formattedResponse));
      dispatch(setPageCount(response?.pagination_data?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };

export const fetchAssetsData =
  (currentPage, itemsPerPage, searchName) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const path = `gadgets?page=${currentPage}&per_page=${itemsPerPage}&query=${searchName}`;
      const { response } = await Helper.get(path);
      const formattedResponse = formatAssetData(response?.data);
      dispatch(setAssetsData(formattedResponse));
      dispatch(setPageCount(response?.pagination_data?.total_pages));
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({
        title: "Error!",
      });
    }
  };

export const fetchTdsData = (currentPage, itemsPerPage, searchName) => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const path = `tds?page=${currentPage}&per_page=${itemsPerPage}&query=${searchName}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatTdsData(response?.data);
    dispatch(setTdsData(formattedResponse));
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    dispatch(isLoading(false));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const fetchProvidentFundData =
  (currentPage, itemsPerPage, month, searchName) => async (dispatch) => {
    dispatch(isLoading(true));
    const path = `provident_funds?month=${monthList[month]}&page=${currentPage}
    &per_page=${itemsPerPage}&query=${searchName}`;
    const { response } = await Helper.get(path);
    const formattedResponse = formatPFData(response.data);
    dispatch(setProvidentFundData(formattedResponse));
    dispatch(setPageCount(response?.pagination_data?.total_pages));
    dispatch(isLoading(false));
  };

export const fetchExpense = (id) => async (dispatch) => {
  try {
    const path = apiUrl.expense + "/" + id;
    const { response } = await Helper.get(path);
    const formattedResponse = formatExpensesDetails(response?.expense);
    dispatch(singleExpense(formattedResponse));
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const updatePFstatus =
  (ids, currentPage, itemsPerPage, month, requestPayload) =>
    async (dispatch) => {
      try {
        const path = apiUrl.providentfund + `/${ids}`;
        await Helper.put(requestPayload, path);
        dispatch(fetchProvidentFundData(currentPage, itemsPerPage, month));
      } catch (error) {
        swalService.showError({
          title: "Error!",
        });
      }
    };

export const handleAddCompanyTax = (values) => async () => {
  try {
    const request = formatAddCompanyData(values);
    const path = apiUrl.companyTax;
    const { status } = await Helper.post(request, path);
    if (status === 201) {
      swalService.showSuccess({
        icon: "Added",
        text: " Status has been Added.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const addExpense = (values) => async () => {
  try {
    const formatData = addExpenseData(values);
    const path = apiUrl?.expense;
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
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleEditCompanyTax = (values, id) => async () => {
  try {
    const request = formatAddCompanyData(values);
    const path = apiUrl.companyTax + `/${id}`;
    const { status } = await Helper.put(request, path);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: " Status has been Updated.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const updateExpense = (values, id) => async () => {
  try {
    const formatData = addExpenseData(values);
    const path = apiUrl?.expense + "/" + id;
    const { response, status } = await Helper.put(formatData, path, false);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: response.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleCompanyTaxDetails = (id) => async (dispatch) => {
  const path = apiUrl.companyTax + `/${id}`;
  const { response } = await Helper.get(path);
  const formattedData = getCompanyDD(response?.company_tax);
  dispatch(getCompanyData(formattedData));
};

export const handleEditTds = (values, id) => async () => {
  try {
    const request = formatEditTdsData(values);
    const path = apiUrl.tds + `/${id}`;
    const { status } = await Helper.put(request, path);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: " Status has been Updated.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleAddTds = (values, ids) => async () => {
  try {
    const request = formatAddTdsData(values);
    const path = `${apiUrl.tds}/${ids}`;
    const { status } = await Helper.post(request, path);
    if (status === 201) {
      swalService.showSuccess({
        icon: "Added",
        text: " Status has been Added.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleTdsDetails = (id) => async (dispatch) => {
  const path = `${apiUrl.tds}/${id}`;
  const { response } = await Helper.get(path);
  const formattedData = getTdsData(response);
  dispatch(getTdsDataByID(formattedData));
};

export const handlePFDetails = (id) => async (dispatch) => {
  const path = `provident_funds/${id}`;
  const { response } = await Helper.get(path);
  const formattedData = getPfData(response);
  dispatch(getPFDataByID(formattedData));
};

export const handleEditPF = (values, id) => async () => {
  try {
    const request = formatEditPFData(values);
    const path = `${apiUrl.providentfund}/${id}`;
    const { status } = await Helper.put(request, path);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: " Status has been Updated.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleAddPF = (values, ids) => async () => {
  try {
    const request = formatAddPFData(values);
    const path = `${apiUrl.providentfund}/${ids}`;
    const { status } = await Helper.post(request, path);
    if (status === 201) {
      swalService.showSuccess({
        icon: "Added",
        text: " Status has been Added.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleAssetsDetails = (id) => async (dispatch) => {
  const path = `${apiUrl.gadgets}/${id}`;
  const { response } = await Helper.get(path);
  const formattedData = getAssetsData(response);
  dispatch(getAssetsDataById(formattedData));
};

export const handleEditAsset = (values, id, images) => async (dispatch) => {
  try {
    const formattedData = formatEditAssetData(values, images);
    const path = `${apiUrl.gadgets}/${id}`;
    const { response, status } = await Helper.put(formattedData, path, true);
    if (status === 200) {
      dispatch(editAssetSuccess(response));
      swalService.showSuccess({
        icon: "success",
        title: "Updated!",
        text: response.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};

export const handleAddAsset = (values, images) => async (dispatch) => {
  try {
    const formattedData = formatEditAssetData(values, images);
    const path = apiUrl.gadgets;
    const { response, status } = await Helper.post(formattedData, path, true);
    if (status === 201) {
      dispatch(addAssetSuccess(response));
      swalService.showSuccess({
        icon: "success",
        title: "Added!",
        text: response.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    swalService.showError({
      title: "Error!",
    });
  }
};
