// src/components/RecentSales.jsx
import React from "react";

const recentSalesData = [
  {
    name: "Rob",
    location: "Lorem, WY",
    amount: "$5750",
    date: "Mar 25, 07:00 AM",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Milan",
    location: "Lorem, VA",
    amount: "$5750",
    date: "Mar 23, 08:00 AM",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Issac John",
    location: "Lorem, UT",
    amount: "$5750",
    date: "Mar 23, 09:00 AM",
    avatar: "https://i.pravatar.cc/100?img=49",
  },
  {
    name: "Cristopher",
    location: "Lorem, OH",
    amount: "$5750",
    date: "Mar 22, 10:00 AM",
    avatar: "https://i.pravatar.cc/100?img=30",
  },
];

function RecentSales() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Recent Sales
        </h2>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          View All
        </button>
      </div>

      {/* Sales List */}
      <div className="space-y-4">
        {recentSalesData.map((sale, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 pb-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={sale.avatar}
                alt={sale.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  {sale.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sale.location}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium text-gray-800 dark:text-gray-100">
                {sale.amount}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {sale.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSales;
