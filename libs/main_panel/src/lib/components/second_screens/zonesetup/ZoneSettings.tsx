import React, { useState } from 'react';
import { FiInfo, FiEdit } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

function ZoneSettings() {
  const [zoneName, setZoneName] = useState('Dhaka Zone');
  const [paymentMethods, setPaymentMethods] = useState({
    'Cash on delivery': true,
    'Digital payment': true,
    'Offline payment': true
  });
  
  const [increaseDeliveryCharge, setIncreaseDeliveryCharge] = useState(false);
  const [deliveryChargePercentage, setDeliveryChargePercentage] = useState('');
  const [deliveryChargeMessage, setDeliveryChargeMessage] = useState('');
  
  const [selectedBusinessModule, setSelectedBusinessModule] = useState('Rental');
  
  const [moduleCharges, setModuleCharges] = useState({
    'Rental': {
      perKmCharge: 'Not applicable',
      minCharge: 'Not applicable',
      maxCharge: 'Not applicable',
      maxCodAmount: 'Not applicable'
    }
  });

  const handlePaymentMethodToggle = (method) => {
    setPaymentMethods({
      ...paymentMethods,
      [method]: !paymentMethods[method]
    });
  };

  const handleUpdate = () => {
    console.log({
      zoneName,
      paymentMethods,
      increaseDeliveryCharge,
      deliveryChargePercentage,
      deliveryChargeMessage,
      selectedBusinessModule,
      moduleCharges
    });
    // Implement update functionality
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <div className="mb-6 flex items-center">
        <FiEdit className="mr-2 h-5 w-5" />
        <h1 className="text-xl font-semibold text-gray-800">{zoneName} Settings</h1>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Payment Method
        </label>
        <div className="bg-pink-100 text-pink-700 p-2 rounded-md mb-3 text-sm">
          NB: MUST Select At Least 'One' Payment Method.
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {Object.keys(paymentMethods).map(method => (
            <div key={method} className="flex items-center">
              <input
                type="checkbox"
                id={method.replace(/\s+/g, '-').toLowerCase()}
                checked={paymentMethods[method]}
                onChange={() => handlePaymentMethodToggle(method)}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label htmlFor={method.replace(/\s+/g, '-').toLowerCase()} className="ml-2 text-sm text-gray-700">
                {method}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Charge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 mr-2">
                Increase Delivery Charge (%)
              </label>
              <button className="text-gray-400 hover:text-gray-600">
                <FiInfo size={16} />
              </button>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                name="toggle" 
                id="toggle-delivery-charge" 
                checked={increaseDeliveryCharge}
                onChange={() => setIncreaseDeliveryCharge(!increaseDeliveryCharge)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                htmlFor="toggle-delivery-charge" 
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${increaseDeliveryCharge ? 'bg-teal-400' : 'bg-gray-300'}`}
              ></label>
            </div>
          </div>
          <input
            type="text"
            placeholder="Ex: 100"
            value={deliveryChargePercentage}
            onChange={(e) => setDeliveryChargePercentage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 mr-2">
              Increase Delivery Charge Message
            </label>
            <button className="text-gray-400 hover:text-gray-600">
              <FiInfo size={16} />
            </button>
          </div>
          <input
            type="text"
            placeholder="Ex: Rainy season"
            value={deliveryChargeMessage}
            onChange={(e) => setDeliveryChargeMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      {/* Business Module */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose Business Module
        </label>
        <div className="relative">
          <div className="inline-flex items-center bg-gray-100 rounded-md px-2 py-1 mb-4">
            <span className="text-sm text-gray-700 mr-2">{selectedBusinessModule}</span>
            <button className="text-gray-500 hover:text-gray-700">
              <IoClose size={16} />
            </button>
          </div>
          <select 
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 appearance-none"
            value={selectedBusinessModule}
            onChange={(e) => setSelectedBusinessModule(e.target.value)}
          >
            <option value="Rental">Rental</option>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Pharmacy">Pharmacy</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Module Charges Table */}
      <div className="mb-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Module Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Per km delivery charge ($) <span className="text-red-500">*</span>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Minimum delivery charge ($) <span className="text-red-500">*</span>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Maximum delivery charge ($)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Maximum cod order amount ($)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Rental
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  value={moduleCharges['Rental'].perKmCharge}
                  onChange={(e) => setModuleCharges({
                    ...moduleCharges,
                    'Rental': {
                      ...moduleCharges['Rental'],
                      perKmCharge: e.target.value
                    }
                  })}
                  className="w-full p-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  value={moduleCharges['Rental'].minCharge}
                  onChange={(e) => setModuleCharges({
                    ...moduleCharges,
                    'Rental': {
                      ...moduleCharges['Rental'],
                      minCharge: e.target.value
                    }
                  })}
                  className="w-full p-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  value={moduleCharges['Rental'].maxCharge}
                  onChange={(e) => setModuleCharges({
                    ...moduleCharges,
                    'Rental': {
                      ...moduleCharges['Rental'],
                      maxCharge: e.target.value
                    }
                  })}
                  className="w-full p-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  value={moduleCharges['Rental'].maxCodAmount}
                  onChange={(e) => setModuleCharges({
                    ...moduleCharges,
                    'Rental': {
                      ...moduleCharges['Rental'],
                      maxCodAmount: e.target.value
                    }
                  })}
                  className="w-full p-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleUpdate}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Update
        </button>
      </div>

      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #10B981;
        }
        .toggle-label {
          transition: background-color 0.2s ease;
        }
      `}</style>
    </div>
  );
}

export default ZoneSettings;