import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  setIndividualJobOpening,
  setShowGroup,
  setUsername,
} from "redux/actions/action";
// import NotificationScreen from "component/Employee/Dashboard/NotificationScreen";
import NotificationScreen from "component/dashboard/NotificationScreen";
import { useTranslation } from "react-i18next";
import { handleSearchUserForChat } from "redux/appThunk/Employee/chat";
import { awsURL } from "utils/Constants";
// import NotificationScreen from "component/employee/dashboard/NotificationScreen";

const Header = () => {
  const [isHidden, setIsHidden] = useState("hidden");
  const menuRef = useRef(null);
  const location = useLocation();
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem("userLoginToken"));
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const [buttonclick, setButtonclick] = useState(false);
  const [addGroup, setAddGroup] = useState(false);
  const { t } = useTranslation();
  const individualOpening = useSelector(
    (state) => state.jobOpeningReducer.individualOpening
  );
  const showGroupList = useSelector(
    (state) => state.GroupChatReducer.showGroupList
  );
  const { searchResult } = useSelector((state) => state.userSearchReducer);
  const { clientInformation } = useSelector((state) => state.ClientsReducer);

  const handleJobHeader = () => {
    dispatch(setIndividualJobOpening({}));
  };

  const getheadertitle = () => {
    switch (location.pathname) {
      case "/attendance":
        return "Attendance";

      case "/report":
        return "Report";

      case "/status":
        return "Time Sheet";

      case "/leave":
        return "Leaves";

      case "/leaves/addLeave":
        return "Add Leave";

      case "/team":
        return "Team";

      case "/leave/apply":
        return "Apply Leave";

      case "/status/apply":
        return "Fill Time Sheet";

      case `/status/apply/${id}`:
        return "Update Status";

      case `/leave/apply/${id}`:
        return "Update Leave";

      case "/management":
        return "Management";

      case "/management/AddTdsDetails":
        return "TDS";

      case "/management/AssetDetails":
        return "Asset";

      case `/management/CompanyTaxDetails/${id}`:
        return "Company Tax";

      case "/management/AddCompanyTaxDetails":
        return "Company Tax";

      case "/management/ExpenseDetails":
        return "Expense";

      case "/employees":
        return "Employees";

      case "/employees/addEmployee":
        return "Add Employees";

      case "/clients":
        return "Clients";

      case "/clients/addClients":
        return "Add Client";

      case `/status/view/${id}`:
        return "Task Details";

      case `/leave/view/${id}`:
        return "Leave Details";

      case `/employees/profilebasics/${id}`:
        return "Details";

      case `/employees/profileBasics/salaryInfo/${id}`:
        return "Details";

      case `/employees/profileBasics/otherInfo/${id}`:
        return "Details";

      case `/employees/profileBasics/bankDetails/${id}`:
        return "Details";

      case `/employees/profileBasics/documents/${id}`:
        return "Details";

      case `/salary/salaryDetails/${id}`:
        return "Salary Details";

      case `/employees/profileBasics/personalInfo/${id}`:
        return "Details";

      case `/profileBasics`:
        return "Profile";

      case "/companyProfile":
        return "Company Profile";

      case "/profileBasics/personalInfo":
        return "Personal Information";

      case "/profileBasics/otherInfo":
        return "Other Information";

      case "/profileBasics/documents":
        return "Documents";

      case "/profileBasics/salaryInfo":
        return "Salary Information";

      case "/profileBasics/bankDetails":
        return "Bank Details";

      case "/jobOpening":
        return "Job Opening";

      case "/interview":
        return "Interview";

      case "/invoices":
        return "Invoices";

      case `/invoices/editInvoices/${id}`:
        return "Incoice Details";

      case "/management/addProvidentFund":
        return "PF";

      case "/invoices/addInvoices":
        return "Add Invoice";

      case "/jobOpening/addNewOpening":
        return "Create Opening";

      case "/profileBasics/changePassword":
        return userData?.role === "employee" ? "Change Password" : "Details";

      case "/salary":
        return "Salary";

      case "/settings":
        return "Settings";

      case "/settings/changePassword":
        return "Settings";

      case "/settings/manage":
        return "Settings";

      case "/chat":
        if (!showGroupList) {
          return "Chat";
        } else {
          return "Groups";
        }

      case "/profilebasics":
        return "Profile";

      case `/clients/Name/${id}`:
        return clientInformation.name;

      case "/projects":
        return "Projects";

      case "/profileBasics/Documents":
        return "Documents";

      case `/jobOpening/${id}`:
        return individualOpening.title;

      case `/jobOpening/editJob/${id}`:
        return "Edit Opening";

      case "/verification":
        return "Verification";

      case "/VerficaticationDetails":
        return "Current page";

      case "/verification/addEmployee":
        return "Add Verification Employees";

      case "/dashboard":
        return (
          <div>
            <p>Welcome! {getStyledName(capitalize(userData?.full_name))}</p>
          </div>
        );

      case `/EmployeeCSVfile`:
        return "Import CSV";

      case `/verification`:
        return "BackGround Verfication";

      case `/version`:
        return "Version";

      case "/access":
        return "Access Control";

      default:
        return "Welcome!";
    }
  };

  const capitalize = (str) => {
    const name = str?.charAt(0).toUpperCase() + str?.slice(1);

    return name ? name : "Guest";
  };

  const getStyledName = (name) => {
    const coloredStyle = {
      color: "#FF7914",
      fontWeight: "bold",
    };

    return <span style={coloredStyle}>{name}</span>;
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleCreateChat = (item) => {
    //update userDetail
    dispatch(setUsername(item));
    setUserName("");
  };
  const handleNotificationClick = () => {
    setButtonclick(!buttonclick);
  };

  const handleCreateGroupChat = () => {
    dispatch(setShowGroup(true));
    setAddGroup(!addGroup);
  };

  useEffect(() => {
    const handleSearchUser = setTimeout(() => {
      if (userName !== "") {
        dispatch(handleSearchUserForChat(userName));
      }
    }, 1000);

    return () => clearTimeout(handleSearchUser);
  }, [userName]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isHidden === "" &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsHidden("hidden");
      }
      getheadertitle();
    };
    if (isHidden === "") {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isHidden]);

  return (
    <header className="w-full h-fit px-4 py-4 flex justify-between items-center bg-[#fcfcfc] relative">
      <div className="flex items-center ml-4">
        {getheadertitle() === "Fill Time Sheet" && (
          <Link to="/status">
            <h3 className="flex items-center font-normal text-xl text-[#191919]">
              {t("status")}
              <span className="text-[#A1A1A1] mx-2">
                <RiArrowRightDoubleLine />
              </span>
            </h3>
          </Link>
        )}
        {getheadertitle() === "Apply Leave" && (
          <Link to="/leave">
            <h3 className="flex items-center font-normal text-xl text-[#191919]">
              {t("my_leaves")}
              <span className="text-[#A1A1A1] mx-2">
                <RiArrowRightDoubleLine />
              </span>
            </h3>
          </Link>
        )}
        {userData?.role === "admin" && (
          <>
            {["Details", "Add Employees"].includes(getheadertitle()) && (
              <Link to="/employees">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("employees")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Import CSV"].includes(getheadertitle()) && (
              <Link to="/employees">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("employees")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Salary Details"].includes(getheadertitle()) && (
              <Link to="/salary">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("salary")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Add Client", clientInformation.name].includes(
              getheadertitle()
            ) && (
              <Link to="/clients">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("clients")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Create Opening"].includes(getheadertitle()) && (
              <Link to="/jobOpening">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("job_openings")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Add Invoice", "Incoice Details"].includes(getheadertitle()) && (
              <Link to="/invoices">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("invoices")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Task Details"].includes(getheadertitle()) && (
              <Link to="/status">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("status")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["TDS", "Asset", "Company Tax", "Expense", "PF"].includes(
              getheadertitle()
            ) && (
                <Link to="/management">
                  <h3 className="font-normal text-xl text-[#191919] flex items-center">
                    {t("management")}
                    <span className="text-[#A1A1A1] mx-2">
                      <RiArrowRightDoubleLine />
                    </span>
                  </h3>
                </Link>
              )}
            {["Add Leave"].includes(getheadertitle()) && (
              <Link to="/leave">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("leaves")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Basic Details"].includes(getheadertitle()) && (
              <Link to="/leave">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("reset_password")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Client Name"].includes(getheadertitle()) && (
              <Link to="/clients">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("clients")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {[individualOpening.title].includes(getheadertitle()) && (
              <Link to="/jobOpening" onClick={handleJobHeader}>
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("job_openings")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Edit Opening"].includes(getheadertitle()) && (
              <>
                <Link to="/jobOpening" onClick={handleJobHeader}>
                  <h3 className="font-normal text-xl text-[#191919] flex items-center">
                    {t("job_openings")}
                    <span className="text-[#A1A1A1] mx-2">
                      <RiArrowRightDoubleLine />
                    </span>
                  </h3>
                </Link>
                <Link to={`/jobOpening/${id}`}>
                  <h3 className="font-normal text-xl text-[#191919] flex items-center">
                    {individualOpening.title}
                    <span className="text-[#A1A1A1] mx-2">
                      <RiArrowRightDoubleLine />
                    </span>
                  </h3>
                </Link>
              </>
            )}
            {["Leave Details"].includes(getheadertitle()) && (
              <Link to="/leave">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("leave")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["EmployeeCSVfile"].includes(getheadertitle()) && (
              <Link to="/EmployeeCSVfile">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("clients")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Add Verification Employees"].includes(getheadertitle()) && (
              <Link to="/verification">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("verification")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {["Current page"].includes(getheadertitle()) && (
              <Link to="/VerficaticationDetails">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("verification")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )}
            {/* {["Access Control"].includes(getheadertitle()) && (
              <Link to="/access">
                <h3 className="font-normal text-xl text-[#191919] flex items-center">
                  {t("access")}
                  <span className="text-[#A1A1A1] mx-2">
                    <RiArrowRightDoubleLine />
                  </span>
                </h3>
              </Link>
            )} */}
          </>
        )}
        <h2 className="text-xl text-[#031B59] font-extrabold ">
          {getheadertitle() === "Add Verification Employees"
            ? "Add Employees"
            : getheadertitle()}
        </h2>
      </div>
      <div className="flex space-x-2">
        {(getheadertitle() === "Chat" || getheadertitle() === "Groups") &&
          (showGroupList ? (
            <>
              <div className="flex items-center mr-1 px-2 h-[3rem] border border-slate-300 rounded-full">
                <input
                  type="text"
                  placeholder="search"
                  className="w-80 bg-none outline-none text-sm pl-2 pr-4"
                />
                <button className="h-[3rem] flex rounded-full items-center justify-center">
                  <CiSearch className="h-5 w-5 rem text-[#A1A1A1] fill-[#A1A1A1] stroke-[#A1A1A1]" />
                </button>
              </div>
              <div
                className="flex h-[3rem] p-[ 0.75rem_1.5rem] justify-center items-center gap-[0.5rem]
              rounded-[1.5rem] border-[#E2E8F0] border-[1.5px] w-[11rem] cursor-pointer"
                onClick={handleCreateGroupChat}
              >
                <MdAdd className="text-[#031B59]" />
                <span className="text-[#031B59]">{t("create_group")}</span>
              </div>
            </>
          ) : (
            <div className="flex items-center mr-1 px-2 h-[3rem] border border-slate-300 rounded-full">
              <input
                type="text"
                placeholder="search"
                className="w-80 bg-none outline-none text-sm pl-2 pr-4"
                value={userName}
                onChange={handleUsernameChange}
              />
              <button className="h-[3rem] flex rounded-full items-center justify-center">
                <CiSearch className="h-5 w-5 rem text-[#A1A1A1] fill-[#A1A1A1] stroke-[#A1A1A1]" />
              </button>
            </div>
          ))}
        {!getheadertitle() === "Import CSV" ? (
          !showGroupList ? (
            <div className="flex items-center justify-center">
              <button
                className="h-9 w-9 bg-white shadow-[0px_0px_10px_0px_rgba(3,27,89,0.10)] flex
                rounded-full items-center justify-center"
                onClick={handleNotificationClick}
              >
                <IoMdNotificationsOutline className="h-5 w-5 rem text-[#A1A1A1] fill-[#A1A1A1] stroke-[#A1A1A1]" />
              </button>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {userName && (
          <div
            className="w-[350px] absolute top-[64px] bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_4px]
          p-[11px] rounded-md z-10"
          >
            {searchResult &&
              searchResult.map((item, index) => (
                <div
                  key={index}
                  className="w-full px-2 flex items-center space-x-2 cursor-pointer hover:bg-[#031B59] rounded group"
                  onClick={() => handleCreateChat(item)}
                >
                  <div className="w-8 flex items-center justify-center rounded-full overflow-hidden">
                    <img
                      src={`${awsURL}/images/chat_active.jpg`}
                      className="w-full h-full object-cover"
                      alt="chat-active"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <p className="group-hover:text-white text-[#313131] capitalize">
                      {item.name}
                    </p>
                    <span className="group-hover:text-white text-xs text-[#A1A1A1]">
                      {t("active_now")}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
        {buttonclick && (
          <NotificationScreen onClose={() => setButtonclick(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
