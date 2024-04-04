import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const PortfolioChip = ({
  portfolioChipData,
  setPortfolioChipData,
  setFilterTableValue,
  filterTableValueState,
}) => {
  const handleRemoveClick = (removeId) => {
    const updatedData = portfolioChipData.filter((obj) => obj.id !== removeId);
    setPortfolioChipData(updatedData);
    const id = Number(removeId);
    const updatedFilterTableValue = filterTableValueState.map((item) =>
      item.id === id ? { ...item, isChecked: false } : item
    );
    setFilterTableValue(updatedFilterTableValue);
  };

  return (
    <>
      {portfolioChipData.length > 0 && (
        <div className="gap-[10px] w-full justify-center flex mt-[3.5rem] flex-wrap">
          {portfolioChipData.map((obj, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-[#031B59] text-white h-[2rem]
                   p-[0.95rem] rounded-[1.625rem] gap-1 text-nowrap"
            >
              <h1>{obj.header}</h1>
              <div
                className="cursor-pointer"
                onClick={() => handleRemoveClick(obj.id)}
              >
                <IoCloseSharp />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PortfolioChip;

PortfolioChip.propTypes = {
  portfolioChipData: PropTypes.array,
  setPortfolioChipData: PropTypes.func,
  setFilterTableValue: PropTypes.func,
  filterTableValueState: PropTypes.array,
};
