import React from "react";

const disbursement = {
  id: 1001,
  status: "Pending",
  createdAt: "27 Nov 2023 12:43:pm",
  totalAmount: "$ 940.91",
};

const disbursementRows = [
  {
    id: 1,
    name: "Click & Collect",
    amount: "$ 940.91",
    paymentMethod: "Cash",
    status: "Pending",
  },
];

const statusStyles: Record<string, string> = {
  Pending:
    "bg-blue-100 text-blue-600 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium ml-2",
};

const DisbursementDetails: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-2 flex items-center gap-2">
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
              d="M3 10h18M6 10V7a6 6 0 1112 0v3m-6 8a2 2 0 002-2H8a2 2 0 002 2z"
            />
          </svg>
        </span>
        Disbursement Details
      </h1>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-base">
            Disbursement # {disbursement.id}
            <span className={statusStyles[disbursement.status] || ""}>{disbursement.status}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Created at {disbursement.createdAt}
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="text-sm text-gray-500">
            Total amount : <span className="font-semibold text-lg text-gray-900">{disbursement.totalAmount}</span>
          </div>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
            <option>All modules</option>
            {/* Add more options if needed */}
          </select>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
            <option>All stores</option>
            {/* Add more options if needed */}
          </select>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
            <option>All payment methods</option>
            {/* Add more options if needed */}
          </select>
        </div>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg font-medium">Total Disbursements</span>
        <span className="bg-gray-200 px-2 py-0.5 rounded text-sm">1</span>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600 text-sm">
              <th className="py-3 px-4 font-medium">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4 font-medium">Sl</th>
              <th className="py-3 px-4 font-medium">Store Info</th>
              <th className="py-3 px-4 font-medium">Disburse Amount</th>
              <th className="py-3 px-4 font-medium">Payment Method</th>
              <th className="py-3 px-4 font-medium">Status</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {disbursementRows.map((row, idx) => (
              <tr key={row.id} className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4">
                  <input type="checkbox" />
                </td>
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4 font-medium">{row.name}</td>
                <td className="py-3 px-4">{row.amount}</td>
                <td className="py-3 px-4">{row.paymentMethod}</td>
                <td className="py-3 px-4">
                  <span className={statusStyles[row.status] || ""}>{row.status}</span>
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="bg-teal-50 hover:bg-teal-100 text-teal-600 rounded p-1" title="View">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="bg-red-50 hover:bg-red-100 text-red-500 rounded p-1" title="Reject">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button className="bg-green-50 hover:bg-green-100 text-green-500 rounded p-1" title="Approve">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end mt-4 gap-2">
        <input
          type="text"
          placeholder="Search by store info"
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-primary-400"
          style={{ width: 220 }}
        />
        <button className="border border-gray-300 rounded px-3 py-1 text-sm flex items-center gap-1 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </button>
        <button className="border border-gray-300 rounded px-3 py-1 text-sm flex items-center gap-1 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Export
        </button>
      </div>
    </div>
  );
};

export default DisbursementDetails;
