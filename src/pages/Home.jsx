import React, { useEffect } from "react";

import Hero from "../components/Hero";
import StatsSlider from "../components/StatsSlider";
import HowItWorks from "../components/HowItWorks";
import FeaturesGrid from "../components/FeaturesGrid";
import BigFeatures from "../components/BigFeatures";
import ProductStory from "../components/ProductStory";
import AiArchitecture from "../components/AiArchitecture";
import DeepDive from "../components/DeepDive";
import BeforeAfter from "../components/BeforeAfter";
import TeamSection from "../components/TeamSection";
import FinalCta from "../components/FinalCta";
import CelestialBackground from "../components/CelestialBackground";

export default function Home() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="overflow-x-hidden bg-[#050507] text-white">

      {/* CELESTIAL BACKGROUND */}
      <CelestialBackground />

      {/* HERO */}
      <Hero />

      {/* STATS SLIDER */}
      <StatsSlider />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* CORE FEATURES */}
      <FeaturesGrid />

      {/* QUOTE */}
      <section className="py-24 text-center relative z-10">
        <blockquote className="text-purple-300 text-2xl glow-text max-w-3xl mx-auto px-6">
          “Early warnings can save months of stress. Prevention is power.”
        </blockquote>
      </section>

      {/* BIG FEATURES */}
      <BigFeatures />

      {/* PRODUCT STORY */}
      <ProductStory />

      {/* AI ARCHITECTURE */}
      <AiArchitecture />

      {/* DEEP DIVE */}
      <DeepDive />

      {/* BEFORE / AFTER */}
      <BeforeAfter />

      {/* TEAM SECTION */}
      <TeamSection />

      {/* FINAL CTA */}
      <FinalCta />

    </div>
  );
}
