"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronRight, Mail, Info, Shield, Eye, Lock, UserCheck, Cookie } from "lucide-react";

export default function PrivacyPolicy() {
    const sections = [
        { id: "introduction", title: "Introduction", icon: <Info size={16} /> },
        { id: "information-we-collect", title: "Information We Collect", icon: <Eye size={16} /> },
        { id: "how-we-use-your-data", title: "How We Use Your Data", icon: <Shield size={16} /> },
        { id: "data-security", title: "Data Security", icon: <Lock size={16} /> },
        { id: "your-rights", title: "Your Rights", icon: <UserCheck size={16} /> },
        { id: "cookies-tracking", title: "Cookies & Tracking", icon: <Cookie size={16} /> },
        { id: "contact-us", title: "Contact Us", icon: <Mail size={16} /> },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Navbar />

            <div className="bg-[#F8FAFC] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                            Home
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-900 font-medium">Privacy Policy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 text-sm">Last updated: May 23, 2024</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Contents</h3>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[var(--color-primary)] hover:bg-green-50 rounded-lg transition-colors flex items-center gap-3 font-medium"
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-16 max-w-4xl">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
                            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    Welcome to HomeMan. At HomeMan, we take your privacy seriously and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered smart kitchen application and related services.
                                </p>
                                <p>
                                    By using HomeMan, you agree to the collection and use of information in accordance with this policy. We ensure that your kitchen data remains private and secure, helping you manage your pantry with peace of mind.
                                </p>
                            </div>
                        </section>

                        {/* Information We Collect */}
                        <section id="information-we-collect" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                            <p className="text-gray-600 mb-6">To provide our services effectively, we collect several types of information from and about our users:</p>
                            <ul className="space-y-4">
                                {[
                                    "Personal Identifiers: Name, email address, and account preferences when you register.",
                                    "Receipt & Pantry Data: Photos of receipts, inventory lists, and product expiration dates processed by our AI.",
                                    "Usage Data: Information on how you interact with the app, including recipe searches and meal generation patterns.",
                                    "Device Information: IP address, browser type, and operating system for security and performance monitoring."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-600 items-start">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-green-200 text-green-600 flex items-center justify-center flex-shrink-0 bg-green-50">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* How We Use Your Data */}
                        <section id="how-we-use-your-data" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Data</h2>
                            <p className="text-gray-600 mb-6">We use the collected data for various purposes to enhance your smart kitchen experience:</p>
                            <ul className="space-y-4">
                                {[
                                    "Inventory Management: To automatically update your pantry lists based on your scanned receipts.",
                                    "Recipe Generation: To suggest personalized meals based on the ingredients you currently have.",
                                    "Smart Alerts: To send notifications regarding expiring items and grocery spending patterns.",
                                    "Service Improvement: To analyze usage trends and improve our AI's accuracy in recognizing grocery items."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-600 items-start">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-green-200 text-green-600 flex items-center justify-center flex-shrink-0 bg-green-50">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section id="data-security" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    The security of your data is our top priority. We implement industry-standard security measures, including 256-bit SSL encryption, to protect your personal information from unauthorized access, alteration, or disclosure.
                                </p>
                                <p>
                                    All grocery receipt images are processed securely and deleted from our active cache once the inventory data is extracted. We never sell your personal pantry or spending data to third-party advertisers.
                                </p>
                            </div>
                        </section>

                        {/* Your Rights */}
                        <section id="your-rights" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                            <p className="text-gray-600 mb-6">You have certain rights regarding your personal data under various privacy laws (such as GDPR and CCPA):</p>
                            <ul className="space-y-4">
                                {[
                                    "Access: You can request a copy of the data we hold about you at any time.",
                                    "Rectification: You can update or correct your account information directly in the app.",
                                    "Erasure: You have the right to request that we delete your account and all associated data.",
                                    "Data Portability: You can export your inventory and spending reports in common formats."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-600 items-start">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-green-200 text-green-600 flex items-center justify-center flex-shrink-0 bg-green-50">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Cookies & Tracking */}
                        <section id="cookies-tracking" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies & Tracking</h2>
                            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    HomeMan uses cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                                </p>
                                <p>
                                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                                </p>
                            </div>
                        </section>

                        {/* Contact Us */}
                        <section id="contact-us" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <p className="text-gray-600 mb-8">If you have any questions about this Privacy Policy, please contact our data protection team:</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</div>
                                            <a href="mailto:privacy@homeman.com" className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary)] hover:underline transition-colors">
                                                privacy@homeman.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Support</div>
                                            <Link href="#" className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary)] hover:underline transition-colors">
                                                Help Center
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
