import React from "react";

const DashboardCard = ({ title, value, color, icon }) => {
  return (
    <div
      className={`
      bg-white
      rounded-xl
      shadow-md
      p-6
      border-l-4
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
      ${color}
      `}
    >
      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-gray-500 text-sm">
            {title}
          </h3>

          <p className="text-4xl font-bold mt-3">
            {value}
          </p>

        </div>

        <div className="text-slate-400">
          {icon}
        </div>

      </div>
    </div>
  );
};

export default DashboardCard;