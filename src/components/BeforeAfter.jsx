export default function BeforeAfter() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-left">

        <div className="p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Before PredictifyMe</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>❌ Irregular sleep schedule</li>
            <li>❌ Digital fatigue & burnout</li>
            <li>❌ No early warnings</li>
            <li>❌ Low focus & discipline</li>
          </ul>
        </div>

        <div className="p-10 bg-teal-600 text-white rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">After PredictifyMe</h3>
          <ul className="space-y-3">
            <li>✔ Stable sleep routine</li>
            <li>✔ Early stress detection</li>
            <li>✔ Personalized habit guidance</li>
            <li>✔ Improved focus & wellbeing</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
