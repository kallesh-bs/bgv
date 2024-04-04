import React, { Fragment } from 'react';
import SectionHeadings from '../home/SectionHeadings';
import { ServicesPageData } from '../Constants';
import { useTranslation } from 'react-i18next';

const ProgressCard = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full h-fit px-[30px] lg:px-[8.44rem] py-[5.12rem] flex flex-col items-center justify-center
     gap-[2.88rem] bg-[#f3f6fa]'>
      {
        ServicesPageData.map((item, index) =>
          window.location.pathname.includes(item.path) && (
            <Fragment key={index}>
              <div className='w-full flex justify-center'>
                <SectionHeadings
                  headingPart1={`${t(item.progressCardHeading1)}`}
                  headingPart2={`${t(item.progressCardHeading2)}`}
                  subHeading={`${t(item.progressSubHeading)}`}
                />
              </div >
              <div className='w-full flex justify-center'>
                <div className='w-full h-fit flex flex-wrap justify-center gap-[1.88rem]'>
                  {
                    item.data.map((obj, index) => {
                      return (
                        <div key={index} className='cardData'>
                          <div className='w-[16.875rem] m-[1px] h-[18.25rem]
                           bg-[#ffffff] flex justify-center items-center
                         rounded-[12px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]'>
                            <div className='w-full h-full flex items-center flex-col px-5 py-10 justify-center'>
                              <div className='flex justify-center'>
                                <div className='progressicon w-[80px] h-[80px] rounded-[50%] bg-[#F3F6FD]
                                flex justify-center
                               items-center'>
                                  <obj.icon />
                                </div>
                              </div>
                              <div className='flex flex-col gap-4 text-center'>
                                <p className='text-[20px] text-[#031B59] fnt-semibold'>
                                  {`${t(obj.name)}`}</p>
                                <p className='cardheading text-[16px] pt-[10px] pr-[20px] pl-[20px]'>
                                  {`${t(obj.lastheading)}`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </Fragment>
          )
        )}
    </div>

  );
};

export default ProgressCard;
