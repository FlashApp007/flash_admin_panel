import React, { useState } from 'react';

const orders: any[] = []; // Empty for 'No Data Found' state

const ParcelOrdersAlt = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📦</span>
          <span className="font-semibold text-base">Parcel Orders</span>
          <span className="ml-2 bg-gray-100 text-xs px-2 py-1 rounded">{orders.length}</span>
        </div>
        {/* Search/Export/Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mb-2">
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Ex: 10010"
              className="border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-48"
            />
            <button className="bg-teal-600 text-white px-4 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
              </svg>
            </button>
            <div className="relative">
              <button className="bg-white border border-gray-200 px-4 py-2 rounded flex items-center gap-1 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2M12 12v4m0 0h-4m4 0h4" />
                </svg>
                Export
              </button>
            </div>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded flex items-center gap-1 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              Filter
            </button>
          </div>
        </div>
        {/* Orders Table */}
        <div className="bg-gray-50 rounded-xl p-2 mt-2">
          <table className="min-w-full bg-transparent rounded-xl text-xs">
            <thead>
              <tr className="bg-[#f7fafd] text-gray-700">
                <th className="px-3 py-2 text-left font-medium">Sl</th>
                <th className="px-3 py-2 text-left font-medium">Order Id</th>
                <th className="px-3 py-2 text-left font-medium">Order Date</th>
                <th className="px-3 py-2 text-left font-medium">Customer Information</th>
                <th className="px-3 py-2 text-left font-medium">Parcel Category</th>
                <th className="px-3 py-2 text-left font-medium">Payment By</th>
                <th className="px-3 py-2 text-left font-medium">Total Amount</th>
                <th className="px-3 py-2 text-left font-medium">Order Status</th>
                <th className="px-3 py-2 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={9}>
                  <div className="flex flex-col items-center justify-center py-16">
                    <svg width="96" height="96" fill="none" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="48" cy="48" r="48" fill="#F7FAFD"/>
                      <path d="M48 32c-8 0-13 7-13 14 0 4 2 7 5 8v4c0 2 2 4 4 4h8c2 0 4-2 4-4v-4c3-1 5-4 5-8 0-7-5-14-13-14z" stroke="#B4B9C3" strokeWidth="2"/>
                      <circle cx="44" cy="44" r="2" fill="#B4B9C3"/>
                      <circle cx="52" cy="44" r="2" fill="#B4B9C3"/>
                    </svg>
                    <span className="mt-4 text-gray-400 text-sm font-medium">No Data Found</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParcelOrdersAlt;
