import React, { useState } from 'react';
import { FaCog, FaInfoCircle, FaMapMarkerAlt, FaExpand, FaSearch } from 'react-icons/fa';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Switch } from '@headlessui/react';
import NavigationTabs from '../navigationtab/NavigationTabs';

const BusinessInformation = () => {
  // BusinessSettings Section

  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [activeTab, setActiveTab] = useState('business-info');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
 
  // CompanyInformation Section
  const [formData] = useState({
    companyName: 'Flash',
    email: 'support@flashtech.com',
    phone: '01700000000',
    country: 'United States',
    address: '00 ST, NY 10011',
    latitude: '23.793544664971584',
    longitude: '90.41166329002468'
  });

  const [selectedPhoneCountryCode, setSelectedPhoneCountryCode] = useState('US');
  const [selectedCountry, setSelectedCountry] = useState(formData.country);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const mapContainerStyle = { width: '100%', height: '300px' };

  const center = {
    lat: parseFloat(formData.latitude),
    lng: parseFloat(formData.longitude)
  };

  const countries = [
    { name: 'United States', code: 'US', dialCode: '+1' },
    { name: 'Canada', code: 'CA', dialCode: '+1' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44' },
    { name: 'Germany', code: 'DE', dialCode: '+49' },
    { name: 'France', code: 'FR', dialCode: '+33' },
    { name: 'Australia', code: 'AU', dialCode: '+61' },
    { name: 'India', code: 'IN', dialCode: '+91' },
    { name: 'Japan', code: 'JP', dialCode: '+81' },
    { name: 'Brazil', code: 'BR', dialCode: '+55' },
    { name: 'South Africa', code: 'ZA', dialCode: '+27' }
  ];

  // GeneralSettings Section
  const [generalSettings, setGeneralSettings] = useState({
    timeZone: '(GMT+06:00)Astana, Dhaka',
    timeFormat: '12 hour',
    currencySymbol: 'USD ($)',
    currencyPosition: 'left',
    digitAfterDecimal: '2',
    copyrightText: '2021-2023 Flash,',
    cookiesText: 'We use cookies and similar technologies on our website to enhance your browsing experience and provide you with'
  });

  const timeZones = [
    '(GMT+06:00)Astana, Dhaka',
    // Add more time zones as needed
  ];

  const timeFormats = [
    '12 hour',
    '24 hour'
  ];

  const currencies = [
    'USD ($)',
    'EUR (€)',
    'GBP (£)'
  ];

  // BusinessRulesSetup Section
  const [businessRulesSettings, setBusinessRulesSettings] = useState({
    defaultCommissionRate: '10',
    deliveryCommissionRate: '5',
    orderConfirmation: 'store', // 'store' or 'deliveryman'
    includeTaxAmount: true,
    customerFoodPreference: true,
    orderNotificationForAdmin: true,
    notificationType: 'firebase', // 'firebase' or 'manual'
    guestCheckout: true,
    countryPicker: true,
    freeDeliveryOption: true,
    deliveryOptionType: 'specific', // 'all' or 'specific'
    freeDeliveryOverAmount: '5000'
  });

  const handleSwitchChange = (field) => {
    setBusinessRulesSettings(prev => ({ ...prev, [field]: !prev[field] }));
  };

  // AdditionalChargeForm Section
  const [additionalCharge, setAdditionalCharge] = useState(false);
  const [partialPayment, setPartialPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('both');

  // BusinessPlan Section
  const [subscription, setSubscription] = useState(true);
  const [commission, setCommission] = useState(true);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <FaCog className="text-white" />
        </div>
        <h1 className="text-xl font-semibold">Business Settings</h1>
      </div>

      {/* Navigation Tabs */}

   <NavigationTabs
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />

      {/* Maintenance Mode Toggle */}
      <div className="border rounded-lg p-4 mb-6 maintenance-mode-container">
        <div className="flex items-center justify-between mb-4 border border-blue-300 p-2 rounded-lg">
          <div className="flex items-center gap-2">
            <FaCog className="text-gray-600" />
            <span className="font-medium">Maintenance Mode</span>
          </div>
          {/* Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={maintenanceMode}
              onChange={() => setMaintenanceMode(!maintenanceMode)}
            />
            <div className="maintenance-toggle peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-[0rem] peer-checked:after:border-white peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="text-gray-600 text-sm">
          By turning the 'Maintenance Mode' ON all your apps and customer website will be disabled temporarily. Only the Admin Panel Admin Landing Page & Store Panel will be functional.
        </p>
      </div>

      {/* Company Information Section */}
      <div className="p-6 rounded-lg shadow-md">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <FaInfoCircle className="text-gray-600" />
          Company Information
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {/* Company Name */}
          <div>
            <label className="form-label">Company Name</label>
            <input type="text" value={formData.companyName} className="form-input" />
          </div>

          {/* Email */}
          <div>
            <label className="form-label">Email</label>
            <input type="email" value={formData.email} className="form-input" />
          </div>

          {/* Phone */}
          <div>
            <label className="form-label">Phone</label>
            <div className="relative w-full">
              <select
                className="absolute inset-y-0 left-0 pl-2 pr-6 bg-transparent text-sm outline-none appearance-none z-10 cursor-pointer"
                value={selectedPhoneCountryCode}
                onChange={(e) => setSelectedPhoneCountryCode(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} ({country.dialCode})
                  </option>
                ))}
              </select>

              <div className="absolute inset-y-0 left-20 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <input
                type="text"
                value={formData.phone}
                className="w-full pl-28 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <label className="form-label">Country</label>
            <button
              type="button"
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              className="form-input flex items-center justify-between"
            >
              {selectedCountry || 'Select a country'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCountryDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                <div className="relative">
                  <FaSearch className="absolute top-2.5 left-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    className="pl-8 pr-2 py-2 w-full border-b outline-none"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                  />
                </div>
                <ul className="max-h-40 overflow-y-auto">
                  {countries
                    .filter((c) => c.name.toLowerCase().includes(countrySearch.toLowerCase()))
                    .map((country) => (
                      <li
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.name);
                          setIsCountryDropdownOpen(false);
                        }}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        {country.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="form-label">Address</label>
            <textarea value={formData.address} rows={3} className="form-input" />
          </div>

          {/* Map Section */}
          <div className="col-span-2 row-span-3 map-container">
            <div className="info-banner">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className="text-sm text-blue-700">
                Clicking on the map will set Latitude and Longitude automatically
              </span>
            </div>
            <div className="relative">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15} />
              </LoadScript>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-md shadow" aria-label="Expand Map">
                <FaExpand />
              </button>
            </div>
          </div>

          {/* Coordinates */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Latitude</label>
              <input type="text" value={formData.latitude} className="form-input" />
            </div>
            <div>
              <label className="form-label">Longitude</label>
              <input type="text" value={formData.longitude} className="form-input" />
            </div>
          </div>

          {/* Logo & Favicon */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Logo (3:1)</label>
              <div className="border rounded-md p-4">
                <img src="/flash-logo.png" alt="Flash Logo" className="w-48 h-24" />
              </div>
            </div>
            <div>
              <label className="form-label">Favicon (1:1)</label>
              <div className="border rounded-md p-4">
                <img src="/flash-favicon.png" alt="Flash Favicon" className="w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Settings Section */}
      <div className="settings-container">
        <h2 className="settings-header">
          <FaCog className="text-gray-600" />
          General Settings
        </h2>

        <div className="grid grid-cols-4 gap-x-8 gap-y-6">
          {/* Time Zone */}
          <div>
            <label className="form-label">
              Time Zone
            </label>
            <select
              value={generalSettings.timeZone}
              onChange={(e) => setGeneralSettings({...generalSettings, timeZone: e.target.value})}
              className="form-select"
            >
              {timeZones.map(zone => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>

          {/* Time Format */}
          <div>
            <label className="form-label">
              Time Format
            </label>
            <select
              value={generalSettings.timeFormat}
              onChange={(e) => setGeneralSettings({...generalSettings, timeFormat: e.target.value})}
              className="form-select"
            >
              {timeFormats.map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
          </div>

          {/* Currency Symbol */}
          <div>
            <label className="form-label">
              Currency Symbol
            </label>
            <select
              value={generalSettings.currencySymbol}
              onChange={(e) => setGeneralSettings({...generalSettings, currencySymbol: e.target.value})}
              className="form-select"
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          {/* Currency Position */}
          <div>
            <label className="form-label">
              Currency Position
            </label>
            <div className="radio-group border p-2.5 border-gray-300 rounded-md">
              <label className="radio-label">
                <input
                  type="radio"
                  name="currencyPosition"
                  value="left"
                  checked={generalSettings.currencyPosition === 'left'}
                  onChange={(e) => setGeneralSettings({...generalSettings, currencyPosition: e.target.value})}
                  className="radio-input"
                />
                <span className="text-sm">($) Left</span>
              </label>
              <label className="radio-label ">
                <input
                  type="radio"
                  name="currencyPosition"
                  value="right"
                  checked={generalSettings.currencyPosition === 'right'}
                  onChange={(e) => setGeneralSettings({...generalSettings, currencyPosition: e.target.value})}
                  className="radio-input"
                />
                <span className="text-sm">Right ($)</span>
              </label>
            </div>
          </div>

          {/* Digit After Decimal Point */}
          <div>
            <label className="form-label flex items-center gap-1">
              Digit After Decimal Point
              <FaInfoCircle className="text-gray-400 text-sm" />
            </label>
            <input
              type="text"
              value={generalSettings.digitAfterDecimal}
              onChange={(e) => setGeneralSettings({...generalSettings, digitAfterDecimal: e.target.value})}
              className="form-input"
            />
          </div>

          {/* Copyright Text */}
          <div>
            <label className="form-label flex items-center gap-1">
              Copyright Text
              <FaInfoCircle className="text-gray-400 text-sm" />
            </label>
            <input
              type="text"
              value={generalSettings.copyrightText}
              onChange={(e) => setGeneralSettings({...generalSettings, copyrightText: e.target.value})}
              className="form-input"
            />
          </div>

          {/* Cookies Text */}
          <div className="col-span-2">
            <label className="form-label flex items-center gap-1">
              Cookies Text
              <FaInfoCircle className="text-gray-400 text-sm" />
            </label>
            <textarea
              value={generalSettings.cookiesText}
              onChange={(e) => setGeneralSettings({...generalSettings, cookiesText: e.target.value})}
              rows={3}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Business Rules Setup Section */}
      <div className="p-6 rounded-lg shadow">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <FaCog className="text-gray-700" />
          <span className="text-gray-700">Business Rules Setup</span>
        </h2>

        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-3 gap-8">
            {/* Commission Rate */}
            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                Default Commission Rate On Order (%)
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <input
                type="text"
                value={businessRulesSettings.defaultCommissionRate}
                onChange={(e) => setBusinessRulesSettings({...businessRulesSettings, defaultCommissionRate: e.target.value})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Delivery Commission Rate */}
            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                Commission Rate On Delivery Charge (%)
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <input
                type="text"
                value={businessRulesSettings.deliveryCommissionRate}
                onChange={(e) => setBusinessRulesSettings({...businessRulesSettings, deliveryCommissionRate: e.target.value})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Who Will Confirm Order */}
            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                Who Will Confirm Order
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <div className="flex gap-4 mt-2 rounded-lg shadow p-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={businessRulesSettings.orderConfirmation === 'store'}
                    onChange={() => setBusinessRulesSettings({...businessRulesSettings, orderConfirmation: 'store'})}
                    className="mr-2"
                  />
                  <span>Store</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={businessRulesSettings.orderConfirmation === 'deliveryman'}
                    onChange={() => setBusinessRulesSettings({...businessRulesSettings, orderConfirmation: 'deliveryman'})}
                    className="mr-2"
                  />
                  <span>Deliveryman</span>
                </label>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-8">
            {/* Include TAX Amount */}
            <div className="flex items-center justify-between rounded-lg shadow p-3">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Include TAX Amount
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <Switch
                checked={businessRulesSettings.includeTaxAmount}
                onChange={() => handleSwitchChange('includeTaxAmount')}
                className={`${businessRulesSettings.includeTaxAmount ? 'bg-teal-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className={`${businessRulesSettings.includeTaxAmount ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>

            {/* Customer's Food Preference */}
            <div className="flex items-center justify-between rounded-lg shadow p-3">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Customer's Food Preference
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <Switch
                checked={businessRulesSettings.customerFoodPreference}
                onChange={() => handleSwitchChange('customerFoodPreference')}
                className={`${businessRulesSettings.customerFoodPreference ? 'bg-teal-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className={`${businessRulesSettings.customerFoodPreference ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>

            {/* Order Notification For Admin */}
            <div className="flex items-center justify-between rounded-lg shadow p-3">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Order Notification For Admin
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <Switch
                checked={businessRulesSettings.orderNotificationForAdmin}
                onChange={() => handleSwitchChange('orderNotificationForAdmin')}
                className={`${businessRulesSettings.orderNotificationForAdmin ? 'bg-teal-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className={`${businessRulesSettings.orderNotificationForAdmin ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-3 gap-8">
            {/* Order Notification Type */}
            <div className='rounded-lg shadow p-3'>
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                Order Notification Type
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={businessRulesSettings.notificationType === 'firebase'}
                    onChange={() => setBusinessRulesSettings({...businessRulesSettings, notificationType: 'firebase'})}
                    className="mr-2"
                  />
                  <span>Firebase</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={businessRulesSettings.notificationType === 'manual'}
                    onChange={() => setBusinessRulesSettings({...businessRulesSettings, notificationType: 'manual'})}
                    className="mr-2"
                  />
                  <span>Manual</span>
                </label>
              </div>
            </div>

            {/* Guest Checkout */}
            <div className="flex items-center justify-between rounded-lg shadow p-3">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Guest Checkout
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <Switch
                checked={businessRulesSettings.guestCheckout}
                onChange={() => handleSwitchChange('guestCheckout')}
                className={`${businessRulesSettings.guestCheckout ? 'bg-teal-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className={`${businessRulesSettings.guestCheckout ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>

            {/* Country Picker */}
            <div className="flex items-center justify-between rounded-lg shadow p-3">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Country Picker
                <FaInfoCircle className="text-gray-400 text-sm" />
              </label>
              <Switch
                checked={businessRulesSettings.countryPicker}
                onChange={() => handleSwitchChange('countryPicker')}
                className={`${businessRulesSettings.countryPicker ? 'bg-teal-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className={`${businessRulesSettings.countryPicker ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>
          </div>

          {/* Free Delivery Option Section */}
          <div className="mt-6 rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Free Delivery Option</span>
              <Switch
                checked={businessRulesSettings.freeDeliveryOption}
                onChange={() => handleSwitchChange('freeDeliveryOption')}
                className={`${businessRulesSettings.freeDeliveryOption ? 'bg-teal-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className={`${businessRulesSettings.freeDeliveryOption ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>

            {businessRulesSettings.freeDeliveryOption && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Choose Free Delivery Option</p>
                    <div className="flex gap-6 shadow-sm p-2 rounded-lg">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={businessRulesSettings.deliveryOptionType === 'all'}
                          onChange={() => setBusinessRulesSettings({...businessRulesSettings, deliveryOptionType: 'all'})}
                          className="mr-2"
                        />
                        <span>Set free delivery for all store</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={businessRulesSettings.deliveryOptionType === 'specific'}
                          onChange={() => setBusinessRulesSettings({...businessRulesSettings, deliveryOptionType: 'specific'})}
                          className="mr-2"
                        />
                        <span>Set Specific Criteria</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      Free Delivery Over ($)
                      <FaInfoCircle className="text-gray-400 text-sm" />
                    </label>
                    <input
                      type="text"
                      value={businessRulesSettings.freeDeliveryOverAmount}
                      onChange={(e) => setBusinessRulesSettings({...businessRulesSettings, freeDeliveryOverAmount: e.target.value})}
                      className="border rounded-md px-3 py-1 w-100 shadow"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Charge Form Section */}
      <div className="space-y-6 p-4">
        {/* Additional Charge Section */}
        <div className='shadow p-4 rounded bg-gray-50'>
          <h2 className="text-lg font-medium mb-4">Additional Charge</h2>
          <div className="space-y-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-4 border p-2 ms-4 mt-8 rounded-lg w-[350px]">
                <label className="flex items-center">
                  Additional charge
                  <span className="text-red-500">*</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer ms-35">
                  <input
                    type="checkbox"
                    checked={additionalCharge}
                    onChange={(e) => setAdditionalCharge(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                </label>
              </div>

              <div className='w-[400px]'>
                <label className="flex items-center gap-1 mb-2">
                  Additional Charge Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Additional Charge"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className='w-[400px]'>
                <label className="flex items-center gap-1 mb-2">
                  Charge Amount ($)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className='shadow p-4 rounded bg-gray-50'>
          <h2 className="text-lg font-medium mb-4">Payment</h2>
          <div className="space-y-4 bg-gray-50 p-4 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 me-30 border p-2 mt-9 rounded-lg">
                <label className="flex items-center gap-2">
                  Partial Payment
                  <span className="text-red-500">*</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer ms-35">
                  <input
                    type="checkbox"
                    checked={partialPayment}
                    onChange={(e) => setPartialPayment(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                </label>
              </div>

              <div className='ms-20'>
                <label className="block mb-2">Can Pay The Rest Amount Using</label>
                <div className="flex gap-4 border p-2 rounded-lg">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-teal-500"
                    />
                    COD
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="digital"
                      checked={paymentMethod === 'digital'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-teal-500"
                    />
                    Digital payment
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="both"
                      checked={paymentMethod === 'both'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-teal-500"
                    />
                    Both
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Charge Section */}
        <div className="shadow p-4 rounded bg-gray-50 ">
          <h2 className="text-lg font-medium mb-4 ">Shipping Charge</h2>
          <div className="grid grid-cols-2 gap-4 border-t border-gray-200">
            <div className='w-[400px] ms-3'>
              <label className="block mb-2">Minimum Shipping Charge</label>
              <input
                type="number"
                placeholder="10"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className='w-[400px]'>
              <label className="block mb-2">Per Km Shipping Charge</label>
              <input
                type="number"
                placeholder="2"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Business Plan Section */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Business Plan</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Subscription Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 font-medium">Subscription</span>
                <FaInfoCircle className="text-gray-400 text-sm" />
              </div>
              <Switch
                checked={subscription}
                onChange={setSubscription}
                className={`${
                  subscription ? 'bg-teal-500' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    subscription ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </div>

          {/* Commission Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 font-medium">Commission</span>
                <FaInfoCircle className="text-gray-400 text-sm" />
              </div>
              <Switch
                checked={commission}
                onChange={setCommission}
                className={`${
                  commission ? 'bg-teal-500' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    commission ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Reset
          </button>
          <button
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Save Information
          </button>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .nav-tab {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: colors 0.3s, border-radius 0.3s;
        }

        .nav-tab-active {
          background-color: #0d9488;
          color: white;
          border-bottom: 2px solid #0d9488;
          border-radius: 0.375rem;
        }

        .nav-tab-inactive {
          color: #4a5568;
          border-bottom: 2px solid transparent;
          border-radius: 0.375rem;
        }

        .nav-tab-inactive:hover {
          background-color: #f7fafc;
        }

        .maintenance-mode-container {
          border-color: #d1d5db;
        }

        .maintenance-toggle {
          width: 2.75rem;
          height: 1.5rem;
          background-color: #e5e7eb;
          border-radius: 1.5rem;
          position: relative;
        }

        .maintenance-toggle::after {
          content: '';
          position: absolute;
          top: 0.125rem;
          left: 0.125rem;
          width: 1.25rem;
          height: 1.25rem;
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 1.25rem;
          transition: all 0.3s;
        }

        .peer:checked + .maintenance-toggle {
          background-color: #2563eb;
        }

        .peer:checked + .maintenance-toggle::after {
          transform: translateX(1.25rem);
          border-color: white;
        }

        .form-input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4a5568;
          margin-bottom: 0.25rem;
        }

        .map-container {
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .info-banner {
          padding: 1rem;
          border-bottom: 1px solid #d1d5db;
          background-color: #ebf8ff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #1d4ed8;
        }

        .settings-container {
          padding: 1.5rem;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        .settings-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .form-select {
          width: 100%;
          border: 1px solid #cbd5e0;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          background-color: white;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .form-select:focus {
          border-color: #4299e1;
          box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
        }

        .radio-group {
          display: flex;
          gap: 1rem;
        }

        .radio-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .radio-input {
          margin-right: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default BusinessInformation;
