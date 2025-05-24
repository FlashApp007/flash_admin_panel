import React, { useState } from 'react';

const tabs = [
  { key: 'banners', label: 'Promotional Banners' },
  { key: 'video', label: 'Video' },
  { key: 'why', label: 'Why Choose Us' },
];

const initialBanners = [
  {
    id: 1,
    image: 'https://via.placeholder.com/160x64?text=Banner+1',
    status: true,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/160x64?text=Banner+2',
    status: true,
  },
];

const PromotionalBanners = () => {
  const [activeTab, setActiveTab] = useState('banners');
  const [banners, setBanners] = useState(initialBanners);
  const [bannerImage, setBannerImage] = useState(null);

  const handleToggleStatus = (id) => {
    setBanners(banners.map(b => b.id === id ? { ...b, status: !b.status } : b));
  };

  const handleDelete = (id) => {
    setBanners(banners.filter(b => b.id !== id));
  };

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBannerImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (bannerImage) {
      console.log('Banners before update:', banners); // Debugging line
      setBanners([
        ...banners,
        {
          id: banners.length + 1,
          image: URL.createObjectURL(bannerImage),
          status: true,
        },
      ]);
      setBannerImage(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🧳</span>
          <span className="font-semibold text-base">Other Promotional Content Setup</span>
        </div>
        {/* Tabs */}
        <div className="flex gap-4 mb-3">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded text-sm font-medium focus:outline-none ${
                activeTab === tab.key
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Promotional Banners Section */}
        {activeTab === 'banners' && (
          <>
            <div className="flex items-center gap-2 mb-2 mt-2">
              <input type="checkbox" checked readOnly className="accent-teal-600" />
              <span className="text-sm font-medium text-[#1b2c48]">Promotional Banners</span>
            </div>
            <div className="bg-white border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center mx-auto my-4" style={{ minHeight: 180, maxWidth: 800 }}>
              <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer py-8">
                {bannerImage ? (
                  <img src={URL.createObjectURL(bannerImage)} alt="Preview" className="h-24 object-contain" />
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" /></svg>
                    <span className="text-gray-400 text-sm">Upload Image</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              </label>
            </div>
            <div className="text-center text-xs text-gray-500 mb-2">
              Banner Image Ratio 4:1
            </div>
            <div className="text-center text-xs text-gray-400 mb-4">
              Image format: .jpg, .png, .jpeg | Maximum Size: 2 MB
            </div>
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-2 bg-teal-700 text-white rounded hover:bg-teal-800"
              >
                Submit
              </button>
            </div>
            {/* Table Section */}
            <div className="mt-2">
              <div className="text-sm text-gray-700 font-medium mb-2">Promotional Banner List</div>
              <div className="bg-gray-50 rounded-xl p-2">
                <table className="min-w-full bg-transparent rounded-xl text-xs">
                  <thead>
                    <tr className="bg-[#f7fafd] text-gray-700">
                      <th className="px-3 py-2 text-left font-medium">Sl</th>
                      <th className="px-3 py-2 text-left font-medium">Image</th>
                      <th className="px-3 py-2 text-center font-medium">Status</th>
                      <th className="px-3 py-2 text-center font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners.map((banner, idx) => (
                      <tr key={banner.id} className="bg-white border-b last:border-b-0">
                        <td className="px-3 py-2 text-left whitespace-nowrap">{idx + 1}</td>
                        <td className="px-3 py-2 text-left whitespace-nowrap">
                          <img src={banner.image} alt="Banner" className="h-10 rounded shadow border border-gray-100" />
                        </td>
                        <td className="px-3 py-2 text-center">
                          <button
                            onClick={() => handleToggleStatus(banner.id)}
                            className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${banner.status ? 'bg-teal-500' : 'bg-gray-300'}`}
                          >
                            <span
                              className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${banner.status ? 'translate-x-4' : ''}`}
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
                              onClick={() => handleDelete(banner.id)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default PromotionalBanners;
