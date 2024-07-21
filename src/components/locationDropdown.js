import React, { useState, useEffect, useContext } from "react";

// import react icons
import { RiMapPinLine, CiSearch } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
//import headless ui
import { Menu } from "@headlessui/react";
//import house context
import { HouseContext } from "./HouseContext";

const LocationDropdown = () => {
  const { location, setlocation, countries } = useContext(HouseContext);

  console.log(countries);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-auto flex items-center justify-between text-left px-4 py-2 border rounded-lg"
      >
        <RiMapPinLine className="dropdown-icon-primary mr-2" />
        <div className="flex-grow">
          <div className="text-[15px] font-medium leading-tight">
            {location}
          </div>
          <div className="text-[13px]">Select Place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary ml-2" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary ml-2" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries.map((location, index) => (
          <Menu.Item
            onClick={() => setlocation(location)}
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
          >
            {location}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default LocationDropdown;

