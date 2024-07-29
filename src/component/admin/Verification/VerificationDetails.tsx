import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { FaGraduationCap, FaRegUser } from "react-icons/fa";
import { PiBagSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ITabOption } from "utils/types";
import AddressCheck from "./AddressCheck";
import Consent from "./Consent";
import EducationCheck from "./EducationCheck";
import EmployementHistoryCheck from "./EmployementHistoryCheck";
import IdentifyCheck from "./IdentifyCheck";
import "./Verfication.css";

// Define the component
const VerficationDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const { t } = useTranslation();
  const [identifyOptionTab, setIdentifyOptionTab] =
    useState<ITabOption>("Choose~");
  const [adressOptionTab, setAddressOptionTab] =
    useState<ITabOption>("Choose~");

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handlAddresseOptionClick = (value: ITabOption) => {
    setAddressOptionTab(value);
  };

  const handleIdentifyOptionClick = (value: ITabOption) => {
    setIdentifyOptionTab(value);
  };

  return (
    <>
      <div className="w-[96%] h-[92vh] p-[0px_0px_0px_0px]">
        <div className="w-[100%] h-[82.3%] mt-0 rounded-[20px] shadow-xl p-[5px_21px_20px_21px] gap-[22px]">
          <div className="w-[100%] flex items-center justify-start md:space-x-2 lg:space-x-12">
            <button
              onClick={() => handleTabClick(1)}
              className={`p-2 ${
                activeTab === 1
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link to="#">
                <div
                  className={`text-lg ${
                    activeTab === 1
                      ? "text-[#002169] font-bold"
                      : "text-[#686868]"
                  }`}
                >
                  <div className="flex justify-center items-center gap-2">
                    <FaRegUser />
                    <h1>{t("checkIden")}</h1>
                  </div>
                </div>
              </Link>
            </button>

            <button
              onClick={() => handleTabClick(2)}
              className={`p-2 ${
                activeTab === 2
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link to="#">
                <div
                  className={`text-lg ${
                    activeTab === 2
                      ? "text-[#002169] font-bold"
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
              onClick={() => handleTabClick(3)}
              className={`p-2 ${
                activeTab === 3
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link to="#">
                <div
                  className={`text-lg ${
                    activeTab === 3
                      ? "text-[#002169] font-bold"
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
              onClick={() => handleTabClick(4)}
              className={`p-2 ${
                activeTab === 4
                  ? "text-[#002169] font-bold border-b-4 border-b-[#002169]"
                  : "text-[#686868]"
              }`}
            >
              <Link to="#">
                <div className="lg:text-lg md:text-md">
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
                  onChange={(e) =>
                    handleIdentifyOptionClick(e.target.value as ITabOption)
                  }
                >
                  <option value="Choose~" className="bg-transparent">
                    {t("Choose~")}
                  </option>
                  <option value="Aadhar Card" className="bg-transparent">
                    {t("adhar")}
                  </option>
                  <option value="Driving License" className="bg-transparent">
                    {t("Driving License")}
                  </option>
                  <option value="Passport" className="bg-transparent">
                    {t("Passport")}
                  </option>
                </select>
              </div>
              {identifyOptionTab === "Aadhar Card" && (
                <IdentifyCheck selectOption="Aadhar Card" />
              )}
              {identifyOptionTab === "Driving License" && (
                <IdentifyCheck selectOption="Driving License" />
              )}
              {identifyOptionTab === "Passport" && (
                <IdentifyCheck selectOption="Passport" />
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
                  onChange={(e) =>
                    handlAddresseOptionClick(e.target.value as ITabOption)
                  }
                >
                  <option value="Choose~" className="bg-transparent">
                    {t("Choose~")}
                  </option>
                  <option value="Aadhar Card" className="bg-transparent">
                    {t("adhar")}
                  </option>
                  <option value="Driving License" className="bg-transparent">
                    {t("Driving License")}
                  </option>
                  <option value="Passport" className="bg-transparent">
                    {t("Passport")}
                  </option>
                </select>
              </div>
              {adressOptionTab === "Aadhar Card" && (
                <AddressCheck selectOption="Aadhar Card" />
              )}
              {adressOptionTab === "Driving License" && (
                <AddressCheck selectOption="Driving License" />
              )}
              {adressOptionTab === "Passport" && (
                <AddressCheck selectOption="Passport" />
              )}
            </div>
          )}
          {activeTab === 4 && <EmployementHistoryCheck />}

          {activeTab === 5 && <Consent />}
        </div>
      </div>
    </>
  );
};

export default VerficationDetails;
