import React, { useState } from "react";

const tabs = [
  { label: "All" },
  { label: "Pending" },
  { label: "Processing" },
  { label: "Completed" },
  { label: "Partially completed" },
  { label: "Canceled" },
];

type Disbursement = {
  id: number;
  status: string;
  createdAt: string;
  totalAmount: string;
};

const dummyData: Record<string, Disbursement[]> = {
  All: [
    {
      id: 1002,
      status: "Pending",
      createdAt: "27 Nov 2023 12:44:pm",
      totalAmount: "$ 8,308.86",
    },
  ],
  Pending: [
    {
      id: 2003,
      status: "Pending",
      createdAt: "02 May 2024 10:10:am",
      totalAmount: "$ 1,500.00",
    },
  ],
  Processing: [
    {
      id: 3004,
      status: "Processing",
      createdAt: "20 Apr 2024 08:00:am",
      totalAmount: "$ 2,100.00",
    },
  ],
  Completed: [
    {
      id: 4005,
      status: "Completed",
      createdAt: "10 Mar 2024 09:30:am",
      totalAmount: "$ 5,000.00",
    },
  ],
  "Partially completed": [
    {
      id: 5006,
      status: "Partially completed",
      createdAt: "05 Feb 2024 07:15:am",
      totalAmount: "$ 750.00",
    },
  ],
  Canceled: [
    {
      id: 6007,
      status: "Canceled",
      createdAt: "01 Jan 2024 06:45:am",
      totalAmount: "$ 0.00",
    },
  ],
};

const statusStyles: Record<string, string> = {
  Pending: "bg-blue-100 text-blue-600 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium ml-2",
  Processing: "bg-purple-100 text-purple-600 border border-purple-200 px-2 py-0.5 rounded text-xs font-medium ml-2",
  Completed: "bg-green-100 text-green-600 border border-green-200 px-2 py-0.5 rounded text-xs font-medium ml-2",
  "Partially completed": "bg-yellow-100 text-yellow-600 border border-yellow-200 px-2 py-0.5 rounded text-xs font-medium ml-2",
  Canceled: "bg-red-100 text-red-600 border border-red-200 px-2 py-0.5 rounded text-xs font-medium ml-2",
};

const DeliverymanDisbursement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const data = dummyData[activeTab] || [];

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
              d="M3 10h18M6 10V7a6 6 0 1112 0v3m-6 8a2 2 0 002-2H8a2 2 0 002 2z"
            />
          </svg>
        </span>
        Deliveryman Disbursement
      </h1>
      <div className="flex gap-6 mt-4 mb-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`py-2 px-1 text-sm font-medium focus:outline-none transition-colors duration-200 border-b-2 ${
              activeTab === tab.label
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-primary-500"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {data.length === 0 ? (
          <div className="text-gray-400 text-center py-10">No disbursements found.</div>
        ) : (
          data.map((disb: Disbursement) => (
            <div
              key={disb.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
            >
              <div>
                <div className="font-semibold text-base">
                  Disbursement # {disb.id}
                  <span className={statusStyles[disb.status] || ""}>{disb.status}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Created at {disb.createdAt}
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-sm text-gray-500">
                  Total amount : <span className="font-semibold text-lg text-gray-900">{disb.totalAmount}</span>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded font-medium text-sm shadow-sm transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DeliverymanDisbursement;
