import { useEffect, useState } from "react";

const InvoiceForm = ({
  services = [],
  invoices = [],
  addInvoice,
  editingInvoice,
  updateInvoice,
}) => {

  const [formData, setFormData] = useState({
    invoiceNo: "",
    jobCardNo: "",
    customerName: "",
    vehicleNumber: "",
    labourCharge: "",
    partsCharge: "",
    gst: 18,
    totalAmount: 0,
    paymentStatus: "Unpaid",
  });

  const getNextInvoiceNo = () => {
    return `INV${String(
      (invoices?.length || 0) + 1
    ).padStart(3, "0")}`;
  };

  useEffect(() => {

    if (editingInvoice) {

      setFormData(editingInvoice);

    } else {

      setFormData({
        invoiceNo: getNextInvoiceNo(),
        jobCardNo: "",
        customerName: "",
        vehicleNumber: "",
        labourCharge: "",
        partsCharge: "",
        gst: 18,
        totalAmount: 0,
        paymentStatus: "Unpaid",
      });

    }

  }, [editingInvoice, invoices]);

  useEffect(() => {

    const labour =
      Number(formData.labourCharge) || 0;

    const parts =
      Number(formData.partsCharge) || 0;

    const gst =
      Number(formData.gst) || 0;

    const subtotal =
      labour + parts;

    const gstAmount =
      (subtotal * gst) / 100;

    const total =
      subtotal + gstAmount;

    setFormData((prev) => ({
      ...prev,
      totalAmount: total,
    }));

  }, [
    formData.labourCharge,
    formData.partsCharge,
    formData.gst,
  ]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "jobCardNo") {

      const selectedService =
        services.find(
          (service) =>
            service.jobCardNo === value
        );

      setFormData((prev) => ({
        ...prev,
        jobCardNo: value,
        customerName:
          selectedService?.customerName ||
          "",
        vehicleNumber:
          selectedService?.vehicleNumber ||
          "",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {

    if (
      !formData.jobCardNo ||
      !formData.labourCharge
    ) {
      alert("Fill required fields");
      return;
    }

    if (editingInvoice) {

      updateInvoice(formData);

    } else {

      addInvoice({
        id: Date.now(),
        ...formData,
      });

    }

    setFormData({
      invoiceNo: getNextInvoiceNo(),
      jobCardNo: "",
      customerName: "",
      vehicleNumber: "",
      labourCharge: "",
      partsCharge: "",
      gst: 18,
      totalAmount: 0,
      paymentStatus: "Unpaid",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-semibold mb-6">
        {editingInvoice
          ? "Edit Invoice"
          : "Create Invoice"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          value={formData.invoiceNo}
          readOnly
          className="border p-3 rounded-lg bg-gray-100"
        />

        <select
          name="jobCardNo"
          value={formData.jobCardNo}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="">
            Select Job Card
          </option>

          {services.map((service) => (
            <option
              key={service.id}
              value={service.jobCardNo}
            >
              {service.jobCardNo}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={formData.customerName}
          readOnly
          placeholder="Customer"
          className="border p-3 rounded-lg bg-gray-100"
        />

        <input
          type="text"
          value={formData.vehicleNumber}
          readOnly
          placeholder="Vehicle"
          className="border p-3 rounded-lg bg-gray-100"
        />

        <input
          type="number"
          name="labourCharge"
          value={formData.labourCharge}
          onChange={handleChange}
          placeholder="Labour Charge"
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="partsCharge"
          value={formData.partsCharge}
          onChange={handleChange}
          placeholder="Parts Charge"
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="gst"
          value={formData.gst}
          onChange={handleChange}
          placeholder="GST %"
          className="border p-3 rounded-lg"
        />

        <select
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="Paid">
            Paid
          </option>

          <option value="Unpaid">
            Unpaid
          </option>
        </select>

      </div>

      <div className="mt-6 p-4 bg-slate-100 rounded-lg">

        <h3 className="font-semibold text-lg">
          Total Amount
        </h3>

        <p className="text-3xl font-bold">
          ₹{formData.totalAmount.toFixed(2)}
        </p>

      </div>

      <button
        onClick={handleSubmit}
        className="
        mt-4
        bg-green-600
        text-white
        px-6
        py-3
        rounded-lg
        hover:bg-green-700
        "
      >
        {editingInvoice
          ? "Update Invoice"
          : "Create Invoice"}
      </button>

    </div>
  );
};

export default InvoiceForm;