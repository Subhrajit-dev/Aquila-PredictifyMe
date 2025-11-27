import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold dark:text-white">
          Welcome to your Dashboard
        </h1>

        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Select a category from the left to view insights.
        </p>
      </div>
    </div>
  );
}
