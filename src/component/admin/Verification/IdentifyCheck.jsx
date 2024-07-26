import Popup from "component/common/Popup";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import swalService from "utils/SwalServices";
import ExtraActions from "./ExtraActions";
import { useDispatch, useSelector } from "react-redux";
import { handleSidePopUpData } from "redux/appThunk/Admin/bgv";

const IdentifyCheck = ({ selectOption }) => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state) => state.bgvReducer.employeeDataById);
  console.log(empDataById);
  const docStatus1 = empDataById['background_verification']['identity_check_documents_status'];
  const [docStatus, setDocStatus] = useState(docStatus1)

  const { t } = useTranslation();

  const staticData = ["Document.pdf", "Document"]

  // const [data, setdata] = useState(empDataById['background_verification']['identity_check_documents']);

  const data = empDataById['background_verification']['identity_check_documents'];

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

  console.log(data);

  return (
    <>
      <div className="w-full pt-10">
        <div className="font-medium text-lg flex justify-between">
          <h1>{t(selectOption)}</h1>
          {data ? <ExtraActions doc_status_column={'identity_check_documents_status'} doc_column={'identity_check_documents'} nodata={false} /> : <ExtraActions doc_status_column={'identity_check_documents_status'} doc_column={'identity_check_documents'} nodata={true} />}
        </div>
        <div>
          {/* {staticData.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2 /></div>)} */}
          {data ? data.map((item) => <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item.name}<RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, "identity_check_documents")} className="cursor-pointer" /></div>) : <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>}
        </div>
      </div>
    </>
  );
};

export default IdentifyCheck;
