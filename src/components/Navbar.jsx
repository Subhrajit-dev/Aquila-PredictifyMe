import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import DarkToggle from "./DarkToggle";
import logo from "../assets/logo.png";

export default function Navbar({ user, setUser }) {
  const nav = useNavigate();

  return (
    <header className="
      sticky top-0 z-40
      bg-white dark:bg-slate-900
      shadow-md
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide text-slate-800 dark:text-white"
          >
            PredictifyMe
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6">

          <Link
            to="/#stats"
            className="
              hidden md:inline
              text-base font-bold uppercase tracking-wide
              text-slate-700 dark:text-slate-200
              hover:text-slate-900 dark:hover:text-white
              transition
            "
          >
            STATS
          </Link>

          <Link
            to="/#how"
            className="
              hidden md:inline
              text-base font-bold uppercase tracking-wide
              text-slate-700 dark:text-slate-200
              hover:text-slate-900 dark:hover:text-white
              transition
            "
          >
            HOW
          </Link>

          {/* DARK MODE TOGGLE */}
          <DarkToggle />

          {/* AUTH BUTTON */}
          {!user ? (
            <button
              onClick={() => nav("/signin")}
              className="
                flex items-center gap-2
                bg-teal-600 hover:bg-teal-700
                text-white font-bold uppercase tracking-wide
                px-4 py-2 rounded-lg shadow
                transition
              "
            >
              <FiLogIn size={18} />
              SIGN IN
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Hi, {user.name}
              </span>
              <button
                onClick={() => {
                  setUser(null);
                  nav("/");
                }}
                className="
                  text-red-500 dark:text-red-400 
                  font-semibold uppercase tracking-wide
                "
              >
                LOGOUT
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
