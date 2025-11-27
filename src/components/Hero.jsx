import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/backgrounds/hero.jpg";  // ✅ Correct import

export default function Hero() {
  const nav = useNavigate();

  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-6 relative"
      style={{
        backgroundImage: `url(${heroImg})`,   // ✅ Background applied
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
          Predict Problems Early.
          <br />
          <span className="text-teal-300">
            Improve Your Digital Wellbeing.
          </span>
        </h1>

        <p className="mt-4 text-white/90 text-lg drop-shadow">
          PredictifyMe analyzes your sleep cycles, screen exposure, typing rhythm,
          and workload patterns to detect early signs of burnout & stress — keeping
          you balanced, focused, and in control.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => nav("/signin")}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md"
          >
            Get Started
          </button>

          <button
            onClick={() => nav("/signup")}
            className="px-6 py-3 bg-white text-slate-800 rounded-lg shadow"
          >
            Learn More
          </button>
        </div>

        <p className="mt-4 text-white/70 text-sm">
          No tracking of personal content · Privacy-first AI · Student-friendly
        </p>
      </div>
    </section>
  );
}
