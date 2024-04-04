import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiCloudUpload } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

const AddressCheck = () => {
  const { t } = useTranslation();
  const inputRef = useRef();
  const [getDocument, setGetDocument] = useState([]);
  console.log('getDocument', getDocument);
  const handleChange = (e) => {
    e.preventDefault();
    console.log("event",e.target.files[0]);
    const getFiles = e.target.files;
    setGetDocument(prevFiles => [...prevFiles, ...getFiles]);
  };
  const handleImageClick = (data) => {
    const fileURL = URL.createObjectURL(data);
    window.open(fileURL, "_blank");
  };

  return (
    <>
      <div className="w-[100%] h-[20vh] mt-10">
        <div className="w-[100%] h-[55px]  flex ">
          <div className="lg:w-[60%] md:w-[40%] xl:w-[75%] text-2xl ">
            <h1 >{t("adhar")}</h1>
          </div>
          <div className="w-[20%] h-[55px] flex lg:gap-8 md:gap-6 text-lg">
            <div className="w-[119px] h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] rounded-[25px]"> <h1>{t("Insufficient")}</h1></div>
            <div className="w-[81px] h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] rounded-[25px]"><h1>{t("reject")}</h1></div>
            <div className="w-[81px] h-[35px] flex justify-center items-center
                  bg-[rgb(242,246,255)] text-[rgb(3,27,89)] rounded-[25px]"><h1>{t("verify")}</h1></div>
          </div>
        </div>
        <div className="  w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0]
                flex justify-center items-center">
          <div className="h-15 w-[250px]">
            <button className="h-[40px] w-[40px] ml-[104px]" onClick={() => inputRef.current.click()}>
              <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
            </button>
            <h1 className="text-base font-normal text-[#191919] cursor-pointer">
              {t("Drag_drop_files")}
              <span className="text-[#031B59] font-bold cursor-pointer">
                &nbsp;{t("browse_files")}
              </span>
            </h1>
            <input type='file' onChange={handleChange} multiple accept='.doc, .pdf, .jpg, .png, .csv' hidden
              ref={inputRef} />
          </div>
        </div>
        {getDocument?.length > 0 ? (
          getDocument.map((data , index) => (
            <div className="w-full h-[50px] text-xl flex border" key={data.name}>
              <div className="w-[90%] h-[50px] flex items-center " onClick={() => handleImageClick(data)}>
                <h1>{data.name}</h1>
              </div>
              <div className="w-[10%] h-[50px] flex justify-end items-center text-2xl" >
                <button onClick={() => {
                  const updatedDocuments = [...getDocument];
                  updatedDocuments.splice(index, 1);
                  setGetDocument(updatedDocuments);
                }}>
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-[50px] text-xl flex border">
            <div className="w-[90%] h-[50px] flex items-center ">
              {t("Document.Pdf")}
            </div>
            <div className="w-[10%] h-[50px] flex justify-end items-center text-2xl" onClick={() => {}}>
              <RxCross2 />
            </div>
          </div>
        )}

      </div>

    </>

  );
};

export default AddressCheck;
