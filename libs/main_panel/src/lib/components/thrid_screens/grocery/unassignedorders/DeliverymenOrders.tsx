import React from "react";

const orders = [
  {
    id: "100086",
    date: "19 Oct 2023 04:59pm",
    customer: "Mr. Jhon parker",
    phone: "8*********",
    store: "Family supermarket",
    amount: "$ 868.00",
    payment: "Unpaid",
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100085",
    date: "19 Oct 2023 04:57pm",
    customer: "bappy",
    phone: "8*********",
    store: "Family supermarket",
    amount: "$ 868.00",
    payment: "Paid",
    status: "Confirmed",
    delivery: "Home Delivery",
  },
  {
    id: "100084",
    date: "19 Oct 2023 04:57pm",
    customer: "Mr. Jhon parker",
    phone: "8*********",
    store: "Online market",
    amount: "$ 785.60",
    payment: "Paid",
    status: "Processing",
    delivery: "Home Delivery",
  },
  {
    id: "100082",
    date: "19 Oct 2023 04:52pm",
    customer: "bappy",
    phone: "8*********",
    store: "Online market",
    amount: "$ 692.80",
    payment: "Unpaid",
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100081",
    date: "19 Oct 2023 04:29pm",
    customer: "PG Test",
    phone: "8*********",
    store: "Online market",
    amount: "$ 692.80",
    payment: "Unpaid",
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100079",
    date: "19 Oct 2023 04:22pm",
    customer: "Mr. Jhon parker",
    phone: "8*********",
    store: "Organic Shop",
    amount: "$ 526.00",
    payment: "Unpaid",
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100078",
    date: "19 Oct 2023 04:21pm",
    customer: "Mr. Jhon parker",
    phone: "8*********",
    store: "SK General Store",
    amount: "$ 2,220.00",
    payment: "Unpaid",
    status: "Pending",
    delivery: "Home Delivery",
  },
  {
    id: "100077",
    date: "19 Oct 2023 04:20pm",
    customer: "bappy",
    phone: "8*********",
    store: "Online market",
    amount: "$ 692.80",
    payment: "Unpaid",
    status: "Pending",
    delivery: "Home Delivery",
  },
];

const statusStyles: Record<string, string> = {
  Pending: "bg-blue-100 text-blue-500",
  Confirmed: "bg-green-100 text-green-600",
  Processing: "bg-orange-100 text-orange-500",
};

const paymentStyles: Record<string, string> = {
  Paid: "text-green-500 font-semibold text-xs",
  Unpaid: "text-pink-500 font-semibold text-xs",
};

const DeliverymenOrders: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="icon"
          className="w-5 h-5 mr-2"
        />
        <h1 className="text-base font-semibold text-gray-800 mr-2">Searching For Deliverymen Orders</h1>
        <span className="bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs font-semibold">17</span>
      </div>
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Ex: 10010"
            className="border border-gray-300 rounded px-2 py-1 text-xs w-40 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs font-medium flex items-center gap-1">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path stroke="#6B7280" strokeWidth="2" d="M21 21l-4.35-4.35m1.1-5.4A7.25 7.25 0 1110.75 3a7.25 7.25 0 017.25 7.25z"/></svg>
            Search
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs font-medium flex items-center gap-1">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path stroke="#6B7280" strokeWidth="2" d="M12 5v14m7-7H5"/></svg>
            Export
          </button>
          <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs font-medium flex items-center gap-1">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path stroke="#6B7280" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18"/></svg>
            Filters
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-xs text-gray-700">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="py-2 px-3 font-semibold">Sl</th>
              <th className="py-2 px-3 font-semibold">Order Id</th>
              <th className="py-2 px-3 font-semibold">Order Date</th>
              <th className="py-2 px-3 font-semibold">Customer Information</th>
              <th className="py-2 px-3 font-semibold">Store</th>
              <th className="py-2 px-3 font-semibold">Total Amount</th>
              <th className="py-2 px-3 font-semibold">Order Status</th>
              <th className="py-2 px-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{idx + 1}</td>
                <td className="py-2 px-3 text-blue-600 font-semibold hover:underline cursor-pointer">{order.id}</td>
                <td className="py-2 px-3">{order.date}</td>
                <td className="py-2 px-3">
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-xs text-blue-600">{order.phone}</div>
                </td>
                <td className="py-2 px-3">{order.store}</td>
                <td className="py-2 px-3">
                  <div>{order.amount}</div>
                  <div className={paymentStyles[order.payment]}>{order.payment}</div>
                </td>
                <td className="py-2 px-3">
                  <div className={`inline-block px-2 py-0.5 rounded ${statusStyles[order.status]} text-xs font-semibold mb-1`}>
                    {order.status}
                  </div>
                  <div className="text-xs text-gray-700">{order.delivery}</div>
                </td>
                <td className="py-2 px-3 flex gap-2">
                  <button className="bg-orange-100 text-orange-500 rounded p-1 hover:bg-orange-200" title="View">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#F59E42" strokeWidth="2" d="M12 5c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7zm0 10a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  </button>
                  <button className="bg-gray-100 text-gray-500 rounded p-1 hover:bg-gray-200" title="Edit">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#6B7280" strokeWidth="2" d="M16.862 5.487a2.13 2.13 0 113.013 3.013l-9.35 9.35a2 2 0 01-.924.524l-4.06.93.93-4.06a2 2 0 01.524-.924l9.35-9.35z"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliverymenOrders;
