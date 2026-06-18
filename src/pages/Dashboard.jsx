import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";

import {
  Users,
  Car,
  Wrench,
  IndianRupee,
  Package,
  IdCard,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <DashboardCard
          title="Total Customers"
          value="250"
          color="border-blue-500"
          icon={<Users size={40} />}
        />

        <DashboardCard
          title="Total Vehicles"
          value="180"
          color="border-cyan-500"
          icon={<Car size={40} />}
        />

        <DashboardCard
          title="Pending Services"
          value="12"
          color="border-yellow-500"
          icon={<Wrench size={40} />}
        />

        <DashboardCard
          title="Revenue"
          value="₹50,000"
          color="border-green-500"
          icon={<IndianRupee size={40} />}
        />

        <DashboardCard
          title="Low Stock Parts"
          value="5"
          color="border-red-500"
          icon={<Package size={40} />}
        />

        <DashboardCard
          title="Expiring Licenses"
          value="8"
          color="border-purple-500"
          icon={<IdCard size={40} />}
        />

      </div>

      <div className="bg-white mt-8 rounded-xl shadow-md p-6">

        <h2 className="text-xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">

          <li>
            Vehicle MH31AB1234 serviced
          </li>

          <li>
            Invoice #1001 generated
          </li>

          <li>
            License renewal pending
          </li>

          <li>
            New customer added
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Dashboard;