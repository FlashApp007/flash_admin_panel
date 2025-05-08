import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface UserProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear authentication state
    localStorage.removeItem('isAuthenticated');
    // Close the dropdown
    onClose();
    // Navigate to login page
    navigate('/login');
  };
  return (
    <div 
      className={`fixed left-5 top-95 w-62 bg-white rounded-md shadow-lg border border-gray-200 z-[100] transform -translate-x-4 transition-all duration-200 ease-in-out ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center">
        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mr-3">
          <span>J</span>
        </div>
        <div>
          <div className="font-medium">Jhon</div>
          <div className="text-sm text-gray-500 truncate">a**********@admin.com</div>
        </div>
      </div>
      <div className="py-1">
        <Link 
          to="/settings" 
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          Settings
        </Link>
        <button 
          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default UserProfileDropdown;