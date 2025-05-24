import React from "react";

const orders = [
  {
    id: "100101",
    date: "02 Jan 2024 05:27pm",
    customer: "Marjhan Sultana",
    phone: "+8*********",
    store: "Art Apparel",
    amount: "$ 1,550.00",
    payment: "Paid",
    status: "Out For Delivery",
    statusColor: "bg-orange-100 text-orange-600",
    deliveryType: "Home Delivery",
    deliveryColor: "text-blue-600",
    actionColor: "bg-orange-100 text-orange-500",
  },
  {
    id: "100076",
    date: "19 Oct 2023 02:25pm",
    customer: "Bappy zia",
    phone: "+8*********",
    store: "Online Shopping",
    amount: "$ 60,907.38",
    payment: "Paid",
    status: "Confirmed",
    statusColor: "bg-cyan-100 text-cyan-600",
    deliveryType: "Home Delivery",
    deliveryColor: "text-blue-600",
    actionColor: "bg-orange-100 text-orange-500",
  },
  {
    id: "100045",
    date: "29 Sep 2022 03:00pm",
    customer: "Ali Bey",
    phone: "+8*********",
    store: "Butterfly",
    amount: "$ 27,700.88",
    payment: "Unpaid",
    status: "Accepted",
    statusColor: "bg-pink-100 text-pink-600",
    deliveryType: "Home Delivery",
    deliveryColor: "text-blue-600",
    actionColor: "bg-orange-100 text-orange-500",
  },
  {
    id: "100031",
    date: "29 Sep 2022 12:50pm",
    customer: "Ellen Reyna",
    phone: "+8*********",
    store: "Orderly Fashion",
    amount: "$ 26,790.93",
    payment: "Unpaid",
    status: "",
    statusColor: "",
    deliveryType: "Home Delivery",
    deliveryColor: "text-blue-600",
    actionColor: "bg-orange-100 text-orange-500",
  },
  {
    id: "100021",
    date: "23 Mar 2022 04:56pm",
    customer: "Hh Hh",
    phone: "+8*********",
    store: "Bicycle",
    amount: "$ 3,616.22",
    payment: "Unpaid",
    status: "Out For Delivery",
    statusColor: "bg-orange-100 text-orange-600",
    deliveryType: "Home Delivery",
    deliveryColor: "text-blue-600",
    actionColor: "bg-orange-100 text-orange-500",
  },
];

const OngoingOrders: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="text-xl mr-2">📝</span>
        <h2 className="text-lg font-semibold text-gray-800 mr-2">On Going Orders</h2>
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded font-semibold">5</span>
      </div>
      {/* Card */}
      <div className="bg-white rounded-lg shadow p-4">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
          <div></div>
          <div className="flex items-center gap-2 justify-end w-full md:w-auto">
            <input
              type="text"
              placeholder="Ex: 10010"
              className="border border-gray-300 rounded px-2 py-1 text-xs w-40 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs px-3 py-1 rounded flex items-center font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M19.595 15.595A7.963 7.963 0 0016 13.126V12a4 4 0 10-8 0v1.126a7.963 7.963 0 00-3.595 2.469M15 17v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2m6 0H9" /></svg>
              Export
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded flex items-center font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
              Filters
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Sl</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Order Id</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Order Date</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Customer Information</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Store</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Total Amount</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Order Status</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">{idx + 1}</td>
                  <td className="px-3 py-2 text-blue-600 font-semibold underline cursor-pointer">{order.id}</td>
                  <td className="px-3 py-2">{order.date}</td>
                  <td className="px-3 py-2">
                    <div className="text-gray-800 font-medium">{order.customer}</div>
                    <div className="text-teal-500 text-xs">{order.phone}</div>
                  </td>
                  <td className="px-3 py-2">{order.store}</td>
                  <td className="px-3 py-2">
                    <div>{order.amount}</div>
                    <div className={`text-xs font-semibold ${order.payment === "Paid" ? "text-pink-500" : "text-orange-500"}`}>{order.payment}</div>
                  </td>
                  <td className="px-3 py-2">
                    {order.status && (
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-1 ${order.statusColor}`}>{order.status}</span>
                    )}
                    <div className={`text-xs font-semibold ${order.deliveryColor}`}>{order.deliveryType}</div>
                  </td>
                  <td className="px-3 py-2">
                    <button className="p-1 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-500" title="View">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.636 2.122-2.235 3.993-4.542 5.001C16.146 17.31 14.13 18 12 18c-2.13 0-4.146-.69-5.999-1.999C4.693 15.993 3.094 14.122 2.458 12z" /></svg>
                    </button>
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
