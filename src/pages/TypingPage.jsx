import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import TypingChart from "../components/charts/TypingChart";
import { motion } from "framer-motion";

export default function TypingPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold glow-text mb-4">Typing AI Insights</h1>

        <p className="text-gray-400 mb-10 max-w-2xl">
          Your typing rhythm reveals emotional changes, cognitive stress patterns,
          and focus fluctuations.
        </p>

        {/* GRID STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-purple-400 mb-2">240ms</h2>
            <p className="text-gray-400">Key Latency</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-pink-400 mb-2">78%</h2>
            <p className="text-gray-400">Typing Consistency</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="tech-card p-6"
          >
            <h2 className="text-4xl font-bold text-green-400 mb-2">Low</h2>
            <p className="text-gray-400">Stress Level</p>
          </motion.div>
        </div>

        {/* CHART */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ChartCard title="Typing Rhythm (Last 7 Days)">
            <TypingChart />
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
              <span>Your typing hesitation increased slightly on Friday.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Overall typing flow suggests balanced focus.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>No major emotional spikes detected this week.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
