import React, { useState } from 'react';
import { FiMail, FiInfo } from 'react-icons/fi';
import { FaQuestionCircle } from 'react-icons/fa';
import { Editor } from '@tinymce/tinymce-react';

const RentalModule = () => {
  // State for the first part of the component
  const [activeTab, setActiveTab] = useState('New Provider Registration');
  const [receiveMailOn, setReceiveMailOn] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('Admin Mail Templates');

  const tabs = [
    'New Provider Registration',
    'Withdraw Request'
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleReceiveMail = () => {
    setReceiveMailOn(!receiveMailOn);
  };

  // State for the second part of the component
  const [activeLanguage, setActiveLanguage] = useState('Default');
  const [logo, setLogo] = useState(null);
  const [mainTitle, setMainTitle] = useState('New Provider Registration request');
  const [bodyContent, setBodyContent] = useState('<p>Dear {providerName},</p><p>We are pleased to inform you that your registration as a provider has been successfully completed.</p>');
  const [buttonName, setButtonName] = useState('View');
  const [redirectLink, setRedirectLink] = useState('https://6ammart-admin.6amtech.com/');

  const languages = [
    { id: 'default', name: 'Default' },
    { id: 'en', name: 'English(EN)' },
    { id: 'ar', name: 'Arabic - العربية(AR)' }
  ];

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // State for the third part of the component
  const [bannerImage, setBannerImage] = useState(null);
  const [footerText, setFooterText] = useState('Please contact us for any queries, we\'re always happy to help, thanks');
  const [copyright, setCopyright] = useState('Copyright: 2023 6amMart. All right reserved');

  const [pageLinks, setPageLinks] = useState({
    'Privacy Policy': true,
    'Refund Policy': true,
    'Cancellation Policy': true,
    'Contact Us': true
  });

  const [socialLinks, setSocialLinks] = useState({
    'Facebook': true,
    'Instagram': true,
    'Twitter': true,
    'LinkedIn': true,
    'Pinterest': true
  });

  const handlePageLinkToggle = (link) => {
    setPageLinks({
      ...pageLinks,
      [link]: !pageLinks[link]
    });
  };

  const handleSocialLinkToggle = (link) => {
    setSocialLinks({
      ...socialLinks,
      [link]: !socialLinks[link]
    });
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setButtonName('View');
    setRedirectLink('https://6ammart-admin.6amtech.com/');
    setBannerImage(null);
    setFooterText('Please contact us for any queries, we\'re always happy to help, thanks');
    setCopyright('Copyright: 2023 6amMart. All right reserved');
    setPageLinks({
      'Privacy Policy': true,
      'Refund Policy': true,
      'Cancellation Policy': true,
      'Contact Us': true
    });
    setSocialLinks({
      'Facebook': true,
      'Instagram': true,
      'Twitter': true,
      'LinkedIn': true,
      'Pinterest': true
    });
  };

  const handleSave = () => {
    console.log({
      buttonName,
      redirectLink,
      bannerImage,
      footerText,
      copyright,
      pageLinks,
      socialLinks
    });
    // Implement save functionality
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* First part of the component */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FiMail className="h-5 w-5 text-gray-500 mr-2" />
          <h1 className="text-xl font-semibold text-gray-800">Email Templates</h1>
        </div>

        <div className="flex items-center">
          <div className="relative mr-4">
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            >
              <option>Admin Mail Templates</option>
              <option>User Mail Templates</option>
              <option>Provider Mail Templates</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <a href="#" className="text-teal-600 hover:text-teal-700 text-sm flex items-center">
            See how it works! <FaQuestionCircle className="ml-1" />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-2">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-t-md ${
                activeTab === tab
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Section */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-sm text-gray-700 mr-2">Receive Mail On: "{activeTab}"</span>
          <button className="text-gray-400 hover:text-gray-600">
            <FiInfo size={16} />
          </button>
        </div>

        <div className="relative inline-block w-12 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="toggle-receive-mail"
            checked={receiveMailOn}
            onChange={toggleReceiveMail}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle-receive-mail"
            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${receiveMailOn ? 'bg-teal-400' : 'bg-gray-300'}`}
          ></label>
        </div>
      </div>

      {/* Content area - would contain the email template editor */}
      <div className="py-4">
        {activeTab === 'Withdraw Request' ? (
          <div>
            {/* Withdraw Request Template */}
            <div className="p-6 bg-gray-50 min-h-screen">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
                {/* Preview Section */}
                <div className="border rounded-lg p-6 bg-white">
                  <div className="flex justify-center mb-4">
                    <img src="https://6ammart-admin.6amtech.com/storage/app/public/email_template/2025-02-08-67a725857fb1a.png" alt="icon" className="w-12 h-12" />
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2">Provider Withdraw Request</h2>
                  <p className="text-center text-sm text-gray-600 mb-1">Dear {`{providerName}`}</p>

                  <p className="text-sm text-gray-700 text-center mb-2">
                    We are pleased to inform you that your withdrawal request as a provider has been successfully completed.
                  </p>

                  <p className="text-sm text-gray-700 text-center mb-4">
                    Please find below the details of the new withdrawal request.
                  </p>

                  <div className="overflow-x-auto mb-4">
                    <table className="table-auto w-full text-sm border border-gray-200 text-center">
                      <thead className="bg-teal-50">
                        <tr>
                          <th className="border px-2 py-1">SL</th>
                          <th className="border px-2 py-1">Transaction ID</th>
                          <th className="border px-2 py-1">Time</th>
                          <th className="border px-2 py-1">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-2 py-1">1</td>
                          <td className="border px-2 py-1">2299435764834</td>
                          <td className="border px-2 py-1">23 Jul 2023 3:24 am</td>
                          <td className="border px-2 py-1">$500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-center mb-4">
                    <button className="bg-teal-600 text-white px-4 py-1 text-sm rounded">View</button>
                  </div>

                  <hr className="my-4" />

                  <p className="text-xs text-gray-600 mb-1 text-center">
                    Please contact us for any queries; we're always happy to help, thanks
                  </p>

                  <p className="text-xs text-gray-600 text-center">Thanks & Regards,<br />6amMart</p>

                  <div className="flex justify-center gap-2 text-xs text-gray-500 mt-4 flex-wrap">
                    <a href="#" className="text-gray-600">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray-600">Refund Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray-600">Cancellation Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray-600">Contact us</a>
                  </div>

                  <div className="flex justify-center mt-3 gap-3">
                    <a href="#" className="text-blue-600">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" className="text-blue-400">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="#" className="text-blue-700">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-red-600">
                      <i className="fab fa-pinterest-square"></i>
                    </a>
                  </div>

                  <p className="text-center text-xs mt-4 text-gray-500">
                    Copyright 2025 6amMart. All right reserved
                  </p>
                </div>

                {/* Editor Section */}
                <div>
                  {/* Language Tabs */}
                  <div className="mb-4 border-b border-gray-200">
                    <div className="flex">
                      {['Default', 'English(EN)', 'Arabic - العربية(AR)'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveLanguage(tab)}
                          className={`py-2 px-4 text-sm font-medium ${
                            activeLanguage === tab
                              ? 'text-teal-600 border-b-2 border-teal-600'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                      <div className="ml-auto">
                        <button className="text-teal-600 text-sm font-medium">
                          Read Instructions <FiInfo className="inline ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Icon Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                    <div className="flex items-center">
                      <button className="bg-white border border-gray-300 rounded px-3 py-1 text-sm">
                        Choose File
                      </button>
                      <span className="ml-3 text-sm text-gray-500">No file chosen</span>
                    </div>
                  </div>

                  {/* Header Content */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">Header Content</span>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Main Title(Default)</label>
                      <input
                        type="text"
                        value={mainTitle}
                        onChange={(e) => setMainTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  {/* Mail Body Message */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mail Body Message(Default)</label>
                    <div className="border border-gray-300 rounded">
                      <div className="bg-gray-50 border-b border-gray-300 px-2 py-1 flex items-center">
                        <button className="px-2 py-1 text-sm text-gray-700">Source</button>
                        <div className="flex space-x-1 ml-2">
                          {['Bold', 'Italic', 'Underline', 'Strike', 'Superscript', 'Subscript'].map((tool) => (
                            <button key={tool} className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded">
                              {tool === 'Bold' && <span className="font-bold">B</span>}
                              {tool === 'Italic' && <span className="italic">I</span>}
                              {tool === 'Underline' && <span className="underline">U</span>}
                              {tool === 'Strike' && <span className="line-through">S</span>}
                              {tool === 'Superscript' && <span>x²</span>}
                              {tool === 'Subscript' && <span>x₂</span>}
                            </button>
                          ))}
                        </div>
                      </div>
                      <textarea
                        rows={8}
                        value={bodyContent}
                        onChange={(e) => setBodyContent(e.target.value)}
                        className="w-full px-3 py-2 text-sm focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* New Provider Registration Template */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Preview Section */}
              <div className="border border-gray-200 rounded-md p-4">
                <h2 className="text-lg font-bold mb-2">New Provider Registration request</h2>
                <p className="text-gray-600 text-sm mb-4">Dear System Admin,</p>

                <p className="text-sm mb-4">We are pleased to inform you that your registration as a provider has been successfully completed.</p>

                <div className="mb-4">
                  <img src="https://6ammart-admin.6amtech.com/storage/app/public/email_template/2025-02-08-67a7256507289.png" alt="Store Request" className="w-full max-w-xs mx-auto" />
                </div>

                <button className="bg-teal-600 text-white px-4 py-1 rounded-md text-sm">
                  View
                </button>

                <div className="mt-6 text-xs text-gray-500">
                  <p>Please contact us for any queries, we're always happy to help, thank you.</p>
                  <p className="mt-2">Thanks & Regards,</p>
                  <p>6amMart</p>

                  <div className="mt-4 flex space-x-2">
                    <a href="#" className="text-gray-500">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray-500">Refund Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray-500">Cancellation Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray-500">Contact Us</a>
                  </div>

                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-500"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-gray-500"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-500"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-gray-500"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-gray-500"><i className="fab fa-pinterest"></i></a>
                  </div>

                  <p className="mt-4">Copyright 2023 Flash. All rights reserved.</p>
                </div>
              </div>

              {/* Editor Section */}
              <div>
                {/* Logo Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
                  <div className="flex items-center">
                    <label className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-700 hover:bg-gray-50">
                      Choose File
                      <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
                    </label>
                    <span className="ml-3 text-sm text-gray-500">No file chosen</span>
                  </div>
                </div>

                {/* Header Content */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Header Content</span>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Main Title(Default)</label>
                    <input
                      type="text"
                      value={mainTitle}
                      onChange={(e) => setMainTitle(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                {/* Body Content */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Mail Body Message(Default)</span>
                  </div>

                  <Editor
                    value={bodyContent}
                    onEditorChange={(content) => setBodyContent(content)}
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                  />
                </div>

                {/* Button Content */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Button Content</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Button Name(Default)</label>
                      <input
                        type="text"
                        value={buttonName}
                        onChange={(e) => setButtonName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Redirect Link</label>
                      <input
                        type="text"
                        value={redirectLink}
                        onChange={(e) => setRedirectLink(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Reset
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RentalModule;
