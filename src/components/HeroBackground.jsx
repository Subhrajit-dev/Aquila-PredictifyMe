import React from "react";
import heroBg from "../assets/backgrounds/hero-bg.jpg";

export default function HeroBackground({ children }) {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        {children}
      </div>
    </div>
  );
}
