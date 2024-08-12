import { GrFormClose } from "react-icons/gr"
import { ConfirmDailogueBoxActions } from "./types"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { bgvConfirmDialogue, bgvConfirmDialogueValue } from "redux/actions/action";
import { handleFileChange, handleFileDelete, handleUpdateDocStatus } from "redux/appThunk/Admin/bgv";

interface ActionPropType{
    action:ConfirmDailogueBoxActions
    actionValue:{
        userid:string,
        fileURL?:string,
        fileColumn?:string,
        fileEvent?:any,
        path_add?:string,
        doc_status?:string,
        doc_status_column?:string
    }
}

function ConfirmDailogueBox(props:ActionPropType) {
    const [isDialogue, setDialogue] = useState(true);
    const dispatch = useDispatch();
    console.log(props.actionValue.fileEvent);
    
  return (
    <>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-[rgba(3,27,89,.2)] fixed top-0 left-0">
            <div className="bg-[#FFFFFF] p-5 px-10 w-[80%] sm:[50%] lg:w-[40%] space-y-3 rounded-md z-21">
                <div className="flex justify-end" onClick={()=>{dispatch(bgvConfirmDialogue(''));dispatch(bgvConfirmDialogueValue(null))} }>
                    <button className="" data-testid="notifyPopUpClosebtn" >
                        <GrFormClose className="flex w-[2rem] h-[2rem]" />
                    </button>
                </div>
                {
                    props.action === ConfirmDailogueBoxActions.DELETE_FILE ?
                        <div className="text-[#191919] font-extrabold text-[24px] text-justify">
                             <p>{`Are you sure you want to remove this document?`}</p>
                            {/* Are you sure you want to update this document? */}
                        </div>
                    :
                    props.action === ConfirmDailogueBoxActions.UPDATE_FILE ?
                        <div>
                            <div className="text-[#191919] font-extrabold text-[24px] text-justify">
                                <p>{`Are you sure you want to update this document?`}</p>
                            </div>
                            <p>Once updated the existing document will get replaced.</p>
                        </div>
                    :
                    props.action === ConfirmDailogueBoxActions.VERIFIED ?
                        <div className="text-[#191919] font-extrabold text-[24px] text-justify">
                             <p>{`Are you sure you want to mark this document as Verified?`}</p>
                        </div>
                    :
                    props.action === ConfirmDailogueBoxActions.INSUFFICIENT ?
                        <div className="text-[#191919] font-extrabold text-[24px] text-justify">
                             <p>{`Are you sure you want to mark this document as Insufficient?`}</p>
                        </div>
                    :
                    props.action === ConfirmDailogueBoxActions.REJECTED ?
                        <div className="text-[#191919] font-extrabold text-[24px] text-justify">
                             <p>{`Are you sure you want to mark this document as Rejected?`}</p>
                        </div>
                    :''
                }
                <hr/>
                {
                    props.action === ConfirmDailogueBoxActions.DELETE_FILE ?
                        <div className="flex justify-end" onClick={()=>{handleFileDelete(props.actionValue.userid,props.actionValue.fileURL,props.actionValue.fileColumn,dispatch)}}>
                            <button data-testid="handleUserNotifybtn"
                                className="bg-[#FF0000] text-white font-bold py-[15px] px-[30px] rounded-[20px] my-2" >
                                {'Remove'}
                            </button>
                        </div>
                    :
                    props.action === ConfirmDailogueBoxActions.UPDATE_FILE ?
                        <div className="flex justify-end" onClick={()=>{dispatch(bgvConfirmDialogueValue(null));handleFileChange(props.actionValue.fileEvent,props.actionValue.userid,props.actionValue.fileColumn,props.actionValue.path_add,dispatch)}}>
                            <button data-testid="handleUserNotifybtn"
                                className=" bg-[#031B59] text-white py-[8px] px-[15px] rounded-[20px] my-2" >
                                {'Yes'}
                            </button>
                        </div>
                    :
                    props.action === ConfirmDailogueBoxActions.VERIFIED ?
                        <div className="flex justify-end" onClick={()=>{dispatch(bgvConfirmDialogueValue(null));handleUpdateDocStatus(props.actionValue.userid,props.actionValue.doc_status,props.actionValue.path_add,props.actionValue.doc_status_column,dispatch)}}>
                                <button data-testid="handleUserNotifybtn"
                                    className=" bg-[#031B59] text-white py-[8px] px-[15px] rounded-[20px] my-2" >
                                    {'Mark as Verify'}
                                </button>
                            </div>
                    :
                    props.action === ConfirmDailogueBoxActions.INSUFFICIENT ?
                        <div className="flex justify-end" onClick={()=>{dispatch(bgvConfirmDialogueValue(null));handleUpdateDocStatus(props.actionValue.userid,props.actionValue.doc_status,props.actionValue.path_add,props.actionValue.doc_status_column,dispatch)}}>
                                <button data-testid="handleUserNotifybtn"
                                    className=" bg-[#031B59] text-white py-[8px] px-[15px] rounded-[20px] my-2" >
                                    {'Mark as Insufficient'}
                                </button>
                            </div>
                    :
                        <div className="flex justify-end" onClick={()=>{dispatch(bgvConfirmDialogueValue(null));handleUpdateDocStatus(props.actionValue.userid,props.actionValue.doc_status,props.actionValue.path_add,props.actionValue.doc_status_column,dispatch)}}>
                                <button data-testid="handleUserNotifybtn"
                                    className=" bg-[#031B59] text-white py-[8px] px-[15px] rounded-[20px] my-2" >
                                    {'Mark as Rjected'}
                                </button>
                            </div>
                }
            </div>
        </div>
    </>
  )
}

export default ConfirmDailogueBox