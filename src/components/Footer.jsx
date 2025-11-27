export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-200 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>Contact: <b>predictifyme@gmail.com</b></p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} PredictifyMe</p>
      </div>
    </footer>
  );
}
