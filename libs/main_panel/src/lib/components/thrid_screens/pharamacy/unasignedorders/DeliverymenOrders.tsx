import React from "react";

const orders = [
  {
    id: "100074",
    date: "18 Oct 2023 03:43am",
    customer: "baopy3 dev",
    phone: "+8***********",
    store: "Daily Care",
    amount: "$ 6,812.87",
    unpaid: true,
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100032",
    date: "29 Sep 2022 12:57pm",
    customer: "Tomas Porter",
    phone: "+8***********",
    store: "Health Life",
    amount: "$ 25,768.96",
    unpaid: true,
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100024",
    date: "29 Sep 2022 11:56am",
    customer: "Marjahan Sultana",
    phone: "+8***********",
    store: "Health Life",
    amount: "$ 27.50",
    unpaid: true,
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100020",
    date: "23 Mar 2022 05:39pm",
    customer: "Hh Hh",
    phone: "+8***********",
    store: "Health Life",
    amount: "$ 25,775.97",
    unpaid: true,
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100011",
    date: "23 Mar 2022 09:56am",
    customer: "Jhon Af",
    phone: "+8***********",
    store: "Daily Care",
    amount: "$ 3,091.81",
    unpaid: true,
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100010",
    date: "23 Mar 2022 09:46am",
    customer: "Ashek Elahe",
    phone: "+8***********",
    store: "Health Life",
    amount: "$ 26,047.86",
    unpaid: true,
    status: "Processing",
    delivery: "Home Delivery",
  },
  {
    id: "100007",
    date: "23 Mar 2022 09:39am",
    customer: "Ashek Elahe",
    phone: "+8***********",
    store: "Health Life",
    amount: "$ 25,792.11",
    unpaid: true,
    status: "Pending",
    delivery: "Home Delivery",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-blue-100 text-blue-600",
  Processing: "bg-yellow-100 text-yellow-600",
};

const OngoingOrders: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🗂️</span>
        <h1 className="text-lg font-semibold text-gray-800 mr-2">Searching For Deliverymen Orders</h1>
        <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded">7</span>
      </div>
      {/* Table Card */}
      <div className="bg-white rounded-lg shadow p-4">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
          <div></div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Ex: 10010"
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="bg-white border border-gray-300 rounded px-3 py-1 text-xs flex items-center gap-1 hover:bg-gray-100">
              <span>Export</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
            </button>
            <button className="bg-white border border-gray-300 rounded px-3 py-1 text-xs flex items-center gap-1 hover:bg-gray-100">
              <span>Filters</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 14.414V19a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="text-gray-500 text-left bg-gray-50">
                <th className="py-2 px-2 font-semibold">Sl</th>
                <th className="py-2 px-2 font-semibold">Order Id</th>
                <th className="py-2 px-2 font-semibold">Order Date</th>
                <th className="py-2 px-2 font-semibold">Customer Information</th>
                <th className="py-2 px-2 font-semibold">Store</th>
                <th className="py-2 px-2 font-semibold">Total Amount</th>
                <th className="py-2 px-2 font-semibold">Order Status</th>
                <th className="py-2 px-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order.id} className="border-b last:border-b-0 hover:bg-blue-50">
                  <td className="py-2 px-2">{idx + 1}</td>
                  <td className="py-2 px-2">
                    <a href="#" className="text-blue-600 hover:underline font-medium">{order.id}</a>
                  </td>
                  <td className="py-2 px-2 whitespace-nowrap">{order.date}</td>
                  <td className="py-2 px-2">
                    <div>{order.customer}</div>
                    <div className="text-green-600">{order.phone}</div>
                  </td>
                  <td className="py-2 px-2">{order.store}</td>
                  <td className="py-2 px-2">
                    <div>{order.amount}</div>
                    {order.unpaid && <div className="text-xs text-red-500">Unpaid</div>}
                  </td>
                  <td className="py-2 px-2">
                    <div className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-1 ${statusColors[order.status] || "bg-gray-100 text-gray-500"}`}>{order.status}</div>
                    <div className="text-xs text-gray-600">{order.delivery}</div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex gap-2">
                      <button className="bg-orange-100 text-orange-600 p-1 rounded hover:bg-orange-200" title="Edit">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6M3 17v4h4l10.293-10.293a1 1 0 000-1.414l-3.586-3.586a1 1 0 00-1.414 0L3 13v4z" />
                        </svg>
                      </button>
                      <button className="bg-cyan-100 text-cyan-600 p-1 rounded hover:bg-cyan-200" title="View">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.418 8-9 8s-9-4-9-8 4.418-8 9-8 9 4 9 8z" />
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
