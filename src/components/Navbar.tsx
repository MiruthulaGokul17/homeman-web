"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight text-[var(--color-primary)]">
                            HomeMan
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Login
                        </Link>
                        <Link
                            href="#"
                            className="px-5 py-2.5 bg-[var(--color-primary)] hover:bg-green-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-green-500/30"
                        >
                            Start Free Trial
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                         <Link
                            href="#"
                            className="px-4 py-2 bg-[var(--color-primary)] hover:bg-green-600 text-white text-sm rounded-full font-bold transition-colors shadow-lg shadow-green-500/30"
                        >
                            Join now
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            <Link
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Login
                            </Link>
                            <Link
                                href="#"
                                className="block w-full text-center px-4 py-3 bg-[var(--color-primary)] text-white rounded-lg font-bold shadow-md"
                            >
                                Start Free Trial
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
