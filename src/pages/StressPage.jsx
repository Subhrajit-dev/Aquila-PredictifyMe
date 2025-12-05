import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import StressChart from "../components/charts/StressChart";
import { motion } from "framer-motion";

export default function StressPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold glow-text mb-4">Stress Index</h1>

        <p className="text-gray-400 mb-10 max-w-2xl">
          AI predicts your stress levels using workload trends, screen exposure,
          sleep patterns, and cognitive signals.
        </p>

        {/* GRID STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-orange-400 mb-2">62</h2>
            <p className="text-gray-400">Stress Score</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-2">Moderate</h2>
            <p className="text-gray-400">Risk Level</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-red-400 mb-2">12%</h2>
            <p className="text-gray-400">Weekly Increase</p>
          </motion.div>
        </div>

        {/* CHART */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ChartCard title="Stress Trend (Last 7 Days)">
            <StressChart />
          </ChartCard>
        </motion.div>

        {/* INSIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="tech-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-300">AI Insights</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Workload increase was the main driver of stress this week.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Screen time after 11 PM affected sleep recovery.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Your stress levels improve on days with consistent sleep.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
