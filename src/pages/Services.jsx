import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ServiceForm from "../components/ServiceForm";
import ServiceTable from "../components/ServiceTable";

const Services = () => {
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [editingService, setEditingService] =
    useState(null);

  useEffect(() => {
    const savedServices =
      JSON.parse(localStorage.getItem("services")) || [];

    const savedCustomers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const savedVehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    setServices(savedServices);
    setCustomers(savedCustomers);
    setVehicles(savedVehicles);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "services",
      JSON.stringify(services)
    );
  }, [services]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const deleteService = (id) => {
    const updatedServices =
      services.filter(
        (service) => service.id !== id
      );

    setServices(updatedServices);
  };

  const updateService = (updatedService) => {
    const updatedServices =
      services.map((service) =>
        service.id === updatedService.id
          ? updatedService
          : service
      );

    setServices(updatedServices);
    setEditingService(null);
  };

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Service Management
      </h1>

      <ServiceForm
        customers={customers}
        vehicles={vehicles}
        services={services}
        addService={addService}
        editingService={editingService}
        updateService={updateService}
      />

      <ServiceTable
        services={services}
        deleteService={deleteService}
        editService={setEditingService}
      />

    </div>
  );
};

export default Services;