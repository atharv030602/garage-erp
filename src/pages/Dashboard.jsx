import { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";

import {
  Users,
  Car,
  Wrench,
  IndianRupee,
  Receipt,
  FileText,
} from "lucide-react";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [services, setServices] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    setCustomers(
      JSON.parse(
        localStorage.getItem("customers")
      ) || []
    );

    setVehicles(
      JSON.parse(
        localStorage.getItem("vehicles")
      ) || []
    );

    setServices(
      JSON.parse(
        localStorage.getItem("services")
      ) || []
    );

    setInvoices(
      JSON.parse(
        localStorage.getItem("invoices")
      ) || []
    );
  }, []);

  const totalRevenue =
    invoices.reduce(
      (total, invoice) =>
        total +
        Number(invoice.totalAmount || 0),
      0
    );

  const pendingServices =
    services.filter(
      (service) =>
        service.status === "Pending"
    ).length;

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <DashboardCard
          title="Total Customers"
          value={customers.length}
          color="border-blue-500"
          icon={<Users size={40} />}
        />

        <DashboardCard
          title="Total Vehicles"
          value={vehicles.length}
          color="border-cyan-500"
          icon={<Car size={40} />}
        />

        <DashboardCard
          title="Pending Services"
          value={pendingServices}
          color="border-yellow-500"
          icon={<Wrench size={40} />}
        />

        <DashboardCard
          title="Revenue"
          value={`₹${totalRevenue}`}
          color="border-green-500"
          icon={<IndianRupee size={40} />}
        />

        <DashboardCard
          title="Total Invoices"
          value={invoices.length}
          color="border-red-500"
          icon={<Receipt size={40} />}
        />

        <DashboardCard
          title="Total Job Cards"
          value={services.length}
          color="border-purple-500"
          icon={<FileText size={40} />}
        />

      </div>

      <div className="bg-white mt-8 rounded-xl shadow-md p-6">

        <h2 className="text-xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">

          <li>
            Customers Registered :
            {" "}
            {customers.length}
          </li>

          <li>
            Vehicles Added :
            {" "}
            {vehicles.length}
          </li>

          <li>
            Job Cards Created :
            {" "}
            {services.length}
          </li>

          <li>
            Invoices Generated :
            {" "}
            {invoices.length}
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Dashboard;