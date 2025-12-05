import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function RollingStatValue({ finalValue, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const isPercentage = finalValue.includes("%");
    const isFraction = finalValue.includes("in");

    let targetNumber;
    if (isPercentage) {
      targetNumber = parseInt(finalValue);
    } else if (isFraction) {
      targetNumber = parseInt(finalValue.split("in")[1].trim());
    }

    // Randomizing phase (2.5 seconds, slower and smoother)
    const randomizeDuration = 2500;
    const randomizeInterval = 100;
    const randomizeSteps = randomizeDuration / randomizeInterval;

    let currentStep = 0;
    const randomizeTimer = setInterval(() => {
      if (currentStep < randomizeSteps) {
        const randomNum = Math.floor(Math.random() * 100);
        if (isPercentage) {
          setDisplayValue(`${randomNum}%`);
        } else if (isFraction) {
          setDisplayValue(`1 in ${randomNum}`);
        }
        currentStep++;
      } else {
        clearInterval(randomizeTimer);

        // Rolling to final value phase (1.5 seconds)
        const rollingDuration = 1500;
        const rollingSteps = 30;
        const stepDuration = rollingDuration / rollingSteps;

        let step = 0;
        const rollingTimer = setInterval(() => {
          const progress = step / rollingSteps;
          const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
          const currentNum = Math.round(easeOut * targetNumber);

          if (isPercentage) {
            setDisplayValue(`${currentNum}%`);
          } else if (isFraction) {
            setDisplayValue(`1 in ${currentNum}`);
          }

          step++;

          if (step > rollingSteps) {
            clearInterval(rollingTimer);
            setDisplayValue(finalValue); // Set final value
          }
        }, stepDuration);
      }
    }, randomizeInterval);

    setTimeout(() => {
      return () => {
        clearInterval(randomizeTimer);
      };
    }, delay);

  }, [hasStarted, finalValue, delay]);

  return (
    <h3 ref={elementRef} className="text-5xl font-extrabold text-purple-400 glow-text mb-4 tabular-nums">
      {displayValue || finalValue}
    </h3>
  );
}

export default function StatsSection() {
  const stats = [
    {
      value: "72%",
      text: "Students experience digital burnout",
    },
    {
      value: "1 in 3",
      text: "Face stress due to irregular sleep",
    },
    {
      value: "58%",
      text: "Show cognitive distress via typing patterns",
    },
  ];

  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      {/* Purple fog bottom */}
      <div className="absolute bottom-0 left-0 w-full h-96 fog-bottom pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
      >
        Why PredictifyMe Matters
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="tech-card text-center py-10 px-6 backdrop-blur-lg hover:bg-white/5 transition-all"
          >
            <RollingStatValue finalValue={item.value} delay={index * 200} />
            <p className="text-gray-300 text-lg tracking-wide">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
