import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HolographicRibbon from "./HolographicRibbon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Holographic Ribbons */}
      <HolographicRibbon position="top-right" />
      <HolographicRibbon position="top-left" />

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/logo512.png"
          alt="Background Logo"
          className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] opacity-30 blur-sm"
        />
      </div>

      {/* Centered Content */}
      <div className="text-center z-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[2.2rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-bold text-white glow-text tracking-tight leading-tight sm:leading-none mb-6 sm:mb-8 font-orbitron"
        >
          PREDICTIFY<span className="text-purple-400">ME</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 tracking-wide px-2 leading-relaxed"
        >
          Your Invisible Early-Warning System for Stress and Productivity Drops
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Link
            to="/signup"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
          >
            Get Started
          </Link>
          <a
            href="#how"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-purple-500 text-purple-300 font-bold text-base sm:text-lg rounded-full hover:bg-purple-500/10 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div >
    </section >
  );
}
