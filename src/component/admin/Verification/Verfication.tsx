import useRedux from "hooks/useRedux";
import React, { useEffect, useState } from "react";
import { ICheckItem } from "utils/types";
import VerficationListing from "./VerficationListing";
import { useDispatch, useSelector } from "react-redux";
import { bgvSetFilterTab } from "redux/actions/action";
import { RootState } from "redux/store";
import { fetchBgvFilterEmployeeData } from "redux/appThunk/Admin/bgv";

const Verfication: React.FC = () => {
  const { appSelector } = useRedux();
  const dispatch = useDispatch()
  const {employeeData:allEmpData,filterTab}:any = useSelector((state:RootState)=>state.bgvReducer)
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [bgvStatus, setBgvStatus] = useState<string>("");

  const [tabValue, setTabValue] = useState<{ tab: number; label: string }>({
    tab: 1,
    label: "",
  });
  const [gridItems, setGridItems] = useState<ICheckItem[]>([]);


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

 useEffect(()=>{
  fetchBgvFilterEmployeeData(dispatch,currentPage,'')
 },[])

  useEffect(() => {
    if (allEmpData) {
      getAddressCheck();
    }
  }, [allEmpData]);

  return (
    <>
      <div className="w-full h-fit flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 w-full p-5">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className={`h-[8rem] w-full p-5 flex flex-col col-span-1 rounded-[20px] cursor-pointer shadow-[0px_0px_20px_0px_rgba(3,27,89,0.10)] mt-2`}
              style={{
                color: item.color,
                borderColor: item.color,
                borderWidth: tabValue.tab === index + 1 ? "1px" : "0px",
                borderStyle: tabValue.tab === index + 1 ? "solid" : "none",
              }}
              onClick={function () {
                setTabValue({
                  tab: index + 1,
                  label: item.label,
                });
                dispatch(bgvSetFilterTab(
                  {
                    tab: index + 1,
                    label: item.label,
                  }
                ))
                fetchBgvFilterEmployeeData(dispatch,currentPage,item.status)
                setBgvStatus(item.status);
                setCurrentPage(1)
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
                    tabValue.tab === index + 1
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

      <VerficationListing
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        tabValue={tabValue}
        allEmpData={filterTab?.tab === 2 ? allEmpData?.verified_check?.filter((obj:any)=>obj!==null) : filterTab?.tab === 3 ? allEmpData?.in_progress_check?.filter((obj:any)=>obj!==null) : filterTab?.tab === 4 ? allEmpData?.insufficient_check?.filter((obj:any)=>obj!==null) : filterTab?.tab === 5 ? allEmpData?.rejected_check?.filter((obj:any)=>obj!==null) : allEmpData?.total_check?.filter((obj:any)=>obj!==null)}
      />
    </>
  );
};

export default Verfication;
