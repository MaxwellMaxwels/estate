
import React, {useState, useEffect, createContext} from 'react';
//Data import

import {housesData} from '../data';
//create context
 
export const HouseContext = createContext();

const HouseContextProvider =({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location(any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('PropertyType(any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range(any)');
  const [loading, seLoading] = useState(false);

  //returning the counties

  return(
  <HouseContext.Provider value={{
    houses,
    setHouses,
    country,
    setCountry,
    countries,
    setCountries,
    property,
    setProperty,
    properties,
    setProperties,
    price,
    setPrice,
    loading,
  }}>
    {children}
  </HouseContext.Provider>
  );
};

export default HouseContextProvider;



