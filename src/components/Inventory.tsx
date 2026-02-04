"use client";

import { Droplets, Egg, Leaf, Wheat, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { FadeIn, FadeInItem, StaggerContainer } from "./animations";
import { motion } from "framer-motion";

export default function Inventory() {
    const items = [
        {
            name: "Milk",
            detail: "2L • Dairy",
            quantity: 25,
            daysLeft: 2,
            daysColor: "bg-red-100 text-red-600",
            barColor: "bg-red-500",
            icon: <Droplets className="w-5 h-5 text-blue-500" />,
            iconBg: "bg-blue-100"
        },
        {
            name: "Large Eggs",
            detail: "12 • Protein",
            quantity: 80,
            daysLeft: 12,
            daysColor: "bg-green-100 text-green-600",
            barColor: "bg-green-500",
            icon: <Egg className="w-5 h-5 text-yellow-500" />,
            iconBg: "bg-yellow-100"
        },
        {
            name: "Spinach",
            detail: "250g • Produce",
            quantity: 45,
            daysLeft: 4,
            daysColor: "bg-orange-100 text-orange-600",
            barColor: "bg-orange-500",
            icon: <Leaf className="w-5 h-5 text-green-500" />,
            iconBg: "bg-green-100"
        },
        {
            name: "Whole Wheat Bread",
            detail: "Loaf • Grains",
            quantity: 60,
            daysLeft: 7,
            daysColor: "bg-green-100 text-green-600",
            barColor: "bg-green-500",
            icon: <Wheat className="w-5 h-5 text-orange-500" />,
            iconBg: "bg-orange-100"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <FadeIn delay={0.1}>
                            <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">Inventory Dashboard</div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                                Real-time Pantry Management
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-lg text-gray-600 max-w-xl">
                                A bird&apos;s eye view of your kitchen. Know exactly what you have and what&apos;s about to expire.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.4} direction="left">
                        <button className="text-[var(--color-primary)] font-bold flex items-center hover:underline group">
                            View Full Inventory <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </FadeIn>
                </div>

                {/* Inventory Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {/* Item Cards */}
                    {items.map((item, idx) => (
                        <FadeInItem key={idx}>
                            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl transition-shadow h-full flex flex-col justify-between hover:-translate-y-1 duration-300">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center`}>
                                            {item.icon}
                                        </div>
                                        <div className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase flex items-center ${item.daysColor}`}>
                                            {item.daysLeft <= 3 && <span className="mr-1">⚠️</span>}
                                            {item.daysLeft} DAYS
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                                    <p className="text-xs text-gray-500 font-medium mb-6">{item.detail}</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-xs font-bold text-gray-400">Quantity Left</span>
                                        <span className="text-sm font-bold text-gray-900">{item.quantity}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.quantity}%` }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                            className={`h-full rounded-full ${item.barColor}`}
                                        ></motion.div>
                                    </div>
                                </div>
                            </div>
                        </FadeInItem>
                    ))}

                    {/* Summary Card */}
                    <FadeInItem>
                        <div className="bg-[var(--color-primary)] rounded-3xl p-6 shadow-xl shadow-green-500/20 text-white flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Total Items</div>
                                <div className="text-5xl font-extrabold mb-6">48</div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 mr-2 opacity-80" /> 32 Good
                                    </div>
                                    <div className="flex items-center text-sm font-medium">
                                        <Clock className="w-4 h-4 mr-2 opacity-80" /> 5 Expiring Soon
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white text-[var(--color-primary)] rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-colors">
                                Add Item +
                            </button>
                        </div>
                    </FadeInItem>

                </StaggerContainer>

            </div>
        </section>
    );
}
