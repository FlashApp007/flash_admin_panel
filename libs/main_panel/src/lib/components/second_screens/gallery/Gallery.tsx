import React, { useState } from 'react';

function Gallery() {
  const [activeTab, setActiveTab] = useState('Local Storage');
  
  const folders = [
    { id: 1, name: 'Profile' },
    { id: 2, name: 'Promotional_banner' },
    { id: 3, name: 'Special_criteria' },
    { id: 4, name: 'Business_logo' },
    { id: 5, name: 'Fixed_header' },
    { id: 6, name: 'Download_user_app' },
    { id: 7, name: 'Reviewer_image' },
    { id: 8, name: 'Product' },
    { id: 9, name: 'Store' },
    { id: 10, name: 'Payment_module' },
    { id: 11, name: 'Header_icon' },
    { id: 12, name: 'Advertisement' },
    { id: 13, name: 'Brand' },
    { id: 14, name: 'React_landing_page' },
    { id: 15, name: 'Delivery-Man' },
    { id: 16, name: 'Order' },
    { id: 17, name: 'Contact_us_image' },
    { id: 18, name: 'Admin' },
    { id: 19, name: 'Header_banner' },
    { id: 20, name: 'Reviewer_cover' }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="bg-yellow-100 p-2 rounded-md mr-3">
          <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
        </div>
        <h1 className="text-xl font-medium">Gallery</h1>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'Local Storage'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleTabClick('Local Storage')}
          >
            Local Storage
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">Public</span>
          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">35</span>
        </div>
        <div className="flex space-x-2">
          <button
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New
          </button>
          <button
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {folders.slice(0, 10).map((folder) => (
          <div key={folder.id} className="flex flex-col items-center">
            <div className="w-full aspect-square bg-yellow-200 rounded-md flex items-center justify-center mb-2">
              <svg className="h-16 w-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 truncate w-full text-center">
              {folder.name.length > 15 ? folder.name.substring(0, 15) + '...' : folder.name}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {folders.slice(10, 20).map((folder) => (
          <div key={folder.id} className="flex flex-col items-center">
            <div className="w-full aspect-square bg-yellow-200 rounded-md flex items-center justify-center mb-2">
              <svg className="h-16 w-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 truncate w-full text-center">
              {folder.name.length > 15 ? folder.name.substring(0, 15) + '...' : folder.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;