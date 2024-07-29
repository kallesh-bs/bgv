import ProfileCard from "component/common/ProfileCard";
import SidePopup from "component/common/SidePopup";
import LoaderComp from "component/loader/LoaderComp";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { convertDateFormat } from "utils/date";
import { IEmployeeData, IVerificationTableProps } from "utils/types";
import DocumetDropDown from "./DocumetDropDown";
import Employeebrief from "./Employeebrief";

const VerificationTable: React.FC<IVerificationTableProps> = ({
  employeeData,
  finalFilteredValue,
  currentPage,
  setId,
  setOpenPopUp,
  setEnable,
  setCurrentPage,
}) => {
  const [userId, setUserId] = useState<number | null>(null);
  const { t } = useTranslation();
  const isLoading = useSelector((state: any) => state.leaveReducer.isLoading);
  const [handlePopup, setHandlePopup] = useState(false);

  const renderRow = (data: IEmployeeData, index: number) => {
    const handleEmpEye = (data: IEmployeeData) => {
      setOpenPopUp(true);
    };

    const statusColors: Record<string, string> = {
      hold: "#67147C",
      verified: "#1A8718",
      in_progress: "#576CA2",
      insufficient: "#FF981E",
      rejected: "#FA3232",
      consent_denied: "#D9534F",
    };

    return (
      <tr
        className="h-[3.125rem] even:bg-[#f8f9fc] text-[#031B59] z-20  border-y border-[#E2E8F0]"
        key={index}
      >
        <td
          className={`lg:w-[9.533rem] min-w-[9.533rem] p-2 left-0 sticky  font-semibold
                     ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
      `}
        >
          <div
            className="flex items-center"
            onClick={() => {
              handleEmpEye(data);
            }}
          >
            <Employeebrief
              imageUrl={data?.profile_picture_url}
              userName={data?.name}
              names={data?.full_name}
              userEmail={data?.email}
              email={data?.email}
              designation={data?.designation}
              data={data}
            />
          </div>
        </td>

        <td className="min-w-[14rem]  p-2 text-center ">
          {data?.designation || "---"}
        </td>
        <td className="min-w-[14rem] p-2 capitalize text-center">
          {data.phone_no || "---"}
        </td>
        <td className="min-w-[14rem] p-2 text-center">
          {(data?.date_of_joining &&
            convertDateFormat(data?.date_of_joining)) ||
            "---"}
        </td>
        <td
          className="min-w-[14rem] p-2 capitalize text-center"
          style={{ color: statusColors[data.status] || "#000" }}
        >
          {data.status.replace("_", " ") || "---"}
        </td>
        <td
          className={` w-[14rem] p-2 py-5  text-center   
            ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"} `}
        >
          <button
            className="mr-[6px]"
            onClick={() => {
              setUserId(data.id);
              setHandlePopup(!handlePopup);
            }}
          >
            <FaEye fontSize="20px" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div
      className={`overflow-x-scroll overflow-y border-x border-[#E2E8F0] 
    ${isLoading ? "custom_scroller" : "custom_scroll"}`}
    >
      <table className="w-full p-3 bg-white rounded-lg text-left">
        <thead className="flex-0 text-left left-0">
          <tr
            className="max-h-[3.125rem] p-2 text-[#686868]
         text-sm  font-normal   bg-[#F2F6FF] border-x left-0"
          >
            <th
              className="lg:w-[18.224rem] min-w-[18.224rem]
           max-h-[3.125rem]  left-0 sticky top-0  h-full p-4 bg-[#F2F6FF] z-10"
            >
              {t("emp_name")}
            </th>
            <th
              className="lg:w-[14rem] min-w-[14rem] max-h-[3.125rem]  h-full p-2
          text-center  bg-[#F2F6FF] top-0 sticky"
            >
              {t("designation")}
            </th>
            <th
              className="lg:w-[14rem] min-w-[14rem] max-h-[3.125rem] h-full p-2
          text-center  bg-[#F2F6FF] top-0 sticky"
            >
              {t("contact_no")}
            </th>
            <th
              className="lg:w-[14rem] min-w-[14rem] max-h-[3.125rem] h-full p-2
          text-center  bg-[#F2F6FF] top-0 sticky"
            >
              {t("doj")}
            </th>
            {finalFilteredValue?.map(
              (value: any, index: any) =>
                value.isChecked && (
                  <th
                    key={index}
                    className="lg:min-w-[14rem] min-w-[14rem] h-full p-2 text-center bg-[#F2F6FF] sticky top-0"
                  >
                    {value.header}
                  </th>
                )
            )}
            <th
              className="lg:w-[14rem] min-w-[14rem] max-h-[3.125rem] h-full p-2
          text-center  bg-[#F2F6FF] top-0 sticky"
            >
              {t("Status")}
            </th>
            <th
              className="lg:w-[14rem] min-w-[14rem] max-h-[3.125rem] h-full p-2
          text-center  bg-[#F2F6FF] top-0 sticky"
            >
              {t("action")}
            </th>
          </tr>
        </thead>
        {!isLoading && (
          <tbody className="p-2 text-sm text-left font-normal   flex-0">
            {employeeData &&
              employeeData?.map((data, index) => renderRow(data, index))}
          </tbody>
        )}
      </table>
      {isLoading && (
        <div className="flex items-center  justify-center h-[80vh] w-full">
          <LoaderComp />
        </div>
      )}
      {handlePopup && (
        <SidePopup
          children={<ProfileCard userId={userId} />}
          handleCancel={setHandlePopup}
          grandChild={<DocumetDropDown />}
        />
      )}
    </div>
  );
};

export default VerificationTable;
