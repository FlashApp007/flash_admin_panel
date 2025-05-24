import React, { useState } from 'react';

const FirebaseNotifications = () => {
  const [activeTab, setActiveTab] = useState('Push Notification');
  const [activeLanguage, setActiveLanguage] = useState('English(EN)');
  const [selectedModule, setSelectedModule] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
  };

  const messagesConfig = [
    { label: 'Order Pending Message (EN)', key: 'pending', default: '{userName}, Your  order {orderId} is successfully placed' },
    { label: 'Order Confirmation Message', key: 'confirmation', default: '{userName}, Your order {orderId} is confirmed' },
    { label: 'Order Processing Message', key: 'processing', default: '{userName}, Your order is Processing by {storeName}' },
    { label: 'Order Handover Message', key: 'handover', default: 'Delivery man is on the way. For this order {orderId}' },
    { label: 'Order Out For Delivery Message', key: 'outForDelivery', default: '{userName}, Your order {orderId} is ready for delivery' },
    { label: 'Order Delivered Message', key: 'delivered', default: 'Your order {orderId} is delivered' },
    { label: 'Deliveryman Assign Message', key: 'assign', default: 'Your order {orderId} has been assigned to a delivery man' },
    { label: 'Deliveryman Delivered Message', key: 'deliveryDone', default: 'Order {orderId} delivered successfully' },
    { label: 'Order Canceled Message', key: 'canceled', default: 'Order {orderId} is canceled by your request' },
    { label: 'Order Refunded Message', key: 'refunded', default: 'Order {orderId} Refunded successfully' },
    { label: 'Refund Request Canceled Message', key: 'refundCanceled', default: 'Order {orderId}  Refund request is canceled' },
    { label: 'Offline Order Accept Message', key: 'offlineAccept', default: '' },
    { label: 'Offline Order Deny Message', key: 'offlineDeny', default: '' },
  ];

  const [messages, setMessages] = useState(
    messagesConfig.reduce((acc, item) => {
      acc[item.key] = item.default;
      return acc;
    }, {})
  );

  const [enabled, setEnabled] = useState(
    messagesConfig.reduce((acc, item) => {
      acc[item.key] = item.default !== '';
      return acc;
    }, {})
  );

  const handleToggle = (key) => {
    setEnabled({ ...enabled, [key]: !enabled[key] });
  };

  const handleChange = (key, value) => {
    setMessages({ ...messages, [key]: value });
  };

  const handleReset = () => {
    setMessages(messagesConfig.reduce((acc, item) => {
      acc[item.key] = item.default;
      return acc;
    }, {}));
    setEnabled(messagesConfig.reduce((acc, item) => {
      acc[item.key] = item.default !== '';
      return acc;
    }, {}));
  };

  const handleSubmit = () => {
    console.log('Submitted messages:', messages);
    console.log('Enabled flags:', enabled);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-2 rounded-md mr-3">
          <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <h1 className="text-xl font-medium">Firebase Push Notification Setup</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <button
            className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
              activeTab === 'Push Notification'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleTabClick('Push Notification')}
          >
            <span className="mr-2">📱</span>
            Push Notification
          </button>
          <button
            className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
              activeTab === 'Firebase Configuration'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleTabClick('Firebase Configuration')}
          >
            <span className="mr-2">🏢</span>
            Firebase Configuration
          </button>

          <div className="ml-auto flex items-center">
            <button className="text-teal-600 font-medium flex items-center">
              Read Documentation
              <svg className="ml-1 h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Language Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <button
            className={`px-4 py-2 border-b-2 font-medium text-sm ${
              activeLanguage === 'English(EN)'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleLanguageClick('English(EN)')}
          >
            English(EN)
          </button>
          <button
            className={`px-4 py-2 border-b-2 font-medium text-sm ${
              activeLanguage === 'Arabic'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleLanguageClick('Arabic')}
          >
            Arabic - العربية(AR)
          </button>
        </div>
      </div>

      {/* Module Selector */}
      <div className="flex justify-end mb-6">
        <div className="relative w-64">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
          >
            <option value="" disabled>+ Select Module Here</option>
            <option value="grocery">Grocery</option>
            <option value="food">Food</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="ecommerce">eCommerce</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content area - would contain form fields based on the selected tab */}
      <div className="bg-white rounded-md shadow-sm p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {messagesConfig.map(({ label, key }) => (
            <div key={key} className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label className="font-medium text-sm">{label}</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled[key]}
                    onChange={() => handleToggle(key)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-teal-600 transition-all relative">
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-5"></div>
                  </div>
                </label>
              </div>
              <textarea
                value={messages[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                placeholder="Write your message"
                className="border rounded p-2 text-sm h-20 resize-none"
                disabled={!enabled[key]}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={handleReset} className="bg-gray-200 px-4 py-2 rounded shadow">Reset</button>
          <button onClick={handleSubmit} className="bg-teal-600 text-white px-4 py-2 rounded shadow">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FirebaseNotifications;
