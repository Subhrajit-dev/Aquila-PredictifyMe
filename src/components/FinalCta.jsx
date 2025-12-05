import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HolographicRibbon from "./HolographicRibbon";

export default function FinalCta() {
  return (
    <section className="py-32 text-center relative z-10 overflow-hidden">
      {/* Holographic Ribbons */}
      <HolographicRibbon position="bottom-right" />
      <HolographicRibbon position="bottom-left" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white glow-text mb-8">
          Begin Your Wellbeing Journey
        </h2>

        <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-12">
          Early warnings. Deeper insights. A healthier digital life.
        </p>

        <Link
          to="/signup"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
        >
          <span className="relative z-10">Get Started Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </motion.div>
    </section>
  );
}
