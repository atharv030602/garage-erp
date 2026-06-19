import { useEffect, useState } from "react";

const VehicleForm = ({
  addVehicle,
  editingVehicle,
  updateVehicle,
}) => {

  const [formData, setFormData] =
    useState({
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
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {

    if (
      !formData.ownerName ||
      !formData.vehicleNumber
    ) {
      alert("Fill required fields");
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
        {
          editingVehicle
            ? "Edit Vehicle"
            : "Add Vehicle"
        }
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Owner Name"
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
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="border p-3 rounded-lg"
        />

        <input
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Model"
          className="border p-3 rounded-lg"
        />

        <input
          name="fuelType"
          value={formData.fuelType}
          onChange={handleChange}
          placeholder="Fuel Type"
          className="border p-3 rounded-lg"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="
        mt-4
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        "
      >
        {
          editingVehicle
            ? "Update Vehicle"
            : "Add Vehicle"
        }
      </button>

    </div>
  );
};

export default VehicleForm;