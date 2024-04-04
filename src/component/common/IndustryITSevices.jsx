import { IndustryPagedata } from '../../utils/constant/industrydata';
import SectionHeadings from 'component/publicPage/home/SectionHeadings';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ComponentWrapper from './ComponentWrapper';

const IndustryITSevices = () => {
  const { t } = useTranslation();

  return (
    <ComponentWrapper bgColor="color" >
      <div className='w-full flex'>
        {
          IndustryPagedata.map((item, index) =>
            window.location.pathname.includes(item.path) && (
              <div key={index} className='w-full flex flex-col gap-[46px]'>
                <div className='w-full flex justify-center'>
                  <SectionHeadings
                    headingPart1={`${t(item.IndustryHeading1)}`}
                    headingPart2={`${t(item.IndustryHeading2)}`}
                    subHeading={`${t(item.IndustrySubheading)}`}
                  />
                </div >
                <div key={index} className='w-full flex flex-wrap pt-[3rem] lg:pt-0 gap-[43px] justify-center'>
                  {
                    item.data.map((data, i) => (
                      <div key={i}>
                        <div className='relative w-full'>
                          <div className=' p-[9.5px] border border-[#ED6E0F] w-[280px] h-[187px] flex justify-center
                       items-center'>
                            <div className='absolute -top-[1.7rem] left-[2.3rem]'>
                              <img src={data.icon} />
                            </div>
                            <div className='flex flex-col gap-2'>
                              <span className='text-[#031B59] font-semibold w-full text-center text-[20px]'>
                                {`${t(data.name)}`}
                              </span>
                              <span className=' w-full text-center'>{`${t(data.subHeading)}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          )
        }
      </div >
    </ComponentWrapper>
  );
};

export default IndustryITSevices;
