import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import VehicleForm from "../components/VehicleForm";
import VehicleTable from "../components/VehicleTable";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [editingVehicle, setEditingVehicle] =
    useState(null);

  useEffect(() => {
    const savedVehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    setVehicles(savedVehicles);
  }, []);

  useEffect(() => {
    const savedCustomers =
      JSON.parse(localStorage.getItem("customers")) || [];

    setCustomers(savedCustomers);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "vehicles",
      JSON.stringify(vehicles)
    );
  }, [vehicles]);

  const addVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  const deleteVehicle = (id) => {
    const updatedVehicles =
      vehicles.filter(
        (vehicle) => vehicle.id !== id
      );

    setVehicles(updatedVehicles);
  };

  const updateVehicle = (updatedVehicle) => {
    const updatedVehicles =
      vehicles.map((vehicle) =>
        vehicle.id === updatedVehicle.id
          ? updatedVehicle
          : vehicle
      );

    setVehicles(updatedVehicles);
    setEditingVehicle(null);
  };

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Vehicle Management
      </h1>

      <VehicleForm
        customers={customers}
        addVehicle={addVehicle}
        editingVehicle={editingVehicle}
        updateVehicle={updateVehicle}
      />

      <VehicleTable
        vehicles={vehicles}
        deleteVehicle={deleteVehicle}
        editVehicle={setEditingVehicle}
      />

    </div>
  );
};

export default Vehicles;