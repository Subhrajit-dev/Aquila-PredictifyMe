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
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl shadow"
          >
            <p className="text-lg italic text-slate-700 dark:text-slate-300">
              “{d.text}”
            </p>
            <p className="mt-4 font-bold text-slate-900 dark:text-white">
              — {d.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
