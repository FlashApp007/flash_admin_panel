import React, { useState } from 'react';

function SocialMediaSettings() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [socialMediaLink, setSocialMediaLink] = useState('');
  
  const [socialMediaPlatforms, setSocialMediaPlatforms] = useState([
    {
      id: 1,
      name: 'pinterest',
      link: 'https://www.pinterest.com/',
      status: true
    },
    {
      id: 2,
      name: 'linkedin',
      link: 'https://www.linkedin.com/',
      status: true
    },
    {
      id: 3,
      name: 'twitter',
      link: 'https://twitter.com/?lang=en',
      status: true
    },
    {
      id: 4,
      name: 'facebook',
      link: 'https://www.facebook.com/',
      status: true
    },
    {
      id: 5,
      name: 'instagram',
      link: 'https://www.instagram.com/?hl=en',
      status: true
    }
  ]);

  const handleReset = () => {
    setSelectedPlatform('');
    setSocialMediaLink('');
  };

  const handleSave = () => {
    if (selectedPlatform && socialMediaLink) {
      // Add new social media platform
      const newPlatform = {
        id: socialMediaPlatforms.length + 1,
        name: selectedPlatform,
        link: socialMediaLink,
        status: true
      };
      setSocialMediaPlatforms([...socialMediaPlatforms, newPlatform]);
      handleReset();
    }
  };

  const toggleStatus = (id) => {
    setSocialMediaPlatforms(
      socialMediaPlatforms.map(platform => 
        platform.id === id ? { ...platform, status: !platform.status } : platform
      )
    );
  };

  const handleEdit = (id) => {
    const platform = socialMediaPlatforms.find(p => p.id === id);
    if (platform) {
      setSelectedPlatform(platform.name);
      setSocialMediaLink(platform.link);
      // Remove the platform from the list as it's being edited
      setSocialMediaPlatforms(socialMediaPlatforms.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-md mr-3">
            <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.95 15.5h-2.6v-7.8h2.6v7.8zm-1.3-8.9c-.9 0-1.5-.6-1.5-1.4 0-.8.6-1.4 1.5-1.4s1.5.6 1.5 1.4c0 .8-.6 1.4-1.5 1.4zm10.3 8.9h-2.6v-4.1c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3.9-.1.1-.1.3-.1.5v4.5h-2.6v-7.8h2.6v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.5z" />
            </svg>
          </div>
          <h1 className="text-xl font-medium">Social Media</h1>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm border border-gray-200 mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="relative">
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm pr-10"
                >
                  <option value="">---Select---</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="pinterest">Pinterest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Social Media Link</label>
              <input
                type="text"
                placeholder="Social media link"
                value={socialMediaLink}
                onChange={(e) => setSocialMediaLink(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-3">
            <button
              onClick={handleReset}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Reset
            </button>
            <button
              onClick={handleSave}
              className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sl
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Link
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {socialMediaPlatforms.map((platform) => (
                <tr key={platform.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-600">
                    {platform.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.link}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={platform.status}
                        onChange={() => toggleStatus(platform.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => handleEdit(platform.id)}
                      className="p-1 rounded-md border border-teal-500 text-teal-500"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
}

export default SocialMediaSettings;