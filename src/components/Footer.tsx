"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Apple, Play } from "lucide-react";
import { FadeIn, FadeInItem, StaggerContainer } from "./animations";

export default function Footer() {
    return (
        <footer className="bg-[#0a0f14] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <StaggerContainer className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Column 1: Branding */}
                    <FadeInItem className="space-y-6 flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-xl tracking-tight">HomeMan</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Empowering households to eat better, waste less, and live smarter with AI-driven pantry intelligence.
                        </p>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <Link href="#" className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-all transform hover:scale-110">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-all transform hover:scale-110">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-all transform hover:scale-110">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </FadeInItem>

                    {/* Column 2: Quick Links */}
                    <FadeInItem className="space-y-4">
                        <h4 className="font-semibold text-white text-lg">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </FadeInItem>

                    {/* Column 3: Download Now */}
                    <FadeInItem className="space-y-4 flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-white text-lg">Download Now</h4>
                        <div className="space-y-3 w-full flex flex-col items-center md:items-start">
                            {/* App Store Button */}
                            <Link href="#" className="flex items-center justify-center md:justify-start gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-5 py-3 transition-all w-full max-w-[200px] hover:translate-x-1">
                                <Apple size={24} className="text-white fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Download on the</div>
                                    <div className="text-sm font-semibold text-white leading-none">App Store</div>
                                </div>
                            </Link>


                            {/* Google Play Button */}
                            <Link href="#" className="flex items-center justify-center md:justify-start gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-5 py-3 transition-all w-full max-w-[200px] hover:translate-x-1">
                                <Play size={24} className="text-white fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Get it on</div>
                                    <div className="text-sm font-semibold text-white leading-none">Google Play</div>
                                </div>
                            </Link>
                        </div>
                    </FadeInItem>
                </StaggerContainer>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <FadeIn delay={0.2}>
                        <p className="text-center text-gray-500 text-sm">
                            © 2026 HomeMan Technologies. All rights reserved.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </footer>
    );
}
