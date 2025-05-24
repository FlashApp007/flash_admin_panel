import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiSearch, FiPlus } from 'react-icons/fi';

function OfflinePaymentMethodSetup() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      name: 'Bank',
      info: {
        bankName: 'ACME Bank',
        branchName: 'New York',
        accountName: 'Josh Smith',
        accountNumber: 'xxxxxxxxxxxxxxxxxx'
      },
      requiredInfo: ['Name', 'Date', 'Transaction Id'],
      status: true
    }
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleToggleStatus = (id) => {
    setPaymentMethods(
      paymentMethods.map(method => 
        method.id === id ? { ...method, status: !method.status } : method
      )
    );
  };

  const handleEdit = (id) => {
    console.log('Edit payment method with id:', id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log('Delete payment method with id:', id);
    // Implement delete functionality
  };

  const handleAddNew = () => {
    console.log('Add new payment method');
    // Implement add new functionality
  };

  // Filter payment methods based on active tab
  const filteredMethods = paymentMethods.filter(method => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Active') return method.status;
    if (activeTab === 'Inactive') return !method.status;
    return true;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="mr-2">📦</span> Offline Payment Method Setup
        </h1>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['All', 'Active', 'Inactive'].map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`${
                activeTab === tab
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Search and Add New */}
      <div className="flex justify-between mb-6">
        <div className="flex">
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:ring-teal-500 focus:border-teal-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search by name"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleAddNew}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <FiPlus className="mr-2 -ml-1 h-5 w-5" />
          Add New Method
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SL
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Info
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Required Info From Customer
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredMethods.map((method, index) => (
              <tr key={method.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {method.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div>Back Name : {method.info.bankName}</div>
                  <div>Bank Branch : {method.info.branchName}</div>
                  <div>Account Name : {method.info.accountName}</div>
                  <div>Account Number : {method.info.accountNumber}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {method.requiredInfo.join(' | ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative inline-block w-12 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      checked={method.status}
                      onChange={() => handleToggleStatus(method.id)}
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      id={`status-${method.id}`}
                    />
                    <label
                      htmlFor={`status-${method.id}`}
                      className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                        method.status ? 'bg-teal-400' : 'bg-gray-300'
                      }`}
                    ></label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(method.id)}
                    className="text-teal-600 hover:text-teal-900 mr-3"
                  >
                    <FiEdit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(method.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OfflinePaymentMethodSetup;