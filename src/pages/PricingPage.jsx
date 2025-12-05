import React, { useEffect } from "react";
import Pricing from "../components/Pricing";
import CelestialBackground from "../components/CelestialBackground";

export default function PricingPage() {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-[#050507] pt-20 relative overflow-hidden">
            <CelestialBackground />
            <Pricing />
        </div>
    );
}
