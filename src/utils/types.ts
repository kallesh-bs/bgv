// utils/types.ts
export interface IEmployeeData {
  id: number;
  profile_picture_url?: string;
  name?: string;
  full_name: string;
  email?: string;
  designation?: string;
  phone_no?: string;
  date_of_joining?: string;
  status: string;
}

export interface IFinalFilteredValueProps {
  isChecked: boolean;
  header: string;
}

export interface IVerificationTableProps {
  employeeData: IEmployeeData[];
  finalFilteredValue: any;
  currentPage: number;
  setId: (id: number) => void;
  setOpenPopUp: (open: boolean) => void;
  setEnable: (enable: boolean) => void;
  setCurrentPage: (page: number) => void;
}

export type ITabOption = "Aadhar Card" | "Driving License" | "Passport" | "Choose~";

export interface IEmployeeDataProps {
  total_check: Array<any>;
  verified_count: number;
  inprogress_count: number;
  insufficient_count: number;
  rejected_count: number;
}

export interface ICheckItem {
  value: number;
  label: string;
  color: string;
  status: string;
}

export interface IUseFetchBgvDataProps {
  query?: string;
  currentPage?: number;
  openPopUp?: boolean;
}

export interface IPaginateProps {
  next: string;
  previous: string;
  initialPageCount: number;
  pageRangeDisplayed: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export interface INotifyPopUpProps {
  isNotifyPopUp: boolean;
  tabName: string;
  setNotifyPopUp: (value: boolean) => void;
}

export interface IdentifyCheckProps {
  selectOption: string;
}

export interface IExtraActionsProps {
  docStatus: string;
  setDocStatus: (status: string) => void;
}

export interface IEmployeebriefProps {
  names?: string;
  email?: string;
  userName?: string;
  userEmail?: string;
  id?: string | number;
  empcode?: string;
  imageUrl?: string;
  designation?: string;
  data?: any;
}

export interface IVerficationListingProps {
  tabValue: { tab: number; label: string };
  allEmpData: any[];
}

export interface IBgvEmployeeData {
  total_check: Array<any>;
  verified_count: number;
  inprogress_count: number;
  insufficient_count: number;
  rejected_count: number;
}

export interface IBgvState {
  employeeData: IBgvEmployeeData;
}

export interface IAddEmployeeProps {
  setShowAddEmployeePopup: (show: boolean) => void;
}

export interface IAddEmployeeData {
  fullName: string;
  contactNo: string;
  email: string;
  dob: string;
  role: string;
}

export interface IAddEmployeePopupProps {
  AddEmployessDialoBox: () => void;
  values: {
    fullName: string;
    email: string;
    contactNo: string;
    dob: string;
    role: string;
  };
}

export interface ISearchProps {
  searchItem: string;
  setSearchItem: (value: string) => void;
  currentResource?: {
    viewAll?: boolean;
  };
}
