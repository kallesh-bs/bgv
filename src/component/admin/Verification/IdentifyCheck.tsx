import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import ExtraActions from "./ExtraActions";
import { useDispatch, useSelector } from "react-redux";
import { handleFileDelete } from "redux/appThunk/Admin/bgv";
import { VerificationDataKey } from "./types";

const IdentifyCheck = ({ selectOption }:{ selectOption : string}) => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);
  console.log(empDataById);
  const { t } = useTranslation();
  const data = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.IDENTITY_CHECK_DOCUMENTS];

  return (
    <>
      <div className="w-full pt-10">
        <div className="font-medium text-lg flex justify-between">
          <h1>{t(selectOption)}</h1>
          {data ? 
              <ExtraActions doc_status_column={VerificationDataKey.IDENTITY_CHECK_DOCUMENTS_STATUS} doc_column={VerificationDataKey.IDENTITY_CHECK_DOCUMENTS} nodata={false} /> 
            : 
              <ExtraActions doc_status_column={VerificationDataKey.IDENTITY_CHECK_DOCUMENTS_STATUS} doc_column={VerificationDataKey.IDENTITY_CHECK_DOCUMENTS} nodata={true} />
          }
        </div>
        <div>
          {data ? 
              data.map((item:any) => 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 onClick={() => handleFileDelete(empDataById.id, item.url, VerificationDataKey.IDENTITY_CHECK_DOCUMENTS ,dispatch)} className="cursor-pointer" />
              </div>) 
            : 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>
          }
        </div>
      </div>
    </>
  );
};

export default IdentifyCheck;
