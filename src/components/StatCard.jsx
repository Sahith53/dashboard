// src/components/StatCard.jsx
import React from "react";

function StatCard({ title, value, icon, gradient }) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-2xl text-white shadow-md ${gradient}`}
    >
      {/* Left Section */}
      <div>
        <h3 className="text-sm font-medium opacity-80">{title}</h3>
        <p className="text-3xl font-semibold mt-1">{value}</p>
      </div>

      {/* Right Icon Section */}
      <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl">
        {icon}
      </div>
    </div>
  );
}

export default StatCard;
