import { motion } from "framer-motion";
import { FaSignal, FaBrain, FaChartLine } from "react-icons/fa";
import HolographicRibbon from "./HolographicRibbon";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSignal className="text-4xl text-purple-400 mb-6" />,
      title: "Digital Signals",
      text: "Sleep timing • Screen activity • Typing rhythm • Calendar load",
    },
    {
      icon: <FaBrain className="text-4xl text-pink-400 mb-6" />,
      title: "AI Processing",
      text: "Machine-learning models study your routine over time.",
    },
    {
      icon: <FaChartLine className="text-4xl text-indigo-400 mb-6" />,
      title: "Predictive Insights",
      text: "Identifies unusual shifts & generates early warnings.",
    },
  ];

  return (
    <section id="how" className="py-32 relative z-10 overflow-hidden">
      {/* Holographic Ribbons */}
      <HolographicRibbon position="bottom-left" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center glow-text mb-20"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="tech-card p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-all"
          >
            <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:scale-125 transition-transform duration-300">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
