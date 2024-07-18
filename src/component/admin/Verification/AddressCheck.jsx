import Popup from "component/common/Popup";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const AddressCheck = ({ selectOption }) => {
  const { t } = useTranslation();
  const inputRef = useRef();
  const [getDocument, setGetDocument] = useState([]);
  const [deleteButton, setDeleteButton] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const getFiles = e.target.files;
    setGetDocument((prevFiles) => [...prevFiles, ...getFiles]);
    // swalService.showSuccess({
    //   title: "uploaded sucessfully",
    // });
  };
  const handleImageClick = (data) => {
    const fileURL = URL.createObjectURL(data);
    window.open(fileURL, "_blank");
  };
  const cancleButton = () => {
    setDeleteButton("");
  };

  const handleDelete = () => {
    const updatedDocuments = [...getDocument];
    updatedDocuments.splice(deleteButton, 1);
    setGetDocument(updatedDocuments);
    setDeleteButton("");
  };

  return (
    <>
      <div className="w-[100%] h-[20vh] mt-10">
        <div className="w-[100%] h-[55px]  flex ">
          <div className="xl:w-[70%] lg:w-[50%] md:w-[45%] text-base font-medium flex items-center">
            <h1>{t(selectOption)}</h1>
          </div>

          {/* <div className="xl:w-[30%] lg:w-[50%] md:w-[55%] h-[55px] flex items-center   gap-5  xl:text-lg lg:text-lg md:text-sm">
            <button
              className="xl:w-[119px] lg:w-[119px] h-[35px] flex justify-center items-center p-5
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] md:w-[65px]  rounded-[25px] "
            >
              {" "}
              <h1>{t("Insufficient")}</h1>
            </button>
            <button
              className="xl:w-[81px] lg:w-[81px]  h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] md:w-[65px]  rounded-[25px] p-5"
            >
              <h1>{t("reject")}</h1>
            </button>
            <button
              className="xl:w-[81px] lg:w-[81px]  h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] md:w-[65px]  rounded-[25px] p-5"
            >
              <h1>{t("verify")}</h1>
            </button>
          </div> */}
        </div>
        <div
          className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center"
        >
          <div className="h-15 w-[250px]">
            <button
              className="h-[40px] w-[40px] ml-[104px]"
              onClick={() => inputRef.current.click()}
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
              onChange={handleChange}
              multiple
              accept=".doc, .pdf, .jpg, .png, .csv"
              hidden
              ref={inputRef}
            />
          </div>
        </div>
        {getDocument?.length > 0
          ? getDocument.map((data, index) => (
              <div
                className="w-full h-[50px] text-xl flex border"
                key={data.name}
              >
                <div
                  className="w-[90%] h-[50px] flex items-center "
                  onClick={() => handleImageClick(data)}
                >
                  <h1>{data.name}</h1>
                </div>
                <div className="w-[10%] h-[50px] flex justify-end items-center text-2xl">
                  <button
                    onClick={() => {
                      setDeleteButton(index);
                    }}
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            ))
          : // <div className="w-full h-[50px] text-xl flex border">
            //   <div className="w-[90%] h-[50px] flex items-center ">
            //     {t("Document.Pdf")}
            //   </div>
            //   <div className="w-[10%] h-[50px] flex justify-end items-center text-2xl">
            //     <RxCross2 />
            //   </div>
            // </div>
            null}
        <div className="bottom-18 flex justify-end mt-10 gap-4">
          <button className="text-black py-2 px-4 rounded-l">
            {t("Back")}
          </button>
          <button
            className={`p-[15px_36px_15px_36px] rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full ${
              getDocument?.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#031B59] text-white"
            }`}
            disabled={getDocument?.length === 0}
          >
            {t("Save & Next")}
          </button>
        </div>
      </div>
      {deleteButton !== "" && (
        <Popup
          title={t("deleteResource")}
          popupBox={cancleButton}
          submitBtnText={"Remove"}
          handleSubmit={handleDelete}
        >
          <div className="w-full flex items-center justify-center p-2">
            <h1 className="text-2xl"> {"want to delete File ?"}</h1>
            <span className="text-[1rem] text-[#031B59] font-semibold"></span>
          </div>
        </Popup>
      )}
    </>
  );
};

export default AddressCheck;
