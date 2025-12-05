import { motion } from "framer-motion";

export default function HolographicRibbon({ position = "top-right" }) {
    const positions = {
        "top-right": "top-0 right-0",
        "top-left": "top-0 left-0",
        "bottom-right": "bottom-0 right-0",
        "bottom-left": "bottom-0 left-0",
    };

    return (
        <motion.div
            className={`holographic-ribbon ${positions[position]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            style={{
                background: `linear-gradient(
          ${position.includes('right') ? '135deg' : '45deg'},
          rgba(168, 85, 247, 0.4),
          rgba(236, 72, 153, 0.4),
          rgba(59, 130, 246, 0.4),
          rgba(168, 85, 247, 0.4)
        )`,
            }}
        />
    );
}
