import { useEffect, useState } from "react";

const ServiceForm = ({
  customers = [],
  vehicles = [],
  services = [],
  addService,
  editingService,
  updateService,
}) => {
  const serviceOptions = [
    "Oil Change",
    "Brake Service",
    "Wheel Alignment",
    "Battery Check",
    "Engine Repair",
    "General Service",
  ];

  const getNextJobCard = () => {
    return `JC${String(
      (services?.length || 0) + 1
    ).padStart(3, "0")}`;
  };

  const [formData, setFormData] = useState({
    jobCardNo: "",
    customerName: "",
    vehicleNumber: "",
    services: [],
    status: "Pending",
    serviceDate: "",
    remarks: "",
  });

  useEffect(() => {
    if (editingService) {
      setFormData(editingService);
    } else {
      setFormData({
        jobCardNo: getNextJobCard(),
        customerName: "",
        vehicleNumber: "",
        services: [],
        status: "Pending",
        serviceDate:
          new Date().toISOString().split("T")[0],
        remarks: "",
      });
    }
  }, [editingService, services]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "customerName") {
      setFormData((prev) => ({
        ...prev,
        customerName: value,
        vehicleNumber: "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.ownerName === formData.customerName
  );

  const handleSubmit = () => {
    if (
      !formData.customerName ||
      !formData.vehicleNumber ||
      formData.services.length === 0
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editingService) {
      updateService(formData);
    } else {
      addService({
        id: Date.now(),
        ...formData,
      });
    }

    setFormData({
      jobCardNo: getNextJobCard(),
      customerName: "",
      vehicleNumber: "",
      services: [],
      status: "Pending",
      serviceDate:
        new Date().toISOString().split("T")[0],
      remarks: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-6">
        {editingService
          ? "Edit Job Card"
          : "Create Job Card"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          value={formData.jobCardNo}
          readOnly
          className="border p-3 rounded-lg bg-gray-100"
        />

        <input
          type="date"
          name="serviceDate"
          value={formData.serviceDate}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <select
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="border p-3 rounded-lg"
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

        <select
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="">
            Select Vehicle
          </option>

          {filteredVehicles.map((vehicle) => (
            <option
              key={vehicle.id}
              value={vehicle.vehicleNumber}
            >
              {vehicle.vehicleNumber}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="Pending">
            Pending
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="Delivered">
            Delivered
          </option>
        </select>

      </div>

      <div className="mt-6">

        <label className="block mb-3 font-medium">
          Select Services
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {serviceOptions.map((service) => (
            <label
              key={service}
              className="
              flex
              items-center
              gap-2
              border
              p-3
              rounded-lg
              cursor-pointer
              "
            >
              <input
                type="checkbox"
                checked={formData.services.includes(
                  service
                )}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    services: e.target.checked
                      ? [
                          ...prev.services,
                          service,
                        ]
                      : prev.services.filter(
                          (s) =>
                            s !== service
                        ),
                  }));
                }}
              />

              {service}
            </label>
          ))}

        </div>

      </div>

      <textarea
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        rows="4"
        placeholder="Remarks"
        className="
        border
        p-3
        rounded-lg
        w-full
        mt-4
        "
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
        hover:bg-blue-700
        "
      >
        {editingService
          ? "Update Job Card"
          : "Create Job Card"}
      </button>

    </div>
  );
};

export default ServiceForm;