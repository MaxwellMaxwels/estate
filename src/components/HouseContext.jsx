import React, { useState, useEffect, createContext } from "react";
// Data import
import { housesData } from "../data";

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [location, setlocation] = useState("Location(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("PropertyType(any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range(any)");
  const [loading, setLoading] = useState(false);

  // Returning the locations
  useEffect(() => {
    // Extract locations from houses
    const allCountries = houses.map((house) => house.location);

    // Remove duplicates and add 'Location (any)'
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    // Set locations state
    setCountries(uniqueCountries);
  }, [houses]);

  // Return all properties
  useEffect(() => {
    // Extract properties from houses
    const allProperties = houses.map((house) => house.type);

    // Remove duplicates and add 'Type (any)'
    const uniqueProperties = ["Type (any)", ...new Set(allProperties)];

    // Set properties state
    setProperties(uniqueProperties);
  }, [houses]);

  useEffect(() => {
    setLoading(true);

    const isDefault = (str) => {
      return str.includes("any");
    };

    const minPrice = parseInt(price.split(" ")[0]) || 0;
    const maxPrice = parseInt(price.split(" ")[2]) || Infinity;

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // If all values are selected
      if (
        house.location === location &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return true;
      }

      // If all values are default
      if (isDefault(location) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // If only location is not default
      if (!isDefault(location) && isDefault(property) && isDefault(price)) {
        return house.location === location;
      }

      // If only property is not default
      if (!isDefault(property) && isDefault(location) && isDefault(price)) {
        return house.type === property;
      }

      // If only price is not default
      if (!isDefault(price) && isDefault(location) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // If location and property are not default
      if (!isDefault(location) && !isDefault(property) && isDefault(price)) {
        return house.location === location && house.type === property;
      }

      // If location and price are not default
      if (!isDefault(location) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.location === location;
        }
      }

      // If property and price are not default
      if (isDefault(location) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      // Default return false
      return false;
    });

    // Update the properties and locations based on the filtered houses
    const filteredCountries = [
      "Location (any)",
      ...new Set(newHouses.map((house) => house.location)),
    ];
    const filteredProperties = [
      "Type (any)",
      ...new Set(newHouses.map((house) => house.type)),
    ];

    setCountries(filteredCountries);
    setProperties(filteredProperties);

    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 1000);
  }, [location, property, price]);

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        location,
        setlocation,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
