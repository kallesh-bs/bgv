import LoaderComp from "component/loader/LoaderComp"
import { GrFormClose } from "react-icons/gr"

function NotifyPopUp({
    isNotifyPopUp,
    setNotifyPopUp,
    tabName,
    handleNotify,
    isLoading
}) {
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
                            {tabName !== "Conset" && <div className="flex flex-col text-[16px]">
                                <label><p className="text-[#313135] ">Add your comments</p></label>
                                <textarea className="p-2 min-h-[150px] cols-50 border-2 border-solid border-[#DEE4EB] text-justify" placeholder="Enter your reasons here" />
                            </div>}
                            <div className="flex justify-end">
                                <button
                                    onClick={handleNotify}
                                    className=" bg-[#031B59] text-white py-[8px] px-[15px] rounded-[20px] my-2">
                                    {'Notify'}
                                </button>
                            </div></>
                    )}
            </div>
        </div>
    )
}

export default NotifyPopUp