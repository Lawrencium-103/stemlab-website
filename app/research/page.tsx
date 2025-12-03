"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/features/Quiz";
import { Check, ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const researchData = {
    phd: {
        title: "PhD Research Support",
        hook: "Your PhD is a marathon, not a sprint.",
        desc: "Our expert guidance ensures you stay on the right track from start to finish, helping you produce a dissertation that earns you your doctorate.",
        includes: ["Topic & Gap Identification", "In-Depth Literature Review", "Methodology Design", "Data Analysis & Interpretation", "Chapter-by-Chapter Review", "Viva/Defense Preparation"],
        outcome: "A complete, high-quality dissertation that meets academic standards.",
        duration: "1 Month – 6 Months"
    },
    msc: {
        title: "Master's Research Support",
        hook: "Your Master's thesis is the final hurdle.",
        desc: "We make the process simple and clear, helping you complete a project you can be proud of without the stress.",
        includes: ["Focused Topic Selection", "Structured Literature Review", "Clear Research Methodology", "Data Analysis Made Easy", "Full Draft Review"],
        outcome: "A well-written, well-researched Master's thesis completed on schedule.",
        duration: "1 Week – 3 Months"
    },
    prop: {
        title: "Project Proposal Support",
        hook: "A strong proposal is the key to approval.",
        desc: "A weak proposal means delays. We help you create a proposal that gets an instant 'YES'.",
        includes: ["Crafting Powerful Questions", "Clear Problem Statement", "Solid Theoretical Framework", "Realistic Research Plan", "Final Proposal Review"],
        outcome: "A polished, persuasive, and approval-ready research proposal.",
        duration: "1 Week – 1 Month"
    }
};

const quizQuestions = [
    { q: "What is the primary goal of a Literature Review?", o: ["Summarize every book ever written", "Identify Gaps in existing knowledge", "Fill pages to meet word count"], a: 1 },
    { q: "Quantitative research primarily uses...", o: ["Surveys & Statistical Data", "Interviews & Focus Groups", "Personal Diaries"], a: 0 },
    { q: "A Null Hypothesis states that...", o: ["There is NO relationship between variables", "There IS a relationship between variables", "The data is invalid"], a: 0 },
    { q: "APA 7th Edition is a style of...", o: ["Citation & Formatting", "Computer Coding", "Statistical Software"], a: 0 },
    { q: "Reliability in research refers to...", o: ["Consistency of results", "Accuracy of results", "Truthfulness of participants"], a: 0 }
];

export default function ResearchPage() {
    const [activeTab, setActiveTab] = useState<"phd" | "msc" | "prop">("phd");
    const data = researchData[activeTab];

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* HERO */}
            <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold uppercase tracking-wide mb-4 border border-brand-blue/20">
                        Academic Excellence
                    </div>
                    <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">
                        Stop Stressing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Start Succeeding.</span>
                    </h1>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                        Your PhD & Master&apos;s Research Partner Is Here. Stop wasting time and get the expert guidance you need.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-16">
                {/* LEFT CONTENT */}
                <div className="lg:col-span-8">
                    {/* TABS */}
                    <div className="flex flex-wrap gap-4 mb-10 border-b border-slate-800 pb-6">
                        <button
                            onClick={() => setActiveTab("phd")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "phd" ? "bg-brand-blue text-white shadow-lg shadow-blue-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            PhD Research Support
                        </button>
                        <button
                            onClick={() => setActiveTab("msc")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "msc" ? "bg-brand-blue text-white shadow-lg shadow-blue-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            Master&apos;s Support
                        </button>
                        <button
                            onClick={() => setActiveTab("prop")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "prop" ? "bg-brand-blue text-white shadow-lg shadow-blue-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            Proposal Support
                        </button>
                    </div>

                    {/* DYNAMIC CONTENT */}
                    <div className="animate-fade-in">
                        <div className="mb-8">
                            <h2 className="text-3xl font-mono font-bold text-white mb-2">{data.title}</h2>
                            <p className="text-brand-blue font-medium italic text-lg mb-4">{data.hook}</p>
                            <p className="text-slate-400 leading-relaxed">{data.desc}</p>
                        </div>

                        <div className="bg-brand-card border border-slate-800 rounded-xl p-8 mb-8">
                            <h3 className="text-white font-bold text-xl mb-6 border-b border-slate-700 pb-2">What It Includes</h3>
                            <div className="grid gap-4 text-slate-300">
                                {data.includes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[20px] h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                                            <Check weight="bold" className="text-xs" />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <div className="text-xs text-brand-blue uppercase font-bold mb-2">What You Get</div>
                                <p className="text-sm text-slate-400 leading-relaxed">{data.outcome}</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <div className="text-xs text-brand-blue uppercase font-bold mb-2">Support Duration</div>
                                <p className="text-xl text-white font-mono">{data.duration}</p>
                            </div>
                        </div>

                        <Button className="w-full md:w-auto" size="lg">
                            Register Now & Get Instant Support <ArrowRight weight="bold" className="ml-2" />
                        </Button>
                    </div>
                </div>

                {/* RIGHT SIDEBAR (QUIZ) */}
                <div className="lg:col-span-4">
                    <Quiz questions={quizQuestions} color="#3B82F6" title="Methodology Check" />
                </div>
            </section>
        </div>
    );
}
