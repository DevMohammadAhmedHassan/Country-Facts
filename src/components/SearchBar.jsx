import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    if (input.trim() === "") {
      console.log("Please enter a country name");
      alert("Please enter a country name");
      setInput("");
      return;
    }
    props.fetchCountry(input);
    console.log(input + " sent");
    setInput("");
  };
  return (
    <div className="flex">
      <input
        className="w-80 h-10 p-1 border-2 border-[#615FFF] rounded-l-md focus:outline-none"
        type="text"
        placeholder="Enter Country Name"
        value={input}
        onChange={inputHandler}
        
        // press Enter key
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitHandler();
          }
        }}
      />
      <button
        className="w-25 h-10 text-white bg-[#615FFF] cursor-pointer rounded-r-md hover:bg-[#3734db] transition-all duration-300"
        onClick={submitHandler}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
