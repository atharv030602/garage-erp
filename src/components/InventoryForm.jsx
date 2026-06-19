import { useEffect, useState } from "react";

const InventoryForm = ({
  addItem,
  editingItem,
  updateItem,
}) => {

  const [formData, setFormData] =
    useState({
      partName: "",
      category: "",
      quantity: "",
      unitPrice: "",
      supplier: "",
      lowStockLimit: 10,
    });

  useEffect(() => {

    if (editingItem) {

      setFormData(editingItem);

    } else {

      setFormData({
        partName: "",
        category: "",
        quantity: "",
        unitPrice: "",
        supplier: "",
        lowStockLimit: 10,
      });

    }

  }, [editingItem]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = () => {

    if (
      !formData.partName ||
      !formData.quantity ||
      !formData.unitPrice
    ) {
      alert(
        "Please fill required fields"
      );
      return;
    }

    if (editingItem) {

      updateItem(formData);

    } else {

      addItem({
        id: Date.now(),
        ...formData,
      });

    }

    setFormData({
      partName: "",
      category: "",
      quantity: "",
      unitPrice: "",
      supplier: "",
      lowStockLimit: 10,
    });

  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-semibold mb-6">
        {editingItem
          ? "Edit Part"
          : "Add Part"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          name="partName"
          value={formData.partName}
          onChange={handleChange}
          placeholder="Part Name"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="unitPrice"
          value={formData.unitPrice}
          onChange={handleChange}
          placeholder="Unit Price"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          placeholder="Supplier"
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="lowStockLimit"
          value={
            formData.lowStockLimit
          }
          onChange={handleChange}
          placeholder="Low Stock Limit"
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
        {editingItem
          ? "Update Part"
          : "Add Part"}
      </button>

    </div>
  );
};

export default InventoryForm;