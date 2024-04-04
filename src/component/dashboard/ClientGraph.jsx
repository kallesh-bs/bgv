import Graph from "component/common/Graph";
import {
  ClientDashboardData,
  ClientDashboardPiedata,
  ClientOverviewData
} from "utils/constant/GraphStaticData";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import Card from "component/common/Card";
import Switch from "component/common/Switch";

const ClientGraph = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const [checked, setChecked] = useState(true);

  const toggleHandler = () => {
    setChecked(!checked);
    if (!checked) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  };

  return (
    <div className="w-full flex justify-center ">
      <div
        className="w-full grid grid-cols-3
        grid-flow-dense xl:grid xl:grid-cols-3 md:grid md:grid-cols-2  gap-8
       text-white rounded-[20px]"
      >
        <div className="w-full  col-span-2 flex ">
          <Card id="clientGraph" cardClass="flex flex-col h-full w-full">
            <div className="flex justify-between items-center w-[95%] m-[20px]">
              <div className="w-full flex items-center justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
                  {t("billable _hours")}
                </h3>
              </div>
              <Switch
                name="graphSwitch"
                labelLeft={t("Monthly")}
                labelRight={t("Overview")}
                checkedValue={checked}
                handleToggle={toggleHandler}
              />
            </div>

            <div className="flex w-full h-[23rem]">
              {activeTab === 0 ? (
                <Graph
                  data={ClientDashboardData}
                  type="ClientMonthlyDashboardGraph"
                />
              ) : (
                <Graph
                  data={ClientOverviewData}
                  type="ClientMonthlyDashboardGraph"
                />
              )}
            </div>
          </Card>
        </div>
        <div className="flex w-full h-full ">
          <Card id="pie-chart" cardClass="flex flex-col w-full h-full bg-white">
            <div>
              <div className="flex justify-between items-center w-[95%] mt-[20px] ml-[20px]">
                <div className="w-full flex items-center justify-start">
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
                    {t("Payments")}
                  </h3>
                </div>
                <div className="w-[45%] flex gap-2 cursor-pointer col- items-center justify-center">
                  <h3 className="font-Roboto text-[#031B59]">
                    {t("view_all")}
                  </h3>
                  <FaChevronRight className="text-[#031B59] text-[10px] font-bolder" />
                </div>
              </div>
              <div className="flex items-center ml-5 bg-">
                <h6 className="font-Roboto text-[#646978]">
                  {t("This Month")}
                </h6>
              </div>
            </div>
            <div className="flex h-[100%] justify-center items-center">
              <Graph
                type={"ClientDashboardPieGraph"}
                data={ClientDashboardPiedata}
              />
            </div>
            <div className="grid grid-cols-3 gap-1 p-[10px] ">
              <div
                className="flex justify-center flex-col border border-[#00CE15] h-[6rem]
                   items-center bg-[#E3FAE5] rounded-[20px]"
              >
                <div>
                  <h1 className="text-xl font-semibold text-[#00CE15]">
                    $1,560.50
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm font-Roboto text-[#313135]">
                    Succeeded
                  </h1>
                </div>
              </div>
              <div
                className="flex justify-center flex-col items-center border border-[#7C93D6]
                   bg-[#F4F7FF] rounded-[20px] p-[16px]"
              >
                <div>
                  <h1 className="text-xl font-semibold text-[#7C93D6]">
                    $720,00
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm font-Roboto text-[#313135]">
                    Refunded
                  </h1>
                </div>
              </div>
              <div
                className="flex justify-center flex-col items-center border border-[#FF7914]
                   bg-[#FFEFE2] rounded-[20px] p-[16px]"
              >
                <div>
                  <h1 className="text-xl font-semibold text-[#FF7914]">
                    $112.50
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm font-Roboto text-[#313135]">Failed</h1>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientGraph;
