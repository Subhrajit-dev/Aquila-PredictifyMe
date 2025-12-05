import React from "react";

export default function CelestialBackground() {
    // Generate random stars
    const generateStars = (count, size) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            size,
        }));
    };

    const smallStars = generateStars(100, 1);
    const mediumStars = generateStars(50, 2);
    const largeStars = generateStars(20, 3);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Cosmic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#1a0b2e] to-[#050507]" />

            {/* Additional gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent opacity-50" />

            {/* Small stars */}
            {smallStars.map((star) => (
                <div
                    key={`small-${star.id}`}
                    className="absolute rounded-full bg-white star-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: star.animationDelay,
                        animationDuration: star.animationDuration,
                    }}
                />
            ))}

            {/* Medium stars */}
            {mediumStars.map((star) => (
                <div
                    key={`medium-${star.id}`}
                    className="absolute rounded-full bg-blue-100 star-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: star.animationDelay,
                        animationDuration: star.animationDuration,
                    }}
                />
            ))}

            {/* Large stars */}
            {largeStars.map((star) => (
                <div
                    key={`large-${star.id}`}
                    className="absolute rounded-full bg-purple-200 star-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: star.animationDelay,
                        animationDuration: star.animationDuration,
                        boxShadow: `0 0 ${star.size * 2}px rgba(168, 85, 247, 0.5)`,
                    }}
                />
            ))}

            {/* Cosmic Rays */}
            <div className="cosmic-ray cosmic-ray-1" />
            <div className="cosmic-ray cosmic-ray-2" />
            <div className="cosmic-ray cosmic-ray-3" />
            <div className="cosmic-ray cosmic-ray-4" />
            <div className="cosmic-ray cosmic-ray-5" />

            {/* Nebula-like clouds */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl" />
        </div>
    );
}
