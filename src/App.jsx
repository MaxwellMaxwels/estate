import React from 'react';
import './index.css';
// import routes and route
import {Routes , Route} from 'react-router-dom';

//import components
 import Header from  './components/Header';
 import Footer from  './components/Footer';
 import BookingForm from  './components/Booking';

// import pages 
import Home from  './pages/Home';
import PropertyDetails from  './pages/PropertyDetails';


const App = () => {
  return (
    <div className= 'max-w-[1440px] mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/property/:id' element = {<PropertyDetails/>}/>
      </Routes>
      <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Real Estate Booking</h1>
      <BookingForm />
    </div>
      <Footer/>
    </div>
  );
};

export default App;
