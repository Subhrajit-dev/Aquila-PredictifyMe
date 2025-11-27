import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-50 dark:bg-slate-900 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}
