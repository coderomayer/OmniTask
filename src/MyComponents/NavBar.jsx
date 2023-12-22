// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, onLogout, userAvatar }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          YourLogo
        </Link>

        {/* Toggle for small screens */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            // Add functionality for mobile menu toggle if needed
          >
            {/* Hamburger Icon or any other mobile menu icon */}
            ☰
          </button>
        </div>

        {/* Page Links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
          <Link to="/explore" className="text-white hover:underline">
            Explore
          </Link>
        </div>

        {/* User Authentication */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            // User is logged in
            <>
              {/* Clickable User Avatar */}
              <button className="focus:outline-none">
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {/* Log Out Button */}
              <button
                onClick={onLogout}
                className="text-white hover:underline focus:outline-none"
              >
                Log Out
              </button>
            </>
          ) : (
            // User is not logged in
            <Link to="/signup" className="text-white hover:underline">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
