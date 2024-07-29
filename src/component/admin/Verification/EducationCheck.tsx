import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import ExtraActions from "./ExtraActions";
import { useDispatch, useSelector } from "react-redux";
import { handleSidePopUpData } from "redux/appThunk/Admin/bgv";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";

const EducationCheck = () => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);

  //  State for handle Status DropDown
  const [doc, setDoc] = useState("Pending Verification")
  const [doc1, setDoc1] = useState("Pending Verification")
  const [doc2, setDoc2] = useState("Pending Verification")
  const [doc3, setDoc3] = useState("Pending Verification")
  const [doc4, setDoc4] = useState("Pending Verification")

  const staticData = ["Document.pdf", "Document"]

  const { t } = useTranslation();

  async function handleFileDelete(userId:any, url:string, columnName:string) {
    let path = `${apiUrl.background_verification}/remove_document/${userId}`;
    console.log(path, url, columnName);

    // Ensure a valid path was determined
    if (!path) {
      console.error("Invalid text value, no API path determined");
      return;
    }
    try {
      const { response, status } = await Helper.put({
        "url": url,
        "column": columnName
      }, path);
      // dispatch(bgvAllEmpData(response));
      console.log(response);
      if (response.success) {
        handleSidePopUpData(dispatch, empDataById.id)
      }
    }
    catch (error) {
      console.error("Error in handleAddressCheck:", error);
    }
  }

  const doc_status1 = empDataById['background_verification']['markshseet_10th_status'];
  const data1 = empDataById['background_verification']['markshseet_10th'];

  const doc_status2 = empDataById['background_verification']['markshseet_12th_status'];
  const data2 = empDataById['background_verification']['markshseet_12th'];

  const doc_status3 = empDataById['background_verification']['graduation_degrees_status'];
  const data3 = empDataById['background_verification']['graduation_degrees'];

  const doc_status4 = empDataById['background_verification']['other_certifications_status'];
  const data4 = empDataById['background_verification']['other_certifications'];


  return (
    <div className="w-full h-[56vh] mt-5 overflow-y-scroll  no-scrollbar  ">
      {/* Section markshseet_10th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("10th")}</h1>
            {/* <ExtraActions docStatus={doc} setDocStatus={setDoc} /> */}
            {data1 ? <ExtraActions doc_status_column={'markshseet_10th_status'} doc_column={'markshseet_10th'} nodata={false} /> : <ExtraActions nodata={true} doc_status_column={'markshseet_10th_status'} doc_column={'markshseet_10th'} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data1 ? data1.map((item:any) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "markshseet_10th")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>
      {/* Section markshseet_12th */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("12th")}</h1>
            {/* <ExtraActions docStatus={doc1} setDocStatus={setDoc1} /> */}
            {data2 ? <ExtraActions doc_status_column={'markshseet_12th_status'} doc_column={'markshseet_12th'} nodata={false} /> : <ExtraActions doc_status_column={'markshseet_12th_status'} doc_column={'markshseet_12th'} nodata={true} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data2 ? data2.map((item:any) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "markshseet_12th")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>

      {/* graduation_degrees Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Graduation")}</h1>
            {/* <ExtraActions docStatus={doc2} setDocStatus={setDoc2} /> */}
            {data3 ? <ExtraActions doc_status_column={'graduation_degrees_status'} doc_column={'graduation_degrees'} nodata={false} /> : <ExtraActions doc_status_column={'graduation_degrees_status'} doc_column={'graduation_degrees'} nodata={true} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data3 ? data3.map((item:any) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "graduation_degrees")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>

      {/* other_certifications Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Any other Certification")}</h1>
            {/* <ExtraActions docStatus={doc4} setDocStatus={setDoc4} /> */}
            {data4 ? <ExtraActions doc_status_column={'other_certifications_status'} doc_column={'other_certifications'} nodata={false} /> : <ExtraActions doc_status_column={'other_certifications_status'} doc_column={'other_certifications'} nodata={true} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data4 ? data4.map((item:any) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "other_certifications")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>
    </div>
  );
};

export default EducationCheck;
