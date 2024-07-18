import Popup from "component/common/Popup";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const EmployementHistoryCheck = () => {
  const [colorChange, setColorChange] = useState({
    relieving: "bg-[#1A8718]",
    experience: "bg-[#1A8718]",
    BankStatement: "bg-[#1A8718]",
  });
  const [iconChange, setIconChange] = useState({
    relieving: true,
    experience: true,
    BankStatement: true,
  });
  const { t } = useTranslation();

  // State to store files for each section
  const [documents, setDocuments] = useState({
    relieving: [],
    experience: [],
    BankStatement: [],
  });

  // Ref for file input
  const inputRefs = {
    relieving: useRef(),
    experience: useRef(),
    BankStatement: useRef(),
  };

  // Dropdown state management
  const [isOpen, setIsOpen] = useState({
    relieving: false,
    experience: false,
    BankStatement: false,
  });
  const [selectedOption, setSelectedOption] = useState({
    relieving: "Select",
    experience: "Select",
    BankStatement: "Select",
  });
  const [deleteButton, setDeleteButton] = useState({ section: "", index: "" });

  const toggleDropdown = (id) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [id]: !prevIsOpen[id],
    }));
  };

  const handleOptionSelect = (section, option) => {
    setSelectedOption((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [section]: option,
    }));
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [section]: false,
    }));
  };

  // Function to handle file change
  const handleChange = (e, section) => {
    e.preventDefault();
    const getFiles = Array.from(e.target.files);
    setDocuments((prevDocuments) => ({
      ...prevDocuments,
      [section]: getFiles,
    }));
  };

  useEffect(() => {
    // Handle color and icon changes based on selected option
    const newColorChange = {};
    const newIconChange = {};

    Object.keys(selectedOption).forEach((key) => {
      if (selectedOption[key] === "Select") {
        newColorChange[key] = "bg-[rgb(222,222,222)]";
      } else if (selectedOption[key] === "Rejected") {
        newColorChange[key] = "bg-[rgb(255,1,1)]";
        newIconChange[key] = false;
      } else {
        newColorChange[key] = "bg-[#1A8718]";
        newIconChange[key] = true;
      }
    });

    setColorChange(newColorChange);
    setIconChange(newIconChange);
  }, [selectedOption]);

  const handleDelete = () => {
    const updatedDocuments = { ...documents };
    updatedDocuments[deleteButton.section] = updatedDocuments[
      deleteButton.section
    ].filter((item, index) => index !== deleteButton.index);
    setDocuments(updatedDocuments);
    setDeleteButton({ section: "", index: "" });
  };

  const cancelDelete = () => {
    setDeleteButton({ section: "", index: "" });
  };

  return (
    <div className="w-[100%] h-[65vh] pb-7 mt-5 overflow-x-scroll no-scrollbar">
      {/* relieving Section */}
      <div className="w-[100%]">
        <div className="w-[100%] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Relieving letter")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.relieving} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("relieving")}
                >
                  {iconChange.relieving ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.relieving}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.relieving && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("relieving", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("relieving", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("relieving", "Rejected")
                      }
                    >
                      {t("reject")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button
              className="h-[40px] w-[40px] ml-[104px]"
              onClick={() => inputRefs.relieving.current.click()}
            >
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp;{t("browse_files")}
              </span>
            </h1>
            <input
              type="file"
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              onChange={(e) => handleChange(e, "relieving")}
              ref={inputRefs.relieving}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.relieving.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "relieving", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
          {deleteButton.section === "relieving" && (
            <Popup
              title={t("deleteResource")}
              popupBox={cancelDelete}
              submitBtnText={t("Remove")}
              handleSubmit={handleDelete}
            >
              <div className="w-full flex items-center justify-center p-2">
                <h1 className="text-2xl"> {"want to delete File ?"}</h1>
                <span className="text-[1rem] text-[#031B59] font-semibold"></span>
              </div>
            </Popup>
          )}
        </div>
      </div>

      {/* experience Section */}
      <div className="w-[100%] ">
        <div className="w-[100%] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Experience letter")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.experience} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("experience")}
                >
                  {iconChange.experience ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.experience}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.experience && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("experience", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("experience", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("experience", "Rejected")
                      }
                    >
                      {t("reject")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button
              className="h-[40px] w-[40px] ml-[104px]"
              onClick={() => inputRefs.experience.current.click()}
            >
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp;{t("browse_files")}
              </span>
            </h1>
            <input
              type="file"
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              onChange={(e) => handleChange(e, "experience")}
              ref={inputRefs.experience}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.experience.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "experience", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "experience" && (
            <Popup
              title={t("deleteResource")}
              popupBox={cancelDelete}
              submitBtnText={t("Remove")}
              handleSubmit={handleDelete}
            >
              <div className="w-full flex items-center justify-center p-2">
                <h1 className="text-2xl"> {"want to delete File ?"}</h1>
                <span className="text-[1rem] text-[#031B59] font-semibold"></span>
              </div>
            </Popup>
          )}
        </div>
      </div>

      {/* BankStatement Section */}
      <div className="w-[100%] ">
        <div className="w-[100%]  flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Bank Statement")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.BankStatement} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("BankStatement")}
                >
                  {iconChange.BankStatement ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.BankStatement}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.BankStatement && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("BankStatement", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("BankStatement", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("BankStatement", "Rejected")
                      }
                    >
                      {t("reject")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button
              className="h-[40px] w-[40px] ml-[104px]"
              onClick={() => inputRefs.BankStatement.current.click()}
            >
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp;{t("browse_files")}
              </span>
            </h1>
            <input
              type="file"
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              onChange={(e) => handleChange(e, "BankStatement")}
              ref={inputRefs.BankStatement}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.BankStatement.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "BankStatement", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "BankStatement" && (
            <Popup
              title={t("deleteResource")}
              popupBox={cancelDelete}
              submitBtnText={t("Remove")}
              handleSubmit={handleDelete}
            >
              <div className="w-full flex items-center justify-center p-2">
                <h1 className="text-2xl"> {"want to delete File ?"}</h1>
                <span className="text-[1rem] text-[#031B59] font-semibold"></span>
              </div>
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployementHistoryCheck;
