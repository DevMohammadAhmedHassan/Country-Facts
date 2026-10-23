import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/footer';
import SearchBar from '../components/SearchBar';
import CountryAPI from '../components/CountryAPI';

const Country = () => {
  return (
    <>
      <Nav />

      <div className="flex flex-col justify-center items-center h-[76vh] gap-10">
        <SearchBar />
        <CountryAPI />
      </div>

      <Footer />
    </>
  );

}

export default Country
