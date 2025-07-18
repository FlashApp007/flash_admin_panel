import React from 'react';
import {
  FaCog,
  FaMapMarkedAlt,
  FaBriefcase,
  FaHome,
  FaShareAlt,
  FaSignOutAlt
} from 'react-icons/fa';

interface SettingsMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  onLogout: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ isOpen, onClose, onLogout }) => {
  // Local toggle state for View All Settings
  const [isToggled, setIsToggled] = React.useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };



  const handleToggles = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className={`w-64 bg-white rounded-md shadow-lg overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-teal-600 p-3">
        <h2 className="text-white text-lg font-semibold">Settings</h2>
        <p className="text-white/90 text-xs">
          Manage your business settings
        </p>
      </div>

      <div className="p-2 space-y-1">
        <MenuItem 
          icon={<FaCog className="w-4 h-4 text-gray-500" />}
          text="System Module Setup"
        />
        <MenuItem 
          icon={<FaSignOutAlt className="w-4 h-4 text-gray-500" />}
          text="Logout"
          onClick={() => {
            onLogout();
            onClose?.();
          }}
        />
        <MenuItem
          icon={<FaMapMarkedAlt className="w-4 h-4 text-gray-500" />}
          text="Zone Setup"
        />
        <MenuItem
          icon={<FaBriefcase className="w-4 h-4 text-gray-500" />}
          text="Business Settings"
        />
        <MenuItem
          icon={<FaHome className="w-4 h-4 text-gray-500" />}
          text="3rd Party"
        />
        <MenuItem
          icon={<FaShareAlt className="w-4 h-4 text-gray-500" />}
          text="Social Media Setup"
        />
      </div>

      <div className="p-2 border-t border-gray-100 flex flex-col gap-2">
        <button
          className={`w-full text-center text-sm font-medium py-1 rounded transition-colors duration-300 ${isToggled ? 'bg-green-500 text-white' : 'text-teal-600 hover:text-teal-700 bg-white'}`}
          onClick={handleToggle}
        >
          {isToggled ? 'ON' : 'View All Settings'}
        </button>
 
      </div>
    </div>
  );
};



const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => {
  return (
    <div 
      className="flex items-center space-x-2 p-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors duration-200"
      onClick={onClick}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
};

export default SettingsMenu;
