import {
  ALL_LEAVES,
  BGV_ALL_EMPLOYEE_DATA,
  BGV_EMPLOYEE_DATA_BY_ID,
  BGV_FILE_UPLOAD,
  COMPANY_PROFILE,
  NOTIFY_USER,
  ON_HOLD_BY_EMPLOYEE_ID,
  PAGE_COUNT,
  PROFILE_COMPLETION_BY_ID,
  REMOVE_DOCUMENT,
  SEARCH_LEAVE,
  SET_ACTIVECHAT,
  SET_ALL_FEEDBACK_DATA,
  SET_ALL_LEAVE_TYPE,
  SET_ATTENDANCE,
  SET_BROADCASTEDMESSAGE,
  SET_CHAT_USERS_STATUS,
  SET_CHATS,
  SET_CLIENTS_NUMBER,
  SET_EMPLOYEE_NUMBER,
  SET_EXPENSE_DATA,
  SET_FILES,
  SET_GROUP_CHATS,
  SET_INDIVIDUAL_INTERVIEW_DATA,
  SET_INTERVIEW_DATA,
  SET_INTERVIEW_ID,
  SET_INVOICE_BYID,
  SET_JOB_OPENING_DATA,
  SET_MESSAGES,
  SET_MONTHLY_CLIENTS,
  SET_MONTHLY_EMPLOYEES,
  SET_MONTHLY_REVENUE,
  SET_MONTHLY_WORKINGHOURS,
  SET_MY_FEEDBACK_DATA,
  SET_MY_STATUS,
  SET_NOTIFICATION,
  SET_NOTIFICATION_UPDATE,
  SET_OVERIVEW_REVIEW,
  SET_OVERVIEW_REVENUE,
  SET_PROJECT_LIST,
  SET_PUNCH_IN_DATA,
  SET_ROOMID,
  SET_SEARCH_RESULT,
  SET_SEARCH_RESULT_FOR_CHAT,
  SET_SENDMESSAGES,
  SET_SERVICE_AVAILABLE_DATA,
  SET_SHOW_GROUP_LIST,
  SET_SHOW_PROFILE,
  SET_SHOW_TOAST,
  SET_TOTAL_AVG,
  SET_TOTAL_EMPLOYEES,
  SET_UPDATE_CHATS,
  SET_USERLIST,
  SET_USERNAME,
  SET_YEARLY_WORKINGHOURS,
  SET_YOUR_AVG,
  SINGLE_ASSET_DATA,
  SINGLE_COMPANY_DATA,
  SINGLE_PF_DATA,
  SINGLE_TDS_DATA,
  STORE_FILE_DATA,
  TIMER_DATA,
  TOTAL_WORKING_DAYS_LEAVES,
  UPDATE_JOB_OPENING,
} from "./types";

export const bgvAllEmpData = (payload) => {
  return {
    type: BGV_ALL_EMPLOYEE_DATA,
    payload,
  };
};

export const bgvFileUpload = (payload) => {
  return {
    type: BGV_FILE_UPLOAD,
    payload,
  };
};
export const bgvEmployeeDataById = (payload) => {
  return {
    type: BGV_EMPLOYEE_DATA_BY_ID,
    payload,
  };
};
export const notifyUser = (payload) => {
  return {
    type: NOTIFY_USER,
    payload,
  };
};
export const holdByEmployeeId = (payload) => {
  return {
    type: ON_HOLD_BY_EMPLOYEE_ID,
    payload,
  };
};

export const profileCompletionById = (payload) => {
  return {
    type: PROFILE_COMPLETION_BY_ID,
    payload,
  };
};

export const removeDocument = (payload) => {
  return {
    type: REMOVE_DOCUMENT,
    payload,
  };
};

export const setleave = (payload) => {
  return {
    type: "SET_LEAVE",
    payload,
  };
};

export const dashboardLeaves = (payload) => {
  return {
    type: "DASHBOARD_LEAVES",
    payload,
  };
};

export const getdynamicpage = (payload) => {
  return {
    type: "SET_DY_PAGE",
    payload,
  };
};

export const setIndividualleave = (payload) => {
  return {
    type: "INDIVIDUAL_LEAVE",
    payload,
  };
};

export const timerData = (payload) => {
  return {
    type: TIMER_DATA,
    payload,
  };
};

export const deleteleave = (payload) => {
  return {
    type: "DELETE_LEAVE",
    payload,
  };
};

export const changeMargin = (payload) => {
  return {
    type: "UPDATE_MARGIN",
    payload,
  };
};

export const indiviualstatus = (payload) => {
  return {
    type: "INDIVIUAL_STATUS",
    payload,
  };
};

export const deletestatus = (payload) => {
  return {
    type: "DELETE_STATUS",
    payload,
  };
};

export const addMoretask = (payload) => {
  return {
    type: "ADD_MORE_TASK",
    payload,
  };
};

export const attandanceData = (payload) => {
  return {
    type: "ATTANDANCE_DATA",
    payload,
  };
};

export const setstatus = (payload) => {
  return {
    type: "SET_STATUS",
    payload,
  };
};

export const setStatusByNameAndDate = (payload) => {
  return {
    type: "SEARCH_STATUS_NAME_DATE",
    payload,
  };
};

export const setjobOpening = (payload) => {
  return {
    type: SET_JOB_OPENING_DATA,
    payload,
  };
};

export const updatejobOpening = (payload) => {
  return {
    type: UPDATE_JOB_OPENING,
    payload,
  };
};

export const deleteJobOpening = (payload) => {
  return {
    type: "DELETE_JOB_OPENING_DATA",
    payload,
  };
};

export const setContactUsData = (payload) => {
  return {
    type: "SET_CONTACTUS_DATA",
    payload,
  };
};

export const userProfile = (payload) => {
  return {
    type: "USER_PROFILE",
    payload,
  };
};

export const updateProfile = (payload) => {
  return {
    type: "UPDATE_PROFILE",
    payload,
  };
};

export const setSelectRole = (payload) => {
  return {
    type: "SET_SELECT_ROLE",
    payload,
  };
};

export const setAllEmployeeData = (payload) => {
  return {
    type: "SET_EMPLOYEE_DATA",
    payload,
  };
};

export const setServiceAvailableData = (payload) => {
  return {
    type: SET_SERVICE_AVAILABLE_DATA,
    payload,
  };
};

export const setSalaryInfo = (payload) => {
  return {
    type: "SET_SALARY_INFO",
    payload,
  };
};

export const setEmployeeSalaryInfo = (payload) => {
  return {
    type: "SET_EMPLOYEE_SALARY_INFO",
    payload,
  };
};

export const setApplyJob = () => {
  return {
    type: "Set_Apply_Job",
  };
};

export const setTdsData = (payload) => {
  return {
    type: "SET_TDS_DATA",
    payload,
  };
};

export const getAllLeaves = (payload) => {
  return {
    type: ALL_LEAVES,
    payload,
  };
};

export const setSubscribeApi = (payload) => {
  return {
    type: "Set_Subscribe_Api",
    payload,
  };
};

export const isShowDialogBoxChange = (payload) => {
  return {
    type: "SET_SHOW_DIALOG_BOX",
    payload,
  };
};

export const isAdditionDialogBoxToggle = (payload) => {
  return {
    type: "SET_SHOW_ADDITION_DIALOG_BOX",
    payload,
  };
};

export const isDeductionDialogBoxToggle = (payload) => {
  return {
    type: "SET_SHOW_DEDUCTION_DIALOG_BOX",
    payload,
  };
};

export const isOtherDialogBoxToggle = (payload) => {
  return {
    type: "SET_SHOW_OTHER_DIALOG_BOX",
    payload,
  };
};

export const isDeleteDialogBoxToggle = (payload) => {
  return {
    type: "SET_DELETE_DIALOG_BOX",
    payload,
  };
};

export const setMyTeams = (payload) => {
  return {
    type: "SET_MY_TEAMS",
    payload,
  };
};

export const setIndividualJobOpening = (payload) => {
  return {
    type: "INDIVIDUAL_JOB_OEPNING",
    payload,
  };
};

export const setAssetsData = (payload) => {
  return {
    type: "SET_ASSETS_DATA",
    payload,
  };
};

export const setCompanyTaxData = (payload) => {
  return {
    type: "SET_COMPANY_TAX_DATA",
    payload,
  };
};

export const allEmployeeList = (payload) => {
  return {
    type: "ALL_EMPLOYEE_LIST",
    payload,
  };
};

export const loadUserToken = () => {
  const token = JSON.parse(localStorage.getItem("userLoginToken"));

  return {
    type: "SET_USER_TOKEN",
    payload: token,
  };
};

export const allBankDetails = (payload) => {
  return {
    type: "ALL_BANK_DETAILS",
    payload,
  };
};

export const allCompanyTaxDetails = (payload) => {
  return {
    type: "ALL_COMPANY_TAX_DETAILS",
    payload,
  };
};

export const setClientsDetails = (payload) => {
  return {
    type: "SET_CLIENTS_DETAILS",
    payload,
  };
};

export const setUsername = (payload) => {
  return {
    type: SET_USERNAME,
    payload,
  };
};

export const setShowGroup = (payload) => {
  return {
    type: "SET_SHOWGROUP",
    payload,
  };
};

export const setShowGroupList = (payload) => {
  return {
    type: SET_SHOW_GROUP_LIST,
    payload,
  };
};

export const setSearchRslt = (payload) => {
  return {
    type: SET_SEARCH_RESULT,
    payload,
  };
};

export const setDashboardData = (payload) => {
  return {
    type: SET_PUNCH_IN_DATA,
    payload,
  };
};

export const setTotalWorkingDays = (payload) => {
  return {
    type: TOTAL_WORKING_DAYS_LEAVES,
    payload,
  };
};

export const allExpensesDetails = (payload) => {
  return {
    type: "ALL_EXPENSES_DETAILS",
    payload,
  };
};

export const singleExpense = (payload) => {
  return {
    type: "SINGLE_EXPENSE",
    payload,
  };
};

export const assetsDetails = (payload) => {
  return {
    type: "SET_ASSET_DATA",
    payload,
  };
};

export const setProvidentFundData = (payload) => {
  return {
    type: "SET_PROVIDENT_DATA",
    payload,
  };
};

export const setAllLeaveType = (payload) => {
  return {
    type: SET_ALL_LEAVE_TYPE,
    payload,
  };
};

export const setSearchRsltForChat = (payload) => {
  return {
    type: SET_SEARCH_RESULT_FOR_CHAT,
    payload,
  };
};

export const setNotification = (payload) => {
  return {
    type: SET_NOTIFICATION,
    payload,
  };
};

export const setNotificationUpdate = (payload) => {
  return {
    type: SET_NOTIFICATION_UPDATE,
    payload,
  };
};

export const setRoomId = (payload) => {
  return {
    type: SET_ROOMID,
    payload,
  };
};

export const setChatUserUpdate = (payload) => {
  return {
    type: SET_CHAT_USERS_STATUS,
    payload,
  };
};

export const setMyStatus = (payload) => {
  return {
    type: SET_MY_STATUS,
    payload,
  };
};

export const setChats = (payload) => {
  return {
    type: SET_CHATS,
    payload,
  };
};

export const setUpdateChats = (payload) => {
  return {
    type: SET_UPDATE_CHATS,
    payload,
  };
};

export const setGroupChats = (payload) => {
  return {
    type: SET_GROUP_CHATS,
    payload,
  };
};

export const setActiveChat = (payload) => {
  return {
    type: SET_ACTIVECHAT,
    payload,
  };
};

export const setMessages = (payload) => {
  return {
    type: SET_MESSAGES,
    payload,
  };
};

export const setSendMessages = (payload) => {
  return {
    type: SET_SENDMESSAGES,
    payload,
  };
};

export const setBroadCastedMessages = (payload) => {
  return {
    type: SET_BROADCASTEDMESSAGE,
    payload,
  };
};

export const setMessaegUserList = (payload) => {
  return {
    type: SET_USERLIST,
    payload,
  };
};

export const setShowToast = (payload) => {
  return {
    type: SET_SHOW_TOAST,
    payload,
  };
};

export const setMonthlyRevenue = (payload) => {
  return {
    type: SET_MONTHLY_REVENUE,
    payload,
  };
};

export const setRevenue = (payload) => {
  return {
    type: SET_OVERVIEW_REVENUE,
    payload,
  };
};

export const setMonthlyClients = (payload) => {
  return {
    type: SET_MONTHLY_CLIENTS,
    payload,
  };
};

export const setMonthlyEmployees = (payload) => {
  return {
    type: SET_MONTHLY_EMPLOYEES,
    payload,
  };
};

export const setTotalEmployees = (payload) => {
  return {
    type: SET_TOTAL_EMPLOYEES,
    payload,
  };
};

export const setmonthlyWorkingHourGraph = (payload) => {
  return {
    type: SET_MONTHLY_WORKINGHOURS,
    payload,
  };
};

export const setYearlyWorkingHourGraph = (payload) => {
  return {
    type: SET_YEARLY_WORKINGHOURS,
    payload,
  };
};

export const setTotalAvg = (payload) => {
  return {
    type: SET_TOTAL_AVG,
    payload,
  };
};

export const setPageCount = (payload) => {
  return {
    type: PAGE_COUNT,
    payload,
  };
};

export const setYourAvg = (payload) => {
  return {
    type: SET_YOUR_AVG,
    payload,
  };
};

export const getAllReviews = (payload) => {
  return {
    type: "GET_REVIEWS",
    payload,
  };
};

export const setCompanyProfile = (payload) => {
  return {
    type: COMPANY_PROFILE,
    payload,
  };
};

export const getAllProjectResources = (payload) => {
  return {
    type: "GET_PROJECT_RESOURCES",
    payload,
  };
};

export const setMonthlyReview = (payload) => {
  return {
    type: SET_OVERIVEW_REVIEW,
    payload,
  };
};

export const setInterviewId = (payload) => {
  return {
    type: SET_INTERVIEW_ID,
    payload,
  };
};

export const setClientInformation = (payload) => {
  return {
    type: "SET_CLIENT_INFORMATION",
    payload,
  };
};

export const setAllProjects = (payload) => {
  return {
    type: "SET_ALL_PROJECTS",
    payload,
  };
};

export const setClientInvoiceData = (payload) => {
  return {
    type: "GET_CLIENT_INVOICES",
    payload,
  };
};

export const setInvoiceData = (payload) => {
  return {
    type: "SET_INVOICE_DATA",
    payload,
  };
};

export const setInvoiceById = (payload) => {
  return {
    type: SET_INVOICE_BYID,
    payload,
  };
};

export const isLoading = (payload) => {
  return {
    type: "IS_LOADING",
    payload,
  };
};

export const searchEmployeeData = (payload) => {
  return {
    type: "SEARCH_EMPLOYEE",
    payload,
  };
};

export const setSuccess = (payload) => {
  return {
    type: "SET_SUCCESS",
    payload,
  };
};

export const setFetchSuccess = (payload) => {
  return {
    type: "SET_FETCH_SUCCESS",
    payload,
  };
};

export const setDesignationSearchData = (payload) => {
  return {
    type: "SET_DESIGNATION_DATA",
    payload,
  };
};

export const setDesignationData = (payload) => {
  return {
    type: "ALL_DESIGNATION_DATA",
    payload,
  };
};

export const singleReview = (payload) => {
  return {
    type: "SINGLE_REVIEW",
    payload,
  };
};

export const allProjects = (payload) => {
  return {
    type: "ALL_PROJECTS",
    payload,
  };
};

export const setCountryState = (payload) => {
  return {
    type: "SET_COUNTRY_STATE",
    payload,
  };
};

export const setCityName = (payload) => {
  return {
    type: "SET_CITY",
    payload,
  };
};

export const setManagerName = (payload) => {
  return {
    type: "SET_MANAGER_NAMES",
    payload,
  };
};

export const setIndividualInterviewData = (payload) => {
  return {
    type: SET_INDIVIDUAL_INTERVIEW_DATA,
    payload,
  };
};

export const setInterviewData = (payload) => {
  return {
    type: SET_INTERVIEW_DATA,
    payload,
  };
};

export const setAllFeedbackData = (payload) => {
  return {
    type: SET_ALL_FEEDBACK_DATA,
    payload,
  };
};

export const setMyFeedbackData = (payload) => {
  return {
    type: SET_MY_FEEDBACK_DATA,
    payload,
  };
};

export const setAttendance = (payload) => {
  return {
    type: SET_ATTENDANCE,
    payload,
  };
};

export const updateLeaveStatus = (leaveId, newStatus) => ({
  type: "UPDATE_LEAVE_STATUS",
  payload: { leaveId, newStatus },
});

export const setExpense = (payload) => {
  return {
    type: SET_EXPENSE_DATA,
    payload,
  };
};

export const setDownloadAssets = (payload) => {
  return {
    type: "SET_ASSET_DOWNLOAD",
    payload,
  };
};

export const getCompanyData = (payload) => {
  return {
    type: SINGLE_COMPANY_DATA,
    payload,
  };
};

export const getTdsDataByID = (payload) => {
  return {
    type: SINGLE_TDS_DATA,
    payload,
  };
};

export const getPFDataByID = (payload) => {
  return {
    type: SINGLE_PF_DATA,
    payload,
  };
};

export const setSalaryStructure = (payload) => ({
  type: "SET_SALARY_STRUCTURE",
  payload,
});

export const getAssetsDataById = (payload) => {
  return {
    type: SINGLE_ASSET_DATA,
    payload,
  };
};

export const addAssetSuccess = (response) => ({
  type: "ADD_ASSET_SUCCESS",
  payload: response,
});

export const editAssetSuccess = (response) => ({
  type: "EDIT_ASSET_SUCCESS",
  payload: response,
});

export const setFiles = (files) => ({
  type: SET_FILES,
  payload: files,
});

export const storeFileData = (fileData) => ({
  type: STORE_FILE_DATA,
  payload: fileData,
});

export const setProjectList = (Data) => ({
  type: SET_PROJECT_LIST,
  payload: Data,
});

export const setLeaveSearchData = (Data) => ({
  type: SEARCH_LEAVE,
  payload: Data,
});

export const setSalaryFilterListing = (Data) => ({
  type: "SET_SALARY_FILTER",
  payload: Data,
});

export const setSection192 = (Data) => ({
  type: "SET_SECTION_192",
  payload: Data,
});

export const setShowProfile = (payload) => ({
  type: SET_SHOW_PROFILE,
  payload,
});

export const totalEmployeesNumber = (payload) => ({
  type: SET_EMPLOYEE_NUMBER,
  payload,
});

export const totalClientsNumber = (payload) => ({
  type: SET_CLIENTS_NUMBER,
  payload,
});

export const userProfileData = (payload) => ({
  type: "SET_USER_DATA",
  payload,
});

export const getVerificationTabName = (payload) => ({
  type: "SET_TAB_NAME",
  payload,
});
