import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getVerificationTabName } from "redux/actions/action";

const VerficationDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();
  const [identifyOptionTab, setIdentifyOptionTab] = useState(0);
  const [adressOptionTab, setAddressOptionTab] = useState(0);
  const {userData } = useSelector((reducer)=> reducer.VerificationReducer)
  const [handleButton , setHandleButton] =useState(false) 
  const dispatch = useDispatch()

  useEffect(()=>{
    if (userData?.Conset) {
      setActiveTab(1)
      setHandleButton(false)
      dispatch(getVerificationTabName("Identify Check"))
    }else{
      setActiveTab(5)
      setHandleButton(true)
    }
  },[])
  
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
      <div className="w-full h-full   ">
        <div className="w-full  rounded-lg  border flex  ">
          <button
             disabled={handleButton}
            onClick={function () {
              dispatch(getVerificationTabName("Identify Check"))
              handleTabClick(1);
             
            }}
            className={` w-full  p-[18px_16px_18px_16px]   ${activeTab === 1
              ? "text-[#002169] font-bold bg-[#F2F6FF]"
              : "text-[#686868]"
              } flex gap-2 text-[.9rem] whitespace-nowrap  font-bold justify-center items-center`}
          > 
                  <FaRegUser />
                  <h1>{t("checkIden")}</h1>
          </button>

          <button
            onClick={function () {
              handleTabClick(2);
              dispatch(getVerificationTabName( "Education check"))
            }}
            disabled={handleButton}
            className={`w-full font-bold text-base p-[16px_16px_16px_16px]   ${activeTab === 2
              ? "text-[#002169] font-bold bg-[#F2F6FF]"
              : "text-[#686868]"
              } flex gap-2 text-[.9rem] whitespace-nowrap  font-bold justify-center items-center`}
          >  
                  <FaGraduationCap />
                  <h1>{t("checkEdu")}</h1>
          </button>

          <button
            onClick={function () {
              handleTabClick(3);
              dispatch(getVerificationTabName("Address Check"))
            }}
            disabled={handleButton}
            className={`w-full p-[18px_16px_18px_16px]   ${activeTab === 3
              ? "text-[#002169] font-bold bg-[#F2F6FF]"
              : "text-[#686868]"
              } flex gap-2 text-[.9rem] whitespace-nowrap  font-bold justify-center items-center`}
          >
                  <CiLocationOn />
                  <h1>{t("checkadd")}</h1>
          </button>

          <button
            onClick={function () {
              handleTabClick(4);
              dispatch(getVerificationTabName("Employment History"))
            }}
            disabled={handleButton}
            className={`w-full p-[18px_16px_18px_16px] ${activeTab === 4
              ? "text-[#002169] font-bold bg-[#F2F6FF]"
              : "text-[#686868]"
              } flex gap-2 text-[.9rem] whitespace-nowrap font-bold justify-center items-center`}
          >
                  <PiBagSimpleLight />
                  <h1>{t("EmploymentHistory")}</h1>
          </button>

          <button
            onClick={function () {
              handleTabClick(5);
              dispatch(getVerificationTabName("Consent"))
            }}
            disabled={handleButton}
            className={`w-full p-[18px_16px_18px_16px] ${activeTab === 5
              ? "text-[#002169] font-bold bg-[#F2F6FF]"
              : "text-[#686868]"
              } flex gap-2 text-[.9rem] font-bold justify-center items-center`}
          >
               <IoNewspaperOutline />
                  <h1>Consent</h1>
          </button>

        </div>

        <div className="w-full h-full">
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
                <IdentifyCheck
                  selectOption={"Aadhar Card"}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
              )}
              {identifyOptionTab === "Driving License" && (
                <IdentifyCheck
                  selectOption={"Driving License"}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
              )}
              {identifyOptionTab === "Passport" && (
                <IdentifyCheck
                  selectOption={"Passport"}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                />
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