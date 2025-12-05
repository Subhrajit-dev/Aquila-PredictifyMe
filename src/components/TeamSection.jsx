import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
    {
        id: 1,
        name: "Ishika Singh",
        role: "CEO",
        image: "/ishika-ceo.jpg",
        quote: "Leading with vision, empowering with innovation.",
    },
    {
        id: 2,
        name: "Subhrajit Sengupta",
        role: "CTO",
        image: "/subhrajit-cto.png",
        quote: "Building tomorrow's technology, today.",
    },
    {
        id: 3,
        name: "Ramisha Fathma",
        role: "CCO",
        image: "https://via.placeholder.com/300x300/3b82f6/ffffff?text=CCO",
        quote: "Connecting people, amplifying impact.",
    },
    {
        id: 4,
        name: "Aditya Kumar Jha",
        role: "CFO",
        image: "/aditya-cfo.jpg",
        quote: "Turning insights into sustainable growth.",
    },
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    // Handle resize to switch between mobile and desktop views
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const getVisibleMembers = () => {
        if (!isDesktop) {
            return [{ ...teamMembers[currentIndex], position: "center" }];
        }

        const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        const nextIndex = (currentIndex + 1) % teamMembers.length;

        return [
            { ...teamMembers[prevIndex], position: "left" },
            { ...teamMembers[currentIndex], position: "center" },
            { ...teamMembers[nextIndex], position: "right" },
        ];
    };

    return (
        <section className="py-24 relative overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white glow-text mb-16 font-orbitron"
                >
                    MEET THE TEAM
                </motion.h2>

                <div className="relative h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getVisibleMembers().map((member) => {
                            let x = 0;
                            let scale = 1;
                            let opacity = 1;
                            let zIndex = 10;

                            if (member.position === "left") {
                                x = -320;
                                scale = 0.85;
                                opacity = 0.5;
                                zIndex = 5;
                            } else if (member.position === "right") {
                                x = 320;
                                scale = 0.85;
                                opacity = 0.5;
                                zIndex = 5;
                            }

                            return (
                                <motion.div
                                    key={member.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        x: isDesktop ? x : 100,
                                        scale: scale
                                    }}
                                    animate={{
                                        opacity: opacity,
                                        x: isDesktop ? x : 0,
                                        scale: scale,
                                        zIndex: zIndex
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: isDesktop ? x : -100,
                                        scale: 0.8
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute w-full max-w-sm"
                                >
                                    <div className={`tech-card p-8 flex flex-col items-center transition-all duration-500 ${member.position === 'center' ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]' : 'border-gray-800 bg-black/40'}`}>
                                        <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">
                                            {member.name}
                                        </h3>
                                        <p className="text-lg text-purple-400 font-bold tracking-widest mb-4 font-orbitron">
                                            {member.role}
                                        </p>

                                        {member.position === "center" && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6 mx-auto" />
                                                <p className="text-gray-300 text-base leading-relaxed italic">
                                                    "{member.quote}"
                                                </p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* Navigation Buttons (Visible on all screens for better UX) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-10 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-sm"
                        aria-label="Previous member"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-10 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-sm"
                        aria-label="Next member"
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {teamMembers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-purple-500 w-8 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                                : "bg-gray-700 w-2 hover:bg-gray-600"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
