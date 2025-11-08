// src/components/Header.jsx
import React from "react";
import { Search, Bell } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md">
      {/* Left Section - Greeting */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Good Morning, Sahith
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Header content will go here
        </p>
      </div>

      {/* Right Section - Search + Icons */}
      <div className="mt-3 md:mt-0 flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 dark:bg-slate-700 px-3 py-2 rounded-xl w-full md:w-64">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 ml-2 w-full"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <img
          src="https://i.pravatar.cc/40?img=59"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Header;
