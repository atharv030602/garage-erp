import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Vehicles from "./pages/Vehicles";
import Services from "./pages/Services";
import Billing from "./pages/Billing";
import Inventory from "./pages/Inventory";

import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "flex min-h-screen bg-slate-900 text-white"
            : "flex min-h-screen bg-slate-100 text-black"
        }
      >
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/customers"
            element={<Customers />}
          />
          <Route
          path="/vehicles"
          element={<Vehicles />}
          />
          <Route
          path="/services"
          element={<Services />}
          />
          <Route
          path="/billing"
          element={<Billing/>}
          />
          <Route
          path="/inventory"
          element={<Inventory/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;