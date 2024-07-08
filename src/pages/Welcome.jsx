import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="mb-6">Sign up or log in to continue</p>
        <div className="space-y-4">
          <Link to="/signup" className="block w-full text-center py-2 px-4 bg-purple-700 text-white rounded-lg">
            Sign Up
          </Link>
          <Link to="/login" className="block w-full text-center py-2 px-4 bg-gray-300 text-gray-900 rounded-lg">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;