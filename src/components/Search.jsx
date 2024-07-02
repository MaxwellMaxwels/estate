import React, { useContext } from 'react';
//import { Risearch2Line } from 'react-icons/ri';
import { CiSearch } from "react-icons/ci";



import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import {HouseContext} from './HouseContext';

const Search = () => {
  const {houses} = useContext(HouseContext)
  console.log(houses);
  return (
    <div className='px-[150px] py-6 max-w-[1170px] max-auto flex flex-col 
    lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 
     bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button className='bg-green-700 hover:bg-green-800 transition w-32 h-10 rounded-lg flex justify-center items-center text-white text-lg'>
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
