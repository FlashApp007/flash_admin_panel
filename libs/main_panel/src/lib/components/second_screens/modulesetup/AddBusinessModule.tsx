import React, { useState } from 'react';

const AddBusinessModule = () => {
  // State for form inputs
  const [language, setLanguage] = useState("Default");
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [icon, setIcon] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  // Handle reset
  const handleReset = () => {
    setModuleName("");
    setModuleDescription("");
    setSelectedModule("");
    setIcon(null);
    setThumbnail(null);
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("Submitted business module:", {
      language,
      moduleName,
      moduleDescription,
      selectedModule,
      icon,
      thumbnail
    });
    // Add your submit logic here
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      {/* First Section */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-amber-500 p-1 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-xl font-medium text-gray-800">Add New Business Module</h1>
        </div>

        {/* Alert */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-700">Attention! Don't forget to click the 'Add Module' button below to save the new business module</span>
          </div>
          <button className="text-blue-400 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="bg-white rounded-md shadow-sm p-6 mb-6">
          <h2 className="text-gray-700 font-medium mb-4">Basic setup</h2>

          {/* Language Selection */}
          <div className="mb-6">
            <div className="flex space-x-4 mb-2">
              <button
                className={`px-3 py-1 rounded ${language === "Default" ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setLanguage("Default")}
              >
                Default
              </button>
              <button
                className={`px-3 py-1 rounded ${language === "English" ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setLanguage("English")}
              >
                English(EN)
              </button>
              <button
                className={`px-3 py-1 rounded ${language === "Arabic" ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setLanguage("Arabic")}
              >
                Arabic - العربية(AR)
              </button>
            </div>
          </div>

          {/* Module Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Module Name (Default)
            </label>
            <input
              type="text"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
              placeholder="Ex: Grocery eCommerce Pharmacy etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Module Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              Business Module description (Default)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </label>
            <div className="border border-gray-300 rounded-md">
              {/* Text Editor Toolbar */}
              <div className="border-b border-gray-300 p-2 flex flex-wrap gap-1">
                <div className="flex items-center space-x-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm1 2h8v8H6V6z" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
                <div className="border-r border-gray-300 h-6 mx-1"></div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 hover:bg-gray-100 rounded font-bold">B</button>
                  <button className="p-1 hover:bg-gray-100 rounded italic">I</button>
                  <button className="p-1 hover:bg-gray-100 rounded underline">U</button>
                  <button className="p-1 hover:bg-gray-100 rounded line-through">S</button>
                  <button className="p-1 hover:bg-gray-100 rounded">x²</button>
                  <button className="p-1 hover:bg-gray-100 rounded">x₂</button>
                </div>
                <div className="border-r border-gray-300 h-6 mx-1"></div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8M4 18h8" />
                    </svg>
                  </button>
                </div>
                <div className="border-r border-gray-300 h-6 mx-1"></div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-300 p-2 flex items-center">
                <div className="flex items-center mr-4">
                  <span className="text-sm mr-2">Styles</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>-</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Format</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>-</option>
                  </select>
                </div>
                <div className="ml-auto">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <textarea
                value={moduleDescription}
                onChange={(e) => setModuleDescription(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none min-h-[120px]"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Module setup</h2>
        <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module selection */}
          <div>
            <h3 className="text-lg font-medium mb-4">Select business module type</h3>
            <ul className="space-y-3">
              {["Grocery", "Food", "Pharmacy", "Ecommerce", "Parcel"].map((module) => (
                <li key={module}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="businessModule"
                      value={module}
                      checked={selectedModule === module}
                      onChange={() => setSelectedModule(module)}
                      className="form-radio h-5 w-5 text-indigo-600"
                    />
                    <span className="text-gray-700 text-base">{module}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Image upload */}
          <div>
            <h3 className="text-lg font-medium mb-4">Choose related images</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Icon Upload */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Icon <span className="text-red-500">* (Ratio 1:1)</span>
                </label>
                <div className="relative border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-40">
                  {icon ? (
                    <img src={icon} alt="Icon Preview" className="w-20 h-20 object-cover rounded-full" />
                  ) : (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setIcon)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-6-4l-4-4m0 0l4-4m-4 4h12" />
                      </svg>
                      <span className="text-sm text-gray-500">Upload Image</span>
                    </>
                  )}
                </div>
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Thumbnail <span className="text-red-500">* (Ratio 1:1)</span>
                </label>
                <div className="relative border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-40">
                  {thumbnail ? (
                    <img src={thumbnail} alt="Thumbnail Preview" className="w-20 h-20 object-cover rounded-full" />
                  ) : (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setThumbnail)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-6-4l-4-4m0 0l4-4m-4 4h12" />
                      </svg>
                      <span className="text-sm text-gray-500">Upload Image</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
          >
            Add Module
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBusinessModule;
