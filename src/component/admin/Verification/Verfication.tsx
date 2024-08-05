import useRedux from "hooks/useRedux";
import React, { useEffect, useState } from "react";
import { ICheckItem } from "utils/types";
import VerficationListing from "./VerficationListing";

const Verfication: React.FC = () => {
  const { appSelector } = useRedux();

  let { allEmpData, totalChecks } = appSelector((state:any) => ({
    allEmpData: state.bgvReducer.employeeData,
    totalChecks: state.bgvReducer.employeeData.total_check,
  }));


  const [bgvStatus, setBgvStatus] = useState<string>("");

  const [tabValue, setTabValue] = useState<{ tab: number; label: string }>({
    tab: 1,
    label: "",
  });
  const [gridItems, setGridItems] = useState<ICheckItem[]>([]);

  console.log(Boolean(allEmpData));
  

  async function getAddressCheck() {
    try {
      let gridItemsTemp: ICheckItem[] = [];
      gridItemsTemp.push({
        value: allEmpData.total_check.length
          ? allEmpData.total_check.length
          : 0,
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
              onClick={() => {
                setTabValue({
                  tab: index + 1,
                  label: item.label,
                });
                setBgvStatus(item.status);
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
        tabValue={tabValue}
        allEmpData={
          bgvStatus
            ? totalChecks.filter(
                (check: { status: string }) => check.status === bgvStatus
              )
            : totalChecks
        }
      />
    </>
  );
};

export default Verfication;
