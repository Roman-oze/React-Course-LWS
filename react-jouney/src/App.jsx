import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import "./style.css";


export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <h1>Prague itinerary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
  {/* Left Panel: Add Task */}
  <div className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
    <AddTask />
  </div>

  {/* Right Panel: Task List */}
  <div className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">Task List</h2>
    <TaskList tasks={tasks}/>
  </div>
</div>

    </>
  );
}
