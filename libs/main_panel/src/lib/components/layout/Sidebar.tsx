import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaShoppingCart, FaImages, FaLayerGroup, FaCog, FaBolt } from 'react-icons/fa';
import UserProfileDropdown from './UserProfileDropdown'; // Import the UserProfileDropdown component

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#005555] text-white w-64 p-4 h-screen fixed top-11 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col">
      {/* Logo and Search */}
      <div className="mb-4 flex items-center relative">
        <FaBolt className="text-2xl mr-2 text-yellow-500" />
        <span className="text-2xl font-bold italic">Flash</span>
      </div>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search Menu..."
          className="w-full p-2 pl-10 rounded-md bg-[#004444] text-white text-sm"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        {/* Dashboard */}
        <div className="mb-4">
          <Link to="/" className="flex items-center p-2 rounded-md bg-[#006666] text-white text-sm transition-colors duration-300">
            <FaHome className="mr-3 text-xl" />
            Dashboard
          </Link>
        </div>

        {/* Order Management */}
        <div className="mb-4">
          <h3 className="text-xs font-bold mb-2 uppercase">Order Management</h3>
          <div className="relative">
            <button
              className="flex items-center p-2 rounded-md hover:bg-[#006666] w-full text-left text-sm transition-colors duration-300"
              onClick={() => toggleDropdown('orders')}
            >
              <FaShoppingCart className="mr-3 text-xl" />
              Orders
              <svg className="w-4 h-4 ml-auto transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" className={openDropdown === 'orders' ? 'rotate-180' : ''}></path>
              </svg>
            </button>
            <div 
              className={`mt-2 space-y-1 pl-4 overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === 'orders' 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
                <Link to="/orders/all" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• All</Link>
                <Link to="/orders/pending" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Pending</Link>
                <Link to="/orders/accepted" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Accepted</Link>
                <Link to="/orders/processing" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Processing</Link>
                <Link to="/orders/on-the-way" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Order on the way</Link>
                <Link to="/orders/delivered" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Delivered</Link>
                <Link to="/orders/canceled" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Canceled</Link>
                <Link to="/orders/payment-failed" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Payment Failed</Link>
                <Link to="/orders/offline-payments" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Offline Payments</Link>
              </div>
          </div>
          <div className="relative mt-4">
            <button
              className="flex items-center p-2 rounded-md hover:bg-[#006666] w-full text-left text-sm transition-colors duration-300"
              onClick={() => toggleDropdown('dispatch')}
            >
              <FaImages className="mr-3 text-xl" />
              Dispatch
              <svg className="w-4 h-4 ml-auto transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" className={openDropdown === 'dispatch' ? 'rotate-180' : ''}></path>
              </svg>
            </button>
            <div 
              className={`mt-2 space-y-1 pl-4 overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === 'dispatch' 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
                <Link to="/dispatch/unassigned" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Unassigned Orders</Link>
                <Link to="/dispatch/ongoing" className="block p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">• Ongoing Orders</Link>
              </div>
          </div>
        </div>

        {/* Promotion Management */}
        <div className="mb-4">
          <h3 className="text-xs font-bold mb-2 uppercase">Promotion Management</h3>
          <Link to="/promotions" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">
            <FaLayerGroup className="mr-3 text-xl" />
            Promotional Banners
          </Link>
        </div>

        {/* Product Management */}
        <div className="mb-4">
          <h3 className="text-xs font-bold mb-2 uppercase">Product Management</h3>
          <Link to="/categories" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            Category Setup
          </Link>
        </div>

        {/* Delivery Management */}
        <div className="mb-4">
          <h3 className="text-xs font-bold mb-2 uppercase">Delivery Management</h3>
          <Link to="/delivery" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm transition-colors duration-300">
            <FaCog className="mr-3 text-xl" />
            Delivery Setup
          </Link>
        </div>

        {/* User Profile Section */}
        <div className="p-0 border-t mt-10 border-[#006054] relative">
          <div
            className="flex items-center bg-[#006054] p-2 rounded border w-[220px] cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">JD</span>
            </div>
            <div className="ml-2 flex-1">
              <p className="text-sm">Jhon Doe</p>
              <p className="text-xs text-gray-400">a*********t@admin.com</p>
            </div>
            <button className="text-gray-400">
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isProfileDropdownOpen ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Dropdown container */}
          <div className="absolute left-0 bottom-0 w-full" style={{ zIndex: 101 }}>
            <UserProfileDropdown
              isOpen={isProfileDropdownOpen}
              onClose={() => setIsProfileDropdownOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
