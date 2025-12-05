import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import SleepChart from "../components/charts/SleepChart";
import { motion } from "framer-motion";

export default function SleepPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold glow-text mb-4">Sleep Insights</h1>

        <p className="text-gray-400 mb-10 max-w-2xl">
          Understand your sleep cycles, bedtime drift, and overall weekly sleep balance.
        </p>

        {/* GRID OF STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-purple-400 mb-2">7.2h</h2>
            <p className="text-gray-400">Average Sleep</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-pink-400 mb-2">1.4h</h2>
            <p className="text-gray-400">Bedtime Drift</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-2">82%</h2>
            <p className="text-gray-400">Sleep Consistency</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ChartCard title="Sleep Trend (Last 7 Days)">
            <SleepChart />
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 tech-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-300">AI Insights</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Your bedtime has drifted later by 22 minutes on average.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>You sleep 40% better when screen time after 11PM is avoided.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Current pattern suggests mild cognitive fatigue.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
