import { motion } from "framer-motion";

export default function ProductStory() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
        >
          Why We Built PredictifyMe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          Students face increasing digital burnout, stress from constant deadlines,
          disrupted sleep, and overwhelming screen exposure. We built PredictifyMe to
          empower students with early warnings, personalized insights, and science-backed
          recommendations to improve wellbeing and mental clarity.  
        </motion.p>
      </div>
    </section>
  );
}
