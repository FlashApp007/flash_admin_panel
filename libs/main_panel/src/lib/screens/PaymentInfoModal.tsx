import React from "react";

interface PaymentInfoModalProps {
  onClose: () => void;
}

const paymentInfo = {
  disbursementId: 1002,
  status: "Pending",
  deliveryMan: {
    name: "Jhon Doe",
    contact: "+8**********",
  },
  account: {
    method: "Cash",
    name: "Ali 123",
    number: "083868658",
    amount: "$ 8,308.86",
  },
};

const statusStyles: Record<string, string> = {
  Pending: "bg-blue-100 text-blue-600 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium",
};

const PaymentInfoModal: React.FC<PaymentInfoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-2">Payment Information</h2>
          <div className="text-center text-gray-600 mb-2">
            Disbursement ID <span className="font-medium">#{paymentInfo.disbursementId}</span>
          </div>
          <div className="text-center mb-6">
            Status <span className={statusStyles[paymentInfo.status] || ""}>{paymentInfo.status}</span>
          </div>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6">
            <div className="mb-6">
              <div className="font-semibold text-lg mb-2">Delivery Man Information</div>
              <div className="flex flex-wrap gap-8">
                <div className="text-sm text-gray-600 flex gap-2 mb-1">
                  <span className="w-24">Name</span>:
                  <span className="font-semibold text-gray-900">{paymentInfo.deliveryMan.name}</span>
                </div>
                <div className="text-sm text-gray-600 flex gap-2 mb-1">
                  <span className="w-24">Contact</span>:
                  <span className="font-semibold text-gray-900">{paymentInfo.deliveryMan.contact}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg mb-2">Account Information</div>
              <div className="flex flex-wrap gap-8">
                <div className="text-sm text-gray-600 flex gap-2 mb-1">
                  <span className="w-32">Payment method</span>:
                  <span className="font-semibold text-gray-900">{paymentInfo.account.method}</span>
                </div>
                <div className="text-sm text-gray-600 flex gap-2 mb-1">
                  <span className="w-24">Amount</span>:
                  <span className="font-semibold text-gray-900">{paymentInfo.account.amount}</span>
                </div>
                <div className="text-sm text-gray-600 flex gap-2 mb-1">
                  <span className="w-32">Account name</span>:
                  <span className="font-semibold text-gray-900">{paymentInfo.account.name}</span>
                </div>
                <div className="text-sm text-gray-600 flex gap-2 mb-1">
                  <span className="w-32">Account number</span>:
                  <span className="font-semibold text-gray-900">{paymentInfo.account.number}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded font-medium"
            >
              Cancel
            </button>
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-medium"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoModal;
