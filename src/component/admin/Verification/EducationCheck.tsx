import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import ExtraActions from "./ExtraActions";
import { useDispatch, useSelector } from "react-redux";
import { handleFileDelete, handleSidePopUpData } from "redux/appThunk/Admin/bgv";
import { ConfirmDailogueBoxActions, VerificationDataKey } from "./types";
import { BiCloudUpload } from "react-icons/bi";
import UploadFile from "./UploadFile";
import ConfirmDailogueBox from "./ConfirmDailogueBox";
import { bgvConfirmDialogueValue } from "redux/actions/action";

const EducationCheck = () => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);
  const confirmDialogueValue = useSelector((state:any) => state.bgvReducer.confirmDialogueValue);
  console.log(confirmDialogueValue);
  
  const { t } = useTranslation();

  // console.log(empDataById);
  

  const data1 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.MARKS_SHEET_10TH];

  const data2 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.MARKS_SHEET_12TH];

  const data3 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.GRADUATION_DEGREES];

  const data4 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.OTHER_CERTIFICATIONS];

  const del=()=>{

  }

  return (
    <div className="w-full h-[56vh] mt-5 overflow-y-scroll  no-scrollbar  ">
      {/* Section markshseet_10th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("10th")}</h1>
            {data1 ?  
                <ExtraActions doc_status_column={VerificationDataKey.MARKS_SHEET_10TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_10TH} nodata={false} /> 
              : 
                ''
            }
          </div>
        </div>
        <div>
          {data1 ? 
              data1.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={()=>{ dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.MARKS_SHEET_10TH})) }} className="cursor-pointer" />
              </div>) 
            : 
              <UploadFile doc_status_column={VerificationDataKey.MARKS_SHEET_10TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_10TH} nodata={true} />
          }
        </div>
      </div>
      {/* Section markshseet_12th */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("12th")}</h1>
            {data2 ? 
                <ExtraActions doc_status_column={VerificationDataKey.MARKS_SHEET_12TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_12TH} nodata={false} /> 
              : 
              ''
            }
          </div>
        </div>
        <div>
          {data2 ? 
              data2.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={()=>{ dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.MARKS_SHEET_12TH})) }} className="cursor-pointer" />
              </div>) 
            : 
              <UploadFile doc_status_column={VerificationDataKey.MARKS_SHEET_12TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_12TH} nodata={true} />
          }
        </div>
      </div>

      {/* graduation_degrees Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("Graduation")}</h1>
            {data3 ? 
                <ExtraActions doc_status_column={VerificationDataKey.GRADUATION_DEGREES_STATUS} doc_column={VerificationDataKey.GRADUATION_DEGREES} nodata={false} /> 
              : 
                ''
            }
          </div>
        </div>
        <div>
          {data3 ? 
              data3.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={()=>{ dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.GRADUATION_DEGREES})) }} className="cursor-pointer" />
              </div>) 
            : 
              <UploadFile doc_status_column={VerificationDataKey.GRADUATION_DEGREES_STATUS} doc_column={VerificationDataKey.GRADUATION_DEGREES} nodata={true} />
          }
        </div>
      </div>

      {/* other_certifications Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("Any other Certification")}</h1>
            {data4 ? 
                <ExtraActions doc_status_column={VerificationDataKey.OTHER_CERTIFICATIONS_STATUS} doc_column={VerificationDataKey.OTHER_CERTIFICATIONS} nodata={false} /> 
              : 
                ''
            }
          </div>
        </div>
        <div>
          {data4 ? 
              data4.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={()=>{ dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.OTHER_CERTIFICATIONS})) }} className="cursor-pointer" />
              </div>) 
            : 
              <UploadFile doc_status_column={VerificationDataKey.OTHER_CERTIFICATIONS_STATUS} doc_column={VerificationDataKey.OTHER_CERTIFICATIONS} nodata={true} />
          }
        </div>
      </div>
      {confirmDialogueValue && <ConfirmDailogueBox action={confirmDialogueValue.dialogueAction} actionValue={confirmDialogueValue} />}
    </div>
  );
};

export default EducationCheck;
