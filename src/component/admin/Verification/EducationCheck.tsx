import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import ExtraActions from "./ExtraActions";
import { useDispatch, useSelector } from "react-redux";
import { handleFileDelete, handleSidePopUpData } from "redux/appThunk/Admin/bgv";
import { VerificationDataKey } from "./types";

const EducationCheck = () => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);

  const { t } = useTranslation();

  // console.log(empDataById);
  

  const data1 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.MARKS_SHEET_10TH];

  const data2 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.MARKS_SHEET_12TH];

  const data3 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.GRADUATION_DEGREES];

  const data4 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.OTHER_CERTIFICATIONS];


  return (
    <div className="w-full h-[56vh] mt-5 overflow-y-scroll  no-scrollbar  ">
      {/* Section markshseet_10th */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("10th")}</h1>
            {data1 ?  
                <ExtraActions doc_status_column={VerificationDataKey.MARKS_SHEET_10TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_10TH} nodata={false} /> 
              : 
                <ExtraActions doc_status_column={VerificationDataKey.MARKS_SHEET_10TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_10TH} nodata={true} />
            }
          </div>
        </div>
        <div>
          {data1 ? 
              data1.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={() => handleFileDelete(empDataById.id, item.url, VerificationDataKey.MARKS_SHEET_10TH ,dispatch)} className="cursor-pointer" />
              </div>) 
            : 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>
          }
        </div>
      </div>
      {/* Section markshseet_12th */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("12th")}</h1>
            {data2 ? 
                <ExtraActions doc_status_column={VerificationDataKey.MARKS_SHEET_12TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_12TH} nodata={false} /> 
              : 
              <ExtraActions doc_status_column={VerificationDataKey.MARKS_SHEET_12TH_STATUS} doc_column={VerificationDataKey.MARKS_SHEET_12TH} nodata={true} />
            }
          </div>
        </div>
        <div>
          {data2 ? 
              data2.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={() => handleFileDelete(empDataById.id, item.url, VerificationDataKey.MARKS_SHEET_12TH, dispatch)} className="cursor-pointer" />
              </div>) 
            : 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>
          }
        </div>
      </div>

      {/* graduation_degrees Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Graduation")}</h1>
            {data3 ? 
                <ExtraActions doc_status_column={VerificationDataKey.GRADUATION_DEGREES_STATUS} doc_column={VerificationDataKey.GRADUATION_DEGREES} nodata={false} /> 
              : 
                <ExtraActions doc_status_column={VerificationDataKey.GRADUATION_DEGREES_STATUS} doc_column={VerificationDataKey.GRADUATION_DEGREES} nodata={true} />
            }
          </div>
        </div>
        <div>
          {data3 ? 
              data3.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={() => handleFileDelete(empDataById.id, item.url, VerificationDataKey.GRADUATION_DEGREES, dispatch)} className="cursor-pointer" />
              </div>) 
            : 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>
          }
        </div>
      </div>

      {/* other_certifications Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Any other Certification")}</h1>
            {data4 ? 
                <ExtraActions doc_status_column={VerificationDataKey.OTHER_CERTIFICATIONS_STATUS} doc_column={VerificationDataKey.OTHER_CERTIFICATIONS} nodata={false} /> 
              : 
                <ExtraActions doc_status_column={VerificationDataKey.OTHER_CERTIFICATIONS_STATUS} doc_column={VerificationDataKey.OTHER_CERTIFICATIONS} nodata={true} />
            }
          </div>
        </div>
        <div>
          {data4 ? 
              data4.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={() => handleFileDelete(empDataById.id, item.url, VerificationDataKey.OTHER_CERTIFICATIONS, dispatch)} className="cursor-pointer" />
              </div>) 
            : 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>
          }
        </div>
      </div>
    </div>
  );
};

export default EducationCheck;
