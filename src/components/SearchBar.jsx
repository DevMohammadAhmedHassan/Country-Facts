import React from "react";

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        className="w-80 h-10 p-1 border-2 border-[#615FFF] rounded-l-md focus:outline-none"
        type="text"
        placeholder="Enter Country Name"
        // value={""}
      />
      <button className="w-25 h-10 text-white bg-[#615FFF] cursor-pointer rounded-r-md hover:bg-[#3734db] transition-all duration-300">
        Search
      </button>
    </div>
  );
};
export default SearchBar;
