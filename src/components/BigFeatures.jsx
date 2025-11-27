import { motion } from "framer-motion";
import { FiMoon, FiClock, FiCpu } from "react-icons/fi";

export default function BigFeatures() {
  const features = [
    {
      icon: <FiClock size={32} />,
      title: "Smart Sleep Tracking",
      description:
        "Detect irregular sleep cycles, bedtime drift, and night-time phone usage patterns.",
    },
    {
      icon: <FiCpu size={32} />,
      title: "AI Behavior Insights",
      description:
        "Get AI-powered insights on stress, digital fatigue, focus patterns, and attention spikes.",
    },
    {
      icon: <FiMoon size={32} />,
      title: "Predictive Wellbeing",
      description:
        "Forecast burnout, anxiety, overload and get early warnings before symptoms rise.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-14">
          Core Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-left"
            >
              <div className="text-teal-600 dark:text-teal-300 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
