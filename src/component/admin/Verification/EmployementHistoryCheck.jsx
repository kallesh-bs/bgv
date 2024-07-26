import { RxCross2 } from "react-icons/rx";
import ExtraActions from "./ExtraActions";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { handleSidePopUpData } from "redux/appThunk/Admin/bgv";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";

const EmployementHistoryCheck = ({ setActiveTab, active }) => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state) => state.bgvReducer.employeeDataById);
  //  State for handle Status DropDown
  const [doc, setDoc] = useState("Pending Verification")
  const [doc1, setDoc1] = useState("Pending Verification")
  const [doc2, setDoc2] = useState("Pending Verification")
  const staticData = ["Document.pdf", "Document"]
  const { t } = useTranslation();

  const doc_status1 = empDataById['background_verification']['relieving_letters_status'];
  const data1 = empDataById['background_verification']['relieving_letters'];

  const doc_status2 = empDataById['background_verification']['experience_letters_status'];
  const data2 = empDataById['background_verification']['experience_letters'];

  const doc_status3 = empDataById['background_verification']['bank_statements_status'];
  const data3 = empDataById['background_verification']['bank_statements'];

  async function handleFileDelete(userId, url, columnName) {
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

  return (
    <div className="w-[100%] h-[56vh]  mt-5 overflow-x-scroll no-scrollbar">
      {/* relieving_letters Section */}

      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Relieving letter")}</h1>
            {/* <ExtraActions docStatus={doc} setDocStatus={setDoc} /> */}
            {data1 ? <ExtraActions doc_status_column={'relieving_letters_status'} doc_column={'relieving_letters'} nodata={false} /> : <ExtraActions nodata={true} doc_status_column={'relieving_letters_status'} doc_column={'relieving_letters'} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item)=> <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2/></div>)} */}
          {data1 ? data1.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "relieving_letters")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>

      {/* experience_letters Section */}

      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Experience letter")}</h1>
            {/* <ExtraActions docStatus={doc1} setDocStatus={setDoc1} /> */}
            {data2 ? <ExtraActions doc_status_column={'experience_letters_status'} doc_column={'experience_letters'} nodata={false} /> : <ExtraActions nodata={true} doc_status_column={'experience_letters_status'} doc_column={'experience_letters'} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data2 ? data2.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "experience_letters")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>
      {/* bank_statements Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Bank Statement")}</h1>

            {/* <ExtraActions docStatus={doc2} setDocStatus={setDoc2} /> */}
            {data3 ? <ExtraActions doc_status_column={'bank_statements_status'} doc_column={'bank_statements'} nodata={false} /> : <ExtraActions nodata={true} doc_status_column={'bank_statements_status'} doc_column={'bank_statements'} />}
          </div>
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data3 ? data3.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "bank_statements")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>
    </div>
  );
};

export default EmployementHistoryCheck;
