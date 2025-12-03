"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/features/Quiz";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const dataPageContent = {
    research: {
        headline: "Research Data Analysis: Validate Your Findings",
        desc: "Your research is only as strong as the data that backs it up. This program is for PhD and Master's students who need to analyze their research data accurately.",
        who: ["PhD candidates working on their dissertation.", "Master's students writing their thesis.", "Academic researchers preparing a journal submission."],
        outcome: "Gain confidence to successfully analyze research data, write your results chapter, and defend your methodology.",
        curriculum: [
            { title: "Academic Data Preparation", tools: "Excel, Sheets", context: "Clean, code, and structure survey or experimental data for analysis." },
            { title: "Quantitative Analysis", tools: "SPSS, R, Stata", context: "Perform T-tests, ANOVA, regressions, and factor analysis." },
            { title: "Qualitative Data Analysis", tools: "NVivo, MAXQDA", context: "Manage, code, and identify themes in interview transcripts." },
            { title: "Survey & Questionnaire Design", tools: "Qualtrics, SurveyMonkey", context: "Design methodologically sound surveys." },
            { title: "Academic Data Visualization", tools: "Charts, Tables", context: "Create publication-ready charts for your thesis." }
        ],
        cta: "Master Your Research Analysis Now",
        color: "text-brand-purple",
        bg: "bg-brand-purple",
        border: "border-brand-purple"
    },
    analytics: {
        headline: "Data Analytics: Drive Business Growth",
        desc: "Stop guessing, start knowing. This program is for Business Professionals who want to turn raw data into a powerful asset.",
        who: ["Aspiring Data Analysts & BI Analysts.", "Business managers making data-driven decisions.", "Professionals transitioning to tech."],
        outcome: "Build a portfolio of business analysis projects and gain the confidence to land a high-paying job as a Data Analyst.",
        curriculum: [
            { title: "Business-Focused Data Cleaning", tools: "Python (Pandas), Excel", context: "Prepare messy, real-world business data for analysis." },
            { title: "Commercial Database Querying", tools: "SQL, PostgreSQL", context: "Extract and aggregate sales/marketing data from databases." },
            { title: "BI Dashboarding & Storytelling", tools: "Power BI, Tableau", context: "Build stunning, interactive dashboards that track KPIs." },
            { title: "Statistical Business Analysis", tools: "A/B Testing", context: "Validate marketing campaigns and optimize pricing." },
            { title: "Programming for Analytics", tools: "Python, NumPy", context: "Automate reports and prepare for a future in data science." }
        ],
        cta: "Start Your Data Analytics Career Now",
        color: "text-brand-cyan",
        bg: "bg-brand-cyan",
        border: "border-brand-cyan"
    }
};

const quizQuestions = [
    { q: "Which library is used for data manipulation in Python?", o: ["Pandas", "Flask"], a: 0 },
    { q: "How do you handle missing values?", o: ["Data Cleaning", "Data Visualization"], a: 0 },
    { q: "Which tool is best for Qualitative Analysis?", o: ["SPSS", "NVivo"], a: 1 },
    { q: "SQL stands for...", o: ["Structured Query Language", "Simple Question List"], a: 0 },
    { q: "Regression analysis is used for...", o: ["Predicting continuous variables", "Naming variables"], a: 0 }
];

export default function DataPage() {
    const [activeTab, setActiveTab] = useState<"research" | "analytics">("research");
    const data = dataPageContent[activeTab];

    return (
        <div className="bg-brand-dark min-h-screen">
            <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-mono font-bold uppercase tracking-wide mb-4 border border-brand-purple/20">
                        Master The Data
                    </div>
                    <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">
                        Unlock the Power of Data.
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Whether driving corporate strategy or pioneering academic discovery, data is your most valuable asset.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-16">
                {/* LEFT CONTENT */}
                <div className="lg:col-span-8">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-10 border-b border-slate-800 pb-6">
                        <button
                            onClick={() => setActiveTab("research")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "research" ? "bg-brand-purple text-white shadow-lg shadow-purple-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            Research Data Analysis (Academic)
                        </button>
                        <button
                            onClick={() => setActiveTab("analytics")}
                            className={cn("px-6 py-3 rounded-full font-bold transition-all", activeTab === "analytics" ? "bg-brand-cyan text-black shadow-lg shadow-cyan-900/30" : "border border-slate-600 text-slate-400 hover:text-white hover:border-white")}
                        >
                            Data Analytics (Business)
                        </button>
                    </div>

                    {/* Dynamic Content */}
                    <div className="animate-fade-in">
                        <h2 className={cn("text-3xl font-mono font-bold mb-4", data.color)}>{data.headline}</h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">{data.desc}</p>

                        <div className="bg-brand-card border border-slate-800 rounded-xl p-8 mb-8">
                            <h3 className="text-white font-bold text-xl mb-6 border-b border-slate-700 pb-2">What You Will Learn</h3>
                            <div className="space-y-6">
                                {data.curriculum.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><CheckCircle weight="bold" className={cn("text-2xl", data.color)} /></div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">
                                                {item.title} <span className="text-xs text-slate-500 font-normal border border-slate-700 rounded px-2 ml-2">{item.tools}</span>
                                            </h4>
                                            <p className="text-slate-400 text-sm mt-1">{item.context}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <div className="text-xs text-slate-500 uppercase font-bold mb-2">Who This Is For</div>
                                <ul className="text-sm text-slate-400 space-y-2">
                                    {data.who.map((w, i) => <li key={i}>• {w}</li>)}
                                </ul>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <div className="text-xs text-slate-500 uppercase font-bold mb-2">The Outcome</div>
                                <p className="text-sm text-white leading-relaxed">{data.outcome}</p>
                            </div>
                        </div>

                        <Button className={cn("w-full text-white hover:opacity-90", data.bg)} size="lg">
                            {data.cta} <ArrowRight weight="bold" className="ml-2" />
                        </Button>
                    </div>
                </div>

                {/* RIGHT (Generic Data Quiz) */}
                <div className="lg:col-span-4">
                    <Quiz questions={quizQuestions} color="#A855F7" title="Logic Check" />
                </div>
            </section>
        </div>
    );
}
