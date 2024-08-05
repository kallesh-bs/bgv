import { useEffect, useState } from "react";
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
import IdentifyCheck from "./IdentityCheck";
import "./Verfication.css";
import { useDispatch, useSelector } from "react-redux";
import { getVerificationTabName } from "redux/actions/action";
import { setSidePopUpNavTab } from "redux/actions/action";
import { IoNewspaperOutline } from "react-icons/io5";
import { object } from "prop-types";
import { VerificationDataKey } from "./types";

// Define the component
const VerficationDetails: React.FC = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state:any) => state.bgvReducer.employeeDataById)
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();
  const [identifyOptionTab, setIdentifyOptionTab] = useState<ITabOption>("Choose~");
  const [adressOptionTab, setAddressOptionTab] = useState<ITabOption>("Choose~");
  const [handleButton , setHandleButton] =useState(false) 

  // console.log(userData);
  
  // console.log(Object.keys(userData).length);

  // console.log(userData);
  
  
  useEffect(()=>{
    if (!userData[VerificationDataKey.BACKGROUND_VERIFICATION]){
        setActiveTab(5)
        setHandleButton(true)
        dispatch(setSidePopUpNavTab(5))
    }else{
      setActiveTab(1)
      setHandleButton(false)
      dispatch(setSidePopUpNavTab(1))
    }
  },[])
  
  const handleTabClick = (tabIndex:any) => {
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
      <div className="wE-full h-full   ">
        <div className="w-full  rounded-lg  border flex  ">
          <button
          data-testid="activeTabbtn1"
             disabled={handleButton}
            onClick={function () {
              handleTabClick(1);
              dispatch(setSidePopUpNavTab(1))
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
              dispatch(setSidePopUpNavTab(2))
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
              dispatch(setSidePopUpNavTab(3))
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
              dispatch(setSidePopUpNavTab(4))
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
          {!userData[VerificationDataKey.BACKGROUND_VERIFICATION] ? <button
          // onClick={function () {
          //   handleTabClick(5);
          // }}
          disabled={handleButton}
          className={`w-full p-[18px_16px_18px_16px] ${activeTab === 5
            ? "text-[#002169] font-bold bg-[#F2F6FF]"
            : "text-[#686868]"
            } flex gap-2 text-[.9rem] font-bold justify-center items-center`}
        >
             <IoNewspaperOutline />
                <h1>Consent</h1>
        </button>:''}
        
          {/* {Object.keys(userData[VerificationDataKey.BACKGROUND_VERIFICATION]).length === 12 ? 
          <button
          // onClick={function () {
          //   handleTabClick(5);
          // }}
          disabled={handleButton}
          className={`w-full p-[18px_16px_18px_16px] ${activeTab === 5
            ? "text-[#002169] font-bold bg-[#F2F6FF]"
            : "text-[#686868]"
            } flex gap-2 text-[.9rem] font-bold justify-center items-center`}
        >
             <IoNewspaperOutline />
                <h1>Consent</h1>
        </button>
        :''
          } */}
        </div>

        <div className="w-full h-full">
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
                <IdentifyCheck selectOption={"Aadhar Card"} />
              )}
              {identifyOptionTab === "Driving License" && (
                <IdentifyCheck selectOption={"Driving License"}  />
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
