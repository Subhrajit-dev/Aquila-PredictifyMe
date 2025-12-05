export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-gray-400 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>Reach out to us: <b className="text-purple-400">predictifyme1@gmail.com</b></p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} PredictifyMe</p>
      </div>
    </footer>
  );
}
