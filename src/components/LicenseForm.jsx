import {
  useEffect,
  useState,
} from "react";

const LicenseForm = ({
  addLicense,
  editingLicense,
  updateLicense,
}) => {

  const [formData, setFormData] =
    useState({
      licenseNo: "",
      driverName: "",
      issueDate: "",
      expiryDate: "",
    });

  useEffect(() => {

    if (editingLicense) {

      setFormData(
        editingLicense
      );

    } else {

      setFormData({
        licenseNo: "",
        driverName: "",
        issueDate: "",
        expiryDate: "",
      });

    }

  }, [editingLicense]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = () => {

    if (
      !formData.licenseNo ||
      !formData.driverName ||
      !formData.issueDate ||
      !formData.expiryDate
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    if (editingLicense) {

      updateLicense(formData);

    } else {

      addLicense({
        id: Date.now(),
        ...formData,
      });

    }

    setFormData({
      licenseNo: "",
      driverName: "",
      issueDate: "",
      expiryDate: "",
    });

  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-semibold mb-6">

        {editingLicense
          ? "Edit License"
          : "Add License"}

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          name="licenseNo"
          value={
            formData.licenseNo
          }
          onChange={handleChange}
          placeholder="License Number"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="driverName"
          value={
            formData.driverName
          }
          onChange={handleChange}
          placeholder="Driver Name"
          className="border p-3 rounded-lg"
        />

        <input
          type="date"
          name="issueDate"
          value={
            formData.issueDate
          }
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="date"
          name="expiryDate"
          value={
            formData.expiryDate
          }
          onChange={handleChange}
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

        {editingLicense
          ? "Update License"
          : "Add License"}

      </button>

    </div>
  );
};

export default LicenseForm;