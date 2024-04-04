import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const EducationCheck = () => {
  const [colorChange, setColorChange] = useState("bg-[#1A8718]");
  const [iconChange, setIconChange] = useState(true);
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select');
  const toggleDropdown = (id) => {
    setIsOpen(id);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen("");
    if (option === "Rejected") {
      setColorChange("bg-[rgb(255,1,1)]");
      setIconChange(false);
    } else {
      setColorChange("bg-[#1A8718]");
      setIconChange(true);

    }
  };

  return (
    <div className="w-[100%] h-[65vh] pb-7  mt-5 overflow-x-scroll">
      <div className="w-[100%] h-[20vh] ">
        <div className="w-[100%] h-[55px] flex ">
          <div className="xl:w-[80%] lg:w-[65%] md:w-[45%] text-2xl ">
            <h1 >{t("10th")}</h1>
          </div>
          <div className="xl:w-[20%] lg:w-[35%] md:w-[55%] h-[55px] flex gap-3 text-lg">
            <div className="w-[119px] h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] rounded-[25px]"> <h1>{t("Insufficient")}</h1></div>
            <div className="w-[81px] h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] rounded-[25px]"><h1>{t( "reject")}</h1></div>
            <div className="w-[81px] h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] rounded-[25px]"><h1>{t( "verify")}</h1></div>
          </div>
        </div>
        <div className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button className="h-[40px] w-[40px] ml-[104px]">
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp; {t("browse_files")}
              </span>
            </h1>
            <input type='file' multiple accept='.csv, .xlsx' hidden />
          </div>
        </div>
        <div className="w-full h-[40px] flex border">
          <div className="w-[90%] flex items-center ">
            {t(" Document.Pdf")}
          </div>
          <div className="w-[10%] h-[40px] flex justify-end items-center text-2xl">
            <RxCross2 />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20vh] mt-3">
        <div className="w-[100%] h-[55px] flex ">
          <div className="xl:w-[80%] lg:w-[70%] md:w-[60%] flex  items-center text-2xl ">
            <h1 >{t("12th")}</h1>
          </div>
          <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex  justify-center items-center text-lg">
            <div className="relative">
              <div
                className={`flex items-center  w-[200px]  md:w-[150px] 
                ${colorChange} text-white w-[131px]
                     h-[40px] rounded-[25px]  p-[5px_10px_5px_10px]`}
                onClick={() => toggleDropdown(1)}
              >
                {iconChange ? (<GoVerified className="mr-1 text-3xl" />) : (<RxCross2 className="text-3xl" />)}
                <div className="w-full text-xl">{selectedOption}</div>
                <MdKeyboardArrowDown className="ml-auto text-3xl" />
              </div>
              {isOpen === 1 && (
                <div className="absolute mt-1  bg-white rounded-md shadow-lg">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Verified')}
                  >
                    {t("verify")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Insufficient')}
                  >
                    {t("Insufficient")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Rejected')}
                  >
                    {t("reject")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button className="h-[40px] w-[40px] ml-[104px]">
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp;{t("browse_files")}
              </span>
            </h1>
            <input type='file' multiple accept='.csv, .xlsx' hidden />
          </div>
        </div>
        <div className="w-full h-[40px] flex border">
          <div className="w-[90%] flex items-center ">
            {t("Document.Pdf")}
          </div>
          <div className="w-[10%] h-[40px] flex justify-end items-center text-2xl">
            <RxCross2 />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20vh]  mt-3">
        <div className="w-[100%] h-[55px] md:h-[100px] flex ">
          <div className="xl:w-[80%] lg:w-[70%] md:w-[60%] flex  items-center text-2xl ">
            <h1 >{"Graduation Degree ( if don't have than last examination passed )"}</h1>
          </div>
          <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex  justify-center items-center text-lg">
            <div className="relative">
              <div
                className={`flex items-center  w-[200px] md:w-[150px]  ${colorChange} text-white 
                     h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                onClick={() => toggleDropdown(2)}
              >
                {iconChange ? (<GoVerified className="mr-1 text-3xl" />) : (<RxCross2 className="text-3xl" />)}
                <div className="w-full text-xl">{selectedOption}</div>
                <MdKeyboardArrowDown className="ml-auto text-3xl" />
              </div>
              {isOpen === 2 && (
                <div className="absolute mt-1  bg-white rounded-md shadow-lg">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Verified')}
                  >
                    {t("verify")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Insufficient')}
                  >
                    {t("Insufficient")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Rejected')}
                  >
                    {t("reject")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button className="h-[40px] w-[40px] ml-[104px]">
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp;{t("browse_files")}
              </span>
            </h1>
            <input type='file' multiple accept='.csv, .xlsx' hidden />
          </div>
        </div>
        <div className="w-full h-[40px] flex border">
          <div className="w-[90%] flex items-center ">
            {t("Document.Pdf")}
          </div>
          <div className="w-[10%] h-[40px] flex justify-end items-center text-2xl">
            <RxCross2 />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20vh] mt-3 md:mt-12">
        <div className="w-[100%] h-[55px] flex ">
          <div className="xl:w-[80%] lg:w-[70%] md:w-[60%] flex  items-center text-2xl ">
            <h1 >{t("PostDegree")}</h1>
          </div>
          <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex  justify-center items-center text-lg">
            <div className="relative">
              <div
                className={`flex items-center  w-[200px] md:w-[150px]  ${colorChange} text-white w-[131px]
                     h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                onClick={() => toggleDropdown(3)}
              >
                {iconChange ? (<GoVerified className="mr-1 text-3xl" />) : (<RxCross2 className="text-3xl" />)}
                <div className="w-full text-xl">{selectedOption}</div>
                <MdKeyboardArrowDown className="ml-auto text-3xl" />
              </div>
              {isOpen === 3 && (
                <div className="absolute mt-1  bg-white rounded-md shadow-lg">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Verified')}
                  >
                    {t("verify")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Insufficient')}
                  >
                    {t("Insufficient")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Rejected')}
                  >
                    {t("reject")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button className="h-[40px] w-[40px] ml-[104px]">
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp; {t("browse_files")}
              </span>
            </h1>
            <input type='file' multiple accept='.csv, .xlsx' hidden />
          </div>
        </div>
        <div className="w-full h-[40px] flex border">
          <div className="w-[90%] flex items-center ">
            {t("Document.Pdf")}
          </div>
          <div className="w-[10%] h-[40px] flex justify-end items-center text-2xl">
            <RxCross2 />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20vh] mt-3">
        <div className="w-[100%] h-[55px] flex ">
          <div className="xl:w-[80%] lg:w-[70%] md:w-[60%]  flex  items-center text-2xl ">
            <h1 >{t("anyCertificate")}</h1>
          </div>
          <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex  justify-center items-center text-lg">
            <div className="relative">
              <div
                className={`flex items-center  w-[200px] md:w-[150px]  ${colorChange} text-white w-[131px]
                     h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                onClick={() => toggleDropdown(4)}
              >
                {iconChange ? (<GoVerified className="mr-1 text-3xl" />) : (<RxCross2 className="text-3xl" />)}
                <div className="w-full text-xl">{selectedOption}</div>
                <MdKeyboardArrowDown className="ml-auto text-3xl" />
              </div>
              {isOpen === 4 && (
                <div className="absolute mt-1  bg-white rounded-md shadow-lg">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Verified')}
                  >
                    {t("verify")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Insufficient')}
                  >
                    {t("Insufficient")}
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Rejected')}
                  >
                    {t("reject")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button className="h-[40px] w-[40px] ml-[104px]">
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp; {t("browse_files")}
              </span>
            </h1>
            <input type='file' multiple accept='.csv, .xlsx' hidden />
          </div>
        </div>
        <div className="w-full h-[40px] flex border">
          <div className="w-[90%] flex items-center ">
            {t("Document.Pdf")}
          </div>
          <div className="w-[10%] h-[40px] flex justify-end items-center text-2xl">
            <RxCross2 />
          </div>
        </div>
      </div>
    </div>
  );

};

export default EducationCheck;
