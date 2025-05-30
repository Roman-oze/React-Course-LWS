
import Dashboard from "./components/Dashboard";
import HomePage from "./components/Home";
import "./style.css";


export default function App() {
  return (
    <>
      <h1>Task Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
  {/* Left Panel: Add Task */}
  <div className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">Home page</h2>
    <HomePage />
  </div>

  {/* Right Panel: Task List */}
  <div className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

    <Dashboard />
  </div>
</div>

    </>
  );
}
