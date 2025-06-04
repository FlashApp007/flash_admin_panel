import React from "react";

interface WithdrawMethodFieldsModalProps {
  onClose: () => void;
  methodName?: string;
}

const methodFields = [
  {
    name: "Account name",
    type: "String",
    placeholder: "Enter your card holder name",
    required: true,
  },
  {
    name: "Account number",
    type: "Number",
    placeholder: "Enter your account number",
    required: true,
  },
  {
    name: "Email",
    type: "Email",
    placeholder: "Enter your account email",
    required: false,
  },
];

const WithdrawMethodFieldsModal: React.FC<WithdrawMethodFieldsModalProps> = ({ onClose, methodName = "Card" }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="pt-7 pb-2 px-8">
          <h2 className="text-xl font-semibold text-center mb-1">Withdraw Method List</h2>
          <div className="text-center text-gray-400 text-base mb-5">
            Method Name : <span className="text-gray-700 font-semibold">{methodName}</span>
          </div>
          <div className="divide-y divide-gray-200">
            {methodFields.map((field, idx) => (
              <div key={field.name} className="flex items-start py-4 gap-4">
                <div className="w-7 text-gray-500 pt-1 text-center font-medium">{idx + 1}</div>
                <div className="flex-1">
                  <div className="mb-1"><span className="font-semibold">Name:</span> {field.name}</div>
                  <div className="mb-1"><span className="font-semibold">Type:</span> {field.type}</div>
                  <div className="mb-1"><span className="font-semibold">Placeholder:</span> {field.placeholder}</div>
                </div>
                <div className="flex items-center gap-2 min-w-[110px] pl-2">
                  {field.required ? (
                    <>
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Required</span>
                    </>
                  ) : (
                    <span className="text-gray-400">Optional</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMethodFieldsModal;
