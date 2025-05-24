import React, { useState } from 'react';

const initialInstructions = [
  {
    id: 1,
    text: 'Parcel contains food, make sure not to leak the food.',
    status: true,
  },
  {
    id: 2,
    text: 'Parcel have some medical equipment so be careful to handle.',
    status: true,
  },
  {
    id: 3,
    text: 'Parcel contain fragile product so take care of this.',
    status: true,
  },
];

const languages = [
  { code: 'en', label: 'English(EN)' },
  { code: 'ar', label: 'Arabic - العربية(AR)' },
];

const ParcelSettings = () => {
  const [perKm, setPerKm] = useState('');
  const [minShipping, setMinShipping] = useState('');
  const [commission, setCommission] = useState('');
  const [activeLang, setActiveLang] = useState('en');
  const [instruction, setInstruction] = useState('');
  const [instructions, setInstructions] = useState(initialInstructions);

  const handleReset = () => {
    setPerKm('');
    setMinShipping('');
    setCommission('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleAddInstruction = () => {
    if (instruction.trim() === '') return;
    setInstructions([
      ...instructions,
      {
        id: instructions.length + 1,
        text: instruction,
        status: true,
      },
    ]);
    setInstruction('');
  };

  const handleToggleStatus = (id: number) => {
    setInstructions(
      instructions.map((ins) =>
        ins.id === id ? { ...ins, status: !ins.status } : ins
      )
    );
  };

  const handleDelete = (id: number) => {
    setInstructions(instructions.filter((ins) => ins.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-2xl">🚚</span> Parcel Settings
        </h2>
        {/* Top settings form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-0" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Per Km Shipping Charge</label>
            <input
              type="text"
              value={perKm}
              onChange={(e) => setPerKm(e.target.value)}
              placeholder="Per km shipping charge"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Minimum Shipping Charge</label>
            <input
              type="text"
              value={minShipping}
              onChange={(e) => setMinShipping(e.target.value)}
              placeholder="Minimum shipping charge"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Deliveryman Commission (%)</label>
            <input
              type="text"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              placeholder="Deliveryman commission"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50"
            />
          </div>
        </form>
        <div className="flex gap-2 justify-end mt-4 mb-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded mr-2 hover:bg-gray-200"
          >
            Reset
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Submit
          </button>
        </div>
        {/* Delivery Instruction Section */}
        <div className="mt-6">
          <div className="mb-2 text-sm text-gray-700 font-medium">Add A Delivery Instruction</div>
          <div className="flex gap-6 border-b border-gray-200 mb-3 pl-1">
            <button
              className={`pb-2 px-2 border-b-2 text-sm focus:outline-none ${
                activeLang === 'en'
                  ? 'border-teal-600 text-teal-600 font-semibold'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveLang('en')}
            >
              Default
            </button>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`pb-2 px-2 border-b-2 text-sm focus:outline-none ${
                  activeLang === lang.code
                    ? 'border-teal-600 text-teal-600 font-semibold'
                    : 'border-transparent text-gray-500'
                }`}
                onClick={() => setActiveLang(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center mb-3">
            <input
              type="text"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="Ex: parcel contains document"
              className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50"
            />
            <button
              type="button"
              onClick={handleAddInstruction}
              className="px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Add Now
            </button>
          </div>
        </div>
        {/* Delivery Instruction List Table */}
        <div className="mt-8">
          <div className="text-sm text-gray-700 font-medium mb-2">Delivery Instruction List</div>
          <div className="bg-gray-50 rounded-xl p-2">
            <table className="min-w-full bg-transparent rounded-xl">
              <thead>
                <tr className="bg-[#f7fafd] text-gray-700 text-xs">
                  <th className="px-3 py-2 text-left font-medium">SL</th>
                  <th className="px-3 py-2 text-left font-medium">Instruction</th>
                  <th className="px-3 py-2 text-center font-medium">Status</th>
                  <th className="px-3 py-2 text-center font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {instructions.map((ins, idx) => (
                  <tr key={ins.id} className="bg-white border-b last:border-b-0 text-sm">
                    <td className="px-3 py-2 text-left whitespace-nowrap">{idx + 1}</td>
                    <td className="px-3 py-2 max-w-md truncate" title={ins.text}>{ins.text}</td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleToggleStatus(ins.id)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${ins.status ? 'bg-teal-500' : 'bg-gray-300'}`}
                      >
                        <span
                          className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${ins.status ? 'translate-x-4' : ''}`}
                        />
                      </button>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          className="p-1 rounded hover:bg-gray-100 text-teal-600 border border-teal-100"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a2.25 2.25 0 1 1 3.182 3.182L7.5 20.213l-4.182.455a.75.75 0 0 1-.828-.827l.455-4.182L16.862 4.487z" />
                          </svg>
                        </button>
                        <button
                          className="p-1 rounded hover:bg-red-50 text-red-600 border border-red-100"
                          title="Delete"
                          onClick={() => handleDelete(ins.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
    </div>
  );
};

export default ParcelSettings;
