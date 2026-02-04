"use client";

import { Sparkles, Recycle, Banknote } from "lucide-react";
import { FadeIn, FadeInItem, StaggerContainer } from "./animations";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Sparkles className="w-6 h-6 text-green-600" />,
            title: "AI-Powered Precision",
            description: "Smart recognition technology that identifies items with 99% accuracy."
        },
        {
            icon: <Recycle className="w-6 h-6 text-green-600" />,
            title: "Zero Waste",
            description: "Get notified before items expire and find recipes to use them up."
        },
        {
            icon: <Banknote className="w-6 h-6 text-green-600" />,
            title: "Smart Budgeting",
            description: "Analyze your spending and save up to 30% on your monthly groceries."
        }
    ];

    return (
        <section className="py-10 bg-gray-50 md:hidden overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <FadeIn delay={0.1}>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Why Choose Us?</h2>
                        <p className="text-sm text-gray-500">
                            The ultimate tool for a modern, efficient kitchen.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="flex flex-col gap-6">
                    {features.map((feature, idx) => (
                        <FadeInItem key={idx}>
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-gray-200 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed px-2">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeInItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
