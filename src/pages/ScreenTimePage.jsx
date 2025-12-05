import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import ScreenTimeChart from "../components/charts/ScreenTimeChart";
import { motion } from "framer-motion";

export default function ScreenTimePage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold glow-text mb-4">Screen Time Insights</h1>

        <p className="text-gray-400 mb-10 max-w-2xl">
          Track device usage spikes, late-night phone activity, and overall screen habits.
        </p>

        {/* GRID STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-purple-400 mb-2">5h 22m</h2>
            <p className="text-gray-400">Daily Average</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-pink-400 mb-2">1.8h</h2>
            <p className="text-gray-400">After 11PM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-2">36%</h2>
            <p className="text-gray-400">Morning Usage</p>
          </motion.div>
        </div>

        {/* CHART */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ChartCard title="Daily Screen Time (Last 7 Days)">
            <ScreenTimeChart />
          </ChartCard>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
