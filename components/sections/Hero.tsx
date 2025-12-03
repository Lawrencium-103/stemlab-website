"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-brand-blue/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-30 w-full grid lg:grid-cols-2 gap-16 items-center pt-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold uppercase tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span> Premium Analytics
                    </div>
                    <h1 className="font-mono text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Decoding Data. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Empowering Research.</span>
                    </h1>
                    <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                        Experience clinical precision in research support and high-end data training. We don&apos;t just teach tools; we build careers.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/research">
                            <Button size="lg" className="shadow-lg shadow-blue-900/20">Start Research</Button>
                        </Link>
                        <Link href="/business">
                            <Button variant="outline" size="lg">Explore Training</Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Floating UI Element */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block z-30"
                >
                    <div className="animate-[float_6s_ease-in-out_infinite]">
                        <div className="bg-brand-card border border-slate-800 rounded-xl p-6 shadow-2xl">
                            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="ml-auto text-xs font-mono text-slate-500">StemLab_v1.0</div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-end gap-2 h-40 border-b border-slate-800 pb-2">
                                    <div className="w-1/5 bg-brand-blue/20 h-[40%] rounded-t"></div>
                                    <div className="w-1/5 bg-brand-blue/40 h-[70%] rounded-t"></div>
                                    <div className="w-1/5 bg-brand-blue h-[50%] rounded-t"></div>
                                    <div className="w-1/5 bg-brand-cyan/60 h-[80%] rounded-t"></div>
                                    <div className="w-1/5 bg-brand-cyan h-[60%] rounded-t"></div>
                                </div>
                                <div className="flex justify-between text-xs font-mono text-slate-500">
                                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
