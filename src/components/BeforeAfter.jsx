import { motion } from "framer-motion";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

export default function BeforeAfter() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-left">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="p-10 bg-red-900/10 border border-red-500/20 rounded-2xl backdrop-blur-sm cursor-pointer"
        >
          <h3 className="text-2xl font-bold text-red-400 mb-6">Before PredictifyMe</h3>
          <ul className="space-y-4 text-red-200/80">
            <li className="flex items-center gap-3"><FaTimesCircle /> Irregular sleep schedule</li>
            <li className="flex items-center gap-3"><FaTimesCircle /> Digital fatigue & burnout</li>
            <li className="flex items-center gap-3"><FaTimesCircle /> No early warnings</li>
            <li className="flex items-center gap-3"><FaTimesCircle /> Low focus & discipline</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="p-10 bg-teal-900/10 border border-teal-500/20 rounded-2xl backdrop-blur-sm relative overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-teal-500/5 blur-xl"></div>
          <h3 className="text-2xl font-bold text-teal-400 mb-6 relative z-10">After PredictifyMe</h3>
          <ul className="space-y-4 text-teal-200/80 relative z-10">
            <li className="flex items-center gap-3"><FaCheckCircle /> Stable sleep routine</li>
            <li className="flex items-center gap-3"><FaCheckCircle /> Early stress detection</li>
            <li className="flex items-center gap-3"><FaCheckCircle /> Personalized habit guidance</li>
            <li className="flex items-center gap-3"><FaCheckCircle /> Improved focus & wellbeing</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
