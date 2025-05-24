import React, { useState } from 'react';

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

const OrderMessageSettings = () => {
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
    <div className="p-6">
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
  );
};

export default OrderMessageSettings;
