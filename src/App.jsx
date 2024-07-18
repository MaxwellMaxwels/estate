// Import components and pages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing/Landing.jsx";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <div className="max-w-[1440px] mx-auto bg-white">
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
