import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { awsURL } from 'utils/Constants';

export default function Page404() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-[30px] bg-white'>
      <div className='w-[16.25rem] h-[16.25rem]'>
        <img className='w-full h-full' src={`${awsURL}/images/404Image.jpg`} alt="Error Not Found" />
      </div>
      <div className='w-[33rem] flex flex-col gap-2 items-center justify-center'>
        <h5 className='text-2xl font-semibold text-[#191919]'>{t("sorryFound")}</h5>
        <p className='text-[#686868]'>{t("pageRequested")}</p>
      </div>
      <div>
        <button onClick={() => navigate("/")}
          className='w-[9.313rem] h-[3.063rem] flex items-center justify-center rounded-[25px] border-[1.5px]
         border-[#E2E8F0]'>
          Back To Home
        </button>
      </div>
    </div>
  );
}
