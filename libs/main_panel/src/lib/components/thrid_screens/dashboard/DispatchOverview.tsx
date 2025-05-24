import React from "react";

const DispatchOverview: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen w-full p-2 md:p-4">
      {/* Header and Notice */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="icon"
            className="w-6 h-6 mr-2"
          />
          <div>
            <div className="text-base md:text-lg font-semibold text-gray-800">Dispatch Overview</div>
            <div className="text-xs text-gray-500">
              Monitor your <span className="font-semibold text-gray-700">Dispatch Management</span> Statistics by zone
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="bg-[#e7f8f0] text-[#19b37a] px-4 py-1 rounded text-xs font-medium">
            This section only contains Order Data
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* Left Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Top row */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              {/* Active Delivery Man */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col min-h-[85px]">
                <div className="flex items-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1995/1995507.png" alt="active" className="w-6 h-6" />
                  <span className="text-[#19b37a] font-bold text-xl">5</span>
                </div>
                <span className="text-xs text-gray-700 mt-2">Active Delivery Man</span>
              </div>
              {/* In Active */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col min-h-[85px]">
                <div className="flex items-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="inactive" className="w-6 h-6" />
                  <span className="text-[#ff5959] font-bold text-xl">1</span>
                </div>
                <span className="text-xs text-gray-700 mt-2">In Active</span>
              </div>
              {/* Suspended */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col min-h-[85px]">
                <div className="flex items-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="suspended" className="w-6 h-6" />
                  <span className="text-[#fbbf24] font-bold text-xl">0</span>
                </div>
                <span className="text-xs text-gray-700 mt-2">Suspended</span>
              </div>
            </div>
            {/* Second row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Fully Booked Delivery Man */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col min-h-[85px]">
                <div className="flex items-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1995/1995507.png" alt="fullybooked" className="w-6 h-6" />
                  <span className="text-[#19b37a] font-bold text-xl">0</span>
                </div>
                <span className="text-xs text-gray-700 mt-2">Fully Booked Delivery Man</span>
              </div>
              {/* Available To Assign More Order */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col min-h-[85px]">
                <div className="flex items-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1995/1995507.png" alt="available" className="w-6 h-6" />
                  <span className="text-[#ff6f00] font-bold text-xl">5</span>
                </div>
                <span className="text-xs text-gray-700 mt-2">Available To Assign More Order</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Stats */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-4 min-h-[180px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/1046/1046870.png" alt="unassigned" className="w-5 h-5" />
              <span className="text-xs text-gray-700">Unassigned Orders</span>
            </div>
            <span className="text-[#1890ff] font-bold">41</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="accepted" className="w-5 h-5" />
              <span className="text-xs text-gray-700">Accepted By Delivery Man</span>
            </div>
            <span className="text-[#19b37a] font-bold">2</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="outfordelivery" className="w-5 h-5" />
              <span className="text-xs text-gray-700">Out For Delivery</span>
            </div>
            <span className="text-[#1890ff] font-bold">4</span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-4 bg-white rounded-lg shadow-sm p-2 md:p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
          <div className="flex items-center">
            <input
              type="text"
              value="Currently Active Delivery Men"
              readOnly
              className="bg-gray-100 border border-gray-200 rounded px-2 py-1 text-xs w-64 mr-2"
            />
            <button className="ml-1 px-2 py-1 bg-gray-200 text-xs rounded">Map</button>
            <button className="ml-1 px-2 py-1 bg-gray-200 text-xs rounded">Satellite</button>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search Delivery Man ..."
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <a href="#" className="ml-2 text-xs text-[#1890ff] font-semibold hover:underline">
              View All Delivery Men
            </a>
          </div>
        </div>
        <div className="w-full h-[320px] md:h-[340px] rounded overflow-hidden border border-gray-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.318265599161!2d90.36541931536375!3d23.80692168456151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71d3c9e2e21%3A0x7e3d3a1d9e4c2c8e!2sMirpur%20DOHS%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1652299890787!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DispatchOverview;
