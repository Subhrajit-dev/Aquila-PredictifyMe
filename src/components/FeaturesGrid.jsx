export default function FeaturesGrid() {
  const features = [
    ["Sleep Pattern Analysis", "Detects irregular sleep cycles."],
    ["Screen Time Insights", "Monitors device usage spikes."],
    ["Typing Behavior AI", "Identifies emotional changes via typing."],
    ["Workload Stress Index", "Forecasts burnout from workload trends."]
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
          Core Features
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="
                bg-white dark:bg-slate-800 
                p-5 rounded-xl shadow 
                dark:shadow-none
              "
            >
              <h4 className="font-bold text-slate-900 dark:text-white">
                {f[0]}
              </h4>

              <p className="text-slate-600 dark:text-slate-300 mt-2">
                {f[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
