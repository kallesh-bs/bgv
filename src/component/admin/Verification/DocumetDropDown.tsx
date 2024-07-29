import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import VerficationDetails from './VerificationDetails';
import { FaArrowLeftLong } from "react-icons/fa6";
import NotifyPopUp from './NotifyPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotify } from 'redux/appThunk/Admin/Verfication';
import { setSidePopUpNavTab } from 'redux/actions/action';


const DocumetDropDown = ({userId}:{userId:any}) => {
   const [isNotifyPopUp, setNotifyPopUp] = useState(false);
   const [handleDropDown, setHandleDropDown] = useState(false)
   const tabclick = useSelector((state:any) => state.bgvReducer.sidePopUpDocNavTab)
   // const userData = useSelector((state:any) => state.bgvReducer.empDataById)
   const empDataById = useSelector((state:any) => state.bgvReducer.employeeDataById);
   // console.log(tabclick);

   const dispatch = useDispatch()
   useEffect(()=>{
      if(Object.keys(empDataById).length !== 13){
         dispatch(setSidePopUpNavTab(5))
      }
   },[setSidePopUpNavTab]);
   
   const [isLoading , setIsLoading]=useState(false)

   function sendConsetNotify() {
      // dispatch(sendNotify(userData?.userData?.id , setIsLoading , setNotifyPopUp))
   }

   return (
      <div className={`rounded-xl ${handleDropDown && "border"} h-full mt-2  `}>
         <div className={`w-full bg-${!handleDropDown && "[#031B59]  text-white "} p-3 px-4 items-center rounded-xl   flex justify-between`}>
            <div className='flex gap-2 items-center'>
               {handleDropDown && <div className='cursor-pointer' onClick={() => setHandleDropDown(!handleDropDown)}>
                  <FaArrowLeftLong />
               </div>}
               Documents
            </div>
            {!handleDropDown && <div
               className='text-white cursor-pointer'
               onClick={() => setHandleDropDown(true)}>
               <FaChevronRight />
            </div>}
            <div className={`text-[#031B59] font-semibold cursor-pointer ${!handleDropDown ? 'hidden' : ''} `} onClick={() => setNotifyPopUp(!isNotifyPopUp)}>Notify</div>
            {isNotifyPopUp ? <NotifyPopUp 
            isLoading={isLoading}
            isNotifyPopUp={isNotifyPopUp} 
            setNotifyPopUp={setNotifyPopUp} 
            handleNotify={sendConsetNotify}

            tabName={tabclick === 1 ?'Identify Check': tabclick === 2 ? 'Education check' : tabclick === 3 ? 'Address Check': tabclick === 4 ? 'Employment History':'Consent'} /> : ''}
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
