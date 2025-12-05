import { motion } from "framer-motion";

export default function AiArchitecture() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold glow-text mb-16"
        >
          How Our AI Works
        </motion.h2>

        <div className="relative p-10 rounded-2xl tech-card shadow-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-200 font-semibold"
            >
              Your Activity
              <p className="text-sm opacity-70 mt-2 text-teal-100/60">Sleep · Screen · Typing · Study Load</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 font-semibold"
            >
              AI Detection Models
              <p className="text-sm opacity-70 mt-2 text-blue-100/60">Stress · Fatigue · Cognitive Load</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 font-semibold"
            >
              Behavior Forecast
              <p className="text-sm opacity-70 mt-2 text-purple-100/60">Burnout · Focus · Discipline</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 font-semibold"
            >
              Personalized Insights
              <p className="text-sm opacity-70 mt-2 text-orange-100/60">Sleep Fixes · Habit Plans · Alerts</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
