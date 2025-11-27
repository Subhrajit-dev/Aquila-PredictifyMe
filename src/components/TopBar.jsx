import React from "react";

export default function TopBar({ user }) {
  return (
    <header className="fixed left-64 top-0 right-0 h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-end px-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-700 dark:text-slate-300">
          {user?.name || "User"}
        </span>
        <img
          src={`https://ui-avatars.com/api/?name=${user?.name || "U"}`}
          alt="User"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
}
