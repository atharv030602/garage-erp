import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    const savedCustomers =
      JSON.parse(localStorage.getItem("customers")) || [];

    setCustomers(savedCustomers);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const deleteCustomer = (id) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== id
    );

    setCustomers(updatedCustomers);
  };

  const updateCustomer = (updatedCustomer) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === updatedCustomer.id
        ? updatedCustomer
        : customer
    );

    setCustomers(updatedCustomers);
    setEditingCustomer(null);
  };

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Customer Management
      </h1>

      <CustomerForm
        addCustomer={addCustomer}
        editingCustomer={editingCustomer}
        updateCustomer={updateCustomer}
      />

      <CustomerTable
        customers={customers}
        deleteCustomer={deleteCustomer}
        editCustomer={setEditingCustomer}
      />

    </div>
  );
};

export default Customers;