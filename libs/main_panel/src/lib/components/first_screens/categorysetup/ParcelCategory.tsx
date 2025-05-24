import React, { useState } from 'react';

const languages = [
  { code: 'default', label: 'Default' },
  { code: 'en', label: 'English(EN)' },
  { code: 'ar', label: 'Arabic - العربية(AR)' },
];

const initialCategories = [
  {
    id: 3,
    name: 'Documents',
    module: 'Parcel',
    status: true,
    orders: 0,
    perKm: '$ 50.00',
    minShipping: '$ 50.00',
  },
  {
    id: 4,
    name: 'Electronics',
    module: 'Parcel',
    status: true,
    orders: 1,
    perKm: '$ 50.00',
    minShipping: '$ 50.00',
  },
];

const ParcelCategory = () => {
  const [activeLang, setActiveLang] = useState('default');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [perKm, setPerKm] = useState('');
  const [minShipping, setMinShipping] = useState('');
  const [categories, setCategories] = useState(initialCategories);

  const handleReset = () => {
    setName('');
    setDesc('');
    setImage(null);
    setPerKm('');
    setMinShipping('');
  };

  const handleAddCategory = () => {
    if (!name) return;
    console.log('Categories before update:', categories); // Debugging line
    setCategories([
      ...categories,
      {
        id: categories.length + 3,
        name,
        module: 'Parcel',
        status: true,
        orders: 0,
        perKm: perKm || '$ 0.00',
        minShipping: minShipping || '$ 0.00',
      },
    ]);
    handleReset();
  };

  const handleToggleStatus = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, status: !cat.status } : cat
      )
    );
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🚚</span>
          <span className="font-semibold text-base">Parcel Category</span>
        </div>
        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200 mb-4 mt-2 text-sm">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`pb-2 px-2 border-b-2 focus:outline-none ${
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
        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-xs text-gray-700 mb-1">Name (Default)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="New Item"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <label className="block text-xs text-gray-700 mt-4 mb-1">Short description (Default)</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder=""
              rows={3}
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 mt-1">
              <div className="flex-1">
                <label className="block text-xs text-gray-700 mb-1">Image <span className="text-xs text-red-400">* (Ratio 200*200)</span></label>
                <div className="flex items-center gap-3">
                  <label className="w-24 h-24 rounded bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer">
                    {image ? (
                      <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-full object-cover rounded" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" /></svg>
                    )}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) setImage(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex-1">
                <label className="block text-xs text-gray-700 mb-1">Per Km Shipping Charge</label>
                <input
                  type="text"
                  value={perKm}
                  onChange={(e) => setPerKm(e.target.value)}
                  placeholder="Per km shipping charge"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-700 mb-1">Minimum Shipping Charge</label>
                <input
                  type="text"
                  value={minShipping}
                  onChange={(e) => setMinShipping(e.target.value)}
                  placeholder="Minimum shipping charge"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-end mb-6">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded mr-2 border border-gray-100 hover:bg-gray-200"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleAddCategory}
            className="px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800"
          >
            Add Parcel Category
          </button>
        </div>
        {/* Table Section */}
        <div className="mt-2">
          <div className="text-sm text-gray-700 font-medium mb-2 flex items-center gap-2">Parcel Category List <span className="bg-gray-100 text-xs px-2 py-1 rounded">{categories.length}</span></div>
          <div className="bg-gray-50 rounded-xl p-2">
            <table className="min-w-full bg-transparent rounded-xl text-xs">
              <thead>
                <tr className="bg-[#f7fafd] text-gray-700">
                  <th className="px-3 py-2 text-left font-medium">SL</th>
                  <th className="px-3 py-2 text-left font-medium">Id</th>
                  <th className="px-3 py-2 text-left font-medium">Name</th>
                  <th className="px-3 py-2 text-left font-medium">Module</th>
                  <th className="px-3 py-2 text-center font-medium">Status</th>
                  <th className="px-3 py-2 text-center font-medium">Orders Count</th>
                  <th className="px-3 py-2 text-center font-medium">Per Km Shipping Charge</th>
                  <th className="px-3 py-2 text-center font-medium">Minimum Shipping Charge</th>
                  <th className="px-3 py-2 text-center font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, idx) => (
                  <tr key={cat.id} className="bg-white border-b last:border-b-0">
                    <td className="px-3 py-2 text-left whitespace-nowrap">{idx + 1}</td>
                    <td className="px-3 py-2 text-left whitespace-nowrap">{cat.id}</td>
                    <td className="px-3 py-2 text-left whitespace-nowrap">{cat.name}</td>
                    <td className="px-3 py-2 text-left whitespace-nowrap">{cat.module}</td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleToggleStatus(cat.id)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${cat.status ? 'bg-teal-500' : 'bg-gray-300'}`}
                      >
                        <span
                          className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${cat.status ? 'translate-x-4' : ''}`}
                        />
                      </button>
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">{cat.orders}</td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">{cat.perKm}</td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">{cat.minShipping}</td>
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
                          onClick={() => handleDelete(cat.id)}
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

export default ParcelCategory;
