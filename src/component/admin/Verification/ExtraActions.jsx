import { useState } from "react"
import { GoCrossReference, GoVerified, GoXCircle } from "react-icons/go";
import { GrCircleQuestion, GrMore } from "react-icons/gr"
import { RxCross2 } from "react-icons/rx";

function ExtraActions({ docStatus, setDocStatus }) {
    const [isExtraActionsPopUp, setExtraActionPopUp] = useState(true);
    return (
        <div className="flex gap-x-5 items-center relative">
            <div className={` ${docStatus === 'Verify' ? 'bg-green-500 text-white' : docStatus === 'Reject' ? 'bg-red-500 text-white' : docStatus === 'Insufficent' ? 'bg-yellow-500 text-white' : ('bg-[#F1F5F9] text-[#031B59]')} pl-1 pr-2 rounded-2xl flex items-center gap-x-1 justify-between`}>
                {docStatus === 'Verify' ? (<div className=""><GoVerified /></div>) : docStatus === 'Reject' ? (<div><GoXCircle /></div>) : docStatus === 'Insufficent' ? (<div><GrCircleQuestion /></div>) : ('')}
                <div>{docStatus}</div>
            </div>
            <div className={`absolute bg-[#DEE4EB] w-[250px] top-10 right-[0px] rounded-md px-6 py-2 mt-2 space-y-2 ${isExtraActionsPopUp ? '' : 'hidden'}`}>
                <div className="cursor-pointer" onClick={() => setDocStatus("Verify")}>Verify</div>
                <div className="cursor-pointer" onClick={() => setDocStatus("Insufficent")}>Insufficent</div>
                <div className="cursor-pointer" onClick={() => setDocStatus("Reject")}>Reject</div>
                <div className="cursor-pointer" >Update/Add new document</div>
            </div>
            <div className="cursor-pointer" onClick={() => setExtraActionPopUp(!isExtraActionsPopUp)}>
                <GrMore />
            </div>
        </div>
    )
}

export default ExtraActions