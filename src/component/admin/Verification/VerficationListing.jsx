import Helper from "api/Helper";
import { AddButton } from "component/common/accessControlUi/Button";
import Search from "component/common/accessControlUi/Search";
import usePermissions, { mappedPermissionObj } from "hooks/usePermission";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ToastServices from "ToastServices";
import apiUrl from "../../../api/apiUrl";
import { isShowDialogBoxChange } from "../../../redux/actions/action";
import { filterTableDefaultValue } from "../../../utils/Constants";
import AddEmployee from "./AddEmployee";
import EyeProfile from "./EyeProfile";
import Paginate from "./Paginate";
import VerificationTable from "./VerificationTable";
import useFetchbgvData from "./useFetchbgvData";

export default function VerficationListing({ tabValue, allEmpData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [id, setId] = useState();
  const [enable, setEnable] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [filterTableValue, setFilterTableValue] = useState(
    filterTableDefaultValue
  );
  const [finalFilteredValue, setFinalFiteredValue] = useState([]);
  const [addemployeePop, setAddEmployeePop] = useState(false);
  const [onSpotChange, setOnSpotChange] = useState(false);
  const [submitOnce, setSubmitOnce] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const isOpenDialogBoxToggle = useSelector(
    (state) => state.popUpDialogBox.isShowDialogBox
  );
  const { isLoading, pageCount } = useSelector((state) => state.leaveReducer);
  const { userPermission } = usePermissions(mappedPermissionObj.User);

  const statusColors = {
    Hold: "#67147C",
    Verified: "#1A8718",
    Inprogress: "#576CA2",
    Insufficient: "#FF981E",
    Rejected: "#FA3232",
  };

  // const { isLoading } = useSelector((state) => state.leaveReducer);
  // const searchFilterRef = useRef();
  // const [handlePopup, setHandlePopup] = useState(false)

  // let dummyData = [];
  // if (Object.keys(allEmpData).length > 0) {
  //   dummyData = allEmpData?.total_check.map(obj => {
  //     return { ...obj, name: obj.full_name, full_name: undefined, img: `${awsURL}/images/penetration-tester.png`, contactNo: "123-456-7890", doj: obj.date_of_joining, date_of_joining: undefined };
  //   })
  // }


  const handleDisable = async (id) => {
    if (!enable) {
      const path = apiUrl.disable + id;
      try {
        await Helper.put({}, path);
        dispatch(isShowDialogBoxChange(false));
      } catch (error) {
        ToastServices.showToast({
          message: "Error!",
          type: "error",
          autoClose: 3000,
        });
      }
      ToastServices.showToast({
        message: "User has been Disabled !",
        type: "success",
        autoClose: 3000,
      });
      setOnSpotChange(!onSpotChange);
      setSubmitOnce(false);
    } else {
      const tempObj = {
        id,
      };
      const path = `users/${id}/activate_user/`;
      try {
        await Helper.patch(tempObj, path, false);
        dispatch(isShowDialogBoxChange(false));
        setEnable(false);
      } catch (error) {
        ToastServices.showToast({
          message: "Error!",
          type: "error",
          autoClose: 3000,
        });
      }
      ToastServices.showToast({
        message: "User has been Enabled !",
        type: "success",
        autoClose: 3000,
      });
      setOnSpotChange(!onSpotChange);
      setSubmitOnce(false);
    }
  };

  const handleCloseDialogBox = () => {
    dispatch(isShowDialogBoxChange(false));
    setEnable(false);
  };

  const handleClick = (e, bool) => {
    const id = Number(e.target.id);
    const updatedFilterTableValue = filterTableValue?.map((item) =>
      item.id === id ? { ...item, isChecked: bool } : item
    );
    setFilterTableValue(updatedFilterTableValue);
  };

  const handleSave = () => {
    setFilter(false);
    setFinalFiteredValue(filterTableValue);
  };

  const handleRefresh = () => {
    setFinalFiteredValue(filterTableDefaultValue);
    setFilterTableValue(filterTableDefaultValue);
  };

  useFetchbgvData({
    query: searchItem,
    currentPage,
    onSpotChange,
    openPopUp,
  });



  return (
    <div
      className="w-[96%] h-[calc(100vh-5.3rem)] bg-white space-y-4 flex flex-col p-5 pb-1
      rounded-xl shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] "
    >
      {addemployeePop && <AddEmployee setAddEmployeePop={setAddEmployeePop} />}

      {openPopUp && <EyeProfile setOpenPopUp={setOpenPopUp} />}
      <div className="w-full h-12 bg-white flex justify-between relative">
        <div className="flex justify-center items-center">
          <h2 className="font-extrabold text-xl text-[#031B59]">
            {/* {t("basic_detail")} */}
            {tabValue.label ? tabValue.label : "Total Checks"}
          </h2>
        </div>

        {isOpenDialogBoxToggle && (
          <div
            className="w-full h-full flex items-center
          justify-center fixed top-0 left-0 z-50  bg-[rgba(3,27,89,.2)] op"
          >
            <div
              className="w-[37.5rem] h-[15.75rem] z-60 flex flex-col rounded-br-[2rem]
            items-center gap-[1.5rem] justify-center bg-white drop-shadow-lg"
            >
              <button onClick={handleCloseDialogBox}>
                <GrFormClose className="flex absolute gap-[0.625rem] w-[2rem] h-[2rem] top-[1rem] right-[1rem]" />
              </button>
              <hr />
              <div
                className="w-[32.5rem] h-[4rem] color-[#191919] font-inter font-bold
              text-2xl leading-8 tracking-[0.0075rem]"
              >
                {enable ? t("enable_emp_message") : t("disable_emp_message")}
              </div>
              <div
                className="flex w-[37.5rem] p-[1.5rem_2.5rem] justify-end items-center gap-[1rem] rounded-br-[2rem]
              border-t-[1px] border-[#E2E8F0] bg-white"
              >
                <button>
                  <div
                    onClick={() => handleCloseDialogBox()}
                    className="flex w-[7.5rem] h-[3.5rem] p-[1rem] justify-center items-center
                    gap-[0.5rem] rounded-[0.5rem]"
                  >
                    {t("cancel")}
                  </div>
                </button>
                <button
                  onClick={() => {
                    handleDisable(id);
                    setSubmitOnce(true);
                  }}
                >
                  <div
                    className={`flex h-[3.5rem] p-[1rem_1.875rem] justify-center items-center gap-[0.5rem]
                  rounded-[2.5rem] ${submitOnce ? "bg-[#6a7daf]" : " bg-[#031B59]"
                      } font-inter text-[1rem] font-bold leading-normal text-white`}
                  >
                    {enable ? t("enable") : t("disable")}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center space-x-4">
          <Search
            searchItem={searchItem}
            setSearchItem={setSearchItem}
            currentResource={userPermission}
          />

          <AddButton
            currentResource={mappedPermissionObj.User}
            title={t("addemployees")}
          // onClick={() => {
          //   setAddEmployeePop(true);
          // }}
          />
        </div>
      </div>
      {userPermission?.viewAll && (
        <VerificationTable
          employeeData={allEmpData}
          setId={setId}
          finalFilteredValue={finalFilteredValue}
          setOpenPopUp={setOpenPopUp}
          onSpotChange={onSpotChange}
          setOnSpotChange={setOnSpotChange}
          setEnable={setEnable}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          userPermission={userPermission}
        />
      )}
      {!isLoading && userPermission?.viewAll && (
        <div className="w-full bg-white flex justify-between items-center">
          {allEmpData && allEmpData.total_check?.length > 0 ? (
            <>
              <div className="text-[#031B59] font-medium">
                Showing {currentPage} of {10}
              </div>{" "}
              <Paginate
                currentPage={currentPage}
                initialPageCount={pageCount}
                pageRangeDisplayed={5}
                next=">"
                previous="<"
                setCurrentPage={setCurrentPage}
              />
            </>
          ) : (
            <div className="w-full flex items-center justify-center font-medium">
              {t("no_data_found")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
