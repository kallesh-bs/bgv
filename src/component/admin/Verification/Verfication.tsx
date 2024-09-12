import React, { useEffect, useState } from "react";
import { ICheckItem } from "utils/types";
import { useDispatch, useSelector } from "react-redux";
import { bgvSetFilterTab, bgvSetPaginationCurrentPage } from "redux/actions/action";
import { AppDispatch, RootState } from "redux/store";
import { fetchBgvFilterEmployeeData } from "redux/appThunk/Admin/bgv";
import Search from "component/common/accessControlUi/Search";
import VerificationTable from "./VerificationTable";
import Paginate from "./Paginate";
import { t } from "i18next";
import useDebounce from "hooks/useDebounce";

const Verfication: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const {employeeData:allEmpData,filterTab,perPage,currentPage}:any = useSelector((state:RootState)=>state.bgvReducer)

  let tableData:any = []

  const [pageCount, setPageCount] = useState<number>(0);

  const [sQuery, setSQuery] = useState<string>("");
  const searchQuery = useDebounce(sQuery, 500);

  useEffect(() => {
    if (allEmpData && allEmpData?.verified_count && filterTab === 2) {
      setPageCount(Math.ceil(allEmpData?.verified_count / perPage));
    } 
    else if (allEmpData && allEmpData?.inprogress_count && filterTab === 3) {
      setPageCount(Math.ceil(allEmpData?.inprogress_count / perPage));
    }
    else if (allEmpData && allEmpData?.insufficient_count && filterTab === 4) {
      setPageCount(Math.ceil(allEmpData?.insufficient_count / perPage));
    }
    else if (allEmpData && allEmpData?.rejected_count && filterTab === 5) {
      setPageCount(Math.ceil(allEmpData?.rejected_count / perPage));
    }
    else if (allEmpData && allEmpData?.total_count && filterTab === 1){
      setPageCount(Math.ceil(allEmpData?.total_count / perPage));
    }
  }, [filterTab,dispatch,allEmpData]);


  switch(filterTab){
      case 1 :  tableData = allEmpData?.total_check?.filter((obj:any)=>obj!==null) 
                break;
      case 2 :  tableData = allEmpData?.verified_check?.filter((obj:any)=>obj!==null)
                break;
      case 3 :  tableData = allEmpData?.in_progress_check?.filter((obj:any)=>obj!==null)
                break;
      case 4 :  tableData = allEmpData?.insufficient_check?.filter((obj:any)=>obj!==null)
                break;
      case 5 :  tableData = allEmpData?.rejected_check?.filter((obj:any)=>obj!==null)
                break;
      default : tableData = []
  }

  const [gridItems, setGridItems] = useState<ICheckItem[]>([]);

  const [searchItem, setSearchItem] = useState<string>("");

  const stype = filterTab === 2 ? 'verified' : filterTab === 3 ? 'in_progress' : filterTab === 4 ? 'insufficient' : filterTab === 5 ? 'rejected' : ""


  useEffect(()=>{
    fetchBgvFilterEmployeeData(dispatch,currentPage,stype,perPage,searchQuery)
  },[filterTab,searchQuery])

  useEffect(()=>{
    getAddressCheck()
  },[allEmpData])

  async function getAddressCheck() {
    try {
      let gridItemsTemp: ICheckItem[] = [];
      gridItemsTemp.push({
        value: allEmpData.total_count,
        label: "Total Checks",
        color: "#67147C",
        status: "",
      });
      gridItemsTemp.push({
        value: allEmpData.verified_count,
        label: "Verified Checks",
        color: "#1A8718",
        status: "verified",
      });
      gridItemsTemp.push({
        value: allEmpData.inprogress_count,
        label: "Inprogress Checks",
        color: "#576CA2",
        status: "in_progress",
      });
      gridItemsTemp.push({
        value: allEmpData.insufficient_count,
        label: "Insufficient Checks",
        color: "#FF981E",
        status: "insufficient",
      });
      gridItemsTemp.push({
        value: allEmpData.rejected_count,
        label: "Rejected Checks",
        color: "#FA3232",
        status: "rejected",
      });

      setGridItems(gridItemsTemp);
    } catch (error) {
      console.error("Error in handleAddressCheck:", error);
    }
  }

  return(
    <>
      {/* {Filter Tab Start} */}
      <div className="w-full h-fit flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 w-full p-5">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className={`h-[8rem] w-full p-5 flex flex-col col-span-1 rounded-[20px] cursor-pointer shadow-[0px_0px_20px_0px_rgba(3,27,89,0.10)] mt-2`}
              style={{
                color: item.color,
                borderColor: item.color,
                borderWidth: filterTab === index + 1 ? "1px" : "0px",
                borderStyle: filterTab === index + 1 ? "solid" : "none",
              }}
              onClick={()=>{
                dispatch(bgvSetFilterTab(index + 1))
                dispatch(bgvSetPaginationCurrentPage(1))
              }}
            >
              <div>
                <h6 className="text-bold text-[40px] font-black">
                  {item.value}
                </h6>
              </div>
              <div className="w-full h-full flex justify-between items-end">
                <h2
                  className={`text-[16px] flex items-end ${
                    filterTab === index + 1
                      ? "underline font-normal"
                      : "font-normal"
                  }`}
                >
                  {item.label}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {Filter Tab end} */}
      
      <div
      className="w-[96%] h-[calc(100vh-5.3rem)] bg-white space-y-4 flex flex-col p-5 pb-1
      rounded-xl shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]"
    >
      <div className="w-full h-12 bg-white flex justify-between relative">
        <div className="flex justify-center items-center">
          <h2 className="font-extrabold text-xl text-[#031B59]">
            {filterTab === 2 ? 'Verified Checks' : filterTab === 3 ? 'InProgress Checks' : filterTab === 4 ? 'Insufficient Checks' : filterTab === 5 ? 'Rejected Checks' : "Total Checks"}
          </h2>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Search searchItem={sQuery} setSearchItem={setSQuery} />
        </div>
      </div>

      <VerificationTable
        employeeData={tableData}
      />

      <div className="w-full bg-white flex justify-between items-center">
        {tableData && tableData?.length > 0 ? (
          <>
            <div className="text-[#031B59] font-medium">
              Showing {currentPage} of {pageCount}
            </div>
            <Paginate
              currentPage={+currentPage}
              initialPageCount={+pageCount}
              pageRangeDisplayed={5}
            />
          </>
        ) : (
          <div className="w-full flex items-center justify-center font-medium">
            {`${t("no_data_found")} `}
          </div>
        )}
      </div>
    </div>
    </>
  )
};

export default Verfication;
