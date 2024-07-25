import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Search({ searchItem, setSearchItem, currentResource }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef();

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchItem("");
    }
  };

  if (!currentResource?.viewAll) {
    return null;
  }

  return (
    <div className="">
      {searchOpen ? (
        <div className=" flex rounded-[2.5rem] border-[1.5px] border-[#E2E8F0] searchRight">
          <input
            ref={searchRef}
            placeholder="Search Name"
            className="outline-none lg:w-[11.5rem] md:w-[8.5rem] w-[10.5rem]
            h-[2.8rem] p-2 border-none rounded-[2.5rem]"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button
            className="px-2 py-1"
            onClick={() => {
              setSearchOpen(false);
              setSearchItem("");
            }}
          >
            <IoClose className="w-[1rem] h-[1rem]  " />
          </button>
        </div>
      ) : (
        <div
          className={`flex items-center justify-center p-2 text-[#A1A1A1] 
          cursor-pointer rounded-[2.5rem] border-[1.5px] border-[#E2E8F0]`}
          onClick={handleSearchClick}
        >
          <GoSearch className="w-[1.575rem] h-[1.575rem]" />
        </div>
      )}
    </div>
  );
}

export default Search;

Search.propTypes = {
  searchItem: PropTypes.string,
  setSearchItem: PropTypes.func,
  currentResource: PropTypes.object,
};
