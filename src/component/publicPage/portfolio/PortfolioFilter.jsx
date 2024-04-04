import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdFilterList } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { PORTFOLIO, PortfolioFilterList, filterTableValue } from "./Constant";
import PortfolioChip from "./PortfolioChip";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const PortfolioFilter = ({ setUpdatedPortfolioData }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [portfolioChipData, setPortfolioChipData] = useState([]);
  const [filterTableValueState, setFilterTableValue] =
    useState(filterTableValue);

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
    setOpenOptions(false);
  };

  const { t } = useTranslation();

  const handleClick = (e, bool) => {
    const id = Number(e.target.id);
    const updatedFilterTableValue = filterTableValueState.map((item) =>
      item.id === id ? { ...item, isChecked: bool } : item
    );
    setFilterTableValue(updatedFilterTableValue);
  };

  const handleSave = () => {
    setFilterOpen(false);
    const chipData = filterTableValueState.filter(
      (obj) => obj.isChecked === true
    );
    setPortfolioChipData(chipData);
  };

  const handleFilterNavBarClick = (key) => {
    if (key !== "All") {
      const updatedData = PORTFOLIO.filter(
        (obj) => obj.fields.includes(key) && obj
      );
      setUpdatedPortfolioData(updatedData);
      setSelectedOption(key);
      setOpenOptions(false);
    } else {
      setUpdatedPortfolioData(PORTFOLIO);
      setSelectedOption(key);
      setOpenOptions(false);
    }
  };

  useEffect(() => {
    if (portfolioChipData.length === 0) {
      setUpdatedPortfolioData(PORTFOLIO);
    } else {
      const chipHeader = portfolioChipData.map((item) => item.header);
      const updated = PORTFOLIO.filter((obj) =>
        chipHeader.some((i) => obj.fields.includes(i) && obj)
      );
      setUpdatedPortfolioData(updated);
    }
  }, [portfolioChipData]);

  return (
    <>
      <div className="w-full hidden md:flex justify-center items-center">
        <div
          className="flex w-fit items-center justify-center p-[0.625rem] gap-[1.25rem] border
   rounded-[2.625rem] absolute bg-[#FFF] "
        >
          {PortfolioFilterList.map((obj, index) => (
            <div
              key={index}
              className=" w-full min-h-[2.775rem] gap-[0.375rem]
    flex justify-center items-center py-[0.875rem] px-[2.25rem] text-[#242529] hover:bg-[#F3F6FD]
     hover:font-bold hover:text-[#031B59] rounded-[2.625rem] whitespace-nowrap cursor-pointer"
              onClick={() => handleFilterNavBarClick(obj.key)}
            >
              <p className="text-[1rem]">{obj.name}</p>
            </div>
          ))}
          <div>
            <div
              className=" w-full min-w-[3.375rem]  min-h-[3.375rem] gap-[0.625rem]
     flex justify-center items-center p-[1rem] rounded-[4.25rem] bg-[#031B59]"
              onClick={handleFilterClick}
              style={{ position: "relative" }}
            >
              <MdFilterList color="#FFF" cursor="pointer" size={20} />
            </div>
            {filterOpen && (
              <div
                style={{
                  position: "absolute",
                  right: "1.8rem",
                  top: "4.65rem",
                }}
                className="w-[26.8125rem] bg-[#FFF] flex p-[1.25rem] gap-[1.25rem]
                 absolute right-[1.8rem] top-[4.65rem] z-10 rounded-[10px]
                  shadow-[0px_4px_8px_0px_rgba(0,0,0,0.03),0px_8px_32px_0px_rgba(0,0,0,0.06)]"
                onMouseEnter={() => setFilterOpen(true)}
                onMouseLeave={() => setFilterOpen(false)}
              >
                <div className="flex flex-col w-full ">
                  <h1 className="text-[#646978]">{t("filter_by")}</h1>
                  <div className="grid grid-cols-2">
                    {filterTableValueState.map((item, index) => (
                      <div
                        key={index}
                        className="h-[2.25rem] w-fit flex justify-center gap-[0.75rem] py-[0.5625rem] px-[0.625rem] "
                      >
                        <input
                          className="rounded-[8px] focus:ring-transparent accent-[#031B59]
                checked:bg-[#031B59] h-[20px] w-[20px] cursor-pointer"
                          id={item.id}
                          type="checkbox"
                          checked={item.isChecked}
                          value={item.header}
                          onChange={(e) => handleClick(e, !item.isChecked)}
                        />
                        <span
                          className={`${
                            item.isChecked ? "text-[#031B59]" : "text-[#191919]"
                          }`}
                        >
                          {item.header}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-fit flex justify-end ">
                    <div className="flex justify-center items-center">
                      <div
                        className="w-[2.75rem] py-[0.625rem] px-[0.875rem] cursor-pointer"
                        onClick={() => setFilterTableValue(filterTableValue)}
                      >
                        <MdRefresh size={20} />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-[9.875rem] h-[2.75rem] py-[0.625rem] px-[1.5625rem] bg-[#F3F6FD]"
                          onClick={handleSave}
                        >
                          {t("save")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full md:hidden flex justify-center items-center absolute">
        <div className="relative flex justify-center items-center gap-3 top-[-1.5rem]">
          <div>
            <div
              onClick={() => {
                setOpenOptions(!openOptions);
                setFilterOpen(false);
              }}
              className="flex w-full min-w-[15rem] items-center justify-between p-[0.625rem] gap-[1.25rem] border
            rounded-[2.625rem] bg-[#FFF] drop-shadow-lg"
            >
              <h6>{selectedOption}</h6>
              {openOptions ? (
                <FaAngleUp className="pt-1" />
              ) : (
                <FaAngleDown className="pt-1" />
              )}
            </div>
            <div className="w-full flex justify-center">
              {openOptions && (
                <div
                  style={{ borderRadius: "8px" }}
                  className="w-fit flex flex-col
                border border-solid border-stroke-light rounded-md absolute z-10
            items-start gap-[2px] justify-center mt-[1rem] p-[4px] bg-white drop-shadow-lg"
                >
                  {PortfolioFilterList?.map((option) => (
                    <div
                      style={{ borderRadius: "8px" }}
                      onClick={() => handleFilterNavBarClick(option.key)}
                      className={`w-full px-5 py-3 m-0 ${
                        option.key === selectedOption && "bg-[#F2F6FF]"
                      }
                       hover:bg-[#F2F6FF] cursor-pointer`}
                      key={option.key}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className={`w-[3rem] h-[3rem] gap-[0.625rem]
     flex justify-center items-center rounded-[4.25rem] drop-shadow-lg cursor-pointer
     ${filterOpen ? " bg-[#031B59]" : " bg-[#fff]"}`}
              onClick={handleFilterClick}
              style={{ position: "relative" }}
            >
              <MdFilterList
                color={filterOpen ? "#fff" : "#000"}
                cursor="pointer"
                size={30}
              />
            </div>
            {filterOpen && (
              <div
                className="w-[20rem] right-[0.1rem] bg-[#FFF] flex p-[1.25rem] gap-[1.25rem]
                 absolute top-[3.65rem] z-10"
                onMouseEnter={() => setFilterOpen(true)}
                onMouseLeave={() => setFilterOpen(false)}
              >
                <div className="flex flex-col w-full ">
                  <h1 className="text-[#646978] font-bold">{t("filter_by")}</h1>
                  <div className="grid grid-cols-2">
                    {filterTableValueState.map((item, index) => (
                      <div
                        key={index}
                        className="h-[2.25rem] w-fit flex justify-center items-center
                         gap-[0.75rem] pt-10 py-[1.5625rem] px-[0.625rem] "
                      >
                        <input
                          className="rounded-[8px] focus:ring-transparent accent-[#031B59]
                checked:bg-[#031B59] h-[20px] w-fit cursor-pointer"
                          id={item.id}
                          type="checkbox"
                          checked={item.isChecked}
                          value={item.header}
                          onChange={(e) => handleClick(e, !item.isChecked)}
                        />
                        <span
                          className={`${
                            item.isChecked ? "text-[#031B59]" : "text-[#191919]"
                          }`}
                        >
                          {item.header}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-fit flex justify-end pt-3">
                    <div className="flex justify-center items-center">
                      <div
                        className="w-[2.75rem] py-[0.625rem] px-[0.875rem] cursor-pointer"
                        onClick={() => setFilterTableValue(filterTableValue)}
                      >
                        <MdRefresh size={20} />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-[9.875rem] h-[2.75rem] py-[0.625rem] px-[1.5625rem] rounded-lg bg-[#F3F6FD]"
                          onClick={handleSave}
                        >
                          {t("save")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <PortfolioChip
        portfolioChipData={portfolioChipData}
        setPortfolioChipData={setPortfolioChipData}
        setFilterTableValue={setFilterTableValue}
        filterTableValueState={filterTableValueState}
      />
    </>
  );
};

export default PortfolioFilter;

PortfolioFilter.propTypes = {
  setUpdatedPortfolioData: PropTypes.func,
};
