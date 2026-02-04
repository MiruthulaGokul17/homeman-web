"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Apple, Play } from "lucide-react";
import { FadeIn, FadeInItem, StaggerContainer } from "./animations";

export default function Footer() {
    return (
        <>
            {/* Mobile Footer - Clean White */}
            <footer className="md:hidden bg-white text-gray-900 border-t border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col items-start gap-10 pl-2">
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#2bdc4f] rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                                    <path d="M9 2v20"></path>
                                    <path d="M2 10h20"></path>
                                </svg>
                            </div>
                            <span className="font-extrabold text-xl tracking-tight text-[#0f1110]">HomeMan</span>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 w-full">
                            <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">Quick Links</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/privacy-policy" className="hover:text-[#2bdc4f] transition-colors">Privacy policy</Link></li>
                                <li><Link href="#" className="hover:text-[#2bdc4f] transition-colors">Terms and Conditions</Link></li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 shadow-sm hover:shadow-md hover:border-[#2bdc4f] hover:text-[#2bdc4f] transition-all">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 shadow-sm hover:shadow-md hover:border-[#2bdc4f] hover:text-[#2bdc4f] transition-all">
                                <Instagram size={20} />
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="pt-4 w-full">
                            <p className="text-xs text-gray-400 font-medium">
                                © 2026 HomeMan Technologies. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Desktop Footer - Dark Theme */}
            <footer className="hidden md:block bg-[#0a0f14] text-white mb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <StaggerContainer className="grid md:grid-cols-3 gap-12">
                        {/* Column 1: Branding */}
                        <FadeInItem className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-xl tracking-tight">HomeMan</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Empowering households to eat better, waste less, and live smarter with AI-driven pantry intelligence.
                            </p>
                            <div className="flex items-center gap-4">
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
                            <ul className="space-y-3 text-sm text-gray-400">
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
                        <FadeInItem className="space-y-4">
                            <h4 className="font-semibold text-white text-lg">Download Now</h4>
                            <div className="space-y-3">
                                {/* App Store Button */}
                                <Link href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-5 py-3 transition-all w-full max-w-[200px] hover:translate-x-1">
                                    <Apple size={24} className="text-white fill-current" />
                                    <div className="text-left">
                                        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Download on the</div>
                                        <div className="text-sm font-semibold text-white leading-none">App Store</div>
                                    </div>
                                </Link>

                                {/* Google Play Button */}
                                <Link href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-5 py-3 transition-all w-full max-w-[200px] hover:translate-x-1">
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
                            <p className="text-center text-gray-500 text-sm">
                                © 2026 HomeMan Technologies. All rights reserved.
                            </p>

                    </div>
                </div>
            </footer>
        </>
    );
}