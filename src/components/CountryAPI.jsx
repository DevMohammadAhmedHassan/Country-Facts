import React from "react";

const CountryAPI = (props) => {

  // conditional rendering
  if (props.country === null) {
    return null;
  }

  return (
    <div className="bg-[#3835db52] p-5 text-center flex flex-col items-center rounded-md shadow-lg shadow-[#3835db52]">
      <img
        className="w-90 border-2 h-60 object-cover mb-5"
        src={props.country.flags.png}
        alt="Flag"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-90 text-center mb-5">
          {props.country.name}
        </h1>
        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Capital</span>
          <span>{props.country.capital}</span>
        </p>

        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Currency</span>
          <span>
            {props.country.currencies[0].name} (
            {props.country.currencies[0].code})
          </span>
        </p>

        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Region</span>
          <span>{props.country.region}</span>
        </p>

        <p className="text-lg flex w-100 justify-between border-b-2 border-red-500 pb-1 mb-1">
          <span>Language</span>
          <span>{props.country.languages[0].name}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryAPI;
