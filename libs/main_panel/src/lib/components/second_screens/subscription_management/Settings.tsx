import React, { useState } from 'react';

const SubscriptionSettings = () => {
  // State for free trial settings
  const [freeTrialEnabled, setFreeTrialEnabled] = useState(true);
  const [trialPeriod, setTrialPeriod] = useState(7);
  const [timeUnit, setTimeUnit] = useState('Day');

  // State for deadline warning settings
  const [deadlineDays, setDeadlineDays] = useState(7);
  const [deadlineMessage, setDeadlineMessage] = useState('Your subscription ending soon. Please renew to continue access');

  // State for refund settings
  const [usagePercentage, setUsagePercentage] = useState(80);

  // Handle submit for free trial settings
  const handleFreeTrialSubmit = () => {
    console.log({
      freeTrialEnabled,
      trialPeriod,
      timeUnit
    });
    // Add your submission logic here
  };

  // Handle submit for deadline warning settings
  const handleDeadlineSubmit = () => {
    console.log({
      deadlineDays,
      deadlineMessage
    });
    // Add your submission logic here
  };

  // Handle submit for refund settings
  const handleRefundSubmit = () => {
    console.log({
      usagePercentage
    });
    // Add your submission logic here
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Free Trial Settings Section */}
      <div className="bg-white rounded-md shadow-sm border border-gray-200 mb-6">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-medium text-gray-800">Offer Free Trial</h2>
              <p className="text-gray-600 text-sm">You can offer vendors a free trial to experience the system overall</p>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Status:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={freeTrialEnabled}
                  onChange={() => setFreeTrialEnabled(!freeTrialEnabled)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
              </label>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Free Trial Period</label>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                value={trialPeriod}
                onChange={(e) => setTrialPeriod(e.target.value)}
                className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border mr-4"
              />
              <div className="relative w-40">
                <select
                  value={timeUnit}
                  onChange={(e) => setTimeUnit(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm pr-10"
                >
                  <option>Day</option>
                  <option>Week</option>
                  <option>Month</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="ml-auto">
                <button
                  onClick={handleFreeTrialSubmit}
                  className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deadline Warning Settings Section */}
      <div className="bg-white rounded-md shadow-sm border border-gray-200 mb-6">
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-800">Show Deadline Warning</h2>
            <p className="text-gray-600 text-sm">Select the number of days before the warning will be shown with a countdown to the end of all packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Days</label>
              <input
                type="number"
                value={deadlineDays}
                onChange={(e) => setDeadlineDays(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type Message</label>
              <input
                type="text"
                value={deadlineMessage}
                onChange={(e) => setDeadlineMessage(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleDeadlineSubmit}
              className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Refund Restriction Settings Section */}
      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-800">Return Money Restriction</h2>
            <p className="text-gray-600 text-sm">Setup the amount after which if any store change / migrate the subscription plan you won't return any money back</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Subscription Usage Time (%)</label>
            <input
              type="number"
              value={usagePercentage}
              onChange={(e) => setUsagePercentage(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleRefundSubmit}
              className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-gray-800 text-white p-3 rounded-md shadow-lg">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSettings;
