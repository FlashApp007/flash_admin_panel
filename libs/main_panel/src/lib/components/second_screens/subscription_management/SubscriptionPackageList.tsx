import React, { useState } from 'react';

function SubscriptionPackageList() {
  // State for subscription packages
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Pro',
      price: '1,199.00',
      duration: '365 Days',
      subscribers: 3,
      status: true
    },
    {
      id: 2,
      name: 'Standard',
      price: '700.00',
      duration: '180 Days',
      subscribers: 0,
      status: true
    },
    {
      id: 3,
      name: 'Basic',
      price: '399.00',
      duration: '120 Days',
      subscribers: 0,
      status: true
    }
  ]);

  // Handle toggle status
  const handleToggleStatus = (id) => {
    setPackages(packages.map(pkg => 
      pkg.id === id ? { ...pkg, status: !pkg.status } : pkg
    ));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with breadcrumb */}
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-medium">Subscription Package List</h1>
        <span className="mx-2 text-gray-500">›</span>
      </div>

      {/* Module tabs */}
      <div className="mb-6">
        <div className="inline-flex rounded-md overflow-hidden">
          <button className="px-4 py-2 bg-teal-600 text-white text-sm">All Module</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm">Rental Module</button>
        </div>
      </div>

      {/* Overview section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-lg font-medium">Overview</h2>
            <p className="text-sm text-gray-500">See overview of all the packages earnings</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-teal-600 text-white text-sm rounded">All</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">This Year</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">This Month</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">This Week</button>
          </div>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Basic</span>
              <div className="bg-blue-100 p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">$ 798.00</div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Standard</span>
              <div className="bg-yellow-100 p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-yellow-600">$ 700.00</div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Pro</span>
              <div className="bg-blue-100 p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">$ 3,597.00</div>
          </div>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name"
              className="pl-10 pr-4 py-2 border rounded-md"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 border rounded-md flex items-center space-x-1 text-sm">
              <span>Export</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="px-3 py-2 bg-teal-600 text-white rounded-md flex items-center space-x-1 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Subscription Package</span>
            </button>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sl
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pricing
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Subscriber
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pkg.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {pkg.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $ {pkg.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pkg.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pkg.subscribers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={pkg.status}
                      onChange={() => handleToggleStatus(pkg.id)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-1">
                    <button className="p-1 bg-blue-50 text-blue-600 rounded border border-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="p-1 bg-amber-50 text-amber-600 rounded border border-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
  );
}

export default SubscriptionPackageList;