const InvoiceModal = ({
  invoice,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-full max-w-2xl">

        <h2 className="text-2xl font-bold mb-4">
          Invoice Details
        </h2>

        <p>
          <strong>Invoice No:</strong>{" "}
          {invoice.invoiceNo}
        </p>

        <p>
          <strong>Customer:</strong>{" "}
          {invoice.customerName}
        </p>

        <p>
          <strong>Vehicle:</strong>{" "}
          {invoice.vehicleNumber}
        </p>

        <p>
          <strong>Total:</strong>{" "}
          ₹{invoice.totalAmount}
        </p>

        <div className="mt-5 flex gap-3">

          <button
            onClick={() => window.print()}
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded
            "
          >
            Print
          </button>

          <button
            onClick={onClose}
            className="
            bg-gray-600
            text-white
            px-4
            py-2
            rounded
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default InvoiceModal;