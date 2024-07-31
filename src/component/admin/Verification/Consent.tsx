import React, { useState , useEffect} from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Consent = () => {

  // const [checked, setChecked] = useState(false);
  const {userData } = useSelector((reducer:any)=> reducer.VerificationReducer)

  // useEffect(() => {
  //   const savedChecked = localStorage.getItem('consentChecked');
  //   if (savedChecked === 'true') {
  //     setChecked(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('consentChecked', checked+'');
  // }, [checked]);

  return (
    <div className=" w-full h-full">
        <div>
          <p className="w-[56vw] pt-5 text-sm">
          I here by Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
               like Aldus PageMaker including versions of Lorem Ipsum.
I here by Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
  like Aldus PageMaker including versions of Lorem Ipsum.
I here by Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
 the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      {  <div className="w-full p-[14px_0px_0px_0px] mt-6 flex items-center gap-4">
          <div>
          <input
            type="checkbox"
            name="isChecked"
            checked={false}
            className="checkbox w-[20px] h-[20px] "
            readOnly={true}
          />
          </div>
          <div>
         <div className="w-full text-[#191919] text-base">
            <p>
            I hereby give an undertaking that the data and information given in the application and enclosures are true
             to the best of my knowledge and belief and I
            </p>
         </div>
          </div>
        </div>}
    </div>
  );
};

export default Consent;

Consent.propTypes = {
  setCurrentStep: PropTypes.number,
  identiityData: PropTypes.object,
  changetab: PropTypes.any,
};
