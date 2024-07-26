import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { FaGraduationCap, FaRegUser } from "react-icons/fa";
import { PiBagSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import AddressCheck from "./AddressCheck";
import EducationCheck from "./EducationCheck";
import EmployementHistoryCheck from "./EmployementHistoryCheck";
import IdentifyCheck from "./IdentifyCheck";
import { IoNewspaperOutline } from "react-icons/io5";
import Consent from "./Consent";
import "./Verfication.css";
import { useDispatch } from "react-redux";
import { setSidePopUpNavTab } from "redux/actions/action";

const VerficationDetails = () => {
  const dispatch = useDispatch();
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
        <div className="w-[100%] h-[82.3%] mt-0 rounded-[20px] shadow-xl p-[5px_21px_20px_21px] gap-[22px]">
          <div className="w-[100%] flex items-center justify-start md:space-x-2  lg:space-x-12">
            <button
              onClick={function () {
                handleTabClick(1);
                dispatch(setSidePopUpNavTab(1))
              }}
              className={`p-2 ${activeTab === 1
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
                }`}
            >
              <Link rel="stylesheet" href="#">
                <div
                  className={`    text-lg ${activeTab === 1
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
                dispatch(setSidePopUpNavTab(2))
              }}
              className={`p-2 ${activeTab === 2
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
                }`}
            >
              <Link rel="stylesheet" href="#">
                <div
                  className={`    text-lg ${activeTab === 2
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
                dispatch(setSidePopUpNavTab(3))
              }}
              className={`p-2 ${activeTab === 3
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
                }`}
            >
              <Link rel="stylesheet" href="#">
                <div
                  className={`    text-lg ${activeTab === 3
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
                dispatch(setSidePopUpNavTab(4))
              }}
              className={`p-2 ${activeTab === 4
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
                <IdentifyCheck selectOption={"Aadhar Card"} active={activeTab} setActiveTab={setActiveTab} />
              )}
              {identifyOptionTab === "Driving License" && (
                <IdentifyCheck selectOption={"Driving License"} active={activeTab} setActiveTab={setActiveTab} />
              )}
              {identifyOptionTab === "Passport" && (
                <IdentifyCheck selectOption={"Passport"} active={activeTab} setActiveTab={setActiveTab} />
              )}
            </div>
          )}
          {activeTab === 2 && (
            <EducationCheck active={activeTab} setActiveTab={setActiveTab} />
          )}
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
                <AddressCheck
                  selectOption={"Aadhar Card"}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
              )}
              {adressOptionTab === "Driving License" && (
                <AddressCheck
                  selectOption={"Driving License"}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
              )}
              {/* (<div className="w-full h-[60vh] flex justify-center items-center text-3xl">
                {t("No UI Found")}
              </div>)} */}
              {adressOptionTab === "Passport" && (
                <AddressCheck
                  selectOption={"Passport"}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
              )}
              {/* (<div className="w-full h-[60vh] flex justify-center items-center text-3xl">
              {t("No UI Found")}            </div>)} */}
            </div>
          )}
          {activeTab === 4 && <EmployementHistoryCheck active={activeTab} setActiveTab={setActiveTab} />}

          {activeTab === 5 && <Consent setCurrentStep={setActiveTab} />}

        </div>
      </div>
    </>
  );
};

export default VerficationDetails;