import { useTranslation } from "react-i18next";
import ExtraActions from "./ExtraActions";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleFileDelete } from "redux/appThunk/Admin/bgv";
import { VerificationDataKey } from "./types";

const AddressCheck = ({ selectOption }:{selectOption:string}) => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);

  const { t } = useTranslation();

  const data = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][VerificationDataKey.ADDRESS_CHECK_DOUCMENTS];

  return (
    <>
      <div className="w-full pt-10">
        <div className="font-medium text-lg flex justify-between">
          <h1>{t(selectOption)}</h1>
          {data ? 
              <ExtraActions doc_status_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS} doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS}  nodata={false} /> 
            : 
              <ExtraActions doc_status_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS} doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS} nodata={true} />
          }
        </div>
        <div>
          {data ? 
              data.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={() => handleFileDelete(empDataById.id, item.url, VerificationDataKey.ADDRESS_CHECK_DOUCMENTS , dispatch)} className="cursor-pointer" />
              </div>) 
            : 
              <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{'No data'}</div>
          }
        </div>
      </div>
    </>
  );
};

export default AddressCheck;
