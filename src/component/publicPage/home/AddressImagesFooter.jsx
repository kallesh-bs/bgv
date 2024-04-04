import React from 'react';
import { awsURL } from 'utils/Constants';

const branchName = [
  {
    id: 1,
    img: `${awsURL}/images/jaipurAddressImg.webp`,
    alt: "Jaipur",
    locationName: "Jaipur, India",
    address: `8/266, behind UDB Corporate Tower, Malviya Nagar, Jaipur, Rajasthan 302017`,
  },
  {
    id: 2,
    img: `${awsURL}/images/puneAddressImg.webp`,
    alt: "Pune",
    locationName: "Pune, India",
    address:
    `4th floor, 402,403 Geras Imperium Rise, Baner Mahalunge Road, Near Wipro Circle,
     Hinjewadi Phase II, Maharashtra, Pune 411057`,
  },
  {
    id: 3,
    img: `${awsURL}/images/indoreAddressImg.webp`,
    alt: "Indore",
    locationName: "Indore , India",
    address: `UG-8, shri vardhan complex, RNT marg, near madhumilan Square, Indore (M.P) - 452001`,
  },
  {
    id: 4,
    img: `${awsURL}/images/bangloreAddressImg.webp`,
    alt: "Banglore",
    locationName: " Bangalore, India",
    address:
    `A block, 2nd Floor, Awfis Building, Dayananda Sagar University Kudlu Gate,
     Hongasandra Village Begur Hobli, Hosur Rd, Bengaluru, Karnataka 560068`,
  },
];

export default function AddressImagesFooter() {
  return (
    <div className="background-gradient-footer font-Raleway w-full flex justify-center items-center">
      <div className="w-fit grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 ">
        {branchName.map((obj) => (
          <div key={obj.id} className="relative w-full h-full max-w-[22rem] text-center">
            <img className='max-w-[22rem] w-full h-[12.938rem]' src={obj.img} alt={obj.alt} />
            <div className='w-full h-full group group-hover:bg-black/50 absolute top-0 left-0 flex items-base
             justiy-center'>
              <div className='w-full h-full px-[9px] py-2 flex flex-col gap-2 justify-end '>
                <p className="text-lg text-white font-semibold leading-[26px]">{obj.locationName}</p>
                <p className='leading-[17px] text-white hidden group-hover:block '>{obj.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
