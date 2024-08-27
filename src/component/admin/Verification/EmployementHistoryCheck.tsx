import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleFileDelete } from "redux/appThunk/Admin/bgv";
import ExtraActions from "./ExtraActions";
import { ConfirmDailogueBoxActions, VerificationDataKey } from "./types";
import ConfirmDailogueBox from "./ConfirmDailogueBox";
import UploadFile from "./UploadFile";
import { bgvConfirmDialogueValue } from "redux/actions/action";

const EmployementHistoryCheck = () => {
  const dispatch = useDispatch();
  const confirmDialogueValue = useSelector((state:any) => state.bgvReducer.confirmDialogueValue);

  const empDataById = useSelector(
    (state: any) => state.bgvReducer.employeeDataById
  );
  const { t } = useTranslation();

  const data1 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][ VerificationDataKey.RELIEVING_LETTERS ];

  const data2 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][ VerificationDataKey.EXPERIENCE_LETTERS ];

  const data3 = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][ VerificationDataKey.BANK_STATEMENTS ];

  return (
    <div className="w-[100%] h-[46vh]  mt-5 overflow-x-scroll no-scrollbar">
      {/* relieving_letters Section */}

      <div className="w-[100%] mt-5">
        {/* <div className="w-[100%] h-[55px] flex"> */}
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("Relieving letter")}</h1>
            {data1 ? (
              <ExtraActions doc_status_column={VerificationDataKey.RELIEVING_LETTERS_STATUS} doc_column={VerificationDataKey.RELIEVING_LETTERS} nodata={false} />
            ) : (
              ''
            )}
          </div>
        {/* </div> */}
        <div>
          {data1 ? (
            data1.map((item: any) => (
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2
                  data-testid={`deleteFilebtn${item.url}`}
                  onClick={() =>{dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.RELIEVING_LETTERS}))}}
                  className="cursor-pointer"
                />
              </div>
            ))
          ) : (
              <UploadFile doc_status_column={VerificationDataKey.RELIEVING_LETTERS_STATUS} doc_column={VerificationDataKey.RELIEVING_LETTERS} nodata={true} />
          )}
        </div>
      </div>

      {/* experience_letters Section */}

      <div className="w-[100%] mt-10">
        {/* <div className="w-[100%] h-[55px] flex"> */}
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("Experience letter")}</h1>
            {data2 ? (
              <ExtraActions doc_status_column={ VerificationDataKey.EXPERIENCE_LETTERS_STATUS } doc_column={VerificationDataKey.EXPERIENCE_LETTERS} nodata={false} />
            ) : (
              ''
            )}
          </div>
        {/* </div> */}
        <div>
          {data2 ? (
            data2.map((item: any) => (
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2
                  data-testid={`deleteFilebtn${item.url}`}
                  onClick={() =>{dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.EXPERIENCE_LETTERS}))}}
                  className="cursor-pointer"
                />
              </div>
            ))
          ) : (
              <UploadFile doc_status_column={VerificationDataKey.EXPERIENCE_LETTERS_STATUS} doc_column={VerificationDataKey.EXPERIENCE_LETTERS} nodata={true} />
          )}
        </div>
      </div>

      {/* bank_statements Section */}

      <div className="w-[100%] mt-10">
        {/* <div className="w-[100%] h-[55px] flex"> */}
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] flex justify-between items-center font-medium text-base">
            <h1>{t("Bank Statement")}</h1>
            {data3 ? (
              <ExtraActions doc_status_column={VerificationDataKey.BANK_STATEMENTS_STATUS} doc_column={VerificationDataKey.BANK_STATEMENTS} nodata={false} />
            ) : (
              ''
            )}
          </div>
        {/* </div> */}
        <div>
          {data3 ? (
            data3.map((item: any) => (
              <div key={item.url} className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
                {item.name}
                <RxCross2
                  data-testid={`deleteFilebtn${item.url}`}
                  onClick={() =>{dispatch(bgvConfirmDialogueValue({dialogueAction:ConfirmDailogueBoxActions.DELETE_FILE,userid:empDataById.id,fileURL:item.url,fileColumn:VerificationDataKey.BANK_STATEMENTS}))}}
                  className="cursor-pointer"
                />
              </div>
            ))
          ) : (
              <UploadFile doc_status_column={VerificationDataKey.BANK_STATEMENTS_STATUS} doc_column={VerificationDataKey.BANK_STATEMENTS} nodata={true} />
          )}
        </div>
      </div>
      {confirmDialogueValue && <ConfirmDailogueBox action={confirmDialogueValue.dialogueAction} actionValue={confirmDialogueValue} />}
    </div>
  );
};

export default EmployementHistoryCheck;
