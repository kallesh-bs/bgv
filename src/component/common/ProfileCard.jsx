import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineAlternateEmail, MdOutlineCameraAlt } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import ProfileAvtar from './ProfileAvtar';

const ProfileCard = ({userData }) => {
    const [img , setImg]=useState()
    const [hover , setHover] = useState(false)

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
                    {userData?.userData?.profile_picture_url ? (
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
                          className="h-full w-full relative cursor-pointer flex items-center justify-center rounded-full"
                          htmlFor="company_profile"
                        >
                          <img
                            className=" h-[7rem] w-[7rem] rounded-[50%] relative "
                            src={userData?.userData?.profile_picture_url}
                            alt="profile"
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
                          name={userData?.userData?.full_name ? userData?.userData?.full_name : "Employee"}
                          width="7rem"
                          height="7rem"
                          src={img}
                        />
                        <div className="absolute  bottom-0 right-0 flex items-end justify-end ">
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
                  {userData?.userData?.full_name ? userData?.userData?.full_name :"Employee" }
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
                <h1 className="text-[#191919]">{userData?.userData.department ? userData?.userData.department : "- - -"}</h1>
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
        {userData?.userData.email ? userData?.userData.email : "- - -" }
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white] ">
        <FiPhone className="text-[white] size-5" />
      {userData?.userData?.phone_number ? userData?.userData?.phone_number : " - - -"}
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white]">
        <CiLocationOn className="text-[white] size-5" />
         {userData?.userData?.city ? userData?.userData?.city : " - - -"}
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap text-[white]">
       
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M6.39175 6.49132C5.85334 6.49132 5.32703 6.33167 4.87936 6.03254C4.4317 5.73342 4.08278 5.30827 3.87674 4.81085C3.67071 4.31343 3.6168 3.76608 3.72183 3.23802C3.82687 2.70996 4.08614 2.22491 4.46685 1.8442C4.84756 1.46349 5.33261 1.20422 5.86067 1.09918C6.38873 0.994145 6.93608 1.04805 7.4335 1.25409C7.93092 1.46013 8.35607 1.80905 8.65519 2.25671C8.95432 2.70438 9.11397 3.23069 9.11397 3.7691C9.11397 4.49108 8.82717 5.18348 8.31665 5.694C7.80613 6.20452 7.11373 6.49132 6.39175 6.49132ZM6.39175 1.85577C6.00717 1.85577 5.63124 1.9698 5.31147 2.18346C4.99171 2.39712 4.74249 2.7008 4.59532 3.0561C4.44815 3.4114 4.40964 3.80237 4.48467 4.17955C4.55969 4.55674 4.74488 4.9032 5.01682 5.17514C5.28875 5.44708 5.63522 5.63227 6.01241 5.70729C6.38959 5.78232 6.78055 5.74381 7.13586 5.59664C7.49116 5.44947 7.79484 5.20025 8.0085 4.88049C8.22215 4.56072 8.33619 4.18478 8.33619 3.80021C8.33619 3.54486 8.2859 3.29201 8.18818 3.0561C8.09046 2.82019 7.94724 2.60584 7.76668 2.42528C7.58612 2.24472 7.37177 2.10149 7.13586 2.00378C6.89994 1.90606 6.6471 1.85577 6.39175 1.85577ZM8.55786 6.96188C6.45336 6.48832 4.2517 6.71641 2.28897 7.61132C2.01904 7.74026 1.7913 7.94323 1.63225 8.19659C1.47321 8.44996 1.38942 8.74329 1.39064 9.04243V11.3563C1.39064 11.4074 1.4007 11.458 1.42024 11.5051C1.43978 11.5523 1.46843 11.5952 1.50454 11.6313C1.54065 11.6674 1.58352 11.6961 1.63071 11.7156C1.67789 11.7352 1.72846 11.7452 1.77953 11.7452C1.8306 11.7452 1.88117 11.7352 1.92835 11.7156C1.97553 11.6961 2.0184 11.6674 2.05451 11.6313C2.09062 11.5952 2.11927 11.5523 2.13881 11.5051C2.15836 11.458 2.16842 11.4074 2.16842 11.3563V9.04243C2.16503 8.89104 2.20591 8.74195 2.28605 8.61346C2.36618 8.48497 2.48208 8.38266 2.61953 8.3191C3.80185 7.77318 5.08948 7.49309 6.39175 7.49854C7.12143 7.49761 7.84861 7.58378 8.55786 7.75521V6.96188ZM8.6123 10.6602H11.0001V11.2047H8.6123V10.6602Z" fill="white"/>
<path d="M12.9038 8.35118H10.8932V9.12896H12.5149V12.384H7.00434V9.12896H9.45434V9.29229C9.45434 9.39543 9.49531 9.49435 9.56824 9.56728C9.64117 9.64021 9.74009 9.68118 9.84323 9.68118C9.94637 9.68118 10.0453 9.64021 10.1182 9.56728C10.1911 9.49435 10.2321 9.39543 10.2321 9.29229V7.77951C10.2321 7.67637 10.1911 7.57746 10.1182 7.50453C10.0453 7.4316 9.94637 7.39062 9.84323 7.39062C9.74009 7.39062 9.64117 7.4316 9.56824 7.50453C9.49531 7.57746 9.45434 7.67637 9.45434 7.77951V8.35118H6.61545C6.51231 8.35118 6.4134 8.39215 6.34047 8.46508C6.26753 8.53801 6.22656 8.63693 6.22656 8.74007V12.7728C6.22656 12.876 6.26753 12.9749 6.34047 13.0478C6.4134 13.1208 6.51231 13.1617 6.61545 13.1617H12.9038C13.0069 13.1617 13.1058 13.1208 13.1788 13.0478C13.2517 12.9749 13.2927 12.876 13.2927 12.7728V8.74007C13.2927 8.63693 13.2517 8.53801 13.1788 8.46508C13.1058 8.39215 13.0069 8.35118 12.9038 8.35118Z" fill="white"/>
</svg>
         {userData?.userData?.emp_code ? userData?.userData?.emp_code : " - - -"}
      </div>
    </div>
    </div>
  )
}

export default ProfileCard
