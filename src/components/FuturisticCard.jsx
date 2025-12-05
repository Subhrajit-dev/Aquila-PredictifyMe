export default function FuturisticCard({ title, text }) {
  return (
    <div className="relative futuristic-card p-8 text-center">
      <h3 className="text-2xl font-bold text-purple-300 mb-3">{title}</h3>
      <p className="text-purple-200 text-sm leading-relaxed">{text}</p>

      {/* left angle */}
      <span className="card-edge-left"></span>
      {/* right angle */}
      <span className="card-edge-right"></span>
    </div>
  );
}
