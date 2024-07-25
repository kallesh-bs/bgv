import { useState } from "react"
import { GoCrossReference, GoVerified, GoXCircle } from "react-icons/go";
import { GrCircleQuestion, GrMore } from "react-icons/gr"
import { RxCross2 } from "react-icons/rx";

function ExtraActions({ docStatus, setDocStatus }) {
    const [isExtraActionsPopUp, setExtraActionPopUp] = useState(false);
    return (
        <div className="flex gap-x-5 items-center relative">
            <div className={` ${docStatus === 'Verify' ? 'bg-green-500 text-white' : docStatus === 'Reject' ? 'bg-red-500 text-white' : docStatus === 'Insufficent' ? 'bg-yellow-500 text-white' : ('bg-[#F1F5F9] text-[#031B59]')} pl-1 pr-2 rounded-2xl flex items-center gap-x-1 justify-between`}>
                {docStatus === 'Verify' ? (<div className="p-2"><GoVerified /></div>) : docStatus === 'Reject' ? (<div className="p-2"><GoXCircle /></div>) : docStatus === 'Insufficent' ? (<div className="p-2"><GrCircleQuestion /></div>) : ('')}
                <div>{docStatus}</div>
            </div>
            <div className={`absolute bg-white z-10 border w-[270px] top-10 right-[0px] rounded-md px-6 py-2 mt-2 space-y-2 ${isExtraActionsPopUp ? '' : 'hidden'}`}>
                <div className="cursor-pointer" onClick={() => {
                    setDocStatus("Verify")
                    setExtraActionPopUp(false)}}>Verify</div>
                <div className="cursor-pointer" onClick={() => {setDocStatus("Insufficent")
                     setExtraActionPopUp(false)
                }}>Insufficent</div>
                <div className="cursor-pointer" onClick={() =>{ 
                    setDocStatus("Reject")
                    setExtraActionPopUp(false)}}>Reject</div>
                <div className="cursor-pointer" >Update/Add new document</div>
            </div>
            <div className="cursor-pointer" onClick={() => setExtraActionPopUp(!isExtraActionsPopUp)}>
                <GrMore />
            </div>
        </div>
    )
}

export default ExtraActions