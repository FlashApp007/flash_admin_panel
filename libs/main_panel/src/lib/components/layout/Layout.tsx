// src/components/HomeScreen.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Banner from './Banner';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner at the top */}
      <Banner />
      <div className="flex flex-1">
        {/* Sidebar fixed on the left */}
        <Sidebar />

        {/* Main container for Navbar and MainContent */}
        <div className="flex-1 ml-0 md:ml-64 pt-24">
          {/* Navbar at the top, fixed */}
          <Navbar />

          {/* Main content area, scrollable */}
          <div className="p-6 bg-white overflow-y-auto">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;