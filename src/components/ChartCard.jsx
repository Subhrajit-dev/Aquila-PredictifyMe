export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mb-10">
      <h2 className="text-xl font-bold mb-4 dark:text-white">{title}</h2>
      {children}
    </div>
  );
}
