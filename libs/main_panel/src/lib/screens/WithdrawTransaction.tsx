import React from "react";

const transactions = [
  {
    id: 1,
    amount: "$ 736.36",
    store: "Click & Collect",
    requestTime: "27 Nov 2023 01:46:pm",
    status: "Approved",
  },
  {
    id: 2,
    amount: "$ 3,500.00",
    store: "Eorange",
    requestTime: "29 Sep 2022 03:14:pm",
    status: "Approved",
  },
  {
    id: 3,
    amount: "$ 700.00",
    store: "Eorange",
    requestTime: "29 Sep 2022 03:13:pm",
    status: "Pending",
  },
  {
    id: 4,
    amount: "$ 5,000.00",
    store: "Eorange",
    requestTime: "29 Sep 2022 03:13:pm",
    status: "Denied",
  },
  {
    id: 5,
    amount: "$ 400.00",
    store: "Eorange",
    requestTime: "29 Sep 2022 03:13:pm",
    status: "Pending",
  },
  {
    id: 6,
    amount: "$ 3,000.00",
    store: "Eorange",
    requestTime: "29 Sep 2022 03:13:pm",
    status: "Pending",
  },
];

const statusStyles: Record<string, string> = {
  Approved:
    "bg-green-100 text-green-600 border border-green-200 px-3 py-1 rounded-full text-xs font-medium",
  Pending:
    "bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium",
  Denied:
    "bg-red-100 text-red-600 border border-red-200 px-3 py-1 rounded-full text-xs font-medium",
};

const WithdrawTransaction: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-2 flex items-center gap-2">
        <span className="inline-block bg-primary-100 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        Store Withdraw Transaction
      </h1>
      <div className="flex items-center justify-between mb-4 mt-4">
        <div className="text-lg font-medium">Transaction History <span className="bg-gray-200 px-2 py-0.5 rounded text-sm">6</span></div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ex : search store name"
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-primary-400"
            style={{ width: 200 }}
          />
          <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
            <option>All</option>
            {/* Add more filter options if needed */}
          </select>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm flex items-center gap-1 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600 text-sm">
              <th className="py-3 px-4 font-medium">SL</th>
              <th className="py-3 px-4 font-medium">Amount</th>
              <th className="py-3 px-4 font-medium">Store</th>
              <th className="py-3 px-4 font-medium">Request Time</th>
              <th className="py-3 px-4 font-medium">Status</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr
                key={tx.id}
                className={
                  idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                }
              >
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4">{tx.amount}</td>
                <td className="py-3 px-4">{tx.store}</td>
                <td className="py-3 px-4">{tx.requestTime}</td>
                <td className="py-3 px-4">
                  <span className={statusStyles[tx.status] || ""}>{tx.status}</span>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-full p-2 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
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

export default WithdrawTransaction;
