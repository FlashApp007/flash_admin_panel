import React from "react";

const orders = [
  {
    id: "100085",
    date: "19 Oct 2023 04:57pm",
    customer: "bappy",
    email: "b*********",
    store: "Family supermarket",
    amount: "$ 868.00",
    paid: "Paid",
    status: "Confirmed",
    delivery: "Home Delivery",
  },
  {
    id: "100084",
    date: "19 Oct 2023 04:57pm",
    customer: "Mr. Jhon parker",
    email: "B*********",
    store: "Online market",
    amount: "$ 785.80",
    paid: "Paid",
    status: "Processing",
    delivery: "Home Delivery",
  },
  {
    id: "100073",
    date: "17 Oct 2023 01:16pm",
    customer: "bappy3 dev",
    email: "B*********",
    store: "Vegan Market",
    amount: "$ 22,745.61",
    paid: "Paid",
    status: "Confirmed",
    delivery: "Home Delivery",
  },
  {
    id: "100067",
    date: "22 Aug 2023 11:03am",
    customer: "Mehedi Hasan",
    email: "B*********",
    store: "Sri General Store",
    amount: "$ 293.30",
    paid: "Paid",
    status: "Confirmed",
    delivery: "Home Delivery",
  },
  {
    id: "100038",
    date: "29 Sep 2022 01:01pm",
    customer: "Tomas Porter",
    email: "B*********",
    store: "Vegan Market",
    amount: "$ 8,911.97",
    paid: "Paid",
    status: "Processing",
    delivery: "Home Delivery",
  },
  {
    id: "100026",
    date: "29 Sep 2022 12:21pm",
    customer: "Jerry Jose",
    email: "B*********",
    store: "Orange",
    amount: "$ 627.00",
    paid: "Unpaid",
    status: "Processing",
    delivery: "Home Delivery",
  },
];

const statusColors = {
  Confirmed: "bg-blue-100 text-blue-600 border-blue-200",
  Processing: "bg-orange-100 text-orange-600 border-orange-200",
};

const paidColors = {
  Paid: "text-pink-500",
  Unpaid: "text-red-500",
};

const OngoingOrders: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex items-center mb-4">
        <span className="text-xl mr-2">🗑️</span>
        <h1 className="text-lg font-semibold text-gray-800 mr-2">On Going Orders</h1>
        <span className="bg-gray-200 px-2 py-0.5 rounded text-xs font-medium">6</span>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div></div>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Ex: 10010"
              className="border border-gray-300 rounded px-3 py-1 text-sm w-full md:w-52 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="ml-2 px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm font-medium border border-blue-100 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg>
              Search
            </button>
            <button className="ml-2 px-3 py-1 bg-green-50 text-green-600 rounded text-sm font-medium border border-green-100 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
              Export
            </button>
            <button className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium border border-gray-200 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/></svg>
              Filters
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="py-2 px-3">Sl</th>
                <th className="py-2 px-3">Order Id</th>
                <th className="py-2 px-3">Order Date</th>
                <th className="py-2 px-3">Customer Information</th>
                <th className="py-2 px-3">Store</th>
                <th className="py-2 px-3">Total Amount</th>
                <th className="py-2 px-3">Order Status</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {orders.map((order, idx) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-2 px-3">{idx + 1}</td>
                  <td className="py-2 px-3 text-blue-600 font-semibold cursor-pointer hover:underline">{order.id}</td>
                  <td className="py-2 px-3">{order.date}</td>
                  <td className="py-2 px-3">
                    <div>{order.customer}</div>
                    <div className="text-xs text-gray-400">{order.email}</div>
                  </td>
                  <td className="py-2 px-3">{order.store}</td>
                  <td className="py-2 px-3">
                    <div>{order.amount}</div>
                    <div className={`text-xs ${paidColors[order.paid]}`}>{order.paid}</div>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`inline-block px-2 py-0.5 rounded border text-xs font-medium ${statusColors[order.status]} mb-1`}>
                      {order.status}
                    </span>
                    <div className="text-xs text-gray-600">{order.delivery}</div>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex gap-2">
                      <button className="bg-orange-50 border border-orange-200 text-orange-500 p-1 rounded hover:bg-orange-100" title="View">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      </button>
                      <button className="bg-cyan-50 border border-cyan-200 text-cyan-500 p-1 rounded hover:bg-cyan-100" title="Edit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6M3 21h18"/></svg>
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
