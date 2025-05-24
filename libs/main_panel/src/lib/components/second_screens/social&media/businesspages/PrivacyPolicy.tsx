import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('Default');
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutDescription, setAboutDescription] = useState(`<p>6amMart is a complete Multi-vendor Food, Grocery, eCommerce, Parcel, Pharmacy, or any kind of products delivery system developed with powerful admin panel will help you to control your business smartly.</p>
<p>Praesent fermentum finibus lacus. Nulla tincidunt lectus sed purus facilisis hendrerit. Maecenas volutpat elementum orci, tincidunt euismod ante facilisis ac. Integer dignissim iaculis varius. Mauris iaculis elit vel posuere pellentesque. Praesent a mi sed lectus ullamcorper dignissim sed ut nibh. Sed purus dui, sodales in varius in, accumsan at libero. Vestibulum posuere dui et orci tincidunt, ac consequat felis venenatis.</p>
<p>Morbi sodales, nisl iaculis fringilla imperdiet, metus tortor semper quam, a fringilla nulla dui nec dolor. Phasellus lacinia aliquam ligula sed porttitor. Cras feugiat eros ut arcu commodo dictum. Integer tincidunt nisl id nisl consequat molestie. Integer elit tortor, ullamcorper dignissim vitae, feugiat tempus mauris. Morbi volutpat consectetur felis sed porttitor. Praesent in urna erat.</p>`);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDescriptionChange = (content) => {
    setAboutDescription(content);
  };

  const handleSubmit = () => {
    console.log({
      activeTab,
      aboutTitle,
      aboutDescription
    });
    // Add your submission logic here
  };

  return (
    <div className="p-6 max-w-7xl mx-auto ">
      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`${
                activeTab === 'Default'
                  ? 'border-teal-500 text-teal-600 border-b-2'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm`}
              onClick={() => handleTabClick('Default')}
            >
              Default
            </button>
            <button
              className={`${
                activeTab === 'English(EN)'
                  ? 'border-teal-500 text-teal-600 border-b-2'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm`}
              onClick={() => handleTabClick('English(EN)')}
            >
              English(EN)
            </button>
            <button
              className={`${
                activeTab === 'Arabic'
                  ? 'border-teal-500 text-teal-600 border-b-2'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm`}
              onClick={() => handleTabClick('Arabic')}
            >
              Arabic - العربية(AR)
            </button>
          </nav>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">About title(Default)</label>
            <input
              type="text"
              value={aboutTitle}
              onChange={(e) => setAboutTitle(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">About us description(Default)</label>
            <Editor
              value={aboutDescription}
              onEditorChange={handleDescriptionChange}
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'source | undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor | blockquote | image media table | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </div>
        </div>

        <div className="p-4 flex justify-end">
          <button
            onClick={handleSubmit}
            className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;