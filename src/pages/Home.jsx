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
import FinalCta from "../components/FinalCta";

export default function Home() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* STATS SLIDER */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <StatsSlider />
      </div>

      {/* HOW IT WORKS */}
      <div className="py-16 bg-gray-50 dark:bg-slate-900">
        <HowItWorks />
      </div>

      {/* CORE FEATURES */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <FeaturesGrid />
      </div>

      {/* QUOTE */}
      <section className="py-16 text-center bg-gray-50 dark:bg-slate-900">
        <blockquote className="italic text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
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

      {/* FINAL CTA */}
      <FinalCta />

    </div>
  );
}
