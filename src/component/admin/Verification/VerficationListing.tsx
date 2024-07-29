import Helper from "api/Helper";
import { AddButton } from "component/common/accessControlUi/Button";
import Search from "component/common/accessControlUi/Search";
import { mappedPermissionObj } from "hooks/usePermission";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import ToastServices from "ToastServices";
import { IVerficationListingProps } from "utils/types";
import apiUrl from "../../../api/apiUrl";
import { isShowDialogBoxChange } from "../../../redux/actions/action";
import AddEmployee from "../Employee/AddEmployee";
import Paginate from "./Paginate";
import useFetchbgvData from "./useFetchbgvData";
import VerificationTable from "./VerificationTable";

const VerficationListing: React.FC<IVerficationListingProps> = ({
  tabValue,
  allEmpData,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [id, setId] = useState<number | undefined>();
  const [enable, setEnable] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>("");
  const [showAddEmployeePopup, setShowAddEmployeePopup] =
    useState<boolean>(false);
  const [finalFilteredValue] = useState<any[]>([]);
  const [submitOnce, setSubmitOnce] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  const isOpenDialogBoxToggle = useSelector(
    (state: any) => state.popUpDialogBox.isShowDialogBox
  );

  const handleDisable = async (id: number) => {
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
      setSubmitOnce(false);
    }
  };

  const handleCloseDialogBox = () => {
    dispatch(isShowDialogBoxChange(false));
    setEnable(false);
  };

  useFetchbgvData({
    query: searchItem,
    currentPage,
    openPopUp,
  });

  const handleAddEmployeeClick = () => {
    setShowAddEmployeePopup(true);
  };

  const pageCount = allEmpData ? Math.ceil(allEmpData.length / 5) : null;

  return (
    <div
      className="w-[96%] h-[calc(100vh-5.3rem)] bg-white space-y-4 flex flex-col p-5 pb-1
      rounded-xl shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]"
    >
      <div className="w-full h-12 bg-white flex justify-between relative">
        <div className="flex justify-center items-center">
          <h2 className="font-extrabold text-xl text-[#031B59]">
            {tabValue.label || "Total Checks"}
          </h2>
        </div>

        {isOpenDialogBoxToggle && (
          <div
            className="w-full h-full flex items-center
          justify-center fixed top-0 left-0 z-50 bg-[rgba(3,27,89,.2)] op"
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
                    if (id !== undefined) {
                      handleDisable(id);
                      setSubmitOnce(true);
                    }
                  }}
                >
                  <div
                    className={`flex h-[3.5rem] p-[1rem_1.875rem] justify-center items-center gap-[0.5rem]
                  rounded-[2.5rem] ${
                    submitOnce ? "bg-[#6a7daf]" : " bg-[#031B59]"
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
          <Search searchItem={searchItem} setSearchItem={setSearchItem} />

          <AddButton
            currentResource={mappedPermissionObj.User}
            title={t("addemployees")}
            onClick={handleAddEmployeeClick}
          />
        </div>
      </div>

      <VerificationTable
        employeeData={allEmpData}
        setId={setId}
        finalFilteredValue={finalFilteredValue}
        setOpenPopUp={setOpenPopUp}
        setEnable={setEnable}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="w-full bg-white flex justify-between items-center">
        {allEmpData && allEmpData.length > 0 ? (
          <>
            <div className="text-[#031B59] font-medium">
              Showing {currentPage} of {pageCount || 3}
            </div>
            <Paginate
              currentPage={currentPage}
              initialPageCount={pageCount || 3}
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

      {showAddEmployeePopup && (
        <AddEmployee setShowAddEmployeePopup={setShowAddEmployeePopup} />
      )}
    </div>
  );
};

export default VerficationListing;
