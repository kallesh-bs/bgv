import React, { useEffect, useState } from "react";
import Graph from "component/common/Graph";
import { FaDotCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { overviewReviewData, totalAvgData, yourAvgData } from "redux/appThunk/Employee/dashboard";

function EmployeeGraph() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const [checked, setChecked] = useState(true);
  const {totalAvg} = useSelector((state) => state.dashboardReducers);
  const {yourAvg} = useSelector((state) => state.dashboardReducers);
  const {overiewReviews} = useSelector((state) => state.dashboardReducers);
  const currentDate = new Date();
  const currentMonthName = currentDate.toLocaleString("en-US", {
    month: "long",
  });
  const toggleHandler = () => {
    setChecked(!checked);
    if (!checked) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  };

  useEffect(() => {
    dispatch(totalAvgData());
    dispatch(yourAvgData());
    dispatch(overviewReviewData());
  }, []);

  return (
    <div
      className="flex flex-col h-[40vh] w-full shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]
rounded-[20px]"
    >
      <div className="flex justify-betwen items-center w-[95%] m-[20px]">
        <div className="w-full flex items-center justify-start">
          <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
            {t("perform")}
          </h3>
        </div>
        <label className="relative inline-flex cursor-pointer items-center ">
          <input type="checkbox" value="" checked={checked} className="peer sr-only" onClick={toggleHandler} />
          <div className={`peer flex h-10 items-center gap-4 rounded-full w-[160px]
                 px-3 after:absolute after: after:-left-1 after:h-10 after:w-[80px] after:rounded-full
                  after:bg-[#FF7914]  ${checked ? "after:content-['Overview']" : "after:content-['Monthly']"}
                   after:text-[#fff] after:transition-all after:flex after:items-center after:justify-center pl
                   peer-checked:after:translate-x-full peer-focus:outline-none
                   text-sm text-[#686868] bg-[#F2F8FF]`}>
            <span>{t("monthly")}</span>
            <span>{t("overview")}</span>
          </div>
        </label>
      </div>
      <div className="h-[100%] flex ">
        {totalAvg || yourAvg ? (
          <Graph activeTab={activeTab} data={overiewReviews} type="line" />
        ) : (
          <div className="flex flex-col w-[100%] h-[100%] ">
            <div className="flex w-[100%] h-[65%] ">
              <Graph activeTab={activeTab} data={yourAvg} type="bar" />
              <Graph activeTab={activeTab} data={totalAvg} type="averagebar" />
              <div className="flex flex-col justify-between  w-[150px] h-[100px] mt-[50px]">
                <div
                  className="text-[black] font-['Roboto'] font-normal flex justify-start items-center "
                >
                  <FaDotCircle color="#426FF2" className="mr-[10px]" />
                  {t("punctuality")}
                </div>
                <div
                  className="text-[black] font-['Roboto'] font-normal flex justify-start items-center"
                >
                  <FaDotCircle color="#cf5570" className="mr-[10px]" />
                  {t("behaviour")}
                </div>
                <div
                  className="text-[black] font-['Roboto'] font-normal flex justify-start items-center"
                >
                  <FaDotCircle color="#248BA8" className="mr-[10px]" />
                  {t("productivity")}
                </div>
              </div>
            </div>
            <div
              className="text-[#686868] w-[80%] font-['Roboto']
           text-[20px] font-normal flex justify-center  mt-[50px] "
            >
              {currentMonthName}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeGraph;
