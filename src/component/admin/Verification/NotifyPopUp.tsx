import LoaderComp from "component/loader/LoaderComp"
import { useRef } from "react";
import { GrFormClose } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux";
import { handleNotify } from "redux/appThunk/Admin/bgv"


function NotifyPopUp({
    isNotifyPopUp,
    setNotifyPopUp,
    tabName,
    isLoading
}:{
  isNotifyPopUp:boolean,
  setNotifyPopUp:(x:boolean)=>any,
  tabName:string,
  isLoading:boolean
} ){
    const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);
    const tabclick = useSelector((state:any) => state.bgvReducer.sidePopUpDocNavTab)
    const dispatch = useDispatch();
    const handle = () =>{
        setNotifyPopUp(!isNotifyPopUp)
    }
    let reason : string;
    let reasonRef = useRef<HTMLTextAreaElement>(null);

    const handleUserNotify = ()=>{
        if(tabclick === 5 ){
            handleNotify(empDataById.id, dispatch, handle, tabclick)
        }
        else{
            if(reasonRef.current){
                reason = reasonRef.current.value
            }
            handleNotify(empDataById.id, dispatch, handle, tabclick,reason)
        }
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-[rgba(3,27,89,.2)] fixed top-0 left-0">
            <div className="bg-[#FFFFFF] p-5 px-10 w-[80%] sm:[50%] lg:w-[50%] space-y-3 rounded-md z-21">
                {isLoading ? <div className="flex w-full h-full justify-center items-center">
                                              <LoaderComp />
                                                 </div> :
                    (
                        <>
                            <div className="flex justify-end">
                                <button className="" onClick={() => setNotifyPopUp(!isNotifyPopUp)}>
                                    <GrFormClose className="flex w-[2rem] h-[2rem]" />
                                </button>
                            </div>
                            <div className="text-[#191919] font-extrabold text-[24px] text-justify">
                                <p>{`Notify the user as "${tabName}" is Insufficient or rejected?`}</p>
                            </div>
                            {tabName !== "Consent" && 
                            <div className="flex flex-col text-[16px]">
                                <label><p className="text-[#313135] ">Add your comments</p></label>
                                <textarea ref={reasonRef} className="p-2 min-h-[150px] cols-50 border-2 border-solid border-[#DEE4EB] text-justify" placeholder="Enter your reasons here" />
                            </div>}
                            <div className="flex justify-end">
                                <button
                                    className=" bg-[#031B59] text-white py-[8px] px-[15px] rounded-[20px] my-2" onClick={handleUserNotify}>
                                    {'Notify'}
                                </button>
                            </div></>
                    )}
            </div>
        </div>
    )
}

export default NotifyPopUp