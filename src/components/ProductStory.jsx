import { motion } from "framer-motion";

export default function ProductStory() {
  return (
    <section className="py-32 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold glow-text mb-12">
          Why We Built PredictifyMe
        </h2>

        <p className="text-xl md:text-2xl text-purple-200 leading-relaxed font-light">
          People experience stress, burnout, and loss of focus — but the warning signs
          are subtle and often ignored. <span className="text-white font-medium">PredictifyMe</span> identifies early shifts in digital
          behavior and provides personalized warnings before performance drops.
        </p>
      </motion.div>
    </section>
  );
}
