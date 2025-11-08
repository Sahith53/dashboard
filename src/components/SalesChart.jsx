// src/components/SalesChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "OCT", sales: 65000 },
  { month: "NOV", sales: 40000 },
  { month: "DEC", sales: 85000 },
  { month: "JAN", sales: 72000 },
  { month: "FEB", sales: 68000 },
  { month: "MAR", sales: 80000 },
];

function SalesChart() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Sales
        </h2>
        <select className="text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-1 outline-none">
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Sales Value */}
      <p className="text-2xl font-bold text-indigo-600 mb-6">
        $82,097.00
      </p>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={45}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis
              dataKey="month"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
              }}
              cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
            />
            <Bar dataKey="sales" radius={[10, 10, 0, 0]} fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
