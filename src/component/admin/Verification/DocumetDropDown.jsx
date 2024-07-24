import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import VerficationDetails from './VerificationDetails';
import { FaArrowLeftLong } from "react-icons/fa6";


const DocumetDropDown = () => {
    const [handleDropDown , setHandleDropDown]=useState(false)
  return (
   <div className={`rounded-xl ${handleDropDown && "border"} h-full mt-2   `}>
    <div className={`w-full bg-${!handleDropDown && "[#031B59]  text-white "} text-[#031B59] p-5 items-center rounded-xl   flex justify-between`}>
         <div className={`flex gap-2 items-center font-semibold text-lg `}>
            {handleDropDown && <div className='cursor-pointer text-[#A1A1A1] text-xl' onClick={()=>setHandleDropDown(!handleDropDown) }>
            <FaArrowLeftLong/>
            </div> }
         Documents 
         </div>
         {!handleDropDown && <div 
         className=' cursor-pointer'
         onClick={()=> setHandleDropDown(true)}>
            <FaChevronRight/>
         </div>}
         {handleDropDown && <button className=' font-semibold text-lg'>Notify</button>}
      </div>
      <div className='mt-2 h-full px-4 '>
      {handleDropDown &&
        <VerficationDetails/>
       }
      </div>
   </div>
  )
}

export default DocumetDropDown
