import React, { useState } from 'react';

function ReactSiteSetup() {
  const [licenseCode, setLicenseCode] = useState('');
  const [domain, setDomain] = useState('');

  const handleSave = () => {
    console.log({
      licenseCode,
      domain
    });
    // Implement save functionality
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">React Site Setup</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* React License Code */}
        <div>
          <label htmlFor="license-code" className="block text-sm font-medium text-gray-700 mb-2">
            React License Code
          </label>
          <input
            type="text"
            id="license-code"
            placeholder="React license code"
            value={licenseCode}
            onChange={(e) => setLicenseCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* React Domain */}
        <div>
          <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
            React Domain
          </label>
          <input
            type="text"
            id="domain"
            placeholder="React Domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ReactSiteSetup;