import React, { useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const MainContent = () => {
  const [selectedZone, setSelectedZone] = useState('All Zones');
  const [searchQuery, setSearchQuery] = useState('');
  const [statisticsFilter, setStatisticsFilter] = useState('Overall Statistics');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('sales');

  const zones = ['Zone 1', 'Zone 2', 'East Zone', 'West Zone', 'North Zone', 'South Zone'];

  const filteredZones = zones.filter(zone =>
    zone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const donutData = {
    labels: ['Customer 31', 'Delivery man 6'],
    datasets: [
      {
        data: [31, 6],
        backgroundColor: [
          '#004D40',  // Dark teal for Customer
          '#B2DFDB',  // Light teal for Delivery man
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Gross Sale',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#00BFA5',
        backgroundColor: '#00BFA5',
        tension: 0.4,
      },
      {
        label: 'Admin Commission',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#FF5722',
        backgroundColor: '#FF5722',
        tension: 0.4,
      },
      {
        label: 'Delivery Commission',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#FFC107',
        backgroundColor: '#FFC107',
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          max: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  const ordersData = [
    {
      value: 18,
      label: 'Total orders',
      icon: '📋', // Replace with actual clipboard icon
      color: 'bg-green-100',
      barColor: '#10B981'
    },
    {
      value: 9,
      label: 'Unassigned orders',
      icon: '📦', // Replace with actual package icon
      color: 'bg-blue-100',
      barColor: '#3B82F6'
    },
    {
      value: 0,
      label: 'Out for delivery',
      icon: '🚚', // Replace with actual delivery truck icon
      color: 'bg-yellow-100',
      barColor: '#F59E0B'
    },
    {
      value: 7,
      label: 'Delivered',
      icon: '✅', // Replace with actual checkmark icon
      color: 'bg-purple-100',
      barColor: '#8B5CF6'
    },
    {
      value: 0,
      label: 'Failed Orders',
      icon: '❌', // Replace with actual failed icon
      color: 'bg-red-100',
      barColor: '#EF4444'
    }
  ];

  const deliverymen = [
    { name: 'Jhon', orders: 15, avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Thomas', orders: 5, avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Lily', orders: 3, avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'William', orders: 2, avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Amelia', orders: 1, avatar: 'https://i.pravatar.cc/150?img=5' }
  ];

  const customers = [
    { name: 'Marjahan', orders: 7, avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'MS', orders: 6, avatar: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Ellen', orders: 5, avatar: 'https://i.pravatar.cc/150?img=8' },
    { name: 'Jerry', orders: 4, avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Sakeef Ameer', orders: 3, avatar: 'https://i.pravatar.cc/150?img=10' },
    { name: 'Ashek', orders: 3, avatar: 'https://i.pravatar.cc/150?img=11' }
  ];

  return (
    <div className="space-y-6">
      {/* Header and Statistics Section */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-green-500 p-2 rounded-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Parcel Dashboard.</h1>
            <p className="text-sm text-gray-500">Hello Here You Can Manage Your Parcel Orders by Zone.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="p-2 border rounded-md flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedZone}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 right-0 w-47 bg-white border rounded-md shadow-lg">
                <input
                  type="text"
                  placeholder="Search zones..."
                  className="p-1 m-1 border-b rounded-t-md w-[180px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <ul className="py-2">
                  {filteredZones.map((zone, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSelectedZone(zone);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statistics Cards Grid */}
      <div className="bg-white p-3 pt-1 rounded-lg shadow-md">
        <div className='flex flex-row-reverse'>
          <select
            className="rounded-lg px-4 py-2 bg-white shadow-md m-2 mb-4"
            value={statisticsFilter}
            onChange={(e) => setStatisticsFilter(e.target.value)}
          >
            <option>Overall Statistics</option>
            {/* Add other statistics options */}
          </select>
        </div>
        <div className="grid grid-cols-3 gap-6 px-3">
          {/* Total orders card spanning two rows */}
          <div className="col-span-1 row-span-2">
            <div className={`${ordersData[0].color} p-6 rounded-lg relative h-full flex flex-col justify-between items-center w-[340px]`}>
              <div className="absolute left-0 top-0 bottom-0 w-2 mx-3 my-1 rounded" style={{ backgroundColor: ordersData[0].barColor }} />
              <div className="flex flex-col items-center mt-25">
                <div className="bg-white p-3 rounded-full mb-3">
                  <span className="text-3xl">{ordersData[0].icon}</span>
                </div>
                <span className="text-3xl font-bold">{ordersData[0].value}</span>
                <span className="text-gray-600">{ordersData[0].label}</span>
              </div>
            </div>
          </div>
          {/* Other cards */}
          {ordersData.slice(1).map((order, index) => (
            <div key={index} className={`${order.color} p-6 rounded-lg relative flex flex-col items-center`}>
              <div className="absolute left-0 top-0 bottom-0 w-2 mx-3 my-1 rounded" style={{ backgroundColor: order.barColor }} />
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-3">
                  <span className="text-3xl">{order.icon}</span>
                </div>
                <span className="text-3xl font-bold">{order.value}</span>
                <span className="text-gray-600">{order.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Information Section */}
      <div className="p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold">$ 0.00</h2>
            <p className="text-gray-600">Gross Sale</p>
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="w-3/4 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Sales Information</h2>
              <select className="border rounded-md px-3 py-1">
                <option>This year</option>
                <option>This year</option>
              </select>
            </div>

            <div className="h-[300px]">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
          <div className="w-1/4 flex items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">User Statistics</h2>
                <select className="border rounded-md px-3 py-1">
                  <option>Overall</option>
                  <option>Overall</option>
                </select>
              </div>
              <div className="w-full h-[300px] relative">
                <Doughnut data={donutData} options={donutOptions} />
                <div className="absolute top-1/2  bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-3xl font-bold">37</div>
                  <div className="text-gray-600">Total Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Users Section */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-2 mt-6">
          {/* Top Deliveryman Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm w-[500px] ">
            <div className="flex justify-between items-center mb-4 shadow-sm p-2 rounded">
              <h2 className="text-lg font-semibold">Top Deliveryman</h2>
              <button className="text-blue-600 text-sm">View All</button>
            </div>
            <div className="space-y-2">
              {deliverymen.map((deliveryman, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={deliveryman.avatar} alt={deliveryman.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-3">
                      <p className="font-medium">{deliveryman.name}</p>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500">+880********</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm text-teal-600 badge      inline-block bg-[#f5f9fa] text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded    ${deliveryman.orders > 5 ? 'bg-success' : deliveryman.orders > 2 ? 'bg-warning' : 'bg-danger'}`}>
                    Orders: {deliveryman.orders}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Customers Section */}
          <div className="bg-white rounded-lg ms-0 p-6 shadow-sm w-[500px]">
            <div className="flex justify-between items-center mb-4 shadow-sm p-2 rounded">
              <h2 className="text-lg font-semibold">Top Customers</h2>
              <button className="text-blue-600 text-sm">View All</button>
            </div>
            <div className="space-y-2">
              {customers.map((customer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={customer.avatar} alt={customer.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-3">
                      <p className="font-medium">{customer.name}</p>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500">+880********</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm text-teal-600 badge      inline-block bg-[#f5f9fa] text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded    ${customer.orders > 5 ? 'bg-success' : customer.orders > 2 ? 'bg-warning' : 'bg-danger'}`}>
                    Orders: {customer.orders}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>© GamMart. 2021-2023 GamMart.</div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600">Business setup</a>
              <a href="#" className="text-blue-600">Profile</a>
              <a href="#" className="text-blue-600">Home</a>
            </div>
            <div>Software Version : 3.1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
