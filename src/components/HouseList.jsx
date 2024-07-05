import React, {useContext} from 'react';
import {HouseContext} from './HouseContext';

// import component
import {House} from './House'; 

import {Link} from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im'; 


const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className= ' grid md:-cols-2 lg:grid-cols-4 gap-4'>
          {houses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};  
export default HouseList;
