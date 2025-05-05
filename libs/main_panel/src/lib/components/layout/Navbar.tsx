// src/components/Navbar.js
import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa'; // Import the double message icon from react-icons

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex ">
        <div className="bg-white text-[#005555] fixed top-9 left-0 p-2 right-0 z-10 md:pl-64 rounded-md shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-6 flex items-center">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Users
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  Transactions & Reports
                </a>
                <div className="relative">
                  <button
                    className="px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    onClick={() => toggleDropdown('settings')}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                    Settings
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openDropdown === 'settings' && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Preferences</a>
                    </div>
                  )}
                </div>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v2M5 3a2 2 0 00-2 2m14 14v2a2 2 0 002 2M5 19h14a2 2 0 002-2m-2-6V9a2 2 0 00-2-2H9m-6 8h14"></path>
                  </svg>
                  Dispatch Management
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 pr-20"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2 pointer-events-none">
                  <span className="text-xs text-gray-500">Ctrl+K</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                  </svg>
                </div>
              </div>
              {/* Double Message Icon */}
              <div className="flex items-center ml-2 ms-2">
                <FaCommentDots className="text-gray-500 text-2xl" />
              </div>
              <div className="flex items-center ml-2">
                <div className="relative">
                  <button
                    className="px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    onClick={() => toggleDropdown('language')}
                  >
                    EN
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openDropdown === 'language' && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a>
                    </div>
                  )}
                </div>
                <div className="relative bg-[#0666ba] text-white h-full w-[150px] flex items-center p-2 mt-1">
                  <button
                    className="px-3 py-2 rounded-md text-sm font-medium flex items-center m-0 ms-6"
                    onClick={() => toggleDropdown('grocery')}
                  >
                    Grocery
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openDropdown === 'grocery' && (
                    <div className="absolute left-0 top-5 mt-10 w-48 bg-white rounded-md shadow-lg z-20 grocery-dropdown">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fruits</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vegetables</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dairy</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
