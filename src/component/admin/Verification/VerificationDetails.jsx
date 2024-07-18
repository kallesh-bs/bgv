import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { FaGraduationCap, FaRegUser } from "react-icons/fa";
import { PiBagSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import AddressCheck from "./AddressCheck";
import EducationCheck from "./EducationCheck";
import EmployementHistoryCheck from "./EmployementHistoryCheck";
import "./Verfication.css";
import IdentifyCheck from "./IdentifyCheck";

const VerficationDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();
  const [identifyOptionTab, setIdentifyOptionTab] = useState(0);
  const [adressOptionTab, setAddressOptionTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handlAddresseOptionClick = (value) => {
    setAddressOptionTab(value);
  };

  const handleIdentifyOptionClick = (value) => {
    setIdentifyOptionTab(value);
  };
  return (
    <>
      <div className="w-[96%] h-[92vh]  p-[0px_0px_0px_0px]  ">
        {/* <div>
          <div className="w-[100%] h-[128px] rounded-[0px_0px_16px_16px] shadow-xl  p-[10px_0px_10px_0px] ">
            <div className="flex  gap-[20px] ">
              <div className="w-[50px] h-[60px] rounded-[136px] border-2" id="verficationImage">
              </div>
              <div className="w-[90%] h-[0px] gap-[4px] ">
                <h1 className=" font-bold text-xl">{t("camRain")} </h1>
                <p>{t("designation")}</p>
              </div>
              <div className="w-[170px] h-[30px] flex gap-[15px]  ">
                <div className="text-3xl">
                  <LuUser2 />
                </div>
                <div className="text-3xl">
                  <FaGraduationCap />

                </div>
                <div className="text-3xl">
                  <CiLocationOn />

                </div>
                <div className="text-3xl">
                  <PiBagSimpleLight />

                </div>
              </div>
            </div>
            <div className=" bg-[rgb(3,27,89)] w-[100%] h-[40px] gap-[20px] flex rounded-[0px_0px_16px_16px]
             lg:p-[10px_21px_10px_65px] md:p-[10px_21px_10px_45px]  mt-[18px] ">
              <div className="text-[white] flex  justify-center items-center gap-2">
                <GrLocationPin />
                <h4>{t("Jp,Rj")}</h4>
              </div>
              <div className="text-[white] justify-center items-center flex gap-2">
                <RxCalendar />
                <h4>{t('2,sep')}</h4>
              </div>
              <div className="text-[white] text-2xl flex justify-center items-center  gap-2 w-[50px] h-[20px]">
                <MdOutlineBloodtype />
                <h1>o+</h1>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-[100%] h-[82.3%] mt-0 rounded-[20px] shadow-xl p-[5px_21px_20px_21px] gap-[22px]">
          <div className="w-[100%] flex items-center justify-start md:space-x-2  lg:space-x-12">
            <button
              onClick={function () {
                handleTabClick(1);
              }}
              className={`p-2 ${
                activeTab === 1
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link rel="stylesheet" href="#">
                <div
                  className={`    text-lg ${
                    activeTab === 1
                      ? "text-[#002169] font-bold "
                      : "text-[#686868]"
                  } `}
                >
                  <div className="flex justify-center items-center gap-2 ">
                    <FaRegUser />
                    <h1>{t("checkIden")}</h1>
                  </div>
                </div>
              </Link>
            </button>

            <button
              onClick={function () {
                handleTabClick(2);
              }}
              className={`p-2 ${
                activeTab === 2
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link rel="stylesheet" href="#">
                <div
                  className={`    text-lg ${
                    activeTab === 2
                      ? "text-[#002169] font-bold "
                      : "text-[#686868]"
                  }`}
                >
                  <div className="flex justify-center items-center gap-2">
                    <FaGraduationCap />
                    <h1>{t("checkEdu")}</h1>
                  </div>
                </div>
              </Link>
            </button>

            <button
              onClick={function () {
                handleTabClick(3);
              }}
              className={`p-2 ${
                activeTab === 3
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link rel="stylesheet" href="#">
                <div
                  className={`    text-lg ${
                    activeTab === 3
                      ? "text-[#002169] font-bold "
                      : "text-[#686868]"
                  }`}
                >
                  <div className="flex justify-center items-center gap-2">
                    <CiLocationOn />
                    <h1>{t("checkadd")}</h1>
                  </div>
                </div>
              </Link>
            </button>

            <button
              onClick={function () {
                handleTabClick(4);
              }}
              className={`p-2 ${
                activeTab === 4
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link rel="stylesheet" href="#">
                <div className={`    lg:text-lg md:text-md `}>
                  <div className="flex justify-center items-center gap-2">
                    <PiBagSimpleLight />
                    <h1>{t("EmploymentHistory")}</h1>
                  </div>
                </div>
              </Link>
            </button>
          </div>
          {activeTab === 1 && (
            <div>
              <div className="mt-8 w-[300px]">
                <select
                  className="pl-2 pr-6 w-[300px] h-[50px] bg-transparent border border-gray-300
            gap-[2px] outline-none"
                  name="Choose~"
                  onChange={(e) => handleIdentifyOptionClick(e.target.value)}
                >
                  <option value="Chosse~" className=" bg-transparent ">
                    {t("Choosse~")}
                  </option>
                  <option
                    value="Aadhar Card"
                    className=" bg-transparent"
                    id="1"
                  >
                    {t("adhar")}
                  </option>
                  <option
                    value="Driving License"
                    className=" bg-transparent "
                    id="2"
                  >
                    {t("Driving License")}
                  </option>
                  <option value="Passport" className=" bg-transparent " id="3">
                    {"Passport"}
                  </option>
                </select>
              </div>
              {identifyOptionTab === "Aadhar Card" && (
                <IdentifyCheck selectOption={"Aadhar Card"} />
              )}
              {identifyOptionTab === "Driving License" && (
                <IdentifyCheck selectOption={"Driving License"} />
              )}
              {identifyOptionTab === "Passport" && (
                <IdentifyCheck selectOption={"Passport"} />
              )}
            </div>
          )}
          {activeTab === 2 && <EducationCheck />}
          {activeTab === 3 && (
            <div>
              <div className="mt-8 w-[300px]">
                <select
                  className="pl-2 pr-6 w-[300px] h-[50px] bg-transparent border border-gray-300
            gap-[2px] outline-none"
                  name="Choose~"
                  onChange={(e) => handlAddresseOptionClick(e.target.value)}
                >
                  <option value="Chosse~" className=" bg-transparent ">
                    {t("Choosse~")}
                  </option>
                  <option
                    value="Aadhar Card"
                    className=" bg-transparent"
                    id="1"
                  >
                    {t("adhar")}
                  </option>
                  <option
                    value="Driving License"
                    className=" bg-transparent "
                    id="2"
                  >
                    {t("Driving License")}
                  </option>
                  <option value="Passport" className=" bg-transparent " id="3">
                    {"Passport"}
                  </option>
                </select>
              </div>
              {adressOptionTab === "Aadhar Card" && (
                <AddressCheck selectOption={"Aadhar Card"} />
              )}
              {adressOptionTab === "Driving License" && (
                <AddressCheck selectOption={"Driving License"} />
              )}
              {/* (<div className="w-full h-[60vh] flex justify-center items-center text-3xl">
                {t("No UI Found")}
              </div>)} */}
              {adressOptionTab === "Passport" && (
                <AddressCheck selectOption={"Passport"} />
              )}
              {/* (<div className="w-full h-[60vh] flex justify-center items-center text-3xl">
              {t("No UI Found")}            </div>)} */}
            </div>
          )}
          {activeTab === 4 && <EmployementHistoryCheck />}
        </div>
      </div>
    </>
  );
};

export default VerficationDetails;
