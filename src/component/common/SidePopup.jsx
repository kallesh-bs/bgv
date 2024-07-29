import LoaderComp from 'component/loader/LoaderComp'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const SidePopup = ({children , handleCancel , grandChild , isLoading}) => {
  return (
    <div>
        <div
      className="w-full h-full flex items-center
justify-end fixed top-0 left-0 z-30 bg-[rgba(3,27,89,.2)] 
transitionRight"
    >
      <div
        className=" w-[60vw] h-full bg-white flex flex-col 
  shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] px-5 py-3"
      >
        <div 
      className='h-16 flex justify-end items-center   w-full '
      onClick={()=> handleCancel(false)}
      >
      <div className='cursor-pointer '>
      <RxCross1 />
      </div>
      </div>
     {!isLoading ?  (
  <div>
     {children}
     {grandChild}
  </div>):
   <div className="flex w-full h-full justify-center items-center">
   <LoaderComp />
 </div> }
      </div>
    </div>
    </div>
  )
}

export default SidePopup
