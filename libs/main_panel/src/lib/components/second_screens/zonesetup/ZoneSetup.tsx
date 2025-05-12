import React, { useState } from 'react';

const ZoneSetup = () => {
  // State for form inputs
  const [businessZoneName, setBusinessZoneName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [zoneName, setZoneName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Default");
  const [selectedTool, setSelectedTool] = useState("hand");

  // Sample data for the zone list
  const [zones, setZones] = useState([
    {
      id: 1,
      zoneId: "3",
      name: "Dhaka",
      vendors: 1,
      deliverymen: 0,
      status: true,
      digitalPayment: true,
      cashOnDelivery: true,
      offlinePayment: true
    },
    {
      id: 2,
      zoneId: "2",
      name: "منطقة جديدة",
      vendors: 2,
      deliverymen: 1,
      status: true,
      digitalPayment: true,
      cashOnDelivery: true,
      offlinePayment: true
    },
    {
      id: 3,
      zoneId: "1",
      name: "Main Demo Zone",
      vendors: 64,
      deliverymen: 5,
      status: true,
      digitalPayment: true,
      cashOnDelivery: true,
      offlinePayment: true
    }
  ]);

  // Handle reset
  const handleReset = () => {
    setBusinessZoneName("");
    setDisplayName("");
    setZoneName("");
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("Submitted business zone:", {
      businessZoneName,
      displayName,
      zoneName
    });
    // Add your submit logic here
  };

  // Handle toggle change
  const handleToggle = (id, field) => {
    setZones(zones.map(zone =>
      zone.id === id ? { ...zone, [field]: !zone[field] } : zone
    ));
  };

  // Handle edit zone
  const handleEdit = (id) => {
    console.log("Edit zone with id:", id);
    // Implement edit functionality here
  };

  // Handle view zone
  const handleView = (id) => {
    console.log("View zone with id:", id);
    // Implement view functionality here
  };

  // Handle delete zone
  const handleDelete = (id) => {
    console.log("Delete zone with id:", id);
    // Implement delete functionality here
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="bg-amber-500 p-1 rounded-md mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-xl font-medium text-gray-800">Add New Business Zone</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Instructions */}
        <div>
          <div className="mb-6">
            <h2 className="text-teal-600 font-medium mb-2">Instructions</h2>
            <p className="text-gray-600 text-sm mb-4">Create & connect dots in a specific area on the map to add a new business zone.</p>

            {/* Tool Selection */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-md bg-white">
                <div className="bg-gray-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Use this 'Hand Tool' to find your target zone.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-md bg-white">
                <div className="bg-gray-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Use this 'Shape Tool' to point out the areas and connect the dots. Minimum 3 points/dots are required.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zone Name Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="New Zone"
              value={zoneName}
              onChange={(e) => setZoneName(e.target.value)}
            />
          </div>

          {/* Map Preview */}
          <div className="mb-6 border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-white p-2 flex justify-between border-b">
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded bg-blue-100 text-blue-700">
                  Map
                </button>
                <button className="px-3 py-1 text-sm rounded bg-gray-100 text-gray-700">
                  Satellite
                </button>
              </div>
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="relative" style={{ height: "300px" }}>
              <img
                src="/map-placeholder.jpg"
                alt="Map"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjMwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4Ij5NYXAgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+";
                }}
              />

              {/* Map Markers */}
              <div className="absolute top-10 left-20 bg-white p-2 rounded shadow-md">
                <div className="flex items-center space-x-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Dhaka Bangladesh</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Dhaka Medical College Hospital</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Dhaka Commerce College</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Dhaka University Press Building</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Dhaka New Market Mosque</span>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute right-2 top-2 flex flex-col space-y-2">
                <button className="bg-white p-1 rounded shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="absolute right-2 bottom-10 flex flex-col space-y-1">
                <button className="bg-white p-1 rounded-t shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 010-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-white p-1 rounded-b shadow border-t">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Location Marker */}
              <div className="absolute right-10 bottom-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="bg-white p-2 flex justify-end space-x-2">
              <button
                className="px-4 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="px-4 py-1 text-sm bg-teal-500 text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          {/* Language Tabs */}
          <div className="flex border-b mb-6">
            <button
              className={`py-2 px-4 text-sm ${selectedLanguage === 'Default' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setSelectedLanguage('Default')}
            >
              Default
              </button>
            <button
              className={`py-2 px-4 text-sm ${selectedLanguage === 'English(EN)' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setSelectedLanguage('English(EN)')}
            >
              English(EN)
            </button>
            <button
              className={`py-2 px-4 text-sm ${selectedLanguage === 'Arabic' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setSelectedLanguage('Arabic')}
            >
              Arabic - العربية(AR)
            </button>
            <div className="ml-auto flex items-center">
              <button className="text-gray-500 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Business Zone name (Default)
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Write a New Business Zone Name"
                value={businessZoneName}
                onChange={(e) => setBusinessZoneName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Display name (Default)
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Write a New Display Zone Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
          </div>

          {/* Map */}
          <div className="mb-6 border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-white p-2 flex justify-between border-b">
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded bg-blue-100 text-blue-700">
                  Map
                </button>
                <button className="px-3 py-1 text-sm rounded bg-gray-100 text-gray-700">
                  Satellite
                </button>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-2">Keyboard</span>
                <button className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
                  Ctrl
                </button>
              </div>
            </div>

            <div className="relative" style={{ height: "400px" }}>
              <img
                src="/map-placeholder-large.jpg"
                alt="Map"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4Ij5NYXAgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+";
                }}
              />

              {/* Search Box */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-64">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-8 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm"
                    placeholder="Search here"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute right-2 top-2">
                <button className="bg-white p-2 rounded shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1">
                <button className="bg-white p-1 rounded-t shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 010-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-white p-1 rounded-b shadow border-t">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Settings Control */}
              <div className="absolute right-2 bottom-2">
                <button className="bg-white p-2 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Location Marker */}
              <div className="absolute right-10 bottom-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-200"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="bg-teal-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Zone List */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h1 className="text-lg font-medium text-gray-800">Zone List</h1>
            <div className="ml-2 bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
              3
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Business Zone"
                className="pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-gray-500 text-white rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Export Button */}
            <div className="relative">
              <button className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Export</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-md shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SL
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zone Id
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business Zone Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendors
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deliverymen
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Digital Payment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cash On Delivery
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Offline Payment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {zones.map((zone) => (
                <tr key={zone.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {zone.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {zone.zoneId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {zone.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {zone.vendors}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {zone.deliverymen}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={zone.status}
                        onChange={() => handleToggle(zone.id, 'status')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={zone.digitalPayment}
                        onChange={() => handleToggle(zone.id, 'digitalPayment')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={zone.cashOnDelivery}
                        onChange={() => handleToggle(zone.id, 'cashOnDelivery')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={zone.offlinePayment}
                        onChange={() => handleToggle(zone.id, 'offlinePayment')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleEdit(zone.id)}
                        className="p-1 bg-blue-50 text-blue-600 rounded border border-blue-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleView(zone.id)}
                        className="p-1 bg-amber-50 text-amber-600 rounded border border-amber-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(zone.id)}
                        className="p-1 bg-red-50 text-red-600 rounded border border-red-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZoneSetup;
