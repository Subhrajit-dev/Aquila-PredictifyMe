import { motion } from "framer-motion";

export default function AiArchitecture() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
          How Our AI Works
        </h2>

        <div className="relative p-10 rounded-2xl bg-white dark:bg-slate-800 shadow-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-4 gap-6"
          >
            <div className="p-4 rounded-xl bg-teal-100 dark:bg-teal-600 text-teal-900 dark:text-white font-semibold">
              Your Activity  
              <p className="text-sm opacity-70">Sleep · Screen · Typing · Study Load</p>
            </div>

            <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-600 text-blue-900 dark:text-white font-semibold">
              AI Detection Models  
              <p className="text-sm opacity-70">Stress · Fatigue · Cognitive Load</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-600 text-purple-900 dark:text-white font-semibold">
              Behavior Forecast  
              <p className="text-sm opacity-70">Burnout · Focus · Discipline</p>
            </div>

            <div className="p-4 rounded-xl bg-orange-100 dark:bg-orange-600 text-orange-900 dark:text-white font-semibold">
              Personalized Insights  
              <p className="text-sm opacity-70">Sleep Fixes · Habit Plans · Alerts</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
