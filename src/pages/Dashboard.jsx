import React from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { FiActivity, FiTrendingUp, FiZap, FiShield } from "react-icons/fi";
import { useUser } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-purple-500 animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  // Mock subscription for now, or access from user.publicMetadata if synced
  const subscription = user.publicMetadata?.subscription || {};
  const planName = subscription.plan || "Free Plan";
  const isPro = planName.includes("Pro");

  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Sidebar />

      <main className="flex-1 p-8 pt-20 sm:pt-24 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold glow-text"
            >
              Welcome back, {user.firstName || user.fullName}
            </motion.h1>
            <p className="text-gray-400 mt-1">Here's your daily prediction overview.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className={`px-4 py-2 rounded-full border ${isPro
              ? "bg-purple-500/10 border-purple-500/50 text-purple-300"
              : "bg-blue-500/10 border-blue-500/50 text-blue-300"
              }`}>
              <span className="text-sm font-bold uppercase tracking-wider">
                {planName}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg overflow-hidden">
              <img src={user.imageUrl} alt={user.fullName} className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FiZap className="text-yellow-400" />}
            label="Energy Level"
            value="85%"
            trend="+5%"
            color="yellow"
            delay={0.1}
          />
          <StatCard
            icon={<FiActivity className="text-green-400" />}
            label="Focus Score"
            value="72/100"
            trend="-2%"
            color="green"
            delay={0.2}
          />
          <StatCard
            icon={<FiShield className="text-blue-400" />}
            label="Stress Level"
            value="Low"
            trend="Stable"
            color="blue"
            delay={0.3}
          />
          <StatCard
            icon={<FiTrendingUp className="text-purple-400" />}
            label="Prediction Accuracy"
            value="94%"
            trend="+1.2%"
            color="purple"
            delay={0.4}
          />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart / Insight Area */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="tech-card p-6 min-h-[300px] flex flex-col"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                Today's Forecast
              </h3>
              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-800 rounded-xl bg-gray-900/30">
                <p className="text-gray-500">AI Prediction Chart Visualization Placeholder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="tech-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Recent Alerts</h3>
              <div className="space-y-4">
                <AlertItem
                  type="warning"
                  message="High screen time detected late at night."
                  time="2 hours ago"
                />
                <AlertItem
                  type="success"
                  message="Great sleep consistency this week!"
                  time="Yesterday"
                />
                <AlertItem
                  type="info"
                  message="New weekly report available."
                  time="2 days ago"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar / Recommendations */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="tech-card p-6 h-full"
            >
              <h3 className="text-xl font-bold mb-4">AI Recommendations</h3>
              <ul className="space-y-4">
                <RecommendationItem
                  text="Take a 10-minute break to reset focus."
                  category="Focus"
                />
                <RecommendationItem
                  text="Reduce blue light exposure before 10 PM."
                  category="Sleep"
                />
                <RecommendationItem
                  text="Schedule deep work for tomorrow morning."
                  category="Productivity"
                />
              </ul>

              {!isPro && (
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30">
                  <h4 className="font-bold text-purple-300 mb-2">Upgrade to Pro</h4>
                  <p className="text-sm text-gray-400 mb-3">Get unlimited AI insights and real-time coaching.</p>
                  <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold transition-colors">
                    View Plans
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, trend, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="tech-card p-5 hover:border-gray-600 transition-colors group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-${color}-500/10 group-hover:bg-${color}-500/20 transition-colors`}>
          {icon}
        </div>
        <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
          {trend}
        </span>
      </div>
      <h4 className="text-gray-400 text-sm mb-1">{label}</h4>
      <div className="text-2xl font-bold text-white">{value}</div>
    </motion.div>
  );
}

function AlertItem({ type, message, time }) {
  const colors = {
    warning: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
    success: "text-green-400 border-green-500/20 bg-green-500/5",
    info: "text-blue-400 border-blue-500/20 bg-blue-500/5"
  };

  return (
    <div className={`p-4 rounded-lg border ${colors[type]} flex justify-between items-center`}>
      <span className="font-medium">{message}</span>
      <span className="text-xs opacity-60">{time}</span>
    </div>
  );
}

function RecommendationItem({ text, category }) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
      <div>
        <p className="text-sm text-gray-200">{text}</p>
        <span className="text-xs text-gray-500 uppercase tracking-wider">{category}</span>
      </div>
    </li>
  );
}
