import React, { useEffect, useState } from "react";
import Graph from "component/common/Graph";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import { FaCircle } from "react-icons/fa";
import { formatNumberToK } from "utils/CommonFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployeesData,
  fetchRevenueMonthlyData,
  fetchRevenueOverViewData,
  monthlyClientData,
  monthlyEmployeeData,
  monthlyWorkingHourData,
  yearlyWorkingHourData
} from "redux/appThunk/Admin/dashboard";
import Switch from "component/common/Switch";
import Card from "component/common/Card";

const getTotalRevenue = (givenRevenueData) => {
  let totalEarnings = 0;
  let totalExpenses = 0;
  let totalRevenue = 0;

  givenRevenueData?.forEach((total) => {
    totalEarnings += total?.Earnings;
    totalExpenses += total?.Expenses;
    totalRevenue += total?.Revenue;
  });

  return {
    earnings: formatNumberToK(totalEarnings),
    expenses: formatNumberToK(totalExpenses),
    revenues: formatNumberToK(totalRevenue),
  };
};
const colorArray = ["#75C57F", "#F6CF7D", "#FFBB28", "#D76B66"];

function AdminGraphContainer() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { monthlyRevenue } = useSelector((state) => state.dashboardReducers);
  const { revenue } = useSelector((state) => state.dashboardReducers);
  const { monthlyClients } = useSelector((state) => state.dashboardReducers);
  const { monthlyEmployees } = useSelector((state) => state.dashboardReducers);
  const { totalEmployees } = useSelector((state) => state.dashboardReducers);
  const { monthlyWorkingHours } = useSelector(
    (state) => state.dashboardReducers
  );
  const { yearlyWorkingHours } = useSelector(
    (state) => state.dashboardReducers
  );

  const [graphArrState, setGraphArrState] = useState({
    revenue: true,
    clients: true,
    workingHours: true,
  });

  const [revenueData, setRevenueData] = useState([
    {
      title: "Revenue",
      id: "revenues",
      data: "---",
      percent: "+7.0%",
      color: "#978FED",
    },
    {
      title: "Earnings",
      id: "earnings",
      data: "---",
      percent: "+4.0%",
      color: "#EE89DF",
    },
    {
      title: "Expenses",
      id: "expenses",
      data: "---",
      percent: "+11.4%",
      color: "#F6CF7D",
    },
  ]);
  useEffect(() => {
    if (revenue.length > 0)
      setRevenueData([
        {
          title: "Revenue",
          id: "revenues",
          data: getTotalRevenue(revenue).revenues || "---",
          percent: "+7.0%",
          color: "#978FED",
        },
        {
          title: "Earnings",
          id: "earnings",
          data: getTotalRevenue(revenue).earnings || "---",
          percent: "+4.0%",
          color: "#EE89DF",
        },
        {
          title: "Expenses",
          id: "expenses",
          data: getTotalRevenue(revenue).expenses || "---",
          percent: "+11.4%",
          color: "#F6CF7D",
        },
      ]);
  }, [revenue]);

  useEffect(() => {
    dispatch(fetchRevenueMonthlyData());
    dispatch(fetchRevenueOverViewData());
    dispatch(monthlyClientData());
    dispatch(monthlyEmployeeData());
    dispatch(fetchEmployeesData());
    dispatch(yearlyWorkingHourData());
    dispatch(monthlyWorkingHourData());
  }, []);

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    if (name === "revenue") {
      let revenueState = checked ? revenue : monthlyRevenue;
      const updatedRevenue = getTotalRevenue(revenueState);
      setRevenueData((prevData) =>
        prevData.map((prevObj) => ({
          ...prevObj,
          data: updatedRevenue[prevObj.id],
        }))
      );
    }
    setGraphArrState((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="w-[100%] flex justify-center ">
      <div
        className="h-full w-full grid grid-cols-2
      grid-flow-dense xl:grid xl:grid-cols-3 gap-8
     text-white rounded-[20px]"
      >
        <div className="w-full col-span-2 flex">
          <Card id={"revenueCard"} cardClass={"flex flex-col w-full h-[24rem]"}>
            <div className="flex justify-betwen items-center w-[95%] m-[20px] ">
              <div className="w-full flex items-center justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
                  {t("graph_revenue")}
                </h3>
              </div>

              <Switch
                handleToggle={handleToggle}
                name={"revenue"}
                labelLeft={t("monthly")}
                labelRight={t("overview")}
                checkedValue={graphArrState.revenue}
              />
            </div>

            <div className="flex h-full">
              {graphArrState.revenue ? (
                <Graph type={"RevenueGraph"} data={revenue} />
              ) : (
                <Graph
                  type={"RevenueGraph"}
                  data={monthlyRevenue}
                  barSize={15}
                />
              )}
              <div className=" flex flex-col justify-center ml-[30px] ">
                <div className=" flex flex-col justify-between h-fit">
                  {revenueData?.map((value, index) => (
                    <div className="flex flex-col gap-2" key={index}>
                      <div className="flex flex-row items-center w-auto">
                        <FaCircle color={value.color} />
                        <div className="lg:text-lg sm:text-sm font-semibold text-[#7A7A7A] font-[Roboto] pl-2">
                          {value.title}
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-[110px]">
                        <div className="lg:text-3xl sm:text-2xl text-[black]">
                          {value.data}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full col-span-2 xl:col-span-1 flex ">
          <Card id={"clientCard"} cardClass={"flex flex-col w-full h-[24rem]"}>
            <div className="flex justify-betwen items-center w-[95%] m-[20px] pr-3">
              <div className="w-full flex items-center justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
                  {t("totalClients")}
                </h3>
              </div>

              <Switch
                name={"clients"}
                handleToggle={handleToggle}
                labelLeft={t("clients")}
                labelRight={t("employees")}
                checkedValue={graphArrState.clients}
              />
            </div>

            <div className="flex h-full">
              {graphArrState.clients ? (
                <Graph type={"Employeegraph"} data={monthlyEmployees} />
              ) : (
                <Graph type={"Clientgraph"} data={monthlyClients} />
              )}
            </div>
          </Card>
        </div>
        <div className="w-full col-span-2 flex">
          <Card id={"workingHours"} cardClass={"flex flex-col w-full h-[24rem]"}>
            <div className="flex justify-betwen items-center w-[95%] m-[20px] ">
              <div className="w-full flex items-center justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
                  {t("working_hours")}
                </h3>
              </div>
              <Switch
                name={"workingHours"}
                checkedValue={graphArrState.workingHours}
                handleToggle={handleToggle}
                labelLeft={t("monthly")}
                labelRight={t("overview")}
              />
            </div>

            <div className="flex h-full">
              {graphArrState.workingHours ? (
                <Graph type={"WorkingHourGraph"} data={yearlyWorkingHours} />
              ) : (
                <Graph type={"WorkingHourGraph"} data={monthlyWorkingHours} />
              )}
            </div>
          </Card>
        </div>
        <div className="w-full col-span-2 xl:col-span-1">
          <Card
            id={"totalEmployees"}
            cardClass={"flex flex-col w-full justify-between h-[24rem]"}
          >
            <div>
              <div className="flex justify-betwen items-center w-[95%] m-[20px]">
                <div className="w-full flex items-center justify-start">
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
                    {t("number_of_employees")}
                  </h3>
                </div>
              </div>
              {totalEmployees?.map((data, index) => (
                <div key={index}>
                  <div
                    className="text-[#6C7A93] font-['Lato'] text-[20px]
                           font-normal flex justify-start items-center ml-[10px] "
                  >
                    <VscCircleLargeFilled
                      color={colorArray[index]}
                      className="mr-[10px]"
                    />
                    {data.name}-{data.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex h-full">
              <Graph type={"pie"} data={totalEmployees} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminGraphContainer;
