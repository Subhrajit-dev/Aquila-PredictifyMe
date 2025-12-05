import React from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

export default function SettingsPage() {
    return (
        <div className="flex min-h-screen bg-black text-white font-sans">
            <Sidebar />

            <main className="flex-1 p-8 pt-20 sm:pt-24">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold glow-text mb-8"
                >
                    Settings
                </motion.h1>

                <div className="tech-card p-8 text-center text-gray-400">
                    <p>User settings and preferences coming soon.</p>
                </div>
            </main>
        </div>
    );
}
