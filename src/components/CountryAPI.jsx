import React from "react";

const CountryAPI = () => {
  asreturn (
    <div className="bg-amber-400 p-5 text-center flex flex-col items-center">
      <img
        className="w-90 border-2 h-60 object-cover mb-5"
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/3840px-Flag_of_Pakistan.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
        alt="Flag"
      />
      <div>
        <h1 className="text-4xl font-bold">Name</h1>
        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Capital</span>
          <span>Capital</span>
        </p>

        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Currency</span>
          <span>Currency</span>
        </p>

        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Region</span>
          <span>Region</span>
        </p>

        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Language</span>
          <span>Language</span>
        </p>
      </div>
    </div>
  );
};

export default CountryAPI;
