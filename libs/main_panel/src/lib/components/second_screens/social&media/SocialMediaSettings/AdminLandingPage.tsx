import React, { useState } from "react";

const AdminLandingPageSettings = () => {
  // State for admin default landing page toggle
  const [adminDefaultLandingPage, setAdminDefaultLandingPage] = useState(true);
  
  // State for integration option
  const [integrationType, setIntegrationType] = useState("None");

  // Handle reset
  const handleReset = () => {
    setAdminDefaultLandingPage(true);
    setIntegrationType("None");
  };

  // Handle save
  const handleSave = () => {
    console.log("Saved landing page settings:", {
      adminDefaultLandingPage,
      integrationType
    });
    // Add your save logic here
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Admin Default Landing Page Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <span className="text-gray-700 font-medium">Admin Default Landing Page</span>
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs ml-2">?</div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={adminDefaultLandingPage}
            onChange={() => setAdminDefaultLandingPage(!adminDefaultLandingPage)}
          />
          <div className={`w-11 h-6 ${adminDefaultLandingPage ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
        </label>
      </div>

      {/* Custom Landing Page Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 font-medium">Want To Integrate Your Own Customised Landing Page ?</span>
          <button className="text-teal-600 font-medium flex items-center">
            Read Instructions
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs ml-2">?</div>
          </button>
        </div>
      </div>

      {/* Integration Options */}
      <div className="mb-8">
        <div className="mb-3">
          <span className="text-gray-700 font-medium">Integrate Your Landing Page Via</span>
        </div>
        
        <div className="flex space-x-6 mb-8">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-teal-600"
              name="integrationType"
              value="Url"
              checked={integrationType === "Url"}
              onChange={() => setIntegrationType("Url")}
            />
            <span className="ml-2 text-gray-700">Url</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-teal-600"
              name="integrationType"
              value="FileUpload"
              checked={integrationType === "FileUpload"}
              onChange={() => setIntegrationType("FileUpload")}
            />
            <span className="ml-2 text-gray-700">File upload</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-teal-600"
              name="integrationType"
              value="None"
              checked={integrationType === "None"}
              onChange={() => setIntegrationType("None")}
            />
            <span className="ml-2 text-gray-700">None</span>
          </label>
        </div>
      </div>

      {/* Current Theme Info */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 text-center">
        <div className="mb-4">
          <img 
            src="/admin-landing-icon.png" 
            alt="Admin Landing Page" 
            className="mx-auto h-16"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iMzIiIHk9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5BZG1pbiBQYWdlPC90ZXh0Pjwvc3ZnPg==";
            }}
          />
        </div>
        <p className="text-gray-700">
          Currently you are using 6amMart Default Admin Landing Page Theme. 
          <a href="#" className="text-teal-600 ml-1 font-medium">Visit Landing Page</a>
        </p>
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
          onClick={handleSave}
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default AdminLandingPageSettings;