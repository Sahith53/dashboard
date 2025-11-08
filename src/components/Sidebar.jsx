// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  Home,
  Users,
  BarChart2,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  // State to track active menu
  const [active, setActive] = useState("Dashboard");

  // Menu items
  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Clients", icon: <Users size={20} /> },
    { name: "Analytics", icon: <BarChart2 size={20} /> },
    { name: "Schedule", icon: <Calendar size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Profile Section */}
      <div>
        <div className="flex flex-col items-center md:items-start p-4">
          
          <h2 className="hidden md:block text-lg font-semibold text-gray-800 dark:text-gray-200">
            Sahith
          </h2>
          <p className="hidden md:block text-sm text-gray-500">Admin</p>
        </div>

        {/* Navigation Menu */}
        <div className="mt-6 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center md:justify-start justify-center gap-3 w-full p-3 rounded-lg transition-all duration-200 ${
                active === item.name
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800"
              }`}
            >
              {item.icon}
              <span className="hidden md:inline text-sm font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Logout Section */}
      <div className="p-4">
        <button className="flex items-center md:justify-start justify-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition-all">
          <LogOut size={20} />
          <span className="hidden md:inline text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
