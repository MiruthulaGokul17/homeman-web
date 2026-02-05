"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Apple, Play } from "lucide-react";
import { FadeIn } from "./animations";

interface LaunchPopupProps {
    children: React.ReactNode;
}

export default function LaunchPopup({ children }: LaunchPopupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-green-50 to-emerald-50/50 -z-10" />

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 hover:bg-gray-100 transition-colors text-gray-500 z-10"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-10 text-center">
                            {/* Icon with Glow */}
                            <div className="relative w-20 h-20 mx-auto mb-6">
                                <div className="absolute inset-0 bg-[#2bdc4f] rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                                <div className="relative w-20 h-20 bg-[#2bdc4f] rounded-3xl flex items-center justify-center shadow-lg shadow-green-500/20">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                                        <path d="M9 2v20"></path>
                                        <path d="M2 10h20"></path>
                                    </svg>
                                </div>
                            </div>

                            <FadeIn delay={0.1}>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Launching Soon</h3>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    We&apos;re crafting the ultimate pantry assistant.<br />
                                    <span className="text-[var(--color-primary)] font-bold">Stay tuned.</span>
                                </p>
                            </FadeIn>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <div onClick={handleClick} className="inline-block w-full md:w-auto cursor-pointer">
                {children}
            </div>
            {mounted && createPortal(modalContent, document.body)}
        </>
    );
}
