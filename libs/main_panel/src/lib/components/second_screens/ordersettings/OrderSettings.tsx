import React, { useState } from "react";

const OrderSettings = () => {
  // State for toggle switches
  const [settings, setSettings] = useState({
    orderDeliveryVerification: false,
    placeOrderByPrescription: true,
    homeDelivery: true,
    takeaway: true,
    scheduleOrder: true,
  });

  // State for checkboxes
  const [packagingOptions, setPackagingOptions] = useState({
    grocery: true,
    food: true,
    pharmacy: true,
    ecommerce: true,
    rental: false,
  });

  // Time interval state
  const [timeInterval, setTimeInterval] = useState("30");

  // Handle toggle change
  const handleToggleChange = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (option) => {
    setPackagingOptions({
      ...packagingOptions,
      [option]: !packagingOptions[option],
    });
  };

  // State for cancellation messages
  const [activeTab, setActiveTab] = useState("Default");
  const [cancellationReason, setCancellationReason] = useState("");
  const [userType, setUserType] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleReset = () => {
    setCancellationReason("");
    setUserType("");
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      cancellationReason,
      userType,
      language: activeTab
    });
  };

  // State for cancellation reasons table
  const [reasons, setReasons] = useState([
    { id: 1, reason: "I ordered the wrong food", type: "Customer", status: true },
    { id: 2, reason: "Right now, I am busy to s...", type: "Deliveryman", status: true },
    { id: 3, reason: "For bad weather, can't se...", type: "Deliveryman", status: true },
    { id: 4, reason: "Now its restaurant closin...", type: "Store", status: true },
    { id: 5, reason: "Product shortage", type: "Store", status: true },
    { id: 6, reason: "Fake customer", type: "Admin", status: true },
    { id: 7, reason: "Others reasons", type: "Admin", status: true },
    { id: 8, reason: "Order delivered time is t...", type: "Customer", status: true },
  ]);

  // Function to toggle status
  const toggleStatus = (id) => {
    setReasons(
      reasons.map((reason) =>
        reason.id === id ? { ...reason, status: !reason.status } : reason
      )
    );
  };

  // Function to handle edit (placeholder)
  const handleEdit = (id) => {
    console.log("Edit reason with id:", id);
  };

  // Function to handle delete (placeholder)
  const handleDelete = (id) => {
    console.log("Delete reason with id:", id);
  };

  return (
    <div className="p-6">
      {/* Business Settings Section */}
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center mr-3">
          <span className="text-white">🌐</span>
        </div>
        <h1 className="text-2xl font-semibold">Business Settings</h1>
      </div>



      {/* Settings Content */}
      <div className="space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Order Delivery Verification */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">Order Delivery Verification</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.orderDeliveryVerification}
                onChange={() => handleToggleChange('orderDeliveryVerification')}
              />
              <div className={`w-11 h-6 ${settings.orderDeliveryVerification ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>

          {/* Place Order By Prescription */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">Place Order By Prescription</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.placeOrderByPrescription}
                onChange={() => handleToggleChange('placeOrderByPrescription')}
              />
              <div className={`w-11 h-6 ${settings.placeOrderByPrescription ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>

          {/* Home Delivery */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">Home Delivery</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.homeDelivery}
                onChange={() => handleToggleChange('homeDelivery')}
              />
              <div className={`w-11 h-6 ${settings.homeDelivery ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Takeaway */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">Takeaway</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.takeaway}
                onChange={() => handleToggleChange('takeaway')}
              />
              <div className={`w-11 h-6 ${settings.takeaway ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>

          {/* Schedule Order */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">Schedule Order</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.scheduleOrder}
                onChange={() => handleToggleChange('scheduleOrder')}
              />
              <div className={`w-11 h-6 ${settings.scheduleOrder ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>

          {/* Time Interval */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">Time Interval For Scheduled Delivery</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="w-16 p-2 border rounded-md mr-2"
                value={timeInterval}
                onChange={(e) => setTimeInterval(e.target.value)}
              />
              <div className="relative">
                <select className="appearance-none bg-white border rounded-md p-2 pr-8">
                  <option>Min</option>
                  <option>Hour</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packaging Options */}
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 mr-2">📦</div>
            <span className="font-medium">Enable Extra Packaging Charge</span>
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs ml-2">i</div>
          </div>
          <div className="flex flex-wrap gap-6 ml-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-teal-600 rounded mr-2"
                checked={packagingOptions.grocery}
                onChange={() => handleCheckboxChange('grocery')}
              />
              <span>Grocery</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-teal-600 rounded mr-2"
                checked={packagingOptions.food}
                onChange={() => handleCheckboxChange('food')}
              />
              <span>Food</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-teal-600 rounded mr-2"
                checked={packagingOptions.pharmacy}
                onChange={() => handleCheckboxChange('pharmacy')}
              />
              <span>Pharmacy</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-teal-600 rounded mr-2"
                checked={packagingOptions.ecommerce}
                onChange={() => handleCheckboxChange('ecommerce')}
              />
              <span>Ecommerce</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-teal-600 rounded mr-2"
                checked={packagingOptions.rental}
                onChange={() => handleCheckboxChange('rental')}
              />
              <span>Rental</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button className="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-200">
            Reset
          </button>
          <button className="bg-teal-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-700">
            Save Information
          </button>
        </div>
      </div>

      {/* Order Cancellation Messages Section */}
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center mr-3">
            <span className="text-gray-600">📝</span>
          </div>
          <h1 className="text-xl font-medium text-gray-700">Order Cancellation Messages</h1>
        </div>

        {/* Language Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 ${activeTab === "Default" ? "border-b-2 border-teal-600 text-teal-600" : "text-gray-600"}`}
            onClick={() => handleTabChange("Default")}
          >
            Default
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "English" ? "border-b-2 border-teal-600 text-teal-600" : "text-gray-600"}`}
            onClick={() => handleTabChange("English")}
          >
            English(EN)
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "Arabic" ? "border-b-2 border-teal-600 text-teal-600" : "text-gray-600"}`}
            onClick={() => handleTabChange("Arabic")}
          >
            Arabic - العربية(AR)
          </button>
        </div>

        {/* Form Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Cancellation Reason */}
          <div>
            <div className="flex items-center mb-2">
              <label className="block text-gray-700">Order Cancellation Reason (Default)</label>
            </div>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Ex: Item is Broken"
              value={cancellationReason}
              onChange={(e) => setCancellationReason(e.target.value)}
            />
          </div>

          {/* User Type */}
          <div>
            <div className="flex items-center mb-2">
              <label className="block text-gray-700">User Type</label>
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs ml-2">i</div>
            </div>
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-md appearance-none"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">Select user type</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>
                <option value="deliveryman">Deliveryman</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Information Note */}
        <div className="bg-gray-50 p-4 rounded-md mb-8 text-gray-600 text-sm">
          *Users cannot cancel an order if the Admin does not specify a cause for cancellation even though they see the 'Cancel Order' option. So Admin MUST provide a proper Order Cancellation Reason and select the related user.
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-200"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-teal-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Order Cancellation Reason List Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium text-gray-700">Order Cancellation Reason List</h1>
          <div className="w-64">
            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none">
              <option>All user</option>
              <option>Admin</option>
              <option>Customer</option>
              <option>Deliveryman</option>
              <option>Store</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">SL</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Reason</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Type</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Status</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {reasons.map((reason) => (
                <tr key={reason.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{reason.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{reason.reason}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{reason.type}</td>
                  <td className="py-3 px-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={reason.status}
                        onChange={() => toggleStatus(reason.id)}
                      />
                      <div className={`w-11 h-6 ${reason.status ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                    </label>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(reason.id)}
                        className="p-1 text-teal-600 border border-teal-600 rounded hover:bg-teal-50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(reason.id)}
                        className="p-1 text-red-500 border border-red-500 rounded hover:bg-red-50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
  );
};

export default OrderSettings;