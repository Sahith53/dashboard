// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Users, Briefcase } from "lucide-react";
import StatCard from "./StatCard";
import Card from "./Card";
import SalesChart from "./SalesChart";
import RecentSales from "./RecentSales";
import Tasks from "./Tasks";

function Dashboard() {
  return (
    <div className="w-full flex">
      {/* Sidebar Section */}
      <div className="w-[90px] md:w-[250px] bg-white dark:bg-slate-900 shadow-md min-h-screen transition-all duration-300">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <Header />

        {/* Main Dashboard Content Area */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Next Appointment Card */}
          <div className="col-span-2">
            {/* Top Row - Next Appointment Card and Recent Sales Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-start">
              {/* Next Appointment Card */}
              <div>
                <Card
                  client="Zeba Elizabeth John"
                  location="New York, USA"
                  date="03 Mar 2025"
                  time="19:30 IST"
                  product="Ladies Leather Wallet"
                  serial="PCW2031"
                  price="5750"
                  image="https://i.pravatar.cc/100?img=47"
                />
              </div>

              {/* Recent Sales */}
              <div>
                <RecentSales />
              </div>
            </div>

            {/* Bottom Row - Sales Chart Section */}
            <div>
              <SalesChart />
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="col-span-1">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md">
              {/* Stats Section */}
              <div className="space-y-4">
                <StatCard
                  title="Active Clients"
                  value="41"
                  icon={<Users size={24} />}
                  gradient="bg-gradient-to-r from-indigo-500 to-blue-500"
                />
                <StatCard
                  title="Total Sales"
                  value="136"
                  icon={<Briefcase size={24} />}
                  gradient="bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>
            {/* Tasks Section */}
            <div className="mt-6">
              <Tasks />
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
