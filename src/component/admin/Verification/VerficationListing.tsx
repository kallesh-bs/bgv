import Search from "component/common/accessControlUi/Search";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IVerficationListingProps } from "utils/types";
import Paginate from "./Paginate";
import useFetchbgvData from "./useFetchbgvData";
import VerificationTable from "./VerificationTable";

const VerficationListing: React.FC<IVerficationListingProps> = ({
  tabValue,
  allEmpData,
  currentPage,
  setCurrentPage
}) => {
  const { t } = useTranslation();
  const [searchItem, setSearchItem] = useState<string>("");
  const [finalFilteredValue] = useState<any[]>([]);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  useFetchbgvData({
    query: searchItem,
    currentPage,
    openPopUp,
  });

  const pageCount = allEmpData ? Math.ceil(allEmpData.length / 5) : null;

  return (
    <div
      className="w-[96%] h-[calc(100vh-5.3rem)] bg-white space-y-4 flex flex-col p-5 pb-1
      rounded-xl shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]"
    >
      <div className="w-full h-12 bg-white flex justify-between relative">
        <div className="flex justify-center items-center">
          <h2 className="font-extrabold text-xl text-[#031B59]">
            {tabValue?.label || "Total Checks"}
          </h2>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Search searchItem={searchItem} setSearchItem={setSearchItem} />
        </div>
      </div>

      <VerificationTable
        employeeData={allEmpData}
        finalFilteredValue={finalFilteredValue}
        setOpenPopUp={setOpenPopUp}
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
    </div>
  );
};

export default VerficationListing;
