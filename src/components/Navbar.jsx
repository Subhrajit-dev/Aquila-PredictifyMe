import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-md border-b border-purple-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo192.png" alt="PredictifyMe Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="text-white font-semibold text-base sm:text-xl tracking-wide glow-text font-orbitron">
            PredictifyMe
          </span>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">Home</Link>
          <a href="#stats" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">Why</a>
          <a href="#how" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">How It Works</a>
          <Link to="/pricing" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">Plans and Pricing</Link>
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-4">
          <SignedIn>
            <Link
              to="/dashboard"
              className="px-3 sm:px-5 py-2 text-sm sm:text-base rounded-lg bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/50 shadow-md transition-all"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link to="/signin" className="hidden sm:inline-block px-5 py-2 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all">Sign In</Link>
            <Link
              to="/signup"
              className="px-3 sm:px-5 py-2 text-sm sm:text-base rounded-lg bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/50 transition-all"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
