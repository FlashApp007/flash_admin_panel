/// <reference lib="dom" />
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCommentDots, FaUser, FaFileAlt, FaTruck, FaCog, FaShoppingBasket } from 'react-icons/fa';
import SettingsMenu from './SettingsMenu';
import ModuleSection from './ModuleSection';

interface NavbarProps {
  onLogout: () => void;
  onSettingsToggle: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, onSettingsToggle }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Track previous openDropdown to know when settings menu opens/closes
  const prevOpenDropdown = React.useRef<string | null>(null);
  const [showModuleSection, setShowModuleSection] = useState(false);
  const [selectedModule, setSelectedModule] = useState({
    id: 1,
    name: 'grocery',
    icon: <FaShoppingBasket className="mr-2" />
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moduleButtonRef = useRef<HTMLButtonElement>(null);
  const moduleSectionRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string | null, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenDropdown(prevDropdown => prevDropdown === dropdown ? null : dropdown);
  };

  // Effect to notify parent when settings dropdown is toggled
  React.useEffect(() => {
    if (prevOpenDropdown.current !== openDropdown) {
      if (openDropdown === 'settings') {
        onSettingsToggle(true);
      } else if (prevOpenDropdown.current === 'settings' && openDropdown !== 'settings') {
        onSettingsToggle(false);
      }
      prevOpenDropdown.current = openDropdown;
    }
  }, [openDropdown, onSettingsToggle]);

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  // REMOVE: handleSettingsMouseEnter, we will use click only.

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && 
          event.target instanceof Node && 
          !dropdownRef.current.contains(event.target) &&
          !moduleButtonRef.current?.contains(event.target) &&
          !moduleSectionRef.current?.contains(event.target) &&
          !(event.target as HTMLElement).closest('.settings-button')) {
        closeDropdown();
        setShowModuleSection(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
        setShowModuleSection(false);
      }
    };

    const doc = document as Document;
    doc.addEventListener('mousedown', handleClickOutside);
    doc.addEventListener('keydown', handleEscape);
    
    return () => {
      doc.removeEventListener('mousedown', handleClickOutside);
      doc.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleModuleSelect = (id: number, name: string, icon: React.ReactNode) => {
    // Default icon
    let moduleIcon = <FaShoppingBasket className="mr-2" size={16} />;
    
    // If we have a valid icon element, clone it with our props
    if (React.isValidElement<{ className?: string; size?: number }>(icon)) {
      moduleIcon = React.cloneElement(icon, { 
        className: 'mr-2',
        size: 16
      });
    }
    setSelectedModule({
      id,
      name,
      icon: moduleIcon
    });
    setShowModuleSection(false);
  };

  const toggleModuleSection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModuleSection(prev => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex ">
        <div className="bg-white text-[#005555] fixed top-9 left-0 p-3 right-0 z-10 md:pl-64 rounded-md shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-6 flex items-center space-x-4">
                <NavLink 
                  to="/users" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive ? 'text-[#005555] bg-gray-100' : 'text-gray-600 hover:bg-gray-100'}`
                  }
                >
                  <FaUser className="mr-1" />
                  Users
                </NavLink>
                <NavLink 
                  to="/transactions" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive ? 'text-[#005555] bg-gray-100' : 'text-gray-600 hover:bg-gray-100'}`
                  }
                >
                  <FaFileAlt className="mr-1" />
                  Transactions & Reports
                </NavLink>
                <div className="relative">
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center settings-button ${
                      openDropdown === 'settings' ? 'bg-gray-100' : ''
                    }`}
                    onClick={(e) => toggleDropdown('settings', e)}
                  >
                    <FaCog className="mr-1" />
                    Settings
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div 
                    ref={dropdownRef}
                    className={`absolute left-0 mt-2 z-20 transition-all duration-200 ease-in-out transform ${
                      openDropdown === 'settings' 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <SettingsMenu
                      isOpen={openDropdown === 'settings'}
                      onClose={closeDropdown}
                      onLogout={onLogout}
                    />
                  </div>
                </div>
                <NavLink 
                  to="/dispatch" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive ? 'text-[#005555] bg-gray-100' : 'text-gray-600 hover:bg-gray-100'}`
                  }
                >
                  <FaTruck className="mr-1" />
                  Dispatch Management
                </NavLink>
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
                  <div 
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 transition-all duration-200 ease-in-out transform ${
                      openDropdown === 'language' 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                    <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</button>
                    <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</button>
                  </div>
                </div>
                <div className="relative h-full flex items-center">
                  <div className="relative" ref={dropdownRef}>
              
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 transition-all duration-200 ease-in-out transform ${
                        openDropdown === 'settings'
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <SettingsMenu onLogout={onLogout} />
                    </div>

                    {/* Module Button (unchanged) */}
                    <button
                      ref={moduleButtonRef}
                      className="px-3 py-2 rounded-md text-sm font-medium flex items-center bg-[#0666ba] text-white h-full w-[150px] justify-between"
                      onClick={toggleModuleSection}
                    >
                      <div className="flex items-center">
                        {selectedModule.icon}
                        <span className="ml-2">
                          {selectedModule.name.charAt(0).toUpperCase() + selectedModule.name.slice(1)}
                        </span>
                      </div>
                      <svg 
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${showModuleSection ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {/* Module Section Dropdown */}
                    <div 
                      ref={moduleSectionRef}
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 transition-all duration-200 ease-in-out transform ${
                        showModuleSection 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                      onMouseEnter={() => setShowModuleSection(true)}
                      onMouseLeave={() => setShowModuleSection(false)}
                    >
                      <ModuleSection onModuleSelect={handleModuleSelect} onShowAddBusinessModule={() => navigate('/settings/module-setup/add-business-module')} />
                    </div>
                  </div>
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
