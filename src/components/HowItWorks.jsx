import React from "react";
import bgImage from "../assets/backgrounds/how-bg.jpg";

export default function HowItWorks() {
  const steps = [
    {
      title: "Your Activity",
      desc: "Sleep · Screen · Typing · Study Load",
      color: "bg-teal-50",
    },
    {
      title: "AI Detection Models",
      desc: "Stress · Fatigue · Cognitive Load",
      color: "bg-blue-50",
    },
    {
      title: "Behavior Forecast",
      desc: "Burnout · Focus · Discipline",
      color: "bg-purple-50",
    },
    {
      title: "Personalized Insights",
      desc: "Sleep Fixes · Habit Plans · Alerts",
      color: "bg-orange-50",
    },
  ];

  return (
    <section
      className="py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,  // ✅ FIXED
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 dark:text-white">
          How Our AI Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`${s.color} p-8 rounded-2xl shadow-xl text-center`}
            >
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
