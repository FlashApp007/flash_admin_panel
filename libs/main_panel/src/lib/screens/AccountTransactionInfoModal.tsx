import React from "react";

interface AccountTransactionInfoModalProps {
  onClose: () => void;
}

const accountTransaction = {
  method: "stripe",
  amount: "$ 433.64",
  requestTime: "27 Nov 2023 01:50:pm",
  reference: "Store collect cash payments",
  store: {
    name: "Click & Collect",
    phone: "01000000001",
    address: "House: 00, Road: 00, City-0000, Country",
  },
};

const AccountTransactionInfoModal: React.FC<AccountTransactionInfoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Account Transaction Information</h2>
          <div className="text-center text-gray-500 text-sm mb-1">
            Method: <span className="font-semibold text-gray-800">{accountTransaction.method}</span>
          </div>
          <div className="text-center text-gray-500 text-sm mb-1">
            Amount: <span className="font-semibold text-gray-900">{accountTransaction.amount}</span>
          </div>
          <div className="text-center text-xs text-gray-400 mb-1">
            Request time: {accountTransaction.requestTime}
          </div>
          <div className="text-center text-xs text-gray-400 mb-4">
            Reference: <span className="text-gray-700">{accountTransaction.reference}</span>
          </div>
          {/* Store Info */}
          <div className="bg-gray-50 rounded-lg border border-gray-200">
            <div className="border-b border-gray-200 px-4 py-3 font-semibold">Store Info</div>
            <div className="px-4 py-3 text-sm">
              <div className="flex mb-2">
                <div className="w-20 text-gray-500">Name:</div>
                <div className="font-medium">{accountTransaction.store.name}</div>
              </div>
              <div className="flex mb-2">
                <div className="w-20 text-gray-500">Phone:</div>
                <div>{accountTransaction.store.phone}</div>
              </div>
              <div className="flex mb-2">
                <div className="w-20 text-gray-500">Address:</div>
                <div className="text-blue-600 underline cursor-pointer">{accountTransaction.store.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTransactionInfoModal;
