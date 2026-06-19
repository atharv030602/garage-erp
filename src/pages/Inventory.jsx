import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import InventoryForm from "../components/InventoryForm";
import InventoryTable from "../components/InventoryTable";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] =
    useState(null);

  useEffect(() => {
    const savedItems =
      JSON.parse(
        localStorage.getItem("inventory")
      ) || [];

    setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "inventory",
      JSON.stringify(items)
    );
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    const updatedItems =
      items.filter(
        (item) => item.id !== id
      );

    setItems(updatedItems);
  };

  const updateItem = (
    updatedItem
  ) => {
    const updatedItems =
      items.map((item) =>
        item.id === updatedItem.id
          ? updatedItem
          : item
      );

    setItems(updatedItems);
    setEditingItem(null);
  };

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Inventory Management
      </h1>

      <InventoryForm
        addItem={addItem}
        editingItem={editingItem}
        updateItem={updateItem}
      />

      <InventoryTable
        items={items}
        deleteItem={deleteItem}
        editItem={setEditingItem}
      />

    </div>
  );
};

export default Inventory;