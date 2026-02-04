"use client";

import Image from "next/image";
import { QrCode, Apple, Play } from "lucide-react";
import { FadeIn } from "./animations";

export default function DownloadApp() {
    return (
        <section className="w-full bg-gray-50 md:bg-white overflow-hidden py-6 md:py-0">
            {/* Mobile View - Green Card */}
            <div className="md:hidden px-4">
                <FadeIn>
                    <div className="bg-[#2bdc4f] rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-lg shadow-green-200">
                        <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
                            Master your <br /> kitchen today.
                        </h2>
                        <p className="text-white/90 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                            Join 50,000+ chefs making their kitchen smarter with HomeMan.
                        </p>

                        <div className="w-full flex flex-col gap-4">
                            {/* App Store */}
                            <button className="flex items-center gap-4 bg-[#25bd45] rounded-2xl px-6 py-4 w-full justify-center shadow-lg shadow-green-700/10 active:scale-95 transition-transform">
                                <Apple size={28} className="text-white fill-current" />
                                <div className="text-left flex flex-col">
                                    <div className="text-[10px] font-bold text-white/80 uppercase tracking-wide leading-none mb-1">Download on the</div>
                                    <div className="text-lg font-bold text-white leading-none">App Store</div>
                                </div>
                            </button>

                            {/* Google Play */}
                            <button className="flex items-center gap-4 bg-[#25bd45] rounded-2xl px-6 py-4 w-full justify-center shadow-lg shadow-green-700/10 active:scale-95 transition-transform">
                                <Play size={24} className="text-white fill-current ml-1" />
                                <div className="text-left flex flex-col ml-1">
                                    <div className="text-[10px] font-bold text-white/80 uppercase tracking-wide leading-none mb-1">GET IT ON</div>
                                    <div className="text-lg font-bold text-white leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Desktop View - Original */}
            <div className="hidden md:block">
                <div className="grid md:grid-cols-2 min-h-[500px] lg:min-h-[600px]">

                    {/* Left: Phone Mockups Image - Full Green Background */}
                    <div className="relative bg-[#f0fdf4] flex items-center justify-center order-2 md:order-1 overflow-hidden">
                        <FadeIn direction="right" delay={0.2} className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] max-w-[90%] lg:max-w-none">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/cta-phones.png"
                                    alt="HomeMan Mobile App"
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Content - White Background */}
                    <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-16 md:py-0 order-1 md:order-2">
                        <div className="max-w-xl">
                            <FadeIn delay={0.1}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1110] leading-[1.1] mb-6">
                                    Take <br />
                                    HomeMan with <br />
                                    you <br />
                                    everywhere.
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p className="text-lg text-gray-500 max-w-md leading-relaxed mb-8">
                                    Join 50,000+ home chefs who have transformed their kitchens. Available for iOS and Android.
                                </p>
                            </FadeIn>

                            <div className="flex flex-col xl:flex-row gap-4 pt-4">
                                {/* iOS Button */}
                                <FadeIn delay={0.3}>
                                    <button className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all hover:-translate-y-1 w-full xl:w-auto h-14 min-w-[170px]">
                                        <Apple size={24} className="text-black fill-current" />
                                        <div className="text-left flex flex-col justify-center">
                                            <div className="text-[9px] font-bold text-gray-900 uppercase tracking-wide leading-none mb-1">Download on</div>
                                            <div className="text-base font-bold text-gray-900 leading-none">App Store</div>
                                        </div>
                                    </button>
                                </FadeIn>

                                {/* Android Button */}
                                <FadeIn delay={0.4}>
                                    <button className="flex items-center gap-3 bg-[#2bdc4f] rounded-xl px-4 py-3 shadow-xl shadow-green-500/20 hover:shadow-green-500/30 transition-all hover:-translate-y-1 w-full xl:w-auto h-14 min-w-[170px]">
                                        <Play size={20} className="text-gray-900 fill-current ml-1" />
                                        <div className="text-left flex flex-col justify-center ml-1">
                                            <div className="text-[9px] font-bold text-gray-900 uppercase tracking-wide leading-none mb-1">GET IT ON</div>
                                            <div className="text-base font-bold text-gray-900 leading-none">Google Play</div>
                                        </div>
                                    </button>
                                </FadeIn>
                            </div>

                            {/* QR Code Section */}
                            <FadeIn delay={0.5}>
                                <div className="flex items-center gap-5 py-8">
                                    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex-shrink-0">
                                        <QrCode size={52} className="text-gray-900" />
                                    </div>
                                    <div className="h-10 w-px bg-gray-300"></div>
                                    <div>
                                        <h4 className="font-exhibit font-bold text-gray-900 text-base">Scan to install</h4>
                                        <p className="text-[11px] text-gray-400 max-w-[160px] mt-1 leading-snug">
                                            Scan this qrcode to instantly download the HomeMan app.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
