import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import VerficationDetails from './VerificationDetails';
import { FaArrowLeftLong } from "react-icons/fa6";


const DocumetDropDown = () => {
    const [handleDropDown , setHandleDropDown]=useState(false)
  return (
   <div className={`rounded-xl ${handleDropDown && "border"} h-full mt-2  px-4 `}>
    <div className={`w-full bg-${!handleDropDown && "[#031B59]  text-white "} p-3 items-center rounded-xl   flex justify-between`}>
         <div className='flex gap-2 items-center'>
            {handleDropDown && <div className='cursor-pointer' onClick={()=>setHandleDropDown(!handleDropDown) }>
            <FaArrowLeftLong/>
            </div> }
         Documents 
         </div>
         {!handleDropDown && <div 
         className='text-[#A1A1A1] cursor-pointer'
         onClick={()=> setHandleDropDown(true)}>
            <FaChevronRight/>
         </div>}
      </div>
      <div className='mt-2 h-full'>
      {handleDropDown &&
        <VerficationDetails/>
       }
      </div>
   </div>
  )
}

export default DocumetDropDown
