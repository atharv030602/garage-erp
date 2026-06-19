import React from "react";
import { useTheme } from "../context/ThemeContext";

const DashboardCard = ({ title, value, color, icon }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
      rounded-xl
      shadow-md
      p-6
      border-l-4
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
      ${color}
      ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }
      `}
    >
      <div className="flex justify-between items-center">

        <div>

          <h3
            className={
              darkMode
                ? "text-slate-400 text-sm"
                : "text-gray-500 text-sm"
            }
          >
            {title}
          </h3>

          <p className="text-4xl font-bold mt-3">
            {value}
          </p>

        </div>

        <div
          className={
            darkMode
              ? "text-slate-500"
              : "text-slate-400"
          }
        >
          {icon}
        </div>

      </div>
    </div>
  );
};

export default DashboardCard;