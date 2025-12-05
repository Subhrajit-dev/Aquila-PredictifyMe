export default function ChartCard({ title, children }) {
  return (
    <div className="tech-card p-6 mb-10">
      <h2 className="text-xl font-bold mb-6 text-purple-300">{title}</h2>
      {children}
    </div>
  );
}
