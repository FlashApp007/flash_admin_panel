import React from 'react';

const NavigationTabs = ({ activeTab, handleTabClick }) => {
  const navigationItems = [
    { id: 'business-info', label: 'Business Information' },
    { id: 'order-settings', label: 'Order Settings' },
    { id: 'refund-settings', label: 'Refund Settings' },
    { id: 'vendor', label: 'Vendor' },
    { id: 'deliveryman', label: 'Deliveryman' },
    { id: 'customers', label: 'Customers' },
    { id: 'priority-setup', label: 'Priority Setup' },
    { id: 'languages', label: 'Languages' },
    { id: 'landing-page', label: 'Landing Page' },
    { id: 'websocket', label: 'Websocket' },
    { id: 'Disbursement', label: 'Disbursement' },
    { id: 'Automated Message', label: 'Automated Message' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          className={`nav-tab ${activeTab === item.id ? 'nav-tab-active' : 'nav-tab-inactive'}`}
          onClick={() => handleTabClick(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
