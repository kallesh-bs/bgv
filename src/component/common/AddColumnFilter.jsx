import React from "react";
import { useTranslation } from "react-i18next";
import { MdRefresh } from "react-icons/md";
import PropTypes from "prop-types";

function AddColumn({
  setFilter,
  filterTableValue,
  handleClick,
  handleSave,
  handleRefresh,
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`${filterTableValue?.length > 0 ? "h-fit" : "h-[15rem]" }
       w-[16.625rem] bg-white absolute top-[10rem] right-[7.8rem]
      shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] p-4 border-[1px] rounded-md border-[#E2E8F0]] z-20`}
      onMouseEnter={() => setFilter(true)}
      onMouseLeave={() => setFilter(false)}
    >
      <div className={`${filterTableValue?.length > 0 ? "max-h-[20rem]" : "h-[10rem]" }
       w-full  overflow-y-scroll overflow-x-hidden custom_scroll`}>
        {filterTableValue?.length > 0 ? (
          filterTableValue?.map((item, index) => (
            <div
              key={index}
              className="h-[2.25rem] w-[13.313rem] space-x-3 flex items-center"
            >
              <input
                className="rounded-[6px] focus:ring-transparent accent-[#031B59] checked:bg-[#031B59]
              h-[20px] w-[20px]"
                id={index}
                type="checkbox"
                checked={item.isChecked}
                disabled={item.disable}
                value={item.header}
                onChange={handleClick}
              />
              <span
                className={`${
                  item.isChecked ? "text-[#031B59]" : "text-[#191919]"
                }`}
              >
                {item.header}
              </span>
            </div>
          ))
        ) : (
          <div className="h-full w-full space-x-3 flex items-center justify-center text-[#6b6a6a]">
            <span>No Column</span>
          </div>
        )}
      </div>
      <div className="w-full h-fit flex items-center justify-between space-x-3 bg-transparent">
        <button
          className="h-[3.063rem] w-full basis-1/3 flex items-center justify-center
          border-[1.5px] rounded-md enabled:border-[#031B59] enabled:text-[#031B59]
          disabled:border-[#A1A1A1] disabled:text-[#A1A1A1] disabled:opacity-80"
          type="submit"
          onClick={handleRefresh}
          disabled={!filterTableValue?.length > 0 && true}
        >
          <MdRefresh className="h-5 w-5 flex items-center justify-center" />
        </button>
        <button
          className="h-[3.063rem] basis-2/3 p-2 border-[1.5px]  enabled:border-[#031B59]
          enabled:text-[#031B59] disabled:border-[#A1A1A1] disabled:text-[#A1A1A1]
          disabled:opacity-80 font-medium rounded-md"
          type="submit"
          onClick={handleSave}
          disabled={!filterTableValue?.length > 0 && true}
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
}

export default AddColumn;

AddColumn.propTypes = {
  setFilter: PropTypes.any,
  filterTableValue: PropTypes.array,
  handleClick: PropTypes.any,
  handleSave: PropTypes.any,
  handleRefresh: PropTypes.any,
};
