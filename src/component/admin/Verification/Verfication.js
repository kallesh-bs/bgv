import { useState } from "react";
import VerficationListing from "./VerficationListing";

const Verfication = () => {
  const [tabValue, setTabValue] = useState({
    tab: 1,
    label: "",
  });
  const gridItems = [
    { value: 169, label: "Total Checks", color: " #67147C" },
    { value: 12, label: "Verified Checks", color: "#1A8718" },
    { value: 12, label: "Inprogress Checks", color: "#576CA2" },
    { value: 12, label: "Insufficent Checks", color: "#FF981E" },
    { value: 12, label: "Rejected Checks", color: "#FA3232" },
  ];

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
              onClick={() =>
                setTabValue({
                  tab: index + 1,
                  label: item.label,
                })
              }
            >
              <div>
                <h6 className="text-bold text-[40px]  font-black">
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
      <VerficationListing tabValue={tabValue} />
    </>
  );
};

export default Verfication;
