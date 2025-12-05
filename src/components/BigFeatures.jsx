import { motion } from "framer-motion";
import { FiMoon, FiClock, FiCpu } from "react-icons/fi";
import HolographicRibbon from "./HolographicRibbon";

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
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Holographic Ribbons */}
      <HolographicRibbon position="top-right" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold glow-text mb-16"
        >
          Core Highlights
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="tech-card p-8 text-left hover:bg-white/5 transition-all"
            >
              <div className="text-purple-400 mb-6 p-3 bg-purple-500/10 rounded-lg w-fit">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
