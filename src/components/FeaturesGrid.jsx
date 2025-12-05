import { motion } from "framer-motion";
import { FaMoon, FaMobileAlt, FaKeyboard, FaBrain } from "react-icons/fa";

const features = [
  {
    icon: <FaMoon className="text-4xl text-purple-400 mb-4" />,
    title: "Sleep Pattern Analysis",
    desc: "Detects irregular sleep cycles and quality drops.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-pink-400 mb-4" />,
    title: "Screen Time Monitoring",
    desc: "Tracks digital fatigue and overuse patterns.",
  },
  {
    icon: <FaKeyboard className="text-4xl text-blue-400 mb-4" />,
    title: "Typing Rhythm Detection",
    desc: "Analyzes stress and cognitive load from typing behavior.",
  },
  {
    icon: <FaBrain className="text-4xl text-purple-400 mb-4" />,
    title: "AI-Powered Predictions",
    desc: "Forecasts burnout risk before it happens.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function FeaturesGrid() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold glow-text mb-4">
            Core Features
          </h2>
          <p className="text-gray-400 text-lg">
            Powered by AI to keep you ahead of burnout
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="tech-card p-8 flex flex-col items-center text-center group"
            >
              <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
