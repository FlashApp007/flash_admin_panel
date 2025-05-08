// src/components/Layout.js
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Banner from './Banner';

interface LayoutProps {
  children?: ReactNode;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
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
          <Navbar onLogout={onLogout} />

          {/* Main content area */}
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
