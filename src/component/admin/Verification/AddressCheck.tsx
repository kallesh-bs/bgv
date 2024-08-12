import { useTranslation } from "react-i18next";
import ExtraActions from "./ExtraActions";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleFileDelete } from "redux/appThunk/Admin/bgv";
import { ConfirmDailogueBoxActions, VerificationDataKey } from "./types";
import ConfirmDailogueBox from "./ConfirmDailogueBox";
import UploadFile from "./UploadFile";
import { bgvConfirmDialogueValue } from "redux/actions/action";

const AddressCheck = ({ selectOption }:{selectOption:string}) => {
  const dispatch = useDispatch();
  const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);
  const confirmDialogueValue = useSelector((state:any) => state.bgvReducer.confirmDialogueValue);

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
              ''
          }
        </div>
        <div>
          {data ? 
              data.map((item:any) => 
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2 data-testid={`deleteFilebtn${item.url}`} onClick={()=>{ dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.ADDRESS_CHECK_DOUCMENTS})) }} className="cursor-pointer" />
              </div>) 
            : 
              <UploadFile doc_status_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS_STATUS} doc_column={VerificationDataKey.ADDRESS_CHECK_DOUCMENTS} nodata={true} />
          }
        </div>
        {confirmDialogueValue && <ConfirmDailogueBox action={confirmDialogueValue.dialogueAction} actionValue={confirmDialogueValue} />}
      </div>
    </>
  );
};

export default AddressCheck;
