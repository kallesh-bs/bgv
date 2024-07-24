import React, { useState, useTransition } from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { MdContacts, MdOutlineAlternateEmail, MdOutlineCameraAlt } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import ProfileAvtar from './ProfileAvtar';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
    const [img , setImg]=useState()
    const [hover , setHover] = useState(false)
  const user = useSelector((state) => state?.profileReducer?.profileData);


  return (
    <div
    className="w-[100%] h-fit flex flex-col
      rounded-[16px] shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] justify-between  p-[10px_0px_10px_0px]"
    >
    <div className="flex justify-between p-3 ">
      <div className="flex lg:space-x-3 md:space-x-1">
      <div
                    className="w-[12rem] h-[8rem] text-6xl text-white flex items-center
                      justify-center flex-wrap md:hidden sm:hidden lg:hidden xl:flex"
                  >
                    {user?.profile_picture_url ? (
                      <div
                        onMouseEnter={() => {
                          setHover(true);
                        }}
                        onMouseLeave={() => {
                          setHover(false);
                        }}
                        onClick={() => {
                          setHover(false);
                        }}
                        className="rounded-[50%]"
                      >
                        <label
                          className="h-full w-full cursor-pointer flex items-center justify-center rounded-full"
                          htmlFor="company_profile"
                        >
                          <img
                            className="h-[7rem] w-[7rem] rounded-[50%] relative "
                            src={user?.profile_picture_url}
                            alt="profile"
                          />
                          {hover && (
                            <div
                              className="absolute bg-slate-400 bg-opacity-70 h-[7rem] w-[7rem] flex
                                justify-center items-center rounded-full text-[#F2F6FF]"
                            >
                              <div className="flex flex-col items-center justify-center text-[1rem]">
                                <div>
                                  <MdOutlineCameraAlt className="h-[1.25rem] w-[1.25rem]" />
                                </div>
                                <div>CHANGE</div>
                                <div>PROFILE</div>
                              </div>
                            </div>
                          )}
                          <input
                            className="hidden"
                            type="file"
                            name="company_profile"
                            id="company_profile"
                            onChange={(e) => {
                              setImg(e.target.files[0]);
                            }}
                          />
                        </label>
                      </div>
                    ) : (
                      <div className="relative w-[7rem] h-[7rem]">
                        <ProfileAvtar
                          name={user?.full_name ? user?.full_name : "Employee"}
                          width="7rem"
                          height="7rem"
                        />
                        <div className="absolute  bottom-0 right-0 flex items-end justify-end z-20">
                          <label
                            className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-full bg-white"
                            htmlFor="company_profile"
                          >
                            <MdOutlineCameraAlt
                              className="text-[#031B59] w-full h-full p-2
                            hover:scale-110 transition-transform"
                            />
                          </label>
                          <input
                            className="hidden"
                            type="file"
                            name="company_profile"
                            id="company_profile"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                        </div>
                      </div>
                    )}
                  </div>
        <div className="flex flex-col justify-between flex-wrap ">
          <div className="flex justify-between  flex-wrap">
            <div className="flex flex-col items-center justify-between flex-wrap">
              <div className="w-full h-fit flex gap-5 flex-wrap ">
                <h1 className="text-3xl font-semibold capitalize">
                  Employee Name
                </h1>
                <div className="flex items-center justify-center">
                  <div
                    className="h-fit w-full bg-[#75C150] text-white
        text-md  rounded-md flex-wrap px-2 py-1"
                  >
                    { "IN" }
                  </div>
                </div>
                <div className="flex items-center justify-center w-fit flex-wrap ">
                  <div
                    className="w-fit h-fit bg-[#64C3D1] text-white
        text-md rounded-md px-2 py-1 flex-wrap capitalize"
                  >
                    {"Remote"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-[#A1A1A1]">Business Unit</h2>
                <h1 className="text-[#191919]">
                  Deeporion Technology
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#A1A1A1]">Department</h2>
                <h1 className="text-[#191919]">Designer</h1>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#A1A1A1]">ReportingManager</h2>
                <h1 className="text-[#191919]">Love Kumar</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className=" bg-[rgb(3,27,89)] w-[100%] h-[40px] lg:space-x-6
      md:space-x-3 flex rounded-[0px_0px_16px_16px]
    lg:p-[10px_21px_10px_65px] md:p-[10px_21px_10px_45px]"
    >
      <div className="flex justify-center items-center gap-2  flex-wrap text-[white] ">
        <RiContactsLine className="text-[white] size-5" />
    Software Developer Trainne
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white]">
        <MdOutlineAlternateEmail className="text-[white] size-5 " />
        employee@gmail.com
    
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white] ">
        <FiPhone className="text-[white] size-5" />
       9878675645
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white]">
        <CiLocationOn className="text-[white] size-5" />
         Rj
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white]">
        <MdContacts className="text-[white] size-5" />
         DO-0200
      </div>
    </div>
    </div>
  )
}

export default ProfileCard
