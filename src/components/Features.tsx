"use client";

import { Scan, Barcode, Bell } from "lucide-react";
import { FadeIn, FadeInItem, StaggerContainer } from "./animations";
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            icon: <Scan className="w-6 h-6 text-green-600" />,
            title: "Automatic receipt and bill scanning",
            description: "Instantly extract items, prices, and quantities from any grocery receipt."
        },
        {
            icon: <Barcode className="w-6 h-6 text-green-600" />,
            title: "Barcode and product label recognition",
            description: "Simply point your camera to add items to your pantry inventory."
        },
        {
            icon: <Bell className="w-6 h-6 text-green-600" />,
            title: "Expiry date tracking with smart alerts",
            description: "Get notified before your food goes bad. Reduce waste, save money."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content - Phone Mockup for Features */}
                    <FadeIn direction="right" className="order-2 lg:order-1 relative flex justify-center">
                        <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                            {/* Phone Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>

                            {/* Camera Viewport Mock */}
                            <div className="w-full h-full bg-gray-100 relative flex flex-col">
                                <div className="flex-1 bg-gray-200 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
                                    {/* Scanning Overlay */}
                                    <div className="absolute w-64 h-64 border-2 border-[var(--color-primary)] rounded-lg flex items-center justify-center">
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[var(--color-primary)] -mt-1 -ml-1"></div>
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[var(--color-primary)] -mt-1 -mr-1"></div>
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[var(--color-primary)] -mt-1 -ml-1"></div>
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[var(--color-primary)] -mt-1 -mr-1"></div>

                                        {/* Smooth Scanning Effect */}
                                        <motion.div
                                            animate={{ y: [-10, 10, -10] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                                        >
                                            <Scan className="w-4 h-4 text-[var(--color-primary)]" />
                                            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Scanning...</span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Extracted Items Sheet */}
                                <motion.div
                                    initial={{ y: 100 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                                    className="bg-white rounded-t-3xl p-6 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] -mt-6 relative z-10"
                                >
                                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                    <h3 className="font-bold text-gray-900 mb-4">Fresh Harvest Market</h3>
                                    <div className="space-y-3">
                                        {[
                                            { name: "Whole Milk 2L", status: "Detected" },
                                            { name: "Organic Spinach", status: "Detected" },
                                            { name: "Large Eggs 12pk", status: "Detected" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-gray-50 last:border-0">
                                                <span className="font-medium text-gray-700">{item.name}</span>
                                                <span className="text-[var(--color-primary)] text-xs font-bold uppercase">{item.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-4 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-lg shadow-green-500/20">
                                        Confirm 12 Items
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <FadeIn delay={0.2}>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[var(--color-primary)] text-sm font-bold tracking-wide uppercase">
                                Pantry Scan
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Effortless Scanning. <br />
                                Zero Manual Entry.
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="text-lg text-gray-600">
                                Our AI instantly recognizes items from grocery receipts or kitchen shelves. Just snap a photo, and your inventory updates automatically in real time.
                            </p>
                        </FadeIn>

                        <StaggerContainer delay={0.5} className="space-y-6 pt-4">
                            {features.map((feature, idx) => (
                                <FadeInItem key={idx}>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                                        </div>
                                    </div>
                                </FadeInItem>
                            ))}
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}
