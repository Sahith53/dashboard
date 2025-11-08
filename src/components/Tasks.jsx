// src/components/Tasks.jsx
import React, { useState } from "react";
import { PlusCircle, CheckCircle, Circle } from "lucide-react";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Update client records", completed: true },
    { id: 2, text: "Send invoices", completed: false },
    { id: 3, text: "Check analytics report", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([newItem, ...tasks]);
    setNewTask("");
  };

  // Toggle completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Tasks To Do
        </h2>
      </div>

      {/* Task List */}
      <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {task.completed ? (
              <CheckCircle
                size={20}
                className="text-green-500 transition-all group-hover:scale-105"
              />
            ) : (
              <Circle
                size={20}
                className="text-gray-400 transition-all group-hover:scale-105"
              />
            )}
            <span
              className={`text-sm ${
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {task.text}
            </span>
          </div>
        ))}
      </div>

      {/* Add Task Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-1 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleAddTask}
          className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all"
        >
          <PlusCircle size={20} />
        </button>
      </div>
    </div>
  );
}

export default Tasks;
