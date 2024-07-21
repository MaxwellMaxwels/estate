import React, { useContext } from "react";
//import { Risearch2Line } from 'react-icons/ri';
import { CiSearch } from "react-icons/ci";

import locationDropdown from "./locationDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

// import context
//import {HouseContext} from './HouseContext';

const Search = () => {
  //const {handleClick} = useContext(HouseContext)

  return (
    <div
      className="px-[150px] py-6 max-w-[1170px] max-auto flex flex-col 
    lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 
     bg-white lg:bg-transparent lg:backdrop-blur rounded-lg"
    >
      <locationDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        className="bg-green-700
        hover:bg-green-800 transition w-full 1g: max-w-
        [162px] h-16 rounded-lg flex justify-center
        items-center text-white text-lg"
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
