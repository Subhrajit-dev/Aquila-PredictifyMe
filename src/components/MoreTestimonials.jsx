import { motion } from "framer-motion";

export default function MoreTestimonials() {
  const data = [
    { name: "Aditi", text: "Helped me fix my night schedule!" },
    { name: "Rohit", text: "Typing AI is surprisingly accurate." },
    { name: "Meera", text: "I feel less stressed during exams." },
    { name: "Karan", text: "The early warnings are a game changer." },
    { name: "Sara", text: "Dashboard insights are super clean." },
    { name: "Dev", text: "My focus has improved a lot." },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-bold glow-text mb-16"
        >
          What Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="tech-card p-6 hover:bg-white/5 transition-colors"
            >
              <p className="text-lg italic text-gray-300">
                “{d.text}”
              </p>
              <p className="mt-4 font-bold text-purple-400">
                — {d.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
