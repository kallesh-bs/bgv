const apiUrl = {
  //login
  login: "login",
  forgotPassword: "api/forgot_password",
  updatePassword: "users/first_change_password",

  //leaves
  leaves: "leaves",
  dashboardLeaves: "displayleaves",
  editLeave: "leaves/",

  //status
  status: "time_sheets",
  showTimeSheet: "time_sheets/",
  logOut: "api/logout",
  allStatus: "time_sheets/all_time_sheets",

  //Attendance
  checkIn: "checkIn",
  checkOut: "checkout",

  //jobOpening
  jobOpenings: "job_openings",

  //contact us
  contactUs: "contact_us",

  //company profile
  companyProfile: "company_profiles/get_company",

  //update user profile
  userProfile: "users/update_user/",

  //add new user
  addUser: "users/new_user",

  //dashboard
  dashboard: "dashboard",
  timer: "check_in_out/get_data",

  //userprofile
  user: "users/",

  //salaryINFO
  salary: "salary_slips",
  salaryInfo: "salary_infos",
  salarySlips: "salary_slips",

  //bankdetails
  bank: "bank_details/",

  //punchIn
  punchIn: "check_in_out/check_in",

  //punchout
  punchOut: "check_in_out/check_out",

  //Disable
  disable: "users/disable_user/",

  //DisableClient
  disableclient: "clients/disable_client/",

  //TDS
  tds: "tds",

  //serviceAvailable
  serviceAvailable: "services",

  //applyJob
  applyJob: "job_openings/:id/apply",

  //subscribeApi
  subscribeApi: "subscriptions",

  //showuserapi
  showuserApi: "show_user/",

  //MyTeams
  MyTeams: "my_team",

  //changePassword
  changePassword: "users/change_password/",

  //gadgets
  gadgets: "gadgets",

  //chat
  chat: "chat/search",
  createChats: "chats",
  showUserChatWithId: "chat/show_user_chat",
  message: "messages",
  groupChat: "chat/group_chat",
  getGroupChat: "chat/group",
  getChatToId: "chat/show_chat",
  notification: "notifications",
  getAllNotificationToChatId: "notifications/check_messages",
  loginStatuses: "login_statuses",
  loginStatusUser: "login_statuses",
  updateStatus: "update_status",

  //download_tds
  downloadTDS: "download_tds_csv",

  //download_PF
  downloadPF: "download_provident_fund_csv",

  //download_assets
  downloadAssets: "download_gadget_csv",

  //download_company_tax
  downloadCompanyTax: "download_company_tax_csv",

  //companyTax
  companyTax: "company_tax",

  //clients
  clients: "clients",
  clientbyid: "invoices/client_id/",
  employeeName: "employee_name",
  projectResources: "project_resources",

  //providentfund
  providentfund: "provident_funds",

  //projects
  projects: "projects",

  //notifications
  notifications: "notifications",
  markAllRead: "notifications/mark_all_as_read",

  //check_
  checkInOutDetails: "check_in_out/check_in_out_details",

  //totalWorkingDaysAndTotalLeaves
  totalWorkingDays: "total_working_days",

  //Expense
  expense: "expense",

  //Invoice
  invoice: "invoices",

  //Interview
  interview: "interviews",
  createInterview: "interviews/create_interview",

  //Designation
  designation: "designations",

  //reviews
  reviews: "reviews",

  //Total Clients
  monthlyClients: "clients/monthly_clients",

  //monthly employee
  monthlyEmployees: "users/monthly_employees",

  ///number of employees
  totalEmployees: "users/total_employees",

  // monthly_Working_hours
  monthlyWorkingHours: "time_sheets/monthly_hours",

  //yearlyWorkingHours
  yearlyWorkingHours: "time_sheets/yearly_hours",

  //leaveType
  leaveType: "leave_type",

  //revenue Graph
  revenueGraph: "financial_totals",

  //disableLeaveType
  disableLeaveType: "leave_type/disable_leave",
  // feedbacks
  feedbacks: "feedbacks/get_feedback",
  getAllFeedbacks: "feedbacks/get_all_feedback",
  myfeedback: "feedbacks/get_feedback?user_id=45&interview_id=29",
  feedback: "feedbacks",
  //revenue monthly graph
  revenueMonthlyGraph: "financial_totals/monthly_summary",

  //performance Graph
  totalAverage: "get_total_average",

  //yourAvearge
  yourAverage: "get_your_average",

  //monthly Rating
  overiewReview: "get_monthly_average_of_year",

  //SalaryAttributes
  salaryAttributes: "salary_types/list_attributes",

  salarytypes: "salary_types",

  updatefield: "update_field",

  //EmployeeBulkUpload
  bulkUploadPost: "bulk_upload",
  sign: "api/signup",

  assignProject: "assign_project",

  assignManager: "assign_managers",
  bulkUploadGet: `get_bulk_data`,
  hireDeveloper: "developers",
  bulkUploadUpdate: "users/update_user/",
  resetPassword: "api/reset_password",

  //verification
  addressCheck: "address_check",
  identityCheck: "identity_check",
  educationCheck: "education_check",
  employementHistoryCheck: "employement_history_check",
  backgroundVerification: "background_verification",
  profileCompletion: "background_verification/profile_completion",
  removeDocument: "background_verification/remove_document",
};

export default apiUrl;
