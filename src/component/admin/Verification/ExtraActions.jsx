import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import { useRef, useState } from "react"
import { GoCrossReference, GoVerified, GoXCircle } from "react-icons/go";
import { GrCircleQuestion, GrMore } from "react-icons/gr"
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleSidePopUpData } from "redux/appThunk/Admin/bgv";
import swalService from "utils/SwalServices";
import { ref } from "yup";

function ExtraActions({ nodata, doc_status_column, doc_column }) {
    let sidePopUpDocNavTab = useSelector((state) => state.bgvReducer.sidePopUpDocNavTab)
    console.log("sidePopUpDocNavTab: ", sidePopUpDocNavTab);
    const empDataById = useSelector((state) => state.bgvReducer.employeeDataById);
    const [isExtraActionsPopUp, setExtraActionPopUp] = useState(false);
    // const [docStatus, setDocStatus] = useState(empDataById['background_verification']['identity_check_documents_status']);
    const dispatch = useDispatch();
    let docStatus = '';
    let path_add = '';
    let  form_column = `background_verification[${doc_column}][]`
    switch (sidePopUpDocNavTab) {
        case 1:
            {
                docStatus = empDataById['background_verification'][doc_status_column];
                path_add = 'identity_check';
               
            }
            break;
        case 2:
            docStatus = empDataById['background_verification'][doc_status_column];
            path_add = 'education_check';
            break;
        case 3:
            {
                docStatus = empDataById['background_verification'][doc_status_column];
                path_add = 'address_check';
            }
            break;
        case 4:
            docStatus = empDataById['background_verification'][doc_status_column];
            path_add = 'employement_history_check';
            break;
        default:
            docStatus = '';
    }




    async function handleUpdateDocStatus(userid, doc_status) {
        console.log({ doc_status_column: doc_status });

        let path = `${path_add}/${userid}`;
        console.log(path);

        if (!path) {
            console.error("Invalid text value, no API path determined");
            return;
        }
        console.log(doc_status);
        try {
            const { response, status } = await Helper.post(
                {
                    [doc_status_column]: doc_status
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
    const inputRef = useRef(null);

    const handleUploadFile = async () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const handleFileChange = async (event, userid) => {
        const files = Array.from(event.target.files)
        console.log(files);
        const formData = new FormData();
        files.forEach((file) => {
            console.log(file);
            formData.append(form_column, file);
        });

        let path = `${path_add}/${userid}`;
        console.log(path);

        if (!path) {
            console.error("Invalid text value, no API path determined");
            return;
        }
        // console.log(doc_status);
        console.log(doc_column);
        try {
            const { response, status } = await Helper.post(
                formData, path, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // dispatch(bgvAllEmpData(response));
            console.log(response);

            // if (response.success) {
            //     handleSidePopUpData(dispatch, empDataById.id)
            //     setExtraActionPopUp(!isExtraActionsPopUp)
            // }

            if (status === 200) {
                swalService.showSuccess({
                    icon: "success",
                    title: "Added!",
                    text: response.data ? response.data.message : "Document uploaded successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                handleSidePopUpData(dispatch, empDataById.id)
                setExtraActionPopUp(!isExtraActionsPopUp)
            } else {
                swalService.showError({
                    icon: "error",
                    title: "Error!",
                    text: "Failed to upload Aadhar Card Document",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setExtraActionPopUp(!isExtraActionsPopUp)
            }

            // return true;
        }
        catch (error) {
            // swalService.showError({ title: "Error while fetching data" });
            console.log(error);
        }
    }







    console.log(docStatus);
    // const docStatus = empDataById['background_verification']['identity_check_documents_status'];

    return (
        <div className="flex gap-x-5 items-center relative">
            <div className={` ${docStatus === 'Verified' || docStatus === 'verified' ? 'bg-green-500 text-white' : docStatus === 'Rejected' || docStatus === 'rejected' ? 'bg-red-500 text-white' : docStatus === 'Insufficent' ? 'bg-yellow-500 text-white' : ('bg-[#F1F5F9] text-[#031B59]')} pl-1 pr-2 rounded-2xl flex items-center gap-x-1 justify-between`}>
                {/* {docStatus === 'Verified' || docStatus === 'verified' ? (<div className=""><GoVerified /></div>) : docStatus === 'Rejected'|| docStatus === 'rejected' ? (<div><GoXCircle /></div>) : docStatus === 'Insufficent' ? (<div><GrCircleQuestion /></div>) : ('')} */}
                {nodata ? '' : docStatus === 'Verified' || docStatus === 'verified' ? (<div className=""><GoVerified /></div>) : docStatus === 'Rejected' || docStatus === 'rejected' ? (<div><GoXCircle /></div>) : docStatus === 'Insufficent' ? (<div><GrCircleQuestion /></div>) : ('')}
                {nodata ? '' : <div>{docStatus === 'Inprogress' || docStatus === 'in_progress' ? 'Pending Verification' : docStatus}</div>}
            </div>
            <div className={`absolute bg-[#DEE4EB] w-[250px] top-10 right-[0px] rounded-md px-6 py-2 mt-2 space-y-2 z-50 ${isExtraActionsPopUp ? '' : 'hidden'}`} style={{ display: `${isExtraActionsPopUp ? '' : 'none'}` }}>
                {nodata ? <div className="cursor-pointer" onClick={
                    () => { handleUploadFile(empDataById.id) }
                } >Update/Add new document
                    <input ref={inputRef} onChange={(e) => handleFileChange(e, empDataById.id)} type="file" hidden />
                </div>
                    :
                    <><div className="cursor-pointer" onClick={() => {
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
                            () => { handleUploadFile(empDataById.id) }
                        } >
                            Update/Add new document
                            <input ref={inputRef} onChange={(e) => handleFileChange(e, empDataById.id)} type="file" hidden />
                        </div></>}

            </div>
            <div className="cursor-pointer" onClick={() => setExtraActionPopUp(!isExtraActionsPopUp)}>
                <GrMore />
            </div>
        </div>
    )
}

export default ExtraActions