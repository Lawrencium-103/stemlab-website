import Link from "next/link";
import { ArrowRight, Check, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function ResearchSection() {
    return (
        <section className="py-24 bg-brand-dark border-b border-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className="bg-brand-card border border-slate-800 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue"></div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="font-mono text-sm text-slate-500">THESIS_STATUS.docx</div>
                            <div className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-xs font-bold rounded-full">APPROVED</div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                            <div className="h-4 bg-slate-800 rounded w-full"></div>
                            <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-800 flex gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-xs text-slate-500">Plagiarism Free</div>
                            </div>
                            <div className="text-center border-l border-slate-800 pl-4">
                                <div className="text-2xl font-bold text-white">A+</div>
                                <div className="text-xs text-slate-500">Defense Score</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6">
                        PhD & MSc Success <span className="text-brand-blue">Without the Stress.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Your research is a marathon, not a sprint. We provide the scaffolding you need—from topic vetting to methodology defense and statistical analysis. Stop guessing and start graduating.
                    </p>
                    <Link href="/research" className="text-brand-blue font-bold uppercase tracking-wide text-sm border-b border-brand-blue pb-1 hover:text-white hover:border-white transition-all inline-flex items-center gap-2">
                        Explore Research Support <ArrowRight weight="bold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function BusinessSection() {
    return (
        <section className="py-24 bg-black border-b border-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6">
                        Become the <span className="text-brand-cyan">Strategic Leader</span> Companies Need.
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Bridge the gap between IT and Business. Our curriculum focuses on the skills that get you promoted: Agile Project Management, Stakeholder Elicitation, and Process Modeling.
                    </p>
                    <Link href="/business" className="text-brand-cyan font-bold uppercase tracking-wide text-sm border-b border-brand-cyan pb-1 hover:text-white hover:border-white transition-all inline-flex items-center gap-2">
                        View Analytics Curriculum <ArrowRight weight="bold" />
                    </Link>
                </div>
                <div>
                    <div className="bg-brand-card border border-slate-800 p-8 rounded-2xl relative shadow-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-6 text-xs font-mono text-slate-500 text-center">
                            <div>TO DO</div>
                            <div>IN PROGRESS</div>
                            <div>DONE</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 h-48">
                            <div className="bg-slate-900 rounded p-2 border border-slate-800 h-fit">
                                <div className="h-2 w-8 bg-red-500 rounded mb-2"></div>
                                <div className="h-2 w-16 bg-slate-700 rounded"></div>
                            </div>
                            <div className="bg-slate-900 rounded p-2 border border-slate-800 h-fit">
                                <div className="h-2 w-8 bg-yellow-500 rounded mb-2"></div>
                                <div className="h-2 w-12 bg-slate-700 rounded mb-1"></div>
                                <div className="h-2 w-10 bg-slate-700 rounded"></div>
                            </div>
                            <div className="bg-slate-900 rounded p-2 border-l-4 border-brand-cyan h-fit">
                                <div className="h-2 w-8 bg-green-500 rounded mb-2"></div>
                                <div className="h-2 w-14 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function DataSection() {
    return (
        <section className="py-24 bg-brand-dark border-b border-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className="bg-brand-card border border-slate-800 p-6 rounded-2xl shadow-2xl font-mono text-xs">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                        </div>
                        <div className="text-brand-purple">import <span className="text-white">pandas</span> as <span className="text-white">pd</span></div>
                        <div className="text-brand-purple">import <span className="text-white">matplotlib</span>.pyplot</div>
                        <br />
                        <div className="text-slate-500"># Load Dataset</div>
                        <div className="text-white">df = pd.read_csv(&apos;sales_data.csv&apos;)</div>
                        <div className="text-white">df.dropna(inplace=True)</div>
                        <br />
                        <div className="text-slate-500"># Output prediction</div>
                        <div className="text-green-400">&gt;&gt; Accuracy Score: 98.7%</div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6">
                        Master the Tools. <span className="text-brand-purple">Predict the Future.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        From cleaning messy datasets with Python to visualizing trends in Tableau. We teach you the full stack of data intelligence required for the modern workforce.
                    </p>
                    <Link href="/data" className="text-brand-purple font-bold uppercase tracking-wide text-sm border-b border-brand-purple pb-1 hover:text-white hover:border-white transition-all inline-flex items-center gap-2">
                        Start Learning Data <ArrowRight weight="bold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function CareerSection() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6">
                        Beat the Bots. <span className="text-brand-green">Land the Interview.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        75% of resumes are rejected by ATS software. We craft documents that pass the algorithms and impress the hiring managers. Don&apos;t just apply—get hired.
                    </p>
                    <Link href="/career" className="text-brand-green font-bold uppercase tracking-wide text-sm border-b border-brand-green pb-1 hover:text-white hover:border-white transition-all inline-flex items-center gap-2">
                        Get Your Career Toolkit <ArrowRight weight="bold" />
                    </Link>
                </div>
                <div>
                    <div className="bg-brand-card border border-slate-800 p-8 rounded-2xl relative shadow-2xl flex items-center justify-center flex-col gap-4">
                        <div className="w-24 h-24 rounded-full border-4 border-brand-green flex items-center justify-center">
                            <Check weight="bold" className="text-4xl text-brand-green" />
                        </div>
                        <div className="text-2xl font-bold text-white">ATS Score: 98%</div>
                        <div className="px-4 py-1 bg-brand-green/20 text-brand-green rounded-full text-xs font-bold">INTERVIEW READY</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
