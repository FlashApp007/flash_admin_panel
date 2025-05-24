import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function CancelationPolicy() {
  const [policyEnabled, setPolicyEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('Default');
  const [editorContent, setEditorContent] = useState(`<h1>This is a demo cancelation policy</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc tortor, non malesuada nunc tincidunt id. Sed porta ex nec sapien convallis hendrerit. Pellentesque auctor dapibus eleifend. Cras tempus, sapien sed dignissim consequat, dolor nunc volutpat urna, at hendrerit dui dolor dapibus odio. Sed dolor purus, luctus in dui non, fermentum imperdiet nibh. Aenean at libero ut libero auctor finibus. Vivamus eu nulla vel nisi dapibus tincidunt eget non orci. Sed lorem velit, sollicitudin eu mi vitae, rutrum congue orci. Phasellus sit amet ex accumsan, semper magna in, lobortis nibh. Maecenas ut iaculis ex, eget pellentesque sapien. Praesent tristique eros mauris.</p>
<p>Nam in blandit dui, venenatis sodales ante. Aenean pulvinar feugiat eros non convallis. Integer vel posuere lacus. Fusce eget leo in erat venenatis vehicula. Praesent congue lorem sed neque porta hendrerit. Curabitur sollicitudin fringilla sapien eu venenatis. In at mattis odio. Aenean gravida enim eget ipsum congue gravida. Proin dapibus non ante sed ultrices.</p>`);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = () => {
    console.log({
      policyEnabled,
      activeTab,
      editorContent
    });
    // Add your submission logic here
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-gray-100 p-2 rounded-md mr-3">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h1 className="text-xl font-medium">Cancelation Policy</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">STATUS</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={policyEnabled}
              onChange={() => setPolicyEnabled(!policyEnabled)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
          </label>
        </div>
      </div>

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
          <Editor
            value={editorContent}
            onEditorChange={handleEditorChange}
            init={{
              height: 400,
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

export default CancelationPolicy;