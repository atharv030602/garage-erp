import {
  LayoutDashboard,
  Users,
  Car,
  Wrench,
  Package,
  Receipt,
  IdCard,
  Shield,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 bg-slate-950 text-white min-h-screen p-5">

      <h1 className="text-3xl font-bold mb-10">
        Garage ERP
      </h1>

      <div className="space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-slate-700"
                : "hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-slate-700"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Users size={20} />
          Customers
        </NavLink>

        <NavLink
  to="/vehicles"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg ${
      isActive
        ? "bg-slate-700"
        : "hover:bg-slate-800"
    }`
  }
>
  <Car size={20} />
  Vehicles
</NavLink>

       <NavLink
  to="/services"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg ${
      isActive
        ? "bg-slate-700"
        : "hover:bg-slate-800"
    }`
  }
>
  <Wrench size={20} />
  Services
</NavLink>

        <div className="flex items-center gap-3 p-3">
          <Package size={20} />
          Inventory
        </div>

        <div className="flex items-center gap-3 p-3">
          <Receipt size={20} />
          Billing
        </div>

        <div className="flex items-center gap-3 p-3">
          <IdCard size={20} />
          License
        </div>

        <div className="flex items-center gap-3 p-3">
          <Shield size={20} />
          Insurance
        </div>

        <div className="flex items-center gap-3 p-3">
          <BarChart3 size={20} />
          Reports
        </div>

      </div>
    </div>
  );
};

export default Sidebar;