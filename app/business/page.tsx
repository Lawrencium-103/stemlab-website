"use client";

import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/features/Quiz";
import { CheckCircle, ArrowRight, ChartBar, Database, UsersThree, Kanban, ArrowsSplit } from "@phosphor-icons/react";

const quizQuestions = [
    { q: "What is the first step in Business Analysis?", o: ["Solution Design", "Elicitation", "Testing"], a: 1 },
    { q: "Which of these is NOT a Scrum event?", o: ["Daily Standup", "Sprint Review", "Project Charter"], a: 2 },
    { q: "Which tool is best for Data Visualization?", o: ["Jira", "Power BI", "Microsoft Word"], a: 1 },
    { q: "User Stories are used to capture...", o: ["Requirements", "Database Schema", "Budget"], a: 0 },
    { q: "SWOT Analysis stands for...", o: ["Strengths, Weaknesses, Opportunities, Threats", "Software, Web, Online, Tech", "Strategy, Work, Organization, Team"], a: 0 }
];

export default function BusinessPage() {
    return (
        <div className="bg-brand-dark min-h-screen">
            <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-cyan/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono font-bold uppercase tracking-wide mb-4 border border-brand-cyan/20">
                        Professional Growth
                    </div>
                    <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">
                        Stop Being an Assistant, <br />
                        <span className="text-brand-cyan">Start Being a Leader.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Master the Business Analysis Skills That Get You Promoted.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 space-y-10">
                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        <p><strong className="text-white">Are you stuck in a role with no future?</strong> The problem isn&apos;t your work ethic. It&apos;s your skillset.</p>
                        <p>Companies in the US, Europe, and Canada are desperately searching for professionals who can bridge the gap between business needs and technology. This course gives you the exact skills to become that person.</p>
                    </div>

                    <div className="bg-brand-card border border-slate-800 rounded-xl p-8">
                        <h3 className="font-mono text-2xl font-bold text-white mb-6 text-brand-cyan">What You Will Master</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><ArrowsSplit weight="bold" className="text-2xl text-brand-cyan" /></div>
                                <div><h4 className="font-bold text-white text-lg">Process Modeling & BPMN</h4><p className="text-slate-400 text-sm mt-1">Create professional process maps using <strong>Microsoft Visio & Excalidraw</strong>.</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><ChartBar weight="bold" className="text-2xl text-brand-cyan" /></div>
                                <div><h4 className="font-bold text-white text-lg">Data Analysis & Visualization</h4><p className="text-slate-400 text-sm mt-1">Manipulate data in <strong>Excel</strong> and create dashboards with <strong>Power BI</strong>.</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><Database weight="bold" className="text-2xl text-brand-cyan" /></div>
                                <div><h4 className="font-bold text-white text-lg">Database Querying with SQL</h4><p className="text-slate-400 text-sm mt-1">Write SQL queries to extract info from relational databases like <strong>PostgreSQL</strong>.</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><Kanban weight="bold" className="text-2xl text-brand-cyan" /></div>
                                <div><h4 className="font-bold text-white text-lg">Agile Project Management</h4><p className="text-slate-400 text-sm mt-1">Manage backlogs using <strong>Asana</strong> and <strong>Monday.com</strong>.</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><UsersThree weight="bold" className="text-2xl text-brand-cyan" /></div>
                                <div><h4 className="font-bold text-white text-lg">Requirements & Stakeholders</h4><p className="text-slate-400 text-sm mt-1">Uncover true business needs, document User Stories, and present data-backed findings.</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                            <div className="text-xs text-brand-cyan uppercase font-bold mb-2">Why This Course?</div>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle weight="fill" className="text-brand-cyan" /> Practical Portfolio Building</li>
                                <li className="flex items-center gap-2"><CheckCircle weight="fill" className="text-brand-cyan" /> Taught by Senior BAs</li>
                                <li className="flex items-center gap-2"><CheckCircle weight="fill" className="text-brand-cyan" /> Career & Salary Focused</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                            <div className="text-xs text-brand-cyan uppercase font-bold mb-2">Details</div>
                            <p className="text-white mb-1"><strong>Duration:</strong> 4-6 Weeks (Intensive)</p>
                            <p className="text-slate-400 text-sm">Lifetime access to materials & Certificate.</p>
                        </div>
                    </div>

                    <Button className="w-full bg-brand-cyan text-black hover:bg-cyan-400" size="lg">
                        Fast-Track Your Career Now <ArrowRight weight="bold" className="ml-2" />
                    </Button>
                </div>

                <div className="lg:col-span-4">
                    <Quiz questions={quizQuestions} color="#06B6D4" title="BA Skill Check" />
                </div>
            </section>
        </div>
    );
}
