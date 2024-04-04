import React, { useEffect, useState } from "react";
import { BsDownload, BsEye } from "react-icons/bs";
import { monthList } from "utils/Constants";
import { getTodaysDate } from "utils/date";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  convertToMoment,
  convertUtc,
  currentTimeInUtc,
  getCurrentYear,
  timeDifference
} from "utils/date";
import {
  punchInOutDetails,
  fetchTimerData,
  setPunchIn,
  setPunchOut,
  totalWorkingDays
} from "redux/appThunk/Employee/dashboard";
import Svg18 from "svgComponents/Svg18";
import CommentCard from "./CommentCard";
import EmployeeGraph from "./EmployeeGraph";

const DashboardEmployee = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [totalworkingCardMonth, setTotalWorkingCardMonth] = useState(
    getCurrentYear()
  );
  const { dashboardData, getTimerData, totalWorkingDaysLeaves } = useSelector(
    (state) => state.dashboardReducers
  );
  const userData = JSON.parse(localStorage.getItem("userLoginToken"));
  const currentMonthName = monthList[new Date().getMonth()];

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showEye , setShowEye] = useState(false);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timer;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const midnightTime = new Date().setHours(24, 0, 0, 0);
        if (currentTime >= midnightTime) {
          resetTimer();
        } else {
          setSeconds((prevSeconds) =>
            prevSeconds === 59 ? 0 : prevSeconds + 1
          );
          setMinutes((prevMinutes) =>
            seconds === 59 ? prevMinutes + 1 : prevMinutes
          );
          setHours((prevHours) =>
            minutes === 59 && seconds === 59 ? prevHours + 1 : prevHours
          );
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const PunchInOut = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    if (isRunning) {
      clearInterval(timer);
      dispatch(setPunchOut(userData));
    } else {
      dispatch(setPunchIn(userData));
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  };

  const handleSelectedMonth = (monthName) => {
    const monthIndex = monthList.indexOf(monthName);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    if (monthIndex !== -1) {
      const formattedMonth = `${year}-${(monthIndex + 1)
        .toString()
        .padStart(2, "0")}`;
      setTotalWorkingCardMonth(formattedMonth);
    }
  };

  const handleEye = () => {
    setShowEye(true);
  };

  const calculateDuration = () => {
    let totalDuration = 0;
    for (const entry of getTimerData) {
      const timeParts =
        entry["checkOut"] !== null
          ? entry["totalTime"].split(", ")
          : "0 hours, 0 minutes, 0 seconds".split(", ");
      const [hours, minutes, seconds] = timeParts.map((part) =>
        parseInt(part.split(" ")[0], 10)
      );

      totalDuration += hours * 3600 + minutes * 60 + seconds;
    }

    const nullCheckOut = getTimerData?.find((time) => time.checkOut === null);
    let remaningDuration;
    if (nullCheckOut) {
      const format = "HH:mm:ss A";
      const currentTime = currentTimeInUtc(format);
      const checkInMoment = convertUtc(nullCheckOut?.checkIn);
      const checkInMomentFormat = convertToMoment(checkInMoment, format);
      const currentTimeMoment = convertToMoment(currentTime, format);
      remaningDuration = timeDifference(currentTimeMoment, checkInMomentFormat);
      totalDuration =
        totalDuration +
        remaningDuration?._data?.hours * 3600 +
        remaningDuration?._data?.minutes * 60 +
        remaningDuration?._data?.seconds;
    }

    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    const seconds = totalDuration % 60;

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    calculateDuration();
    if (getTimerData[0]?.checkOut === null) {
      setIsRunning(true);
    }
  }, [getTimerData]);

  useEffect(() => {
    dispatch(punchInOutDetails());
    dispatch(fetchTimerData(userData));
  }, []);

  useEffect(() => {
    if (totalworkingCardMonth !== "") {
      dispatch(totalWorkingDays(totalworkingCardMonth));
    }
  }, [totalworkingCardMonth]);

  return (
    <div className="flex flex-wrap justify-center w-[96%] bg-none h-fit">
      <div
        className="h-full w-full grid grid-cols-2
      grid-flow-dense xl:grid xl:grid-cols-3 gap-8 text-white rounded-[20px] mt-[14px]"
      >
        <div className="h-[10.563rem] w-full p-5 flex flex-col col-span-1 rounded-[20px]
        shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]">
          <div className="w-full flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-[#031B59]">{getTodaysDate}</h4>
            </div>
            <button
              className="h-[2.188rem] w-[6.5rem] border border-[#ED6E0F] text-[#ED6E0F] rounded-[20px]"
              type="submit"
              onClick={() => PunchInOut()}
            >
              {isRunning ? "Punch Out" : "Punch In"}
            </button>
          </div>
          <div className="h-full flex items-end justify-start">
            <div>
              {" "}
              <h3 className="text-[40px] font-black text-left text-[#031B59]">
                {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </h3>{" "}
            </div>
          </div>
        </div>
        <div className="h-[10.563rem] w-full p-5 flex flex-col col-span-1 rounded-[20px]
        shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-[#031B59]">{t("total_working_days")}</h4>
            </div>
            <select
              className="outline-none text-[#ED6E0F] bg-[#fff]"
              defaultValue={currentMonthName}
              onChange={(e) => {
                handleSelectedMonth(e.target.value);
              }}
            >
              {monthList?.map((monthName, index) => (
                <option
                  key={index}
                  className={`bg-[#fff] text-[#000]`}
                  value={monthName}
                >
                  {monthName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full h-full flex justify-between items-end">
            <div>
              <h3 className="text-[40px] font-black flex items-end text-[#031B59]">
                {totalWorkingDaysLeaves?.totalWorkingDays}
              </h3>
            </div>
            <div className="w-full flex flex-col items-end space-y-2">
              <div className="w-full flex justify-end items-end gap-2">
                <p className="text-[#031B59]">{`${t("paid_leaves")}:`}</p>
                <p className="text-[#031B59]"> {totalWorkingDaysLeaves?.paidLeave}</p>
              </div>
              <div className="w-full flex justify-end items-end gap-2">
                <p className="text-[#031B59]">{`${t("unpaid_leaves")}:`}</p>
                <p className="text-[#031B59]">{totalWorkingDaysLeaves?.unpaidLeave}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10.563rem] w-full p-5 flex flex-col col-span-1 rounded-[20px]
        shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]">
          <div>
            <h4 className="text-xl font-bold text-[#031B59]">{t("ongoing_projects")}</h4>
          </div>
          <div className="w-full h-full flex justify-between items-end">
            <h3 className="text-[40px] font-black flex items-end text-[#031B59]">
              {dashboardData?.projectName?.length || 0}
            </h3>
            <div>
              {dashboardData?.projectName?.length > 0 ? (
                <select className="bg-[transparent] outline-none text-[#ED6E0F] bg-[#fff]">
                  {dashboardData?.projectName?.map((project, index) => (
                    <option
                      key={index}
                      className={`bg-[#fff] text-[#000]`}
                      value={project}
                    >
                      {project}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="text-[#ED6E0F]">No Projects</span>
              )}
            </div>
          </div>
        </div>
        <div className="h-[10.563rem] w-full p-5 flex flex-col col-span-1 rounded-[20px]
        shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]">
          <div>
            <h4 className="text-xl font-bold text-[#031B59]">{t("leaves_balance")}</h4>
          </div>
          <div className="h-full flex items-end justify-around">
            <div className="flex flex-col">
              <div>
                {" "}
                <h3 className="text-[40px] font-black text-center text-[#031B59]">
                  {dashboardData?.remainingPaidLeave || 0}
                </h3>{" "}
              </div>
              <div>
                <p className="text-[#031B59]">{t("paid_leaves")}</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <div >
                {" "}
                <h3 className="text-[40px] font-black text-center text-[#031B59]">
                  {dashboardData?.remainingSickLeave || 0}
                </h3>{" "}
              </div>
              <div>
                <p className="text-[#031B59]">{t("sick_leaves")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10.563rem] w-full p-5 flex flex-col col-span-2 rounded-[20px]
        shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]">
          <div className="flex items-start justify-between ">
            <div>
              <h3 className="text-xl font-bold text-[#031B59]">{t("salary_slip")}</h3>
              <h5 className="text-basre text-[#031B59]">{t("generate_slip")}</h5>
            </div>
            <div>
              <div className="relative">
                <select
                  className="bg-[transparent] outline-none w-max appearance-none text-[#ED6E0F] bg-[#fff]"
                  defaultValue={currentMonthName}
                >
                  {monthList?.map((monthName, index) => (
                    <option
                      key={index}
                      className={`bg-[#fff] text-[#000]`}
                      value={monthName}
                    >
                      {monthName}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 text-[#ED6E0F]  flex items-center ml-12  pointer-events-none">
                  <Svg18 />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-between items-end border-b-[1px] rounded-[20px]">
            {showEye &&
            (<div className="flex justify-end items-start space-x-8 p-5">
              <button>
                {" "}
                <BsDownload className="h-7 w-7 fill-white" />
              </button>
              <button>
                {" "}
                <BsEye className="h-7 w-7 fill-white" />{" "}
              </button>
            </div>)
            }

            <div className={`w-full h-[4.313rem] p-5 flex flex-col items-end justify-center space-y-2 
            ${showEye ? "opacity-50" : " "}`}>
              <button
                className="w-[13.625rem] px-1 py-2 h-[3.063] border font-semibold rounded-[20px] text-[#031B59]"
                type="submit"
                onClick={handleEye}
              >
                {t("generate_slip")}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-2 flex">
          <EmployeeGraph />
        </div>
        <div className="w-full h-full col-span-1 xl:col-span-1 flex">
          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardEmployee;
