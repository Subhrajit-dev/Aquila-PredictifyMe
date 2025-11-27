export default function BackgroundBlobs() {
  return (
    <>
      {/* Light Mode Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-teal-200 opacity-40 blur-2xl rounded-full dark:hidden"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-purple-200 opacity-40 blur-3xl rounded-full dark:hidden"></div>

      {/* Dark Mode Blobs */}
      <div className="hidden dark:block absolute top-0 -left-20 w-72 h-72 bg-slate-800 opacity-40 blur-2xl rounded-full"></div>
      <div className="hidden dark:block absolute top-40 right-0 w-80 h-80 bg-slate-700 opacity-40 blur-3xl rounded-full"></div>
    </>
  );
}
