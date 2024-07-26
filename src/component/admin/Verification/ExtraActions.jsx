import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import { useRef, useState } from "react"
import { GoCrossReference, GoVerified, GoXCircle } from "react-icons/go";
import { GrCircleQuestion, GrMore } from "react-icons/gr"
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleSidePopUpData } from "redux/appThunk/Admin/bgv";

function ExtraActions({ nodata }) {
    const empDataById = useSelector((state) => state.bgvReducer.employeeDataById);
    // const [docStatus, setDocStatus] = useState(empDataById['background_verification']['identity_check_documents_status']);
    const dispatch = useDispatch();

    async function handleUpdateDocStatus(userid, docStatus) {
        let path = `identity_check/${userid}`;
        console.log(path);

        if (!path) {
            console.error("Invalid text value, no API path determined");
            return;
        }
        console.log(docStatus);
        try {
            const { response, status } = await Helper.post({
                "identity_check_documents_status": docStatus
            }, path);
            // dispatch(bgvAllEmpData(response));
            console.log(response
            );

            if (response.success) {
                handleSidePopUpData(dispatch, empDataById.id)
                setExtraActionPopUp(!isExtraActionsPopUp)
            }

            // dispatch(bgvEmployeeDataById(response.background_verification))

            return true;
        }
        catch (error) {
            // swalService.showError({ title: "Error while fetching data" });
            console.log(error);
        }
    }

    const [isExtraActionsPopUp, setExtraActionPopUp] = useState(false);

    function handleUploadFile() {
        console.log("Uploading file");
    }

    const inputRef = useRef();

    return (
        <div className="flex gap-x-5 items-center relative">
            <div className={` ${empDataById['background_verification']['identity_check_documents_status'] === 'Verified' ? 'bg-green-500 text-white' : empDataById['background_verification']['identity_check_documents_status'] === 'Rejected' ? 'bg-red-500 text-white' : empDataById['background_verification']['identity_check_documents_status'] === 'Insufficent' ? 'bg-yellow-500 text-white' : ('bg-[#F1F5F9] text-[#031B59]')} pl-1 pr-2 rounded-2xl flex items-center gap-x-1 justify-between`}>
                {empDataById['background_verification']['identity_check_documents_status'] === 'Verified' ? (<div className=""><GoVerified /></div>) : empDataById['background_verification']['identity_check_documents_status'] === 'Rejected' ? (<div><GoXCircle /></div>) : empDataById['background_verification']['identity_check_documents_status'] === 'Insufficent' ? (<div><GrCircleQuestion /></div>) : ('')}
                {nodata ? '' : <div>{empDataById['background_verification']['identity_check_documents_status'] === 'Inprogress' || empDataById['background_verification']['identity_check_documents_status'] === 'in_progress' ? 'Pending Verification' : empDataById['background_verification']['identity_check_documents_status']}</div>}
            </div>
            <div className={`absolute bg-[#DEE4EB] w-[250px] top-10 right-[0px] rounded-md px-6 py-2 mt-2 space-y-2 ${isExtraActionsPopUp ? '' : 'hidden'}`}>
                {nodata ? <div className="cursor-pointer" >Update/Add new document</div> : <><div className="cursor-pointer" onClick={() => {
                    // setDocStatus("Verified")
                    handleUpdateDocStatus(empDataById.id, "Verified")
                }}>Verify</div>
                    <div className="cursor-pointer" onClick={() => {
                        // setDocStatus("Insufficent")
                        handleUpdateDocStatus(empDataById.id, "Insufficent")
                    }}>Insufficent</div>
                    <div className="cursor-pointer" onClick={() => {
                        // setDocStatus("Rejected")
                        handleUpdateDocStatus(empDataById.id, "Rejected")
                    }}>Reject</div>
                    <div className="cursor-pointer" onClick={
                        () => {
                            handleUploadFile()
                        }
                    } >Update/Add new document
                        <input type="file" hidden />
                    </div></>}

            </div>
            <div className="cursor-pointer" onClick={() => setExtraActionPopUp(!isExtraActionsPopUp)}>
                <GrMore />
            </div>
        </div>
    )
}

export default ExtraActions