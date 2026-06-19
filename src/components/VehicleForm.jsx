import { useEffect, useState } from "react";

const VehicleForm = ({
  customers,
  addVehicle,
  editingVehicle,
  updateVehicle,
}) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    vehicleNumber: "",
    brand: "",
    model: "",
    fuelType: "",
  });

  useEffect(() => {
    if (editingVehicle) {
      setFormData(editingVehicle);
    }
  }, [editingVehicle]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.ownerName ||
      !formData.vehicleNumber
    ) {
      alert("Please fill required fields");
      return;
    }

    if (editingVehicle) {
      updateVehicle(formData);
    } else {
      addVehicle({
        id: Date.now(),
        ...formData,
      });
    }

    setFormData({
      ownerName: "",
      vehicleNumber: "",
      brand: "",
      model: "",
      fuelType: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-semibold mb-6">
        {editingVehicle
          ? "Edit Vehicle"
          : "Add Vehicle"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2 font-medium">
            Customer
          </label>

          <select
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          >
            <option value="">
              Select Customer
            </option>

            {customers.map((customer) => (
              <option
                key={customer.id}
                value={customer.name}
              >
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Vehicle Number
          </label>

          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            placeholder="MH31AB1234"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Maruti"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Model
          </label>

          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Swift"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Fuel Type
          </label>

          <select
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          >
            <option value="">
              Select Fuel Type
            </option>
            <option value="Petrol">
              Petrol
            </option>
            <option value="Diesel">
              Diesel
            </option>
            <option value="CNG">
              CNG
            </option>
            <option value="Electric">
              Electric
            </option>
          </select>
        </div>

      </div>

      <button
        onClick={handleSubmit}
        className="
        mt-6
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        hover:bg-blue-700
        "
      >
        {editingVehicle
          ? "Update Vehicle"
          : "Add Vehicle"}
      </button>

    </div>
  );
};

export default VehicleForm;