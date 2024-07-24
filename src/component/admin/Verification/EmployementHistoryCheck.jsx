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

const EmployementHistoryCheck = ({ setActiveTab, active }) => {
  const userData = localStorage.getItem("userLoginToken")
    ? JSON.parse(localStorage.getItem("userLoginToken"))
    : "";

  const [colorChange, setColorChange] = useState({
    relieving_letters: "bg-[#1A8718]",
    experience_letters: "bg-[#1A8718]",
    bank_statements: "bg-[#1A8718]",
  });
  const [iconChange, setIconChange] = useState({
    relieving_letters: true,
    experience_letters: true,
    bank_statements: true,
  });
  const { t } = useTranslation();

  // State to store files for each section
  const [documents, setDocuments] = useState({
    relieving_letters: [],
    experience_letters: [],
    bank_statements: [],
  });

  // Ref for file input
  const inputRefs = {
    relieving_letters: useRef(),
    experience_letters: useRef(),
    bank_statements: useRef(),
  };

  // Dropdown state management
  const [isOpen, setIsOpen] = useState({
    relieving_letters: false,
    experience_letters: false,
    bank_statements: false,
  });
  const [selectedOption, setSelectedOption] = useState({
    relieving_letters: "Select",
    experience_letters: "Select",
    bank_statements: "Select",
  });
  const [deleteButton, setDeleteButton] = useState({ section: "", index: "" });

  const toggleDropdown = (id) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [id]: !prevIsOpen[id],
    }));
  };

  const handleOptionSelect = async (section, option) => {
    console.log(section, option);
    setSelectedOption((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [section]: option,
    }));
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [section]: false,
    }));

    const formdata = new FormData();

    console.log("documents:", documents);
    console.log("documents.section:", documents[section]);

    // Ensure documents[section] is an array
    if (Array.isArray(documents[section])) {
      documents[section].forEach((file) => {
        formdata.append(`background_verification[${section}][]`, file);
        formdata.append(`background_verification[${section}_status]`, option);
      });
    } else {
      console.error("documents[section] is not an array");
      return;
    }

    console.log(formdata);

    // Determine the API path based on the value of `selectOption`
    let path = `${apiUrl.employementHistoryCheck}/${userData?.id}`;
    console.log("AddressCheck", path);

    // Ensure a valid path was determined
    if (!path) {
      console.error("Invalid text value, no API path determined");
      return;
    }

    // Log the payload before sending it
    console.log("Payload being sent:", formdata);
    try {
      const { response, status } = await Helper.post(formdata, path, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response, status);

      // Handle the response based on status
      if (status === 200) {
        swalService.showSuccess({
          icon: "success",
          title: "Added!",
          text: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to Add New Employee",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error in handleAddressCheck:", error);
    }
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

  const handleBack = () => {
    setActiveTab(active - 1);
  };

  const handleSaveNext = () => {
    setActiveTab(active + 1);
  };

  return (
    <div className="w-[100%] h-[60vh]  mt-5 overflow-x-scroll no-scrollbar">
      {/* relieving_letters Section */}
      <div className="w-[100%]">
        <div className="w-[100%] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%]  flex justify-between font-medium text-base">
            <h1>{t("Relieving letter")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.relieving_letters} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("relieving_letters")}
                >
                  {iconChange.relieving_letters ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.relieving_letters}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.relieving_letters && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("relieving_letters", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("relieving_letters", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("relieving_letters", "Rejected")
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
        <div
          className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center cursor-pointer"
          onClick={() => inputRefs.relieving_letters.current.click()}
        >
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
            <input
              type="file"
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              onChange={(e) => handleChange(e, "relieving_letters")}
              ref={inputRefs.relieving_letters}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.relieving_letters.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "relieving_letters", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
          {deleteButton.section === "relieving_letters" && (
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

      {/* experience_letters Section */}
      <div className="w-[100%] ">
        <div className="w-[100%] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Experience letter")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.experience_letters} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("experience_letters")}
                >
                  {iconChange.experience_letters ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.experience_letters}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.experience_letters && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("experience_letters", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("experience_letters", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("experience_letters", "Rejected")
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
        <div
          className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center cursor-pointer"
          onClick={() => inputRefs.experience_letters.current.click()}
        >
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
            <input
              type="file"
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              onChange={(e) => handleChange(e, "experience_letters")}
              ref={inputRefs.experience_letters}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.experience_letters.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "experience_letters", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "experience_letters" && (
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

      {/* bank_statements Section */}
      <div className="w-[100%] ">
        <div className="w-[100%]  flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Bank Statement")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.bank_statements} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("bank_statements")}
                >
                  {iconChange.bank_statements ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.bank_statements}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.bank_statements && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("bank_statements", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("bank_statements", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("bank_statements", "Rejected")
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
        <div
          className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center cursor-pointer"
          onClick={() => inputRefs.bank_statements.current.click()}
        >
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
            <input
              type="file"
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              onChange={(e) => handleChange(e, "bank_statements")}
              ref={inputRefs.bank_statements}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.bank_statements.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "bank_statements", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "bank_statements" && (
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
          <div className="bottom-18 flex justify-end mt-10 gap-4">
            <button
              className="text-black py-2 px-4 rounded-l"
              onClick={handleBack}
            >
              {t("Back")}
            </button>
            <button
              className={`p-[15px_36px_15px_36px] rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full ${"bg-[#031B59] text-white"}`}
              onClick={handleSaveNext}
            >
              {t("Save & Next")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployementHistoryCheck;
