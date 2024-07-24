import Popup from "component/common/Popup";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import swalService from "utils/SwalServices";
import { GrMore } from "react-icons/gr";
import ExtraActions from "./ExtraActions";

const EducationCheck = ({ active, setActiveTab }) => {
        //  State for handle Status DropDown
  const [doc, setDoc] = useState("Pending Verification")
  const [doc1, setDoc1] = useState("Pending Verification")
  const [doc2, setDoc2] = useState("Pending Verification")
  const [doc3, setDoc3] = useState("Pending Verification")
  const [doc4, setDoc4] = useState("Pending Verification")
 
   const staticData = [ "Document.pdf", "Document"]

  const { t } = useTranslation();

 

  return (
    <div className="w-full h-[56vh] mt-5 overflow-y-scroll  no-scrollbar  ">
      {/* Section markshseet_10th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("10th")}</h1>
            <ExtraActions docStatus={doc} setDocStatus={setDoc} />
          </div>
        </div>
        <div>
{staticData.map((item)=> <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2/></div>)}
          </div>
      </div>
      {/* Section markshseet_12th */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
          <h1>{t("12th")}</h1>
            <ExtraActions docStatus={doc1} setDocStatus={setDoc1} />
          </div>
        </div>
        <div>
{staticData.map((item)=> <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2/></div>)}
          </div>
      </div>

      {/* graduation_degrees Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
          <h1>{t("Graduation")}</h1>
            <ExtraActions docStatus={doc2} setDocStatus={setDoc2} />
          </div>
        </div>
        <div>
{staticData.map((item)=> <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2/></div>)}
          </div>
      </div>
      
      {/* other_certifications Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
          <h1>{t("Any other Certification")}</h1>
            <ExtraActions docStatus={doc4} setDocStatus={setDoc4} />
          </div>
        </div>
        <div>
{staticData.map((item)=> <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2/></div>)}
          </div>
      </div>
    </div>
  );
};

export default EducationCheck;
