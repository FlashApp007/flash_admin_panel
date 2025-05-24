import React from "react";

const orders = [
  {
    id: "100016",
    date: "23 Mar 2022 03:20:pm",
    customer: "Mehedi Hasan",
    phone: "8*********",
    store: "Health Life",
    amount: "$ 668.25",
    paid: false,
    status: "Accepted",
    delivery: "Home Delivery",
  },
  {
    id: "100010",
    date: "23 Mar 2022 09:46:am",
    customer: "Ashek Eishe",
    phone: "8*********",
    store: "Health Life",
    amount: "$ 26,047.86",
    paid: false,
    status: "Processing",
    delivery: "Home Delivery",
  },
];

const statusColor = {
  Accepted: "bg-red-100 text-red-500 border border-red-200",
  Processing: "bg-yellow-100 text-yellow-600 border border-yellow-200",
};

const OngoingOrders: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex items-center mb-4">
        <span className="text-lg mr-2">🗒️</span>
        <h2 className="text-lg font-semibold text-gray-800">On Going Orders</h2>
        <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">2</span>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div></div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ex: 10010"
              className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">🔍</button>
            <button className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium flex items-center">
              <span className="mr-1">⬇️</span> Export
            </button>
            <button className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium flex items-center">
              <span className="mr-1">⚙️</span> Filters
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2 px-3 font-medium">Sl</th>
                <th className="py-2 px-3 font-medium">Order Id</th>
                <th className="py-2 px-3 font-medium">Order Date</th>
                <th className="py-2 px-3 font-medium">Customer Information</th>
                <th className="py-2 px-3 font-medium">Store</th>
                <th className="py-2 px-3 font-medium">Total Amount</th>
                <th className="py-2 px-3 font-medium">Order Status</th>
                <th className="py-2 px-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-2 px-3">{idx + 1}</td>
                  <td className="py-2 px-3 text-blue-600 font-semibold cursor-pointer hover:underline">{order.id}</td>
                  <td className="py-2 px-3">{order.date}</td>
                  <td className="py-2 px-3">
                    <div>{order.customer}</div>
                    <div className="text-green-700 text-xs">{order.phone}</div>
                  </td>
                  <td className="py-2 px-3">{order.store}</td>
                  <td className="py-2 px-3">
                    <div>{order.amount}</div>
                    <div className="text-pink-600 text-xs">Unpaid</div>
                  </td>
                  <td className="py-2 px-3">
                    <div
                      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-1 ${statusColor[order.status]}`}
                    >
                      {order.status}
                    </div>
                    <div className="text-xs text-gray-600">{order.delivery}</div>
                  </td>
                  <td className="py-2 px-3 flex space-x-2">
                    <button
                      className="bg-orange-100 text-orange-500 p-1 rounded hover:bg-orange-200"
                      title="View"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                    <button
                      className="bg-teal-100 text-teal-600 p-1 rounded hover:bg-teal-200"
                      title="Download"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-9m0 9l-3-3m3 3l3-3m6 6.75A2.25 2.25 0 0117.25 21H6.75A2.25 2.25 0 014.5 18.75v-12A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v12z" />
                      </svg>
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
