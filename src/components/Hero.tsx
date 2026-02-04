"use client";

import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeIn, StaggerContainer, FadeInItem } from "./animations";

export default function Hero() {
    return (
        <section className="relative pt-20 pb-16 lg:pb-24 bg-green-50 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-green-100/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-[var(--color-primary)] text-sm font-bold tracking-widest uppercase mb-4 mx-auto lg:mx-0 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
                                Now Live
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                                Your Kitchen, <br />
                                <span className="text-[var(--color-primary)] italic">Smarter.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
                                AI-powered pantry management and recipe generation. Snap receipts and let HomeMan
                                track your inventory effortlessly.
                            </p>
                        </FadeIn>

                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <FadeIn delay={0.3} className="flex flex-col gap-4 w-full md:w-auto md:flex-row md:items-center">
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-[var(--color-primary)] rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-105 w-full md:w-auto"
                                >
                                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-gray-300 w-full md:w-auto shadow-sm"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                        <Play className="h-3 w-3 fill-gray-900 text-gray-900" />
                                    </div>
                                    Watch Demo
                                </Link>
                            </FadeIn>
                        </div>

                        <div className="pt-6 flex flex-col gap-6 items-center lg:items-start">
                            <FadeIn delay={0.4}>
                                <div className="flex gap-3 justify-center lg:justify-start w-full">
                                    {/* App Store Button */}
                                    <Link href="#" className="flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-3 bg-[#0F172A] hover:bg-gray-800 rounded-xl px-4 py-3 transition-all min-w-[140px]">
                                        <span className="text-white font-bold text-lg">iOS</span>
                                        <div className="text-left">
                                            <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wide">Download on the</div>
                                            <div className="text-sm font-semibold text-white leading-none">App Store</div>
                                        </div>
                                    </Link>

                                    {/* Google Play Button */}
                                    <Link href="#" className="flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-3 bg-[#0F172A] hover:bg-gray-800 rounded-xl px-4 py-3 transition-all min-w-[140px]">
                                        <Play size={18} className="text-white fill-white" />
                                        <div className="text-left">
                                            <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wide">GET IT ON</div>
                                            <div className="text-sm font-semibold text-white leading-none">Google Play</div>
                                        </div>
                                    </Link>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <div className="flex items-center gap-4 justify-center lg:justify-start">
                                    <div className="flex items-center">
                                        <StaggerContainer className="flex -space-x-3">
                                            {[1, 2, 3].map((i) => (
                                                <FadeInItem key={i}>
                                                    <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                                        <Image
                                                            src={`/avatar-${i}.png`}
                                                            /* Note: Assuming these images exist based on existing code. If not, they might be broken but I'm just preserving them. */
                                                            alt={`User ${i}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </FadeInItem>
                                            ))}
                                        </StaggerContainer>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Joined by <span className="font-bold text-gray-900">50,000+</span> home chefs
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Right Content - Phone Image in Card */}
                    <div className="relative z-10 flex justify-center items-center">
                        <FadeIn delay={0.2} direction="left" className="w-[340px] md:w-[460px]">
                            {/* Mobile View: Standalone Mockup */}
                            <div className="relative w-full h-[600px] md:hidden">
                                <div className="relative w-full h-full flex justify-center items-center drop-shadow-2xl">
                                    <div className="relative w-[280px] h-[580px] rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-gray-900">
                                        <Image
                                            src="/mobile-mockup.png"
                                            alt="HomeMan App Interface"
                                            fill
                                            className="object-cover scale-[1.12]"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Desktop View: Card Container Style */}
                            <div className="relative hidden md:block w-full h-[400px]">
                                {/* Soft Green Glow Behind */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-green-300/30 blur-[80px] -z-20 rounded-full pointer-events-none"></div>

                                {/* Card Container - Light gray to match image background */}
                                <div className="relative bg-[#f5f5f5] rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] w-full h-full overflow-hidden">
                                    {/* Phone Image - Cropped to show top portion */}
                                    <div className="absolute inset-0 flex justify-center pt-6">
                                        <div className="relative w-[420px] h-[1000px] rounded-[2.5rem]">
                                            <Image
                                                src="/app.png"
                                                alt="HomeMan App Interface"
                                                fill
                                                className="object-contain object-top"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
