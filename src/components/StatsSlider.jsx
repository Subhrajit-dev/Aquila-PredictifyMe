import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ from = 0, to, duration = 1.5, start }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(from + (to - from) * progress);

      setValue(current);

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [start, from, to, duration]);

  return value;
}

export default function StatsSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="stats-section" ref={ref} className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-white">
          Why PredictifyMe Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-teal-600 text-white rounded-2xl shadow-lg">
            <h3 className="text-5xl font-extrabold">
              <Counter from={0} to={72} start={isInView} />%
            </h3>
            <p className="mt-3 text-lg font-light">Students face digital burnout.</p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-purple-600 text-white rounded-2xl shadow-lg">
            <h3 className="text-5xl font-extrabold">
              1 in <Counter from={0} to={3} start={isInView} />
            </h3>
            <p className="mt-3 text-lg font-light">Suffer sleep-based stress.</p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-amber-600 text-white rounded-2xl shadow-lg">
            <h3 className="text-5xl font-extrabold">
              <Counter from={0} to={58} start={isInView} />%
            </h3>
            <p className="mt-3 text-lg font-light">Show signs in typing patterns.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
