import React from "react";

interface WithdrawInfoModalProps {
  onClose: () => void;
}

const withdrawInfo = {
  amount: "$ 736.36",
  status: "Approved",
  requestTime: "27 Nov 2023 01:46:pm",
  store: {
    name: "Click & Collect",
    address: "House: 00, Road: 00, City-0000, Country",
    balance: "$ 363.64",
  },
  owner: {
    name: "Jon Doe P",
    email: "pharmacy.store1@demo.com",
    phone: "+101747410000",
  },
  payment: {
    method: null,
  },
  approvedNote: "Store wallet adjustment partial",
};

const statusStyles: Record<string, string> = {
  Approved: "bg-green-100 text-green-600 border border-green-200 px-3 py-1 rounded-full text-xs font-medium ml-2",
};

const WithdrawInfoModal: React.FC<WithdrawInfoModalProps> = ({ onClose }) => {
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
          <h2 className="text-2xl font-semibold text-center mb-2">Withdraw Information</h2>
          <div className="text-center text-gray-600 mb-1">
            Withdraw Amount: <span className="font-semibold text-gray-900">{withdrawInfo.amount}</span>
            <span className={statusStyles[withdrawInfo.status] || ""}>{withdrawInfo.status}</span>
          </div>
          <div className="text-center text-xs text-gray-400 mb-6">
            Request time: {withdrawInfo.requestTime}
          </div>
          {/* Store Info */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <div className="border-b border-gray-200 px-4 py-3 font-semibold">Store Info</div>
            <div className="px-4 py-3">
              <div className="flex mb-2 text-sm">
                <div className="w-24 text-gray-500">Name:</div>
                <div className="font-medium">{withdrawInfo.store.name}</div>
              </div>
              <div className="flex mb-2 text-sm">
                <div className="w-24 text-gray-500">Address:</div>
                <div className="text-blue-600 underline cursor-pointer">{withdrawInfo.store.address}</div>
              </div>
              <div className="flex items-center bg-gray-100 rounded px-4 py-3 mt-4">
                <div className="w-32 text-gray-500">Store Balance:</div>
                <div className="text-xl font-semibold text-teal-600">{withdrawInfo.store.balance}</div>
              </div>
            </div>
          </div>
          {/* Owner Info */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <div className="border-b border-gray-200 px-4 py-3 font-semibold">Owner Info</div>
            <div className="px-4 py-3 text-sm">
              <div className="flex mb-2">
                <div className="w-20 text-gray-500">Name:</div>
                <div className="font-medium">{withdrawInfo.owner.name}</div>
              </div>
              <div className="flex mb-2">
                <div className="w-20 text-gray-500">Email:</div>
                <div>{withdrawInfo.owner.email}</div>
              </div>
              <div className="flex mb-2">
                <div className="w-20 text-gray-500">Phone:</div>
                <div>{withdrawInfo.owner.phone}</div>
              </div>
            </div>
          </div>
          {/* Payment Info */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <div className="border-b border-gray-200 px-4 py-3 font-semibold">Payment Info</div>
            <div className="px-4 py-3 text-sm">
              <div className="flex mb-2">
                <div className="w-28 text-gray-500">Method:</div>
                <div className="font-semibold text-gray-900">No Data Found</div>
              </div>
            </div>
          </div>
          {/* Approved Note */}
          <div className="mt-2">
            <div className="text-xs text-gray-500 mb-1">Approved Note</div>
            <div className="bg-gray-100 rounded px-4 py-3 text-gray-700 text-sm">
              {withdrawInfo.approvedNote}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawInfoModal;
