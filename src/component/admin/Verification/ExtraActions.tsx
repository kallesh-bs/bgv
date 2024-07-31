import Helper from "api/Helper";
import { useEffect, useRef, useState } from "react"
import { GoVerified, GoXCircle } from "react-icons/go";
import { GrCircleQuestion, GrMore } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux";
import { handleFileChange, handleSidePopUpData, handleUpdateDocStatus } from "redux/appThunk/Admin/bgv";
import swalService from "utils/SwalServices";
import { VerificationDataKey, VerificationDocStatus } from "./types";

export interface ExtraActionsProps {
    nodata: boolean,
    doc_status_column:string,
    doc_column:string
}

function ExtraActions({ nodata, doc_status_column, doc_column }:ExtraActionsProps) {
    let sidePopUpDocNavTab = useSelector((state:any) => state.bgvReducer.sidePopUpDocNavTab)
    const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);
    const [isExtraActionsPopUp, setExtraActionPopUp] = useState<boolean>(false);
    const dispatch = useDispatch();
    let docStatus:string = '';
    let path_add:string = '';
    let form_column:string = `${VerificationDataKey.BACKGROUND_VERIFICATION}[${doc_column}][]`
    const inputRef = useRef<HTMLInputElement>(null);

    switch (sidePopUpDocNavTab) {
        case 1:
            {
                docStatus = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][doc_status_column]+"".toLocaleLowerCase();
                path_add = VerificationDataKey.IDENTIYY_CHECK;
            }
            break;
        case 2:
            {
                docStatus = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][doc_status_column]+"".toLocaleLowerCase();
                path_add = VerificationDataKey.EDUCATION_CHECK;
                break;
            }
        case 3:
            {
                docStatus = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][doc_status_column]+"".toLocaleLowerCase();
                path_add = VerificationDataKey.ADDRESS_CHECK;
            }
            break;
        case 4:
            {
                docStatus = empDataById[VerificationDataKey.BACKGROUND_VERIFICATION][doc_status_column]+"".toLocaleLowerCase();
                path_add = VerificationDataKey.EMPLOYEMENT_HISTORY_CHECK;
                break;
            }
        default:
            docStatus = '';
    }
    
    const handleUploadFile = async () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const extraActionSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event:any) => {
          if(extraActionSideRef.current){
            if (!extraActionSideRef.current.contains(event.target)) {
                setExtraActionPopUp(false)
              }
          }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, [extraActionSideRef]);

    return (
        <div className="flex gap-x-5 items-center relative" >
            <div className={` ${docStatus === VerificationDocStatus.VERIFIED ? 'bg-green-500 text-white' : docStatus === VerificationDocStatus.REJECTED ? 'bg-red-500 text-white' : docStatus === VerificationDocStatus.INSUFFICIENT ? 'bg-yellow-500 text-white' : ('bg-[#F1F5F9] text-[#031B59]')} pl-1 pr-2 rounded-2xl flex items-center gap-x-1 justify-between`}>
                {nodata ? '' : docStatus === VerificationDocStatus.VERIFIED ? (<div className=""><GoVerified /></div>) : docStatus === VerificationDocStatus.REJECTED ? (<div><GoXCircle /></div>) : docStatus === VerificationDocStatus.INSUFFICIENT ? (<div><GrCircleQuestion /></div>) : ('')}
                {nodata ? '' : <div>{docStatus === VerificationDocStatus.INPROGRESS || docStatus === VerificationDocStatus.IN_PROGRESS ? VerificationDocStatus.PENDING_VERIFICATION : docStatus}</div>}
            </div>
            <div className={`absolute bg-[#FFFFFF] border border-[#DEE4EB] w-[250px] top-5 right-[20px] rounded-md px-6 py-2 mt-2 space-y-2 z-50 ${isExtraActionsPopUp ? '' : 'hidden'}`} style={{ display: `${isExtraActionsPopUp ? '' : 'none'}` }}>
                {nodata ? 
                    <div className="cursor-pointer" onClick={() => { handleUploadFile() }} >
                        Update/Add new document
                        <input ref={inputRef} onChange={(e) => handleFileChange(e, empDataById.id, form_column, path_add, dispatch)} type="file" hidden />
                    </div>
                :
                    <>
                        <div className="cursor-pointer" onClick={() => {handleUpdateDocStatus(empDataById.id, VerificationDocStatus.VERIFIED, path_add, doc_status_column, dispatch)}}>
                            Verify
                        </div>
                        <div className="cursor-pointer" onClick={() => {handleUpdateDocStatus(empDataById.id, VerificationDocStatus.INSUFFICIENT, path_add, doc_status_column,dispatch)}}>
                            Insufficent
                        </div>
                        <div className="cursor-pointer" onClick={() => {handleUpdateDocStatus(empDataById.id, VerificationDocStatus.REJECTED, path_add, doc_status_column,dispatch)}}>
                            Reject
                        </div>
                        <div className="cursor-pointer" onClick={() => { handleUploadFile() }} >
                            Update/Add new document
                            <input ref={inputRef} onChange={(e) => handleFileChange(e, empDataById.id, form_column, path_add, dispatch)} type="file" hidden />
                        </div>
                    </>
                }
            </div>
            <div className="cursor-pointer" onClick={() => setExtraActionPopUp(!isExtraActionsPopUp)} ref={extraActionSideRef}>
                <GrMore />
            </div>
        </div>
    )
}

export default ExtraActions