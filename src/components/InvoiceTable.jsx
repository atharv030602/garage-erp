const InvoiceTable = ({
  invoices,
  deleteInvoice,
  editInvoice,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        Invoices
      </h2>

      <p className="mb-4">
        Total Invoices : {invoices.length}
      </p>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-3 text-left">
                Invoice No
              </th>

              <th className="p-3 text-left">
                Job Card
              </th>

              <th className="p-3 text-left">
                Customer
              </th>

              <th className="p-3 text-left">
                Vehicle
              </th>

              <th className="p-3 text-left">
                Total Amount
              </th>

              <th className="p-3 text-left">
                Payment
              </th>

              <th className="p-3 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {invoices.map((invoice) => (

              <tr
                key={invoice.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-3 font-medium">
                  {invoice.invoiceNo}
                </td>

                <td className="p-3">
                  {invoice.jobCardNo}
                </td>

                <td className="p-3">
                  {invoice.customerName}
                </td>

                <td className="p-3">
                  {invoice.vehicleNumber}
                </td>

                <td className="p-3 font-semibold">
                  ₹{invoice.totalAmount}
                </td>

                <td className="p-3">

                  <span
                    className={
                      invoice.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                        : "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                    }
                  >
                    {invoice.paymentStatus}
                  </span>

                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      editInvoice(invoice)
                    }
                    className="
                    bg-yellow-500
                    text-white
                    px-3
                    py-1
                    rounded
                    mr-2
                    hover:bg-yellow-600
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {

                      if (
                        window.confirm(
                          "Delete this invoice?"
                        )
                      ) {
                        deleteInvoice(
                          invoice.id
                        );
                      }

                    }}
                    className="
                    bg-red-600
                    text-white
                    px-3
                    py-1
                    rounded
                    hover:bg-red-700
                    "
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {invoices.length === 0 && (

              <tr>

                <td
                  colSpan="7"
                  className="
                  text-center
                  p-8
                  text-gray-500
                  "
                >
                  No Invoices Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default InvoiceTable;