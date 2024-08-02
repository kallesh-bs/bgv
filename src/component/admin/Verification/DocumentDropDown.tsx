import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import VerficationDetails from './VerificationDetails';
import { FaArrowLeftLong } from "react-icons/fa6";
import NotifyPopUp from './NotifyPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { setSidePopUpNavTab } from 'redux/actions/action';
import { VerificationSidePopUpNavTabName } from './types';


const DocumetDropDown = () => {
   const [isNotifyPopUp, setNotifyPopUp] = useState(false);
   const [handleDropDown, setHandleDropDown] = useState(false)
   const tabclick = useSelector((state:any) => state.bgvReducer.sidePopUpDocNavTab)
   const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);

   const dispatch = useDispatch()
   useEffect(()=>{
      if(empDataById){
         if(Object.keys(empDataById).length !== 13){
            dispatch(setSidePopUpNavTab(5))
         }
      }
   },[setSidePopUpNavTab]);
   
   const [isLoading , setIsLoading]=useState(false)

   // const function

   return (
      <div className={`rounded-xl ${handleDropDown && "border"} h-full mt-2  `}>
         <div className={`w-full bg-${!handleDropDown && "[#031B59]  text-white "} p-3 px-4 items-center rounded-xl   flex justify-between`}>
            <div className='flex gap-2 items-center'>
               {handleDropDown && 
                  <div className='cursor-pointer' data-testid="leftArraowHandleDropDown" onClick={() => setHandleDropDown(!handleDropDown)}>
                     <FaArrowLeftLong />
                  </div>
               }
               Documents
            </div>
            {!handleDropDown && <div className='text-white cursor-pointer' data-testid="RightArraowHandleDropDown" onClick={() => setHandleDropDown(true)}>
               <FaChevronRight />
            </div>}
            <div className={`text-[#031B59] font-semibold cursor-pointer ${!handleDropDown ? 'hidden' : ''} `} data-testid="notifyPopUpbtn" onClick={() => setNotifyPopUp(!isNotifyPopUp)}>Notify</div>
            {isNotifyPopUp ? <NotifyPopUp 
               isLoading={isLoading}
               isNotifyPopUp={isNotifyPopUp} 
               setNotifyPopUp={setNotifyPopUp} 
               tabName={tabclick === 1 ? VerificationSidePopUpNavTabName.IDENTITY_CHECK_TAB : tabclick === 2 ? VerificationSidePopUpNavTabName.EDUCATION_CHECK_TAB : tabclick === 3 ? VerificationSidePopUpNavTabName.ADDRESS_CHECK_TAB : tabclick === 4 ? VerificationSidePopUpNavTabName.EMPLOYEMENT_HISTORY_CHECK_TAB : VerificationSidePopUpNavTabName.CONSENT_TAB} /> 
            : ''
            }
         </div>
         <div className='mt-2 h-full px-4'>
            {handleDropDown &&
               <VerficationDetails />
            }
         </div>
      </div> 
   )
}

export default DocumetDropDown
