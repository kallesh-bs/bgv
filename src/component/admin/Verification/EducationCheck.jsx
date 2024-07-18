import Popup from "component/common/Popup";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const EducationCheck = () => {
  const [colorChange, setColorChange] = useState({
    "10th": "bg-[#1A8718]",
    "12th": "bg-[#1A8718]",
    Graduation: "bg-[#1A8718]",
    PostDegree: "bg-[#1A8718]",
    AnyCertificate: "bg-[#1A8718]",
  });
  const [iconChange, setIconChange] = useState({
    "10th": true,
    "12th": true,
    Graduation: true,
    PostDegree: true,
    AnyCertificate: true,
  });
  const { t } = useTranslation();

  // State to store files for each section
  const [documents, setDocuments] = useState({
    "10th": [],
    "12th": [],
    Graduation: [],
    PostDegree: [],
    AnyCertificate: [],
  });

  // Ref for file input
  const inputRefs = {
    "10th": useRef(),
    "12th": useRef(),
    Graduation: useRef(),
    PostDegree: useRef(),
    AnyCertificate: useRef(),
  };

  // Dropdown state management
  const [isOpen, setIsOpen] = useState({
    "10th": false,
    "12th": false,
    Graduation: false,
    PostDegree: false,
    AnyCertificate: false,
  });
  const [selectedOption, setSelectedOption] = useState({
    "10th": "Select",
    "12th": "Select",
    Graduation: "Select",
    PostDegree: "Select",
    AnyCertificate: "Select",
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
      {/* Section 10th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("10th")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange["10th"]} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("10th")}
                >
                  {iconChange["10th"] ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">{selectedOption["10th"]}</div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen["10th"] && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionSelect("10th", "Verified")}
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionSelect("10th", "Insufficient")}
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionSelect("10th", "Rejected")}
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
              onClick={() => inputRefs["10th"].current.click()}
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
              onChange={(e) => handleChange(e, "10th")}
              ref={inputRefs["10th"]}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents["10th"].map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() => setDeleteButton({ section: "10th", index })}
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
          {deleteButton.section === "10th" && (
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
      {/* Section 12th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("12th")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange["12th"]} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("12th")}
                >
                  {iconChange["12th"] ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">{selectedOption["12th"]}</div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen["12th"] && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionSelect("12th", "Verified")}
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionSelect("12th", "Insufficient")}
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionSelect("12th", "Rejected")}
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
              onClick={() => inputRefs["12th"].current.click()}
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
              onChange={(e) => handleChange(e, "12th")}
              ref={inputRefs["12th"]}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents["12th"].map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() => setDeleteButton({ section: "12th", index })}
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "12th" && (
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

      {/* Graduation Section */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("Graduation")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.Graduation} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("Graduation")}
                >
                  {iconChange.Graduation ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.Graduation}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.Graduation && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("Graduation", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("Graduation", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("Graduation", "Rejected")
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
              onClick={() => inputRefs.Graduation.current.click()}
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
              onChange={(e) => handleChange(e, "Graduation")}
              ref={inputRefs.Graduation}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.Graduation.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "Graduation", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "Graduation" && (
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

      {/* PostDegree Section */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between font-medium text-base">
            <h1>{t("PostDegree")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.PostDegree} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("PostDegree")}
                >
                  {iconChange.PostDegree ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.PostDegree}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.PostDegree && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("PostDegree", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("PostDegree", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("PostDegree", "Rejected")
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
              onClick={() => inputRefs.PostDegree.current.click()}
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
              onChange={(e) => handleChange(e, "PostDegree")}
              ref={inputRefs.PostDegree}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.PostDegree.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "PostDegree", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}

          {deleteButton.section === "PostDegree" && (
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

      {/* AnyCertificate Section */}
      <div className="w-[100%] h-[20vh]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between  font-medium text-base">
            <h1>{t("Any other Certification")}</h1>
            <div className="xl:w-[20%] lg:w-[30%] md:w-[40%] h-[55px] flex justify-center items-center text-lg">
              <div className="relative">
                <div
                  className={`flex items-center w-[200px] md:w-[150px] ${colorChange.AnyCertificate} text-white w-[131px] h-[40px] rounded-[25px] p-[5px_10px_5px_10px]`}
                  onClick={() => toggleDropdown("AnyCertificate")}
                >
                  {iconChange.AnyCertificate ? (
                    <GoVerified className="mr-1 text-3xl" />
                  ) : (
                    <RxCross2 className="text-3xl" />
                  )}
                  <div className="w-full text-xl">
                    {selectedOption.AnyCertificate}
                  </div>
                  <MdKeyboardArrowDown className="ml-auto text-3xl" />
                </div>
                {isOpen.AnyCertificate && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg p-2 ml-1">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("AnyCertificate", "Verified")
                      }
                    >
                      {t("verify")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("AnyCertificate", "Insufficient")
                      }
                    >
                      {t("Insufficient")}
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() =>
                        handleOptionSelect("AnyCertificate", "Rejected")
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
              onClick={() => inputRefs.AnyCertificate.current.click()}
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
              onChange={(e) => handleChange(e, "AnyCertificate")}
              ref={inputRefs.AnyCertificate}
              hidden
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar mb-10">
          {documents.AnyCertificate.map((file, index) => (
            <div key={index} className="w-full h-[40px] text-base flex border">
              <div className="w-[90%]  flex items-center">
                <h3>{file.name}</h3>
              </div>
              <div className="w-[10%] flex justify-end items-center text-2xl">
                <button
                  onClick={() =>
                    setDeleteButton({ section: "AnyCertificate", index })
                  }
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
          {deleteButton.section === "AnyCertificate" && (
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
