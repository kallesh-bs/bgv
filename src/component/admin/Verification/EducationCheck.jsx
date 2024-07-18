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

const EducationCheck = () => {
  const userData = localStorage.getItem("userLoginToken")
    ? JSON.parse(localStorage.getItem("userLoginToken"))
    : "";

  const [colorChange, setColorChange] = useState({
    markshseet_10th: "bg-[#1A8718]",
    markshseet_12th: "bg-[#1A8718]",
    graduation_degrees: "bg-[#1A8718]",
    post_graduation_degrees: "bg-[#1A8718]",
    other_certifications: "bg-[#1A8718]",
  });
  const [iconChange, setIconChange] = useState({
    markshseet_10th: true,
    markshseet_12th: true,
    graduation_degrees: true,
    post_graduation_degrees: true,
    other_certifications: true,
  });
  const { t } = useTranslation();

  // State to store files for each section
  const [documents, setDocuments] = useState({
    markshseet_10th: [],
    markshseet_12th: [],
    graduation_degrees: [],
    post_graduation_degrees: [],
    other_certifications: [],
  });

  // Ref for file input
  const inputRefs = {
    markshseet_10th: useRef(),
    markshseet_12th: useRef(),
    graduation_degrees: useRef(),
    post_graduation_degrees: useRef(),
    other_certifications: useRef(),
  };

  // Dropdown state management
  const [isOpen, setIsOpen] = useState({
    markshseet_10th: false,
    markshseet_12th: false,
    graduation_degrees: false,
    post_graduation_degrees: false,
    other_certifications: false,
  });
  const [selectedOption, setSelectedOption] = useState({
    markshseet_10th: "Select",
    markshseet_12th: "Select",
    graduation_degrees: "Select",
    post_graduation_degrees: "Select",
    other_certifications: "Select",
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
    let path = `${apiUrl.educationCheck}/${userData?.id}`;
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

  return (
    <div className="w-[100%] h-[65vh] pb-7 mt-5 overflow-x-scroll no-scrollbar">
      {/* Section markshseet_10th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("10th")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange["markshseet_10th"]} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("markshseet_10th")}
                >
                  {iconChange["markshseet_10th"] ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption["markshseet_10th"]}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen["markshseet_10th"] && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("markshseet_10th", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("markshseet_10th", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("markshseet_10th", "Rejected")
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
              onClick={() => inputRefs["markshseet_10th"].current.click()}
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
              onChange={(e) => handleChange(e, "markshseet_10th")}
              ref={inputRefs["markshseet_10th"]}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents["markshseet_10th"].map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "markshseet_10th", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
          {deleteButton.section === "markshseet_10th" && (
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
      {/* Section markshseet_12th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("12th")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange["markshseet_12th"]} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("markshseet_12th")}
                >
                  {iconChange["markshseet_12th"] ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption["markshseet_12th"]}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen["markshseet_12th"] && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("markshseet_12th", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("markshseet_12th", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("markshseet_12th", "Rejected")
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
              onClick={() => inputRefs["markshseet_12th"].current.click()}
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
              onChange={(e) => handleChange(e, "markshseet_12th")}
              ref={inputRefs["markshseet_12th"]}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents["markshseet_12th"].map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "markshseet_12th", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "markshseet_12th" && (
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

      {/* graduation_degrees Section */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Graduation")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.graduation_degrees} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("graduation_degrees")}
                >
                  {iconChange.graduation_degrees ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.graduation_degrees}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.graduation_degrees && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("graduation_degrees", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("graduation_degrees", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("graduation_degrees", "Rejected")
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
              onClick={() => inputRefs.graduation_degrees.current.click()}
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
              onChange={(e) => handleChange(e, "graduation_degrees")}
              ref={inputRefs.graduation_degrees}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.graduation_degrees.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "graduation_degrees", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "graduation_degrees" && (
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

      {/* post_graduation_degrees Section */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("PostDegree")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.post_graduation_degrees} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("post_graduation_degrees")}
                >
                  {iconChange.post_graduation_degrees ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.post_graduation_degrees}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.post_graduation_degrees && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect(
                          "post_graduation_degrees",
                          "Verified"
                        )
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect(
                          "post_graduation_degrees",
                          "Insufficient"
                        )
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect(
                          "post_graduation_degrees",
                          "Rejected"
                        )
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
              onClick={() => inputRefs.post_graduation_degrees.current.click()}
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
              onChange={(e) => handleChange(e, "post_graduation_degrees")}
              ref={inputRefs.post_graduation_degrees}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.post_graduation_degrees.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({
                      section: "post_graduation_degrees",
                      index,
                    })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "post_graduation_degrees" && (
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

      {/* other_certifications Section */}
      <div className="w-[100%] h-[20vh]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between  font-medium text-base">
            <h1>{t("Any other Certification")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.other_certifications} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("other_certifications")}
                >
                  {iconChange.other_certifications ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.other_certifications}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.other_certifications && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("other_certifications", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect(
                          "other_certifications",
                          "Insufficient"
                        )
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("other_certifications", "Rejected")
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
              onClick={() => inputRefs.other_certifications.current.click()}
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
              onChange={(e) => handleChange(e, "other_certifications")}
              ref={inputRefs.other_certifications}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.other_certifications.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "other_certifications", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
          {deleteButton.section === "other_certifications" && (
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

export default EducationCheck;
