import { t } from "i18next";
import React, { useState , useEffect} from "react";
import PropTypes from "prop-types";

const Consent = ({ setCurrentStep, changetab }) => {

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedChecked = localStorage.getItem('consentChecked');
    if (savedChecked === 'true') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('consentChecked', checked);
  }, [checked]);

  return (
    <div className="p-6  w-full overflow-y-auto no-scrollbar h-full">
        <div className="mt-6">
          <p className="w-[46vw]  text-wrap">
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
      <form>
        <div className="p-2 mt-6 flex gap-8">
          <input
            type="checkbox"
            name="isChecked"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="checkbox"
          />
          <label className="checkbox-label font-bold">
            {t("consentTickBox")}
          </label>
        </div>

        <div className="flex justify-end static">
          <button
            className="mt-10 h-[2.813rem] w-[7.625rem] p-2
              text-gray-500"
              onClick={()=>setCurrentStep(4)}
          >
            {t("back")}
          </button>
          <button
            type="button"
            disabled={!checked}
            className={`mt-10 h-[2.813rem] w-[7.625rem] p-2 rounded-full 
              ${checked ? 'bg-[#23275E] text-white' : 'bg-gray-400 text-gray-700'}`}
          >
            {t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Consent;

Consent.propTypes = {
  setCurrentStep: PropTypes.number,
  identiityData: PropTypes.object,
  changetab: PropTypes.any,
};
