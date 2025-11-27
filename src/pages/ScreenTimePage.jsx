import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import ScreenTimeChart from "../components/charts/ScreenTimeChart";

export default function ScreenTimePage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">Screen Time Insights</h1>

      <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
        Track device usage spikes, late-night phone activity, and overall screen habits.
      </p>

      {/* GRID STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">5h 22m</h2>
          <p className="text-slate-600 dark:text-slate-400">Daily Average</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">1.8h</h2>
          <p className="text-slate-600 dark:text-slate-400">After 11PM</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">36%</h2>
          <p className="text-slate-600 dark:text-slate-400">Morning Usage</p>
        </div>
      </div>

      {/* CHART */}
      <ChartCard title="Daily Screen Time (Last 7 Days)">
        <ScreenTimeChart />
      </ChartCard>
    </DashboardLayout>
  );
}
