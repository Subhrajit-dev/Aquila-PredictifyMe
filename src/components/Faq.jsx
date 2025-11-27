export default function Faq() {
  const faqs = [
    ["Is my data safe?", "Yes. We only use behavioral patterns, never personal content."],
    ["Do you track messages/notes?", "No. Only typing speed & rhythm — never text content."],
    ["Does it work without a smartwatch?", "Yes. All tracking is done from your normal usage patterns."],
    ["Will it affect battery?", "No, it's lightweight and optimized for minimal usage."],
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map(([q, a], i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
              <h3 className="text-xl font-semibold dark:text-white">{q}</h3>
              <p className="text-slate-700 dark:text-slate-300 mt-2">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
