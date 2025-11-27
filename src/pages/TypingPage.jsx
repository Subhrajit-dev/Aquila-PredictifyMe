import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import TypingChart from "../components/charts/TypingChart";

export default function TypingPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">Typing AI Insights</h1>

      <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
        Your typing rhythm reveals emotional changes, cognitive stress patterns,
        and focus fluctuations.
      </p>

      {/* GRID STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">240ms</h2>
          <p className="text-slate-600 dark:text-slate-400">Key Latency</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">78%</h2>
          <p className="text-slate-600 dark:text-slate-400">Typing Consistency</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 shadow rounded-xl">
          <h2 className="text-3xl font-bold">Low</h2>
          <p className="text-slate-600 dark:text-slate-400">Stress Level</p>
        </div>
      </div>

      {/* CHART */}
      <ChartCard title="Typing Rhythm (Last 7 Days)">
        <TypingChart />
      </ChartCard>

      {/* INSIGHTS */}
      <div className="mt-10 p-6 bg-blue-50 dark:bg-slate-700 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">AI Insights</h3>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2">
          <li>Your typing hesitation increased slightly on Friday.</li>
          <li>Overall typing flow suggests balanced focus.</li>
          <li>No major emotional spikes detected this week.</li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
