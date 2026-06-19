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
  Package,
  AlertTriangle,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [services, setServices] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [inventory, setInventory] = useState([]);

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

    setInventory(
      JSON.parse(
        localStorage.getItem("inventory")
      ) || []
    );
  }, []);

  const totalRevenue = invoices.reduce(
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

  const inProgressServices =
    services.filter(
      (service) =>
        service.status === "In Progress"
    ).length;

  const completedServices =
    services.filter(
      (service) =>
        service.status === "Completed"
    ).length;

  const deliveredServices =
    services.filter(
      (service) =>
        service.status === "Delivered"
    ).length;

  const paidInvoices =
    invoices.filter(
      (invoice) =>
        invoice.paymentStatus === "Paid"
    ).length;

  const unpaidInvoices =
    invoices.filter(
      (invoice) =>
        invoice.paymentStatus === "Unpaid"
    ).length;

  const totalParts =
    inventory.length;

  const lowStockParts =
    inventory.filter(
      (item) =>
        Number(item.quantity) <=
        Number(item.lowStockLimit)
    ).length;

  const inventoryValue =
    inventory.reduce(
      (total, item) =>
        total +
        Number(item.quantity) *
          Number(item.unitPrice),
      0
    );

  const revenueData = [
    {
      name: "Revenue",
      amount: totalRevenue,
    },
  ];

  const paymentData = [
    {
      name: "Paid",
      value: paidInvoices,
    },
    {
      name: "Unpaid",
      value: unpaidInvoices,
    },
  ];

  const serviceStatusData = [
    {
      name: "Pending",
      value: pendingServices,
    },
    {
      name: "In Progress",
      value: inProgressServices,
    },
    {
      name: "Completed",
      value: completedServices,
    },
    {
      name: "Delivered",
      value: deliveredServices,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

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
          value={`₹${totalRevenue.toFixed(2)}`}
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

        <DashboardCard
          title="Total Parts"
          value={totalParts}
          color="border-orange-500"
          icon={<Package size={40} />}
        />

        <DashboardCard
          title="Low Stock Parts"
          value={lowStockParts}
          color="border-red-500"
          icon={<AlertTriangle size={40} />}
        />

        <DashboardCard
          title="Inventory Value"
          value={`₹${inventoryValue}`}
          color="border-emerald-500"
          icon={<Package size={40} />}
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-4">
            Revenue Overview
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={revenueData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="amount"
                fill="#22c55e"
              />
            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="bg-white rounded-xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-4">
            Invoice Status
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie
                data={paymentData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >

                {paymentData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="bg-white mt-8 rounded-xl shadow-md p-6">

        <h2 className="text-xl font-bold mb-4">
          Service Status Overview
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart
            data={serviceStatusData}
          >

            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="value"
              fill="#3b82f6"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Dashboard;