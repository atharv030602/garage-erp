import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Reports = () => {
  const [customers, setCustomers] =
    useState([]);

  const [vehicles, setVehicles] =
    useState([]);

  const [services, setServices] =
    useState([]);

  const [invoices, setInvoices] =
    useState([]);

  const [inventory, setInventory] =
    useState([]);

  useEffect(() => {
    setCustomers(
      JSON.parse(
        localStorage.getItem(
          "customers"
        )
      ) || []
    );

    setVehicles(
      JSON.parse(
        localStorage.getItem(
          "vehicles"
        )
      ) || []
    );

    setServices(
      JSON.parse(
        localStorage.getItem(
          "services"
        )
      ) || []
    );

    setInvoices(
      JSON.parse(
        localStorage.getItem(
          "invoices"
        )
      ) || []
    );

    setInventory(
      JSON.parse(
        localStorage.getItem(
          "inventory"
        )
      ) || []
    );
  }, []);

  const totalRevenue =
    invoices.reduce(
      (total, invoice) =>
        total +
        Number(
          invoice.totalAmount || 0
        ),
      0
    );

  const inventoryValue =
    inventory.reduce(
      (total, item) =>
        total +
        Number(item.quantity) *
          Number(item.unitPrice),
      0
    );

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <div id="report-content">

        <h1 className="text-4xl font-bold mb-6">
          Reports
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-2">
              Customers
            </h2>

            <p>
              Total Customers:
              {" "}
              {customers.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-2">
              Vehicles
            </h2>

            <p>
              Total Vehicles:
              {" "}
              {vehicles.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-2">
              Services
            </h2>

            <p>
              Total Job Cards:
              {" "}
              {services.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-2">
              Billing
            </h2>

            <p>
              Total Revenue:
              {" "}
              ₹{totalRevenue.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-2">
              Inventory
            </h2>

            <p>
              Total Parts:
              {" "}
              {inventory.length}
            </p>

            <p>
              Inventory Value:
              {" "}
              ₹{inventoryValue.toFixed(2)}
            </p>
          </div>

        </div>

      </div>

      <button
        onClick={() =>
          window.print()
        }
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
        Print Report
      </button>

    </div>
  );
};

export default Reports;