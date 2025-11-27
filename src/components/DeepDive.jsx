import { motion } from "framer-motion";

export default function DeepDive() {
  const pipeline = [
    {
      title: "1. Data Signals Captured",
      desc: "PredictifyMe passively observes non-sensitive patterns such as sleep timing, device activity, typing rhythm, and workload routines — without reading personal content.",
    },
    {
      title: "2. AI Pre-Processing Layer",
      desc: "Raw signals are cleaned, normalized, and transformed into meaningful behavioral metrics to reduce noise and increase prediction accuracy.",
    },
    {
      title: "3. Pattern Recognition Engine",
      desc: "Our models detect micro-patterns: attention drops, fatigue cycles, stress peaks, emotional shifts, and digital overload trajectories.",
    },
    {
      title: "4. Burnout Forecast Model",
      desc: "A custom pipeline estimates burnout risk using time-series data, ML heuristics, and validated wellbeing research.",
    },
    {
      title: "5. Personalized Recommendations",
      desc: "The system generates simple, actionable suggestions — optimized routines, screen-break intervals, sleep realignment, and workload balancing.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-slate-900 dark:text-white"
        >
          How PredictifyMe Works Internally
        </motion.h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto">
          A transparent breakdown of the AI pipeline that powers early warnings,
          personalized insights, and burnout predictions — designed ethically, privacy-first.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-14">
        {pipeline.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl shadow-xl bg-gray-50 dark:bg-slate-800 border border-white/10 text-left"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              {step.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-lg">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
