"use client";

import Link from "next/link";
import LaunchPopup from "./LaunchPopup";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight text-[var(--color-primary)]">
                            HomeMan
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <LaunchPopup>
                            <Link
                                href="#"
                                className="px-5 py-2.5 bg-[var(--color-primary)] hover:bg-green-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-green-500/30 inline-block"
                            >
                                Start Free Trial
                            </Link>
                        </LaunchPopup>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <LaunchPopup>
                            <Link
                                href="#"
                                className="px-4 py-2 bg-[var(--color-primary)] hover:bg-green-600 text-white text-sm rounded-full font-bold transition-colors shadow-lg shadow-green-500/30 inline-block"
                            >
                                Join now
                            </Link>
                        </LaunchPopup>
                    </div>
                </div>
            </div>
        </nav>
    );
}
