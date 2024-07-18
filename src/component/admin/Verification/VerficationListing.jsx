/* eslint-disable react/prop-types */
import React from "react";
import { GoSearch } from "react-icons/go";
import Paginate from "../Employee/Paginate";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VerficationListing = ({ tabValue }) => {
  const { tab, label } = tabValue;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount] = useState(1);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isLoading } = useSelector(
    (state) => state.leaveReducer
  );

  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      contactNo: "123-456-7890",
      doj: "2022-01-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      contactNo: "987-654-3210",
      doj: "2022-02-15",
      status: "Inactive",
    },
  ];

  return (
    <>
      <div
        className="w-[96%] h-[calc(100vh-15.1rem)] bg-white space-y-4 flex flex-col p-5 pb-1
          rounded-xl shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]"
      >
        <div className="w-full h-12 bg-white flex justify-between ">
          <div className="flex justify-center items-center">
            <h2 className="font-extrabold text-xl text-[#031B59]">
              {label || "Total Checks"}
            </h2>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="flex w-[14.4375rem] h-[3.0625rem] rounded-[2.5rem] border-[1.5px] border-[#E2E8F0]">
              <div className="flex items-center p-2 justify-center text-[#A1A1A1]">
                <input
                  placeholder="Search"
                  className="outline-none w-[11.5rem] ml-2"
                />
                <GoSearch className="w-[1.375rem] h-[1.375rem]" />
              </div>
            </div>
            <button
              className="h-[3.063rem] w-[7.625rem] p-2 border-[1.5px]
             border-[#E2E8F0] text-[#031B59] rounded-full"
              onClick={() => navigate("/verification/addEmployee")}
            >
              {t("addemployees")}
            </button>
          </div>
        </div>
        <div
          className={`overflow-x-scroll  ${isLoading ? "custom_scroller" : "custom_scroll"
            } h-[35rem] `} >
          <table className="w-full  h-full p-5 bg-white rounded-lg text-left">
            <thead className="border flex-0 text-left p-2">
              <tr className="h-[3.125rem] text-[#686868] text-sm font-normal bg-[#F2F6FF] h border border-[#E2E8F0]">
                <th className="min-w-[12.7rem] p-2  sticky top-0 z-10 left-0  bg-[#F2F6FF]">
                  {t("employeeName")}
                </th>

                <th className="min-w-[5.5rem] p-2 text-center sticky top-0 z-10 left-0 bg-[#F2F6FF]">
                  {t("designation")}
                </th>
                <th className="min-w-[5.5rem] p-2 text-center sticky top-0 z-10 left-0 bg-[#F2F6FF]">
                  {t("contactNumber")}
                </th>
                <th className="min-w-[5.5rem] p-2 text-center sticky top-0 z-10 left-0 bg-[#F2F6FF]">
                  {t("doj")}
                </th>
                <th className="min-w-[5.5rem] p-2 text-center sticky top-0 z-10 left-0  bg-[#F2F6FF]">
                  {t("Status")}
                </th>
                <th className="min-w-[5.5rem] p-2  mr-[8px] sticky top-0 z-10 left-0 bg-[#F2F6FF]">
                  {t("action")}
                </th>
              </tr>
            </thead>
            {tab === 1 && (
              <tbody className="p-2 text-sm text-left font-normal flex-0">
                {dummyData.map((employee, index) => (
                  <tr
                    className="h-[3.125rem] even:bg-[#F8FAFC] text-[#031B59] border border-[#E2E8F0] "
                    key={index}
                  >
                    <td
                      className={`min-w-[5.5rem] p-2 sticky left-0
                    ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >
                      {employee.name}</td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.designation}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.contactNo}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.doj}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.status}
                    </td>
                    <td
                      className={`lg:w-[5rem] p-2 pb-7 sticky right-0 flex justify-start 
            ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >
                      <button
                        className="mt-[15px]"
                        onClick={() => {
                          navigate("/VerficaticationDetails");
                        }}
                      >
                        <FaEye fontSize="20px" className="mr-[6px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            {tab === 2 && (
              <tbody className="p-2 text-sm text-left font-normal flex-0">
                {dummyData?.map((employee, index) => (
                  <tr
                    className="h-[3.125rem] even:bg-[#F8FAFC] text-[#031B59] border border-[#E2E8F0]"
                    key={index}
                  >
                    <td
                      className={`min-w-[2rem] p-2 ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >{employee.name}</td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.designation}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.contactNo}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.doj}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.status}
                    </td>
                    <td
                      className={`lg:w-[5rem] p-2 pb-7 sticky right-0 flex justify-start 
            ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >
                      <button
                        className="mt-[15px]"
                        onClick={() => {
                        }}
                      >
                        <FaEye fontSize="20px" className="mr-[6px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            {tab === 3 && (
              <tbody className="p-2 text-sm text-left font-normal flex-0">
                {dummyData?.map((employee, index) => (
                  <tr
                    className="h-[3.125rem] even:bg-[#F8FAFC] text-[#031B59] border border-[#E2E8F0]"
                    key={index}
                  >
                    <td
                      className={`min-w-[2rem] p-2 ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >{employee.name}</td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.designation}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.contactNo}
                    </td>
                    <td className="min-w-[12.7rem] p-2 capitalize text-center">
                      {employee.doj}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.status}
                    </td>
                    <td
                      className={`lg:w-[5rem] p-2 pb-7 sticky right-0 flex justify-start 
            ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >
                      <button
                        className="mt-[15px]"
                        onClick={() => {
                        }}
                      >
                        <FaEye fontSize="20px" className="mr-[6px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            {tab === 4 && (
              <tbody className="p-2 text-sm text-left font-normal flex-0">
                {dummyData?.map((employee, index) => (
                  <tr
                    className="h-[3.125rem] even:bg-[#F8FAFC] text-[#031B59] border border-[#E2E8F0]"
                    key={index}
                  >
                    <td
                      className={`min-w-[2rem] p-2 ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >{employee.name}</td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.designation}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.contactNo}
                    </td>
                    <td className="min-w-[12.7rem] p-2 capitalize text-center">
                      {employee.doj}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.status}
                    </td>
                    <td
                      className={`lg:w-[5rem] p-2 pb-7 sticky right-0 flex justify-start 
            ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >
                      <button
                        className="mt-[15px]"
                        onClick={() => {
                        }}
                      >
                        <FaEye fontSize="20px" className="mr-[6px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            {tab === 5 && (
              <tbody className="p-2 text-sm text-left font-normal flex-0">
                {dummyData?.map((employee, index) => (
                  <tr
                    className="h-[3.125rem] even:bg-[#F8FAFC] text-[#031B59] border border-[#E2E8F0]"
                    key={index}
                  >
                    <td
                      className={`min-w-[2rem] p-2 ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >{employee.name}</td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.designation}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.contactNo}
                    </td>
                    <td className="min-w-[12.7rem] p-2 capitalize text-center">
                      {employee.doj}
                    </td>
                    <td className="min-w-[12.7rem] p-2 text-center">
                      {employee.status}
                    </td>
                    <td
                      className={`lg:w-[5rem] p-2 pb-7 sticky right-0 flex justify-start 
            ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
                    >
                      <button
                        className="mt-[15px]"
                        onClick={() => { }}
                      >
                        <FaEye fontSize="20px" className="mr-[6px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        <div className="w-full h-16 bg-white flex justify-between items-center">
          {dummyData?.length ? (
            <>
              <div className="text-[#031B59] font-medium">
                {t("Showing")}{currentPage}{t("of")}{pageCount}
              </div>{" "}
              <Paginate
                currentPage={currentPage}
                initialPageCount={pageCount}
                pageRangeDisplayed={2}
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
      </div>
    </>
  );
};

export default VerficationListing;

// VerficationListing.PropTypes = {
//   tabValue: PropTypes.object,
// };
