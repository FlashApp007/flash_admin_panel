import React, { useState } from "react";

const initialWithdrawMethods = [
  {
    id: 1,
    name: "6cash",
    fields: [
      {
        name: "Account name",
        type: "String",
        placeholder: "Enter your account name",
        required: true,
      },
    ],
    active: true,
    default: false,
  },
  {
    id: 2,
    name: "Card",
    fields: [
      {
        name: "Account name",
        type: "String",
        placeholder: "Enter your card holder name",
        required: true,
      },
    ],
    active: true,
    default: true,
  },
];

const WithdrawMethodList: React.FC = () => {
  const [search, setSearch] = useState("");
  const [withdrawMethods, setWithdrawMethods] = useState(initialWithdrawMethods);

  const handleToggleActive = (id: number) => {
    setWithdrawMethods(methods =>
      methods.map(m =>
        m.id === id ? { ...m, active: !m.active } : m
      )
    );
  };

  const handleToggleDefault = (id: number) => {
    setWithdrawMethods(methods =>
      methods.map(m =>
        m.id === id
          ? { ...m, default: true }
          : { ...m, default: false }
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="inline-block bg-primary-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Withdraw Method List
      </h1>
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Ex : search store name"
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-primary-400"
          style={{ width: 220 }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded font-medium text-sm shadow-sm transition-colors duration-200">
          + Add New Method
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600 text-sm">
              <th className="py-3 px-4 font-medium">SL</th>
              <th className="py-3 px-4 font-medium">Method Name</th>
              <th className="py-3 px-4 font-medium">Method Fields</th>
              <th className="py-3 px-4 font-medium">Active Status</th>
              <th className="py-3 px-4 font-medium">Default Method</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {withdrawMethods.map((method, idx) => (
              <tr key={method.id} className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4 font-medium">{method.name}</td>
                <td className="py-3 px-4">
                  <div className="mb-1">
                    <span className="font-semibold">Name:</span> {method.fields[0].name}
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold">Type:</span> {method.fields[0].type}
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold">Placeholder:</span> {method.fields[0].placeholder}
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold">Required</span>
                  </div>
                  <div className="text-teal-600 font-medium text-xs cursor-pointer flex items-center gap-1">
                    See All <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={method.active}
    onChange={() => handleToggleActive(method.id)}
  />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-teal-500 transition-colors duration-200 relative">
  <span
    className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 peer-checked:left-6 peer-checked:translate-x-0 left-1"
    style={{transition: 'left 0.2s'}}
  ></span>
</div>
</label>
                </td>
                <td className="py-3 px-4">
                  <label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={method.default}
    onChange={() => handleToggleDefault(method.id)}
  />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-teal-500 transition-colors duration-200 relative">
  <span
    className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 peer-checked:left-6 peer-checked:translate-x-0 left-1"
    style={{transition: 'left 0.2s'}}
  ></span>
</div>
</label>
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="bg-teal-50 hover:bg-teal-100 text-teal-600 rounded p-1" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.293-6.293a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414L11 15l-4 1 1-4z" />
                    </svg>
                  </button>
                  <button className="bg-red-50 hover:bg-red-100 text-red-500 rounded p-1" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

export default WithdrawMethodList;
