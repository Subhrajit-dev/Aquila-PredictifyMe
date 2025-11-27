import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import SleepChart from "../components/charts/SleepChart";

export default function SleepPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">Sleep Insights</h1>

      <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
        Understand your sleep cycles, bedtime drift, and overall weekly sleep balance.
      </p>

      {/* GRID OF STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">7.2h</h2>
          <p className="text-slate-600 dark:text-slate-400">Average Sleep</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">1.4h</h2>
          <p className="text-slate-600 dark:text-slate-400">Bedtime Drift</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">82%</h2>
          <p className="text-slate-600 dark:text-slate-400">Sleep Consistency</p>
        </div>
      </div>

      <ChartCard title="Sleep Trend (Last 7 Days)">
        <SleepChart />
      </ChartCard>

      <div className="mt-10 p-6 bg-teal-50 dark:bg-slate-700 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your bedtime has drifted later by 22 minutes on average.</li>
          <li>You sleep 40% better when screen time after 11PM is avoided.</li>
          <li>Current pattern suggests mild cognitive fatigue.</li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
