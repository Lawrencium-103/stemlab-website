"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CareerCalculator } from "@/components/features/CareerCalculator";
import { Check, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const careerData = {
    cv: {
        title: "ATS-Compliant CV/Résumé Writing",
        hook: "Over 75% of résumés are rejected by bots before a human sees them.",
        desc: "Your skills and experience mean nothing if your CV isn't formatted for the robots. We build résumés that beat the bots and impress the hiring manager.",
        includes: ["One-on-One Strategy Call", "Keyword Optimization", "Professional Formatting", "Achievement-Focused Bullets", "PDF and Editable Word Formats"],
        outcome: "A powerful CV guaranteed to pass automated screening systems, leading to more interviews."
    },
    letter: {
        title: "Persuasive Recommendation & Cover Letters",
        hook: "A generic letter is a wasted opportunity.",
        desc: "A great letter can be the deciding factor. We help you craft compelling letters that provide powerful, third-party validation of your skills and character.",
        includes: ["Targeted Content Strategy", "Storytelling Approach", "Ghostwriting or Editing", "Professional Tone"],
        outcome: "A compelling letter that moves you to the top of the candidate list by providing undeniable proof of your value."
    },
    essay: {
        title: "Application Essays & Statements of Purpose",
        hook: "Your essay is your chance to show who you are beyond the numbers.",
        desc: "Whether for grad school or a fellowship, we help you tell your story in a way that is authentic, memorable, and moving.",
        includes: ["Brainstorming Session", "Narrative Crafting", "Detailed Editing", "Voice Consistency"],
        outcome: "A well-structured, impactful essay that connects with the committee on a personal level."
    }
};

export default function CareerPage() {
    const [activeTab, setActiveTab] = useState<"cv" | "letter" | "essay">("cv");
    const data = careerData[activeTab];

    return (
        <div className="bg-brand-dark min-h-screen">
            <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-green/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-mono font-bold uppercase tracking-wide mb-4 border border-brand-green/20">
                        Career Accelerator
                    </div>
                    <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">
                        Don&apos;t Just Apply. <span className="text-brand-green">Get Hired.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        The modern job market is competitive. We craft the documents that get you noticed, past the robots, and into the interview room.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-16 items-start">
                {/* Left: Dynamic Content */}
                <div className="lg:col-span-7">
                    {/* Toggles */}
                    <div className="flex flex-wrap gap-4 mb-10 border-b border-slate-800 pb-6">
                        <button
                            onClick={() => setActiveTab("cv")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "cv" ? "bg-brand-green text-white shadow-lg shadow-green-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            ATS-Compliant CV
                        </button>
                        <button
                            onClick={() => setActiveTab("letter")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "letter" ? "bg-brand-green text-white shadow-lg shadow-green-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            Cover Letters
                        </button>
                        <button
                            onClick={() => setActiveTab("essay")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "essay" ? "bg-brand-green text-white shadow-lg shadow-green-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            Application Essays
                        </button>
                    </div>

                    {/* Dynamic Content */}
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-mono font-bold text-white mb-2">{data.title}</h2>
                        <p className="text-brand-green font-medium italic text-lg mb-4">{data.hook}</p>
                        <p className="text-slate-400 leading-relaxed mb-8">{data.desc}</p>

                        <div className="bg-brand-card border border-slate-800 rounded-xl p-8 mb-8">
                            <h3 className="text-white font-bold text-xl mb-6 border-b border-slate-700 pb-2">What It Includes</h3>
                            <div className="space-y-4 text-slate-300">
                                {data.includes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[20px] h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                                            <Check weight="bold" className="text-xs" />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-8">
                            <div className="text-xs text-brand-green uppercase font-bold mb-2">What You Get</div>
                            <p className="text-sm text-white leading-relaxed">{data.outcome}</p>
                        </div>

                        <Button className="w-full bg-brand-green text-white hover:bg-green-600" size="lg">
                            Get Your Complete Toolkit Now <ArrowRight weight="bold" className="ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Right: Calculator & Info */}
                <div className="lg:col-span-5 space-y-8">
                    <CareerCalculator />

                    <div className="bg-brand-card p-8 rounded-xl border border-slate-800">
                        <h3 className="font-bold text-white mb-4">Why StemLab?</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex gap-2 items-center"><CheckCircle weight="fill" className="text-brand-green" /> 98% Interview Rate</li>
                            <li className="flex gap-2 items-center"><CheckCircle weight="fill" className="text-brand-green" /> Keyword Optimization</li>
                            <li className="flex gap-2 items-center"><CheckCircle weight="fill" className="text-brand-green" /> Modern Formatting</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
