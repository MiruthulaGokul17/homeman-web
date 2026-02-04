"use client";

import { PieChart, ShoppingBag, Utensils, Zap, ShoppingCart, Store, Croissant, Wine, Coffee, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, FadeInItem } from "./animations";
import { motion } from "framer-motion";

export default function Insights() {
    // Data for Mobile Bar Chart
    const barData = [
        { month: "JAN", height: "40%" },
        { month: "FEB", height: "35%" },
        { month: "MAR", height: "65%" },
        { month: "APR", height: "45%" },
        { month: "MAY", height: "80%", active: true },
    ];

    // Data for Desktop View
    const transactions = [
        { title: "Daily Fresh", date: "Oct 24 • 12 Items", amount: "₹1,240", icon: <ShoppingBag size={20} className="text-green-600" />, bg: "bg-green-100" },
        { title: "Jiomart", date: "Oct 22 • 5 Items", amount: "₹560", icon: <ShoppingBag size={20} className="text-blue-600" />, bg: "bg-blue-100" },
        { title: "Grocery", date: "Oct 19 • 16 Items", amount: "₹2,890", icon: <Store size={20} className="text-orange-600" />, bg: "bg-orange-100" },
        { title: "Bakery", date: "Oct 18 • 3 Items", amount: "₹450", icon: <Croissant size={20} className="text-purple-600" />, bg: "bg-purple-100" },
        { title: "The Coffee Club", date: "Oct 15 • 2 Items", amount: "₹320", icon: <Coffee size={20} className="text-rose-600" />, bg: "bg-rose-100" },
    ];

    return (
        <section className="py-10 md:py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-50/30 to-transparent -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- PHONE MOBILE VIEW (Real-time Reports) --- */}
                <div className="md:hidden">
                    <div className="text-center mb-12">
                        <FadeIn delay={0.1}>
                            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-[var(--color-primary)] text-xs font-extrabold uppercase tracking-wider mb-4">
                                Insights
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                                Real-time Reports
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-base text-gray-600 max-w-md mx-auto">
                                Detailed breakdown of your household spending habits.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 p-8 border border-gray-100 relative overflow-visible">
                            {/* Card Header Stats */}
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Monthly Spend</div>
                                    <div className="text-3xl font-extrabold text-gray-900">$482.50</div>
                                </div>
                                <div className="bg-green-100 px-4 py-2 rounded-2xl flex flex-col items-center">
                                    <span className="text-[10px] font-bold text-green-600 uppercase">Total Savings</span>
                                    <span className="text-lg font-extrabold text-green-600">$124</span>
                                </div>
                            </div>

                            {/* Bar Chart Area */}
                            <div className="relative h-48 flex items-end justify-between px-2 mb-10">
                                {barData.map((data, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-3 group relative w-8 h-full justify-end">
                                        {/* Tooltip Removed */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: data.height }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: idx * 0.1, ease: "backOut" }}
                                            className={`w-3 rounded-full ${data.active ? 'bg-[var(--color-primary)] shadow-lg shadow-green-500/30' : 'bg-[var(--color-primary)] opacity-80'}`}
                                        ></motion.div>
                                        <span className={`text-[10px] font-bold ${data.active ? 'text-gray-900' : 'text-gray-400'} uppercase`}>
                                            {data.month}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-50 pt-6 flex justify-center">
                                <button className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm hover:text-green-700 transition-colors group">
                                    View Full Report
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>


                {/* --- DESKTOP VIEW (Original Design) --- */}
                <div className="hidden md:block">
                    {/* Header */}
                    <div className="mb-12">
                        <FadeIn delay={0.1}>
                            <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2 text-left">Insights & Reports</div>
                        </FadeIn>
                        <div className="flex flex-row justify-between items-end gap-6 text-left">
                            <div className="max-w-xl mx-0">
                                <FadeIn delay={0.2}>
                                    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                                        Track Your Monthly Grocery Spend
                                    </h2>
                                </FadeIn>
                                <FadeIn delay={0.3}>
                                    <p className="text-lg text-gray-600">
                                        Visualize your spending patterns and discover new ways to optimize your budget.
                                    </p>
                                </FadeIn>
                            </div>
                            <FadeIn delay={0.3} direction="left" className="w-auto flex justify-end">
                                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl border border-gray-100">
                                    <div className="text-xs font-medium text-gray-500 px-2">Monthly Budget: <span className="font-bold text-gray-900">₹12,000</span></div>
                                    <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm text-xs font-bold text-gray-900 border border-gray-200">
                                        October 2024
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Dashboard Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Card 1: Spending by Category */}
                        <FadeIn delay={0.2} className="h-full">
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 h-full">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="font-bold text-gray-900 text-lg">Spending by Category</h3>
                                    <PieChart className="text-gray-300 w-5 h-5" />
                                </div>
                                <div className="flex flex-row items-center gap-12">
                                    <div className="relative w-48 h-48 flex-shrink-0">
                                        <div className="absolute inset-0 rounded-full border-[20px] border-green-50"></div>
                                        <motion.div
                                            initial={{ rotate: -90, opacity: 0 }}
                                            whileInView={{ rotate: 45, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="absolute inset-0 rounded-full border-[20px] border-[var(--color-primary)] border-l-transparent border-b-transparent"
                                        ></motion.div>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-4xl font-extrabold text-gray-900">₹8,450</span>
                                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mt-1">Spent Total</span>
                                        </div>
                                    </div>
                                    <StaggerContainer className="flex-1 w-full space-y-6">
                                        {[
                                            { label: "Produce", color: "bg-[var(--color-primary)]", val: "₹3,380" },
                                            { label: "Dairy", color: "bg-green-700", val: "₹2,112" },
                                            { label: "Meat", color: "bg-green-400", val: "₹1,690" },
                                            { label: "Snacks", color: "bg-green-200", val: "₹1,268" }
                                        ].map((item, i) => (
                                            <FadeInItem key={i}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                                                        <span className="text-sm font-bold text-gray-700">{item.label}</span>
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-900">{item.val}</span>
                                                </div>
                                            </FadeInItem>
                                        ))}
                                    </StaggerContainer>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Card 2: Smart Savings */}
                        <FadeIn delay={0.4} className="h-full">
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Smart Savings</h3>
                                        <p className="text-xs text-gray-400 mt-1">How HomeMan saved you money this month</p>
                                    </div>
                                    <span className="bg-green-50 text-[var(--color-primary)] text-sm font-bold px-4 py-2 rounded-lg">Total Saved: ₹1,120</span>
                                </div>
                                <StaggerContainer className="space-y-4 flex-1">
                                    <FadeInItem>
                                        <div className="bg-green-50 rounded-2xl p-4 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-md shadow-green-200"><Zap size={18} fill="white" /></div>
                                                <div><div className="text-sm font-bold text-gray-900">Wasted Prevention</div><div className="text-xs text-gray-500">Ate milk & spinach before expiry</div></div>
                                            </div>
                                            <span className="font-bold text-[var(--color-primary)] text-lg">₹480</span>
                                        </div>
                                    </FadeInItem>
                                    <FadeInItem>
                                        <div className="bg-blue-50 rounded-2xl p-4 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-200"><Utensils size={18} fill="white" /></div>
                                                <div><div className="text-sm font-bold text-gray-900">Pantry-Only Meals</div><div className="text-xs text-gray-500">Substituted items instead of buying new</div></div>
                                            </div>
                                            <span className="font-bold text-blue-500 text-lg">₹390</span>
                                        </div>
                                    </FadeInItem>
                                    <FadeInItem>
                                        <div className="bg-orange-50 rounded-2xl p-4 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-200"><ShoppingCart size={18} fill="white" /></div>
                                                <div><div className="text-sm font-bold text-gray-900">Smart Shopping</div><div className="text-xs text-gray-500">Optimization via price tracking</div></div>
                                            </div>
                                            <span className="font-bold text-orange-500 text-lg">₹250</span>
                                        </div>
                                    </FadeInItem>
                                </StaggerContainer>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Transactions Scroll */}
                    <div>
                        <FadeIn delay={0.6}>
                            <h4 className="font-bold text-gray-900 mb-6">Last 5 Transactions</h4>
                        </FadeIn>
                        <StaggerContainer className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide p-1">
                            {transactions.map((tx, i) => (
                                <FadeInItem key={i} className="min-w-[230px] flex-1">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow h-full">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className={`w-10 h-10 rounded-full ${tx.bg} flex items-center justify-center flex-shrink-0`}>{tx.icon}</div>
                                            <div className="min-w-0 font-medium">
                                                <div className="text-gray-900 text-sm font-bold truncate">{tx.title}</div>
                                                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wide truncate">{tx.date}</div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-gray-900 ml-3 whitespace-nowrap">{tx.amount}</div>
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
