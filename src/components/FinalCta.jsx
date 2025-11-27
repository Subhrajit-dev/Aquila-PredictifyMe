import React from "react";
import { useNavigate } from "react-router-dom";

export default function FinalCta() {
  const nav = useNavigate();

  return (
    <section className="py-20 bg-white dark:bg-slate-950 text-center">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Begin Your Wellbeing Journey Today
      </h2>

      <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-6">
        PredictifyMe gives you early warnings, deeper insights, and personalized
        improvements to help you live a healthier, more balanced digital life.
      </p>

      <button
        onClick={() => nav("/signup")}
        className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md"
      >
        Get Started Now
      </button>
    </section>
  );
}
