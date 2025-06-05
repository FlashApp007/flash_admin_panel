import React, { useState } from "react";

const collectFromOptions = ["Deliveryman", "Store"];
const storeOptions = ["Click & Collect", "Store 2"];
const deliverymanOptions = ["Jhon Doe", "Thomas Joe"];
const paymentMethods = ["Card", "Cash"];

const transactionHistory = [
  {
    id: 1,
    collectFrom: "Click & Collect",
    type: "STORE",
    receivedAt: "27 Nov 2023 01:50:pm",
    amount: "$ 433.64",
    reference: "Store collect cash payments",
  },
  {
    id: 2,
    collectFrom: "Jhon Doe",
    type: "DELIVERYMAN",
    receivedAt: "27 Nov 2023 12:43:pm",
    amount: "$ 10,406.07",
    reference: "Deliveryman collect cash payments",
  },
  {
    id: 3,
    collectFrom: "Jhon Doe",
    type: "DELIVERYMAN",
    receivedAt: "27 Nov 2023 12:40:pm",
    amount: "$ 6,400.17",
    reference: "Deliveryman collect cash payments",
  },
  {
    id: 4,
    collectFrom: "Thomas Joe",
    type: "DELIVERYMAN",
    receivedAt: "29 Sep 2022 03:17:pm",
    amount: "$ 600.00",
    reference: "7196",
  },
  {
    id: 5,
    collectFrom: "Jhon Doe",
    type: "DELIVERYMAN",
    receivedAt: "29 Sep 2022 03:15:pm",
    amount: "$ 900.00",
    reference: "12",
  },
];

const CollectCashTransaction: React.FC = () => {
  const [collectFrom, setCollectFrom] = useState("Deliveryman");
  const [store, setStore] = useState("");
  const [deliveryman, setDeliveryman] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="inline-block bg-primary-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Collect Cash Transaction
      </h1>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Collect From</label>
            <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm" value={collectFrom} onChange={e => setCollectFrom(e.target.value)}>
              {collectFromOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Store</label>
            <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm" value={store} onChange={e => setStore(e.target.value)}>
              <option value="">Select store</option>
              {storeOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Deliveryman</label>
            <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm" value={deliveryman} onChange={e => setDeliveryman(e.target.value)}>
              <option value="">Select deliveryman</option>
              {deliverymanOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Payment Method</label>
            <input className="w-full border border-gray-300 rounded px-2 py-2 text-sm" placeholder="Ex : Card" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Reference</label>
            <input className="w-full border border-gray-300 rounded px-2 py-2 text-sm" placeholder="Ex : Reference" value={reference} onChange={e => setReference(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Amount $</label>
            <input className="w-full border border-gray-300 rounded px-2 py-2 text-sm" placeholder="Ex : 1000" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-2">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded font-medium">Reset</button>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-medium">Collect Cash</button>
        </div>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg font-medium">Transaction History</span>
        <span className="bg-gray-200 px-2 py-0.5 rounded text-sm">{transactionHistory.length}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div></div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ex: Referance"
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-primary-400"
            style={{ width: 200 }}
            value={search}
            onChange={e => setSearch(e.target.value)}
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
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600 text-sm">
              <th className="py-3 px-4 font-medium">SL</th>
              <th className="py-3 px-4 font-medium">Collect From</th>
              <th className="py-3 px-4 font-medium">Type</th>
              <th className="py-3 px-4 font-medium">Received At</th>
              <th className="py-3 px-4 font-medium">Amount</th>
              <th className="py-3 px-4 font-medium">Reference</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((row, idx) => (
              <tr key={row.id} className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4 text-blue-600 underline cursor-pointer">{row.collectFrom}</td>
                <td className="py-3 px-4">{row.type}</td>
                <td className="py-3 px-4">{row.receivedAt}</td>
                <td className="py-3 px-4">{row.amount}</td>
                <td className="py-3 px-4">{row.reference}</td>
                <td className="py-3 px-4">
                  <button className="bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-full p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export default CollectCashTransaction;
