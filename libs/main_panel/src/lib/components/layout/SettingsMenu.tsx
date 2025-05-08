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
          onClick={onClose}
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
          onClick={onClose}
        />
        <MenuItem
          icon={<FaBriefcase className="w-4 h-4 text-gray-500" />}
          text="Business Settings"
          onClick={onClose}
        />
        <MenuItem
          icon={<FaHome className="w-4 h-4 text-gray-500" />}
          text="3rd Party"
          onClick={onClose}
        />
        <MenuItem
          icon={<FaShareAlt className="w-4 h-4 text-gray-500" />}
          text="Social Media Setup"
          onClick={onClose}
        />
      </div>

      <div className="p-2 border-t border-gray-100">
        <button className="w-full text-center text-teal-600 hover:text-teal-700 text-sm font-medium py-1">
          View All Settings
        </button>
      </div>
    </div>
  );
};

// MenuItem component for consistent styling
interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

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
