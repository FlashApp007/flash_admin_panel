import React, { useState } from 'react';

const orders = [
  {
    id: '100094',
    date: '27 Nov 2023 01:35pm',
    customer: 'MS 123',
    contact: '8***********',
    amount: '$ 100.00',
    paid: true,
    status: 'Confirmed',
  },
  {
    id: '100070',
    date: '25 Sep 2023 11:04am',
    customer: 'Sakef Ameer Prodhan',
    contact: '8***********',
    amount: '$ 100.00',
    paid: false,
    status: 'Handover',
  },
];

const OngoingOrders = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🗂️</span>
          <span className="font-semibold text-base">On Going Orders</span>
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
              Filters
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
                <th className="px-3 py-2 text-left font-medium">Total Amount</th>
                <th className="px-3 py-2 text-left font-medium">Order Status</th>
                <th className="px-3 py-2 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order.id} className="bg-white border-b last:border-b-0">
                  <td className="px-3 py-2 text-left whitespace-nowrap">{idx + 1}</td>
                  <td className="px-3 py-2 text-left whitespace-nowrap">
                    <a href="#" className="text-teal-600 font-medium hover:underline">{order.id}</a>
                  </td>
                  <td className="px-3 py-2 text-left whitespace-nowrap">{order.date}</td>
                  <td className="px-3 py-2 text-left whitespace-nowrap">
                    <span className="block text-[#1b2c48] font-medium">{order.customer}</span>
                    <span className="block text-gray-400 text-xs">{order.contact}</span>
                  </td>
                  <td className="px-3 py-2 text-left whitespace-nowrap">
                    <span>{order.amount}</span>
                    <br />
                    <span className={order.paid ? 'text-green-600 text-xs' : 'text-red-500 text-xs'}>
                      {order.paid ? 'Paid' : 'Unpaid'}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-left whitespace-nowrap">
                    {order.status === 'Confirmed' ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-600 border border-teal-200">
                        Confirmed
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-200">
                        Handover
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center whitespace-nowrap">
                    <div className="flex gap-2 justify-center">
                      <button className="p-1 rounded hover:bg-gray-100 text-orange-500 border border-orange-100" title="View">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-1 rounded hover:bg-red-50 text-teal-600 border border-teal-100" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

export default OngoingOrders;

