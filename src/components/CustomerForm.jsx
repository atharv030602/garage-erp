import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const CustomerForm = ({
  addCustomer,
  editingCustomer,
  updateCustomer,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    vehicleNumber: "",
    vehicleType: "",
    brand: "",
    model: "",
    address: "",
  });

  useEffect(() => {
    if (editingCustomer) {
      setFormData(editingCustomer);
    }
  }, [editingCustomer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.vehicleNumber
    ) {
      alert("Please fill mandatory fields");
      return;
    }

    if (editingCustomer) {
      updateCustomer(formData);
    } else {
      addCustomer({
        id: Date.now(),
        ...formData,
      });
    }

    setFormData({
      name: "",
      mobile: "",
      vehicleNumber: "",
      vehicleType: "",
      brand: "",
      model: "",
      address: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-semibold mb-6">
        {editingCustomer
          ? "Edit Customer"
          : "Add Customer"}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Customer Name"
          className="border p-3 rounded-lg"
        />

        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="border p-3 rounded-lg"
        />

        <input
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          placeholder="Vehicle Number"
          className="border p-3 rounded-lg"
        />

        <input
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          placeholder="Vehicle Type"
          className="border p-3 rounded-lg"
        />

        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Vehicle Brand"
          className="border p-3 rounded-lg"
        />

        <input
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Vehicle Model"
          className="border p-3 rounded-lg"
        />

      </div>

      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="border p-3 rounded-lg w-full mt-4"
      />

      <button
        onClick={handleSubmit}
        className="
        mt-4
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        flex
        items-center
        gap-2
        "
      >
        <Plus size={18} />

        {editingCustomer
          ? "Update Customer"
          : "Add Customer"}
      </button>

    </div>
  );
};

export default CustomerForm;