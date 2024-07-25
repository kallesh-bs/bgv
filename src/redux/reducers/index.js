import { combineReducers } from "redux";
import { ContactUsReducer } from "./ContactUsReducer";
import { jobOpeningReducer } from "./jobOpeningReducer";
import { leaveReducer } from "./leaveReducer";
import { statusReducer } from "./statusReducer";
import { updateMarginReducer } from "./updateMarginReducer";
import { attendanceReducer } from "./attendanceReducer";
import { profileReducer } from "./profileReducer";
import { userRoleReducer } from "./userRoleReducer";
import { subscribeApi } from "./SubscribeApiReducer";
import { serviceReducer } from "./ServiceReducer";
import { SalaryInfoReducer } from "./SalaryInfoReducer";
import { popUpDialogBox } from "./popUpDialogBox";
import { managementReducer } from "./managementReducer";
import { employeeReducer } from "./allEmployeeReducer";
import { bankReducer } from "./allBankDetails";
import { ClientsReducer } from "./ClientsReducer";
import userSearchReducer from "./userSearchChat";
import GroupChatReducer from "./GroupChatReducer";
import { AssetReducer } from "./assetReducer";
import { dashboardReducers } from "./dashboardReducers";
import commonReducers from "./commonReducers";
import { designationReducer } from "./designationReducer";
import { projectReducer } from "./projectReducers";
import { MyTeamsReducer } from "./MyTeamsReducer";
import { interviewReducer } from "./interviewReducer";
import { invoiceReducer } from "./invoiceReducer";
import employeeImportReducer from "./employeeImportReducer";
import { bgvReducer } from "./bgvReducer";

const reducer = combineReducers({
  leaveReducer: leaveReducer,
  statusReducer: statusReducer,
  invoiceReducer: invoiceReducer,
  updateMarginReducer: updateMarginReducer,
  attendanceReducer: attendanceReducer,
  jobOpeningReducer: jobOpeningReducer,
  ContactUsReducer: ContactUsReducer,
  profileReducer: profileReducer,
  userRoleReducer: userRoleReducer,
  serviceReducer: serviceReducer,
  subscribeApi: subscribeApi,
  popUpDialogBox: popUpDialogBox,
  SalaryInfoReducer: SalaryInfoReducer,
  managementReducer: managementReducer,
  employeeReducer: employeeReducer,
  bankReducer: bankReducer,
  ClientsReducer: ClientsReducer,
  userSearchReducer: userSearchReducer,
  GroupChatReducer: GroupChatReducer,
  AssetReducer: AssetReducer,
  dashboardReducers: dashboardReducers,
  commonReducers: commonReducers,
  designationReducer: designationReducer,
  projectReducer: projectReducer,
  MyTeamsReducer: MyTeamsReducer,
  interviewReducer: interviewReducer,
  file: employeeImportReducer,
  bgvReducer: bgvReducer
});

export default reducer;
