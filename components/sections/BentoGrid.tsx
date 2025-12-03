import Link from "next/link";
import { GraduationCap, Strategy, FileText, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function BentoGrid() {
    return (
        <section className="py-20 bg-black border-b border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Research Card */}
                    <Link href="/research" className="group bg-brand-card border border-slate-800 p-8 rounded-xl cursor-pointer hover:border-brand-blue transition-all">
                        <GraduationCap size={40} className="text-brand-blue mb-6 block" weight="duotone" />
                        <h3 className="font-mono text-xl font-bold text-white mb-2">Research Support</h3>
                        <p className="text-sm text-slate-400 mb-8">PhD, MSc & Proposal guidance. Rigorous methodology defense.</p>
                        <div className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Services <ArrowRight weight="bold" />
                        </div>
                    </Link>

                    {/* Business Card */}
                    <Link href="/business" className="group bg-brand-card border border-slate-800 p-8 rounded-xl cursor-pointer hover:border-brand-cyan transition-all">
                        <Strategy size={40} className="text-brand-cyan mb-6 block" weight="duotone" />
                        <h3 className="font-mono text-xl font-bold text-white mb-2">Business Analytics</h3>
                        <p className="text-sm text-slate-400 mb-8">BPMN, Agile, Scrum, and Stakeholder Management.</p>
                        <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Curriculum <ArrowRight weight="bold" />
                        </div>
                    </Link>

                    {/* Career Card */}
                    <Link href="/career" className="group bg-brand-card border border-slate-800 p-8 rounded-xl cursor-pointer hover:border-brand-green transition-all">
                        <FileText size={40} className="text-brand-green mb-6 block" weight="duotone" />
                        <h3 className="font-mono text-xl font-bold text-white mb-2">Career Development</h3>
                        <p className="text-sm text-slate-400 mb-8">ATS CVs, Cover Letters, and Statements of Purpose.</p>
                        <div className="text-xs font-bold text-brand-green uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                            Get Hired <ArrowRight weight="bold" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
