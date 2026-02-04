"use client";

import { useRef, useState } from "react";
import { Search, Clock, ChevronRight, ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import { FadeIn, FadeInItem, StaggerContainer } from "./animations";
import { motion, AnimatePresence } from "framer-motion";

export default function Recipes() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const ingredients = ["Tomato", "Onion", "Chicken"];
    const recipes = [
        {
            title: "Paneer Butter Masala",
            image: "/paneer-butter-masala.jpg",
            pantryIngredients: ["Tomato", "Onion", "Paneer", "Garlic", "Ginger"],
            description: "A rich, aromatic curry that uses only your available pantry basics to create a restaurant-style dish.",
            time: "35 mins",
            match: 100
        },
        {
            title: "Chicken Biriyani",
            image: "/chicken-biryani-new.jpg",
            pantryIngredients: ["Chicken", "Onion", "Tomato", "Olive Oil"],
            description: "Perfectly gathered ingredients that bring out deep flavors with zero additional shopping required.",
            time: "45 mins",
            match: 100
        },
        {
            title: "Hyderabad Chicken Biriyani",
            image: "/hyd-chicken-biryani-new.jpg",
            pantryIngredients: ["Tomato", "Onion", "Chicken", "Chili Flakes"],
            description: "A quick weeknight savior that uses your staple pantry ingredients for a healthy, spicy kick.",
            time: "45 mins",
            match: 100
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % recipes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + recipes.length) % recipes.length);
    };

    const RecipeCard = ({ recipe }: { recipe: typeof recipes[0] }) => (
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden flex-shrink-0">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        {recipe.match}% Match
                    </span>
                    <span className="bg-white text-gray-900 text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                        Pantry Ready
                    </span>
                </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{recipe.title}</h3>

                <div className="mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                    {recipe.pantryIngredients.join(", ")}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 hidden md:block">
                    {recipe.description}
                </p>

                <div className="flex justify-between items-center pt-2 md:pt-6 border-t border-transparent md:border-gray-50 mt-auto">
                    <div className="flex items-center text-gray-400 text-xs font-medium">
                        <Clock size={16} className="mr-2" />
                        {recipe.time}
                    </div>
                    <button className="flex items-center bg-green-50 text-[var(--color-primary)] font-bold text-xs px-4 py-2 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors group/btn">
                        Cook Now <ChevronRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-10 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Cook With Precision
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto px-4">
                            Instant AI recipes generated using ONLY what is currently in your pantry.
                        </p>
                    </FadeIn>
                </div>

                {/* Search / Filter Bar */}
                <FadeIn delay={0.3} className="hidden md:block">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 md:p-5 mb-20">
                        {/* Row 1: Search with tags and placeholder */}
                        <div className="flex items-center gap-3 px-2 mb-4">
                            <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
                            <div className="flex items-center flex-wrap gap-2 flex-1">
                                {ingredients.map((ing, i) => (
                                    <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 text-[var(--color-primary)] text-sm font-bold">
                                        {ing} <button className="ml-1.5 hover:text-green-700"><X size={14} /></button>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    placeholder="Add more ingredients..."
                                    className="outline-none text-sm text-gray-400 bg-transparent min-w-[150px] py-1"
                                />
                            </div>
                        </div>

                        {/* Row 2: Auto-Suggest and Generate Button */}
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-gray-400">Auto-Suggest:</span>
                                <div className="flex gap-3 text-sm font-medium text-[var(--color-primary)]">
                                    <button className="hover:underline">Garlic</button>
                                    <button className="hover:underline">Spinach</button>
                                    <button className="hover:underline">Rice</button>
                                </div>
                            </div>
                            <button className="bg-[var(--color-primary)] hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-green-500/20 transition-all transform hover:scale-105 whitespace-nowrap text-sm">
                                Generate Ready Meals
                            </button>
                        </div>
                    </div>
                </FadeIn>

                {/* Recipe Cards Container */}
                <div className="relative">

                    {/* Mobile View: Controlled Carousel */}
                    <div className="md:hidden relative px-4">
                        {/* Mobile Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-32 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center text-gray-800 transition-all border border-gray-100"
                            aria-label="Previous recipe"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-32 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center text-gray-800 transition-all border border-gray-100"
                            aria-label="Next recipe"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <div className="relative min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <RecipeCard recipe={recipes[currentSlide]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Mobile Grid/Carousel Indicator Pips (Optional, adds nice touch) */}
                        <div className="flex justify-center gap-2 mt-6">
                            {recipes.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-[var(--color-primary)] w-4" : "bg-gray-300"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop View: Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0">
                        {recipes.map((recipe, idx) => (
                            <FadeInItem key={idx}>
                                <RecipeCard recipe={recipe} />
                            </FadeInItem>
                        ))}
                    </div>

                </div>

                <div className="text-center mt-16">
                    <FadeIn delay={0.6}>
                        <p className="text-gray-400 text-xs italic">
                            Save an average of ₹4,500/month by reducing unnecessary grocery trips.
                        </p>
                    </FadeIn>
                </div>

            </div>
        </section >
    );
}
