import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CountryAPI from '../components/CountryAPI';
import { useState } from 'react';

const Country = () => {
  const [country, setCountry] = useState(null);

  const fetchCountry = async (name) => {
    const response = await fetch("https://countries.dev/name/" + name);
    const data = await response.json();
    console.log(data);

    setCountry(data[0]);

  }

  return (
    <>
      <Nav />

      <div className="flex flex-col justify-center items-center h-[76vh] gap-5">
        <SearchBar fetchCountry={fetchCountry} />
        <CountryAPI country={country}/>
      </div>

      <Footer />
    </>
  );

}

export default Country
