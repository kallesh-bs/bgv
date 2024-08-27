import { BiCloudUpload } from "react-icons/bi";
import { t } from "i18next";
import { useRef } from "react";
import { handleFileChange } from "redux/appThunk/Admin/bgv";
import { useDispatch, useSelector } from "react-redux";
import { ExtraActionsProps } from "./ExtraActions";
import { VerificationDataKey } from "./types";

function UploadFile({
  nodata,
  doc_status_column,
  doc_column,
}: ExtraActionsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const empDataById = useSelector(
    (state: any) => state.bgvReducer.employeeDataById
  );
  let sidePopUpDocNavTab = useSelector(
    (state: any) => state.bgvReducer.sidePopUpDocNavTab
  );
  const dispatch = useDispatch();
  let docStatus: string = "";
  let path_add: string = "";
  let form_column: string = `${VerificationDataKey.BACKGROUND_VERIFICATION}[${doc_column}][]`;

  switch (sidePopUpDocNavTab) {
    case 1:
      {
        docStatus =
          empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][
            doc_status_column
          ] + "".toLocaleLowerCase();
        path_add = VerificationDataKey.IDENTIYY_CHECK;
      }
      break;
    case 2: {
      docStatus =
        empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][
          doc_status_column
        ] + "".toLocaleLowerCase();
      path_add = VerificationDataKey.EDUCATION_CHECK;
      break;
    }
    case 3:
      {
        docStatus =
          empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][
            doc_status_column
          ] + "".toLocaleLowerCase();
        path_add = VerificationDataKey.ADDRESS_CHECK;
      }
      break;
    case 4: {
      docStatus =
        empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][
          doc_status_column
        ] + "".toLocaleLowerCase();
      path_add = VerificationDataKey.EMPLOYEMENT_HISTORY_CHECK;
      break;
    }
    default:
      docStatus = "";
  }

  const handleUploadFile = async () => {
    if (inputRef.current) {
        inputRef.current.click()
    }
}

  return (
    <div
      className="w-[100%] h-[100px] p-5 border-dashed border-2 border-[#E2E8F0] flex justify-center items-center cursor-pointer"
      onClick={() => { handleUploadFile() }}
    >
      <div className="h-15 w-[250px]">
        <button className="h-[40px] w-[40px] ml-[104px]">
          <BiCloudUpload className="h-[30px] w-[30px] mt-[5px] ml-[5px] text-[#A1A1A1]" />
        </button>
        <h1 className="text-base font-normal text-[#191919] cursor-pointer">
          {t("")}
          <span className="text-[#031B59] h-[40px] w-[40px] ml-[80px] font-bold cursor-pointer">
            &nbsp;{t("Upload File")}
          </span>
        </h1>
        <input
          ref={inputRef}
          data-testid="handleFileChange2"
          onChange={(e) =>
            handleFileChange(e, empDataById.id, form_column, path_add, dispatch)
          }
          type="file"
          multiple
          hidden
        />
      </div>
    </div>
  );
}

export default UploadFile;
