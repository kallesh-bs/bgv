import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// import GraphContainer from "./GraphContainer";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { isShowDialogBoxChange } from "redux/actions/action";
import AdminGraphContainer from "./AdminGraphContainer";
import Card from "component/common/Card";
import { fetchEmployeeData } from "redux/appThunk/Admin/employee";
import { fetchClientsData } from "redux/appThunk/Admin/client";
// import HeroCard from "./HeroCard";

export default function DashboardAdmin() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalEmployeesNumber } = useSelector(
    (state) => state.profileReducer
  );
  const { totalClients } = useSelector((state) => state.ClientsReducer);
  useEffect(() => {
    dispatch(isShowDialogBoxChange(false));
    dispatch(fetchEmployeeData());
    dispatch(fetchClientsData());
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-[96%] bg-none h-fit mt-[12px]">
      <div
        className="h-full w-full grid grid-cols-2 grid-flow-dense xl:grid
      xl:grid-cols-3 gap-8 text-white rounded-[20px]"
      >
        {/* On Going Project Card */}
        <Card cardClass={"h-[10.563rem] w-full flex flex-col col-span-1"}>
          <div data-testid="ongoing_project">
            <h4 className="lg:text-xl sm:text-lg font-bold text-[#031B59]">
              {t("ongoing_projects")}
            </h4>
          </div>
          <div className="w-full h-full flex justify-between items-end">
            <p className="lg:text-3xl sm:text-2xl leading-2 font-black flex items-end text-[#031B59]">
              12
            </p>
            <div
              className="h-fit flex items-end"
              onClick={() => navigate("/projects")}
            >
              <button
                className="h-9 w-9 flex items-center justify-center bg-[rgba(255,255,255,0.20)] rounded-[6.77px]
              shadow-[0px_0px_3.498px_0px_rgba(108,108,108,0.15)]"
              >
                <FaArrowRight className="h-6 w-6 text-[#031B59]" />
              </button>
            </div>
          </div>
        </Card>
        <Card cardClass={"h-[10.563rem] w-full flex flex-col col-span-1 "}>
          <div className="flex flex-row justify-between">
            <div>
              <h4 className="lg:text-2xl sm:text-lg font-bold text-[#031B59]">
                {totalEmployeesNumber}
              </h4>
            </div>
            <div
              className="h-fit"
              onClick={() => navigate("/employees/addEmployee")}>
              <button
                className="h-9 w-9 flex items-center justify-center bg-[rgba(255,255,255,0.20)] rounded-[6.77px]
                shadow-[0px_0px_3.498px_0px_rgba(108,108,108,0.15)]"
              >
                <FaPlus className="h-6 w-6 text-[#031B59]" />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex justify-between items-end">
            <p className="lg:text-2xl sm:text-1xl leading-2 font-black flex items-end text-[#031B59]">
              {t("totalEmployee")}
            </p>
          </div>
        </Card>
        <Card cardClass={"h-[10.563rem] w-full flex flex-col col-span-1 "}>
          <div className="flex flex-row justify-between">
            <div>
              <h4 className="lg:text-2xl sm:text-lg font-bold text-[#031B59]">
                {totalClients}
              </h4>
            </div>
            <div
              className="h-fit"
              onClick={() => navigate("/clients/addClients")}>
              <button
                className="h-9 w-9 flex items-center justify-center bg-[rgba(255,255,255,0.20)] rounded-[6.77px]
                shadow-[0px_0px_3.498px_0px_rgba(108,108,108,0.15)]"
              >
                <FaPlus className="h-6 w-6 text-[#031B59]" />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex justify-between items-end">
            <p className="lg:text-2xl sm:text-1xl leading-2 font-black flex items-end text-[#031B59]">
              {t("totalClients")}
            </p>
          </div>
        </Card>

        {/* Graphs Container */}
        <div className=" w-full p-0 m-0 col-span-3 rounded-[20px]">
          <AdminGraphContainer />
        </div>
      </div>
    </div>
  );
}
