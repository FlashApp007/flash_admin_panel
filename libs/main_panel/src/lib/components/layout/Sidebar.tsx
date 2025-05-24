import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHome, FaShoppingCart, FaImages, FaLayerGroup, FaCog, FaBolt, FaBusinessTime, FaTools, FaChevronUp, FaChevronDown, FaBox, FaTags, FaTruck, FaEnvelope, FaBell, FaUserCog, FaDatabase, FaPuzzlePiece, FaGlobe, FaFileAlt, FaKey, FaMobileAlt, FaTrash, FaPlus, FaList, FaSlidersH, FaImage, FaCogs, FaSignInAlt } from 'react-icons/fa';
import UserProfileDropdown from './UserProfileDropdown'; // Import the UserProfileDropdown component

interface SidebarProps {
  showSettingsSections?: boolean;
  resetToDefaultOptions?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSettingsSections = false, resetToDefaultOptions }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  const toggleNestedDropdown = (dropdown: string) => {
    setOpenNestedDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="bg-[#005555] text-white w-64 p-4 h-screen fixed top-11 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col">
      {/* Logo and Search */}
      <div className="mb-4 flex items-center relative" onClick={resetToDefaultOptions}>
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
        {/* Conditionally render default or settings sections */}
        {!showSettingsSections ? (
          <>
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
                  {openDropdown === 'orders' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
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
                  {openDropdown === 'dispatch' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
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
          </>
        ) : (
          <>
            {/* Business Management */}
            <div className="mb-4">
              <h3 className="text-xs font-bold mb-2 uppercase">Business Management</h3>

              {/* Module Setup Dropdown */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => toggleDropdown('module-setup')}>
                <FaBox className="mr-3 text-xl" />
                Module Setup
                {openDropdown === 'module-setup' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
              </button>
              {openDropdown === 'module-setup' && (
                <div className="pl-6 mt-1 space-y-1">
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/module-setup/add-business-module')}>Add Business Module</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/module-setup/modules')}>Modules</button>
                </div>
              )}

              {/* Subscription Management Dropdown */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => toggleDropdown('subscription-management')}>
                <FaTags className="mr-3 text-xl" />
                Subscription Management
                {openDropdown === 'subscription-management' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
              </button>
              {openDropdown === 'subscription-management' && (
                <div className="pl-6 mt-1 space-y-1">
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/subscription-management/subscription-package')}>Subscription Package</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/subscription-management/subscriber-list')}>Subscriber List</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/subscription-management/settings')}>Settings</button>
                </div>
              )}

              {/* Pages & Social Media Dropdown */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => toggleDropdown('pages-social-media')}>
                <FaGlobe className="mr-3 text-xl" />
                Pages & Social Media
                {openDropdown === 'pages-social-media' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
              </button>
              {openDropdown === 'pages-social-media' && (
                <div className="pl-6 mt-1 space-y-1">
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/social-media')}>Social Media</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/admin-landing-page')}>Admin Landing Page</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/react-landing-page')}>React Landing Page</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/flutter-landing-page')}>Flutter Landing Page</button>
                  {/* Nested Business Pages Dropdown */}
                  <button className="flex items-center w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => toggleNestedDropdown('business-pages')}>
                    Business Pages
                    {openNestedDropdown === 'business-pages' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
                  </button>
                  {openNestedDropdown === 'business-pages' && (
                    <div className="pl-6 mt-1 space-y-1">
                      <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/business-pages/terms-and-condition')}>Terms and Condition</button>
                      <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/business-pages/privacy-policy')}>Privacy Policy</button>
                      <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/business-pages/about-us')}>About Us</button>
                      <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/business-pages/refund-policy')}>Refund Policy</button>
                      <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/business-pages/cancelation-policy')}>Cancelation Policy</button>
                      <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/pages-social-media/business-pages/shipping-policy')}>Shipping Policy</button>
                    </div>
                  )}
                </div>
              )}

              {/* Other Business Management Buttons */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/zone-setup')}>
                <FaSlidersH className="mr-3 text-xl" />
                Zone Setup
              </button>
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/business-settings')}>
                <FaCogs className="mr-3 text-xl" />
                Business Settings
              </button>
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/gallery')}>
                <FaImage className="mr-3 text-xl" />
                Gallery
              </button>
            </div>
            {/* System Management */}
            <div className="mb-4">
              <h3 className="text-xs font-bold mb-2 uppercase">System Management</h3>

              {/* 3rd Party & Configuration Dropdown */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => toggleDropdown('third-party-config')}>
                <FaPuzzlePiece className="mr-3 text-xl" />
                3rd Party & Configuration
                {openDropdown === 'third-party-config' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
              </button>
              {openDropdown === 'third-party-config' && (
                <div className="pl-6 mt-1 space-y-1">
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/third-party-config/third-party')}>3rd Party</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/third-party-config/firebase-notification')}>Firebase Notification</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/third-party-config/offline-payment-setup')}>Offline Payment Setup</button>
                </div>
              )}

              {/* Email Setup Dropdown */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => toggleDropdown('email-setup')}>
                <FaEnvelope className="mr-3 text-xl" />
                Email Setup
                {openDropdown === 'email-setup' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
              </button>
              {openDropdown === 'email-setup' && (
                <div className="pl-6 mt-1 space-y-1">
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/email-setup/all-modules')}>All Modules</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/email-setup/rental-module')}>Rental Module</button>
                </div>
              )}

              {/* Notification Setup Dropdown */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => toggleDropdown('notification-setup')}>
                <FaBell className="mr-3 text-xl" />
                Notification Setup
                {openDropdown === 'notification-setup' ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
              </button>
              {openDropdown === 'notification-setup' && (
                <div className="pl-6 mt-1 space-y-1">
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/notification-setup/all-modules')}>All Module</button>
                  <button className="block w-full text-left p-2 rounded hover:bg-[#006666] text-sm" onClick={() => navigate('/settings/notification-setup/rental-module')}>Rental Module</button>
                </div>
              )}

              {/* Other System Management Buttons */}
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/login-setup')}>
                <FaSignInAlt className="mr-3 text-xl" />
                Login Setup
              </button>
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/react-site')}>
                <FaMobileAlt className="mr-3 text-xl" />
                React Site
              </button>
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/app-settings')}>
                <FaCog className="mr-3 text-xl" />
                APP Settings
              </button>
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/clean-database')}>
                <FaDatabase className="mr-3 text-xl" />
                Clean Database
              </button>
              <button type="button" className="flex items-center p-2 rounded-md hover:bg-[#006666] text-sm w-full text-left transition-colors duration-300" onClick={() => navigate('/settings/system-addons')}>
                <FaPuzzlePiece className="mr-3 text-xl" />
                System Addons
              </button>
            </div>
          </>
        )}

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
              {isProfileDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
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
