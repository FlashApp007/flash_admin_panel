import React from "react";

const OrderDetails: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="text-xl mr-2">🛒</span>
        <h2 className="text-lg font-semibold text-gray-800 mr-2">Order Details</h2>
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded font-semibold"> </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Order Details */}
        <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-0">
          {/* Order Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div>
              <div className="text-base font-semibold text-gray-800 mb-1">Order #100094</div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                27 Nov 2023 01:35pm
              </div>
              <button className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded flex items-center mb-2">
                Show Locations On Map
              </button>
              <div className="text-xs text-gray-700 font-semibold">
                Order delivery instruction : <span className="bg-orange-100 text-orange-700 px-1">Parcel contain fragile product so take care of this.</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
              <button className="bg-teal-500 hover:bg-teal-600 text-white text-xs px-4 py-2 rounded font-semibold">Print Invoice</button>
              <div className="flex flex-col items-end gap-1 mt-2">
                <div className="flex items-center gap-1 text-xs">Status : <span className="bg-cyan-100 text-cyan-600 px-2 py-0.5 rounded font-semibold">Confirmed</span></div>
                <div className="text-xs text-gray-600">Payment Method : <span className="font-semibold">Stripe</span></div>
                <div className="text-xs text-gray-600">Reference Code : <button className="bg-blue-100 px-2 py-0.5 rounded text-blue-600 font-semibold ml-1">Add</button></div>
                <div className="text-xs text-gray-600">Order Type : <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded ml-1">Parcel</span></div>
                <div className="text-xs text-gray-600">Payment Status : <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded ml-1">Paid</span></div>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 mb-2">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <span className="text-2xl">🎁</span>
              <div>
                <div className="font-semibold text-gray-700">Gifts</div>
                <div className="text-xs text-gray-500">Send heartfelt presents, right on time</div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-xs text-gray-700 font-semibold">Distance <div className="font-normal text-gray-600">0 Km</div></div>
              <div className="text-xs text-gray-700 font-semibold">Delivery charge <div className="font-normal text-gray-600">$ 90.00</div></div>
            </div>
          </div>
          <hr className="my-4" />
          {/* Charges Breakdown */}
          <div className="flex flex-col items-end gap-1">
            <div className="text-sm text-gray-700">Delivery man tips <span className="ml-8">+ $ 0.00</span></div>
            <div className="text-sm text-gray-700">Additional Charge <span className="ml-8">+ $ 10.00</span></div>
            <div className="text-base font-bold text-gray-900">Total: <span className="ml-8">$ 100.00</span></div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="mb-2 font-semibold text-gray-700">Order Setup</div>
            <select className="w-full border border-gray-300 rounded px-2 py-1 text-xs mb-2">
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Handover</option>
            </select>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-xs px-4 py-2 rounded font-semibold">Assign Delivery Man Manually</button>
          </div>
          {/* Customer Info */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="mb-2 font-semibold text-gray-700">Customer Information</div>
            <div className="flex items-center gap-2 mb-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold text-gray-800 text-sm">MS 123</div>
                <div className="text-xs text-gray-500">8 Orders</div>
              </div>
            </div>
            <div className="text-xs text-gray-700 mb-1">Contact : <span className="text-teal-500">+8*********</span></div>
            <div className="text-xs text-gray-700 mb-1">✉ <span className="text-teal-500">*********@gmail.com</span></div>
          </div>
          {/* Receiver Info */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="mb-2 font-semibold text-gray-700">Receiver Info</div>
            <div className="text-xs text-gray-700 mb-1">Name : <span className="font-semibold">rrgg</span></div>
            <div className="text-xs text-gray-700 mb-1">Contact : <span className="text-teal-500">+8*********</span></div>
            <div className="text-xs text-gray-700 flex items-center"><svg className="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2" /></svg>4B Kemal Ataturk Ave, Dhaka 1212, Bangladesh</div>
          </div>
          {/* Sender Info */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="mb-2 font-semibold text-gray-700">Sender</div>
            <div className="text-xs text-gray-700 mb-1">Name : <span className="font-semibold">MS 123</span></div>
            <div className="text-xs text-gray-700 mb-1">Contact : <span className="text-teal-500">+8*********</span></div>
            <div className="text-xs text-gray-700 flex items-center"><svg className="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2" /></svg>4B Kemal Ataturk Ave, Dhaka 1212, Bangladesh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
