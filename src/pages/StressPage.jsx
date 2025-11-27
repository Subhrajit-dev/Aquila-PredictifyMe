import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import StressChart from "../components/charts/StressChart";

export default function StressPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">Stress Index</h1>

      <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
        AI predicts your stress levels using workload trends, screen exposure,
        sleep patterns, and cognitive signals.
      </p>

      {/* GRID STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">62</h2>
          <p className="text-slate-600 dark:text-slate-400">Stress Score</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">Moderate</h2>
          <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">12%</h2>
          <p className="text-slate-600 dark:text-slate-400">Weekly Increase</p>
        </div>
      </div>

      {/* CHART */}
      <ChartCard title="Stress Trend (Last 7 Days)">
        <StressChart />
      </ChartCard>

      {/* INSIGHTS */}
      <div className="mt-10 p-6 bg-red-50 dark:bg-slate-700 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">AI Insights</h3>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2">
          <li>Workload increase was the main driver of stress this week.</li>
          <li>Screen time after 11 PM affected sleep recovery.</li>
          <li>Your stress levels improve on days with consistent sleep.</li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
